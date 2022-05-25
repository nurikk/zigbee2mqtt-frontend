import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Extension, LogMessage, OnlineOrOffline } from "./store";
import { BridgeConfig, BridgeInfo, TouchLinkDevice, Device, DeviceState, BridgeState, Group } from './types';
import { sanitizeGraph, isSecurePage, randomString, stringifyWithPreservingUndefinedAsNull, debounceArgs } from "./utils";

import { NotificationManager } from 'react-notifications';
import keyBy from "lodash/keyBy";

import { GraphI } from "./components/map/types";
import { local } from "@toolz/local-storage";

const MAX_LOGS_RECORDS_IN_BUFFER = 100;
const TOKEN_LOCAL_STORAGE_ITEM_NAME = "z2m-token-v2";
const AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME = "z2m-auth-v2";
const UNAUTHORIZED_ERROR_CODE = 4401;

const AVAILABILITY_FEATURE_TOPIC_ENDING = "/availability";


interface Message {
    topic: string;
    payload: string | Record<string, unknown> | Record<string, unknown>[] | string[];
}

const blacklistedMessages: RegExp[] = [
    /MQTT publish/
];

const isLogMessage = (msg: LogMessage | ResponseWithStatus): msg is LogMessage => {
    return (msg as LogMessage).level !== undefined && (msg as LogMessage).message !== undefined;
}

const isResponseWithStatus = (msg: LogMessage | ResponseWithStatus): msg is ResponseWithStatus => {
    return (msg as ResponseWithStatus).status !== undefined;
}

const showNotify = (data: LogMessage | ResponseWithStatus): void => {
    let message = "", level = "";
    if (isLogMessage(data)) {
        message = data.message;
        level = data.level;
    } else if (isResponseWithStatus(data)) {
        if (data.status === "error") {
            level = "error";
            message = data.error as string;
        }
    }

    switch (level) {
        case "error":
        case "warning":
            NotificationManager.error(message);
            break;
        case "info":
            NotificationManager.success(message);
            break;

        default:
            break;
    }
};

interface ResponseWithStatus {
    status: "ok" | "error";
    data: unknown;
    error?: string;
    transaction?: string;
}
interface TouchllinkScanResponse extends ResponseWithStatus {
    data: {
        found: TouchLinkDevice[];
    };
}
interface Callable {
    (): void;
}

const apiDebounceDelay = 250;

class Api {
    url: string;
    socket: ReconnectingWebSocket;
    requests: Map<string, [Callable, Callable]> = new Map<string, [Callable, Callable]>();
    transactionNumber = 1;
    transactionRndPrefix: string;
    constructor(url: string) {
        this.url = url;
        this.transactionRndPrefix = randomString(5);
    }
    send = (topic: string, payload: Record<string, unknown>): Promise<void> => {
        console.debug("Calling API", { topic, payload });

        if (topic.startsWith('bridge/request/')) {
            const transaction = `${this.transactionRndPrefix}-${this.transactionNumber++}`;
            const promise = new Promise<void>((resolve, reject) => {
                this.requests.set(transaction, [resolve, reject]);
            });
            this.socket.send(stringifyWithPreservingUndefinedAsNull({ topic, payload: { ...payload, transaction } }));
            return promise;
        } else {
            this.socket.send(stringifyWithPreservingUndefinedAsNull({ topic, payload }));
            return Promise.resolve();
        }
    }

    urlProvider = async () => {
        const url = new URL(this.url)
        let token = local.getItem<string>(TOKEN_LOCAL_STORAGE_ITEM_NAME);
        const authRequired = !!local.getItem(AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME);
        if (authRequired) {
            if (!token) {
                token = prompt("Enter your z2m admin token") as string;
                if (token) {
                    local.setItem(TOKEN_LOCAL_STORAGE_ITEM_NAME, token);
                }
            }
            url.searchParams.append("token", token);
        }
        return url.toString();
    }

    connect(): void {
        this.socket = new ReconnectingWebSocket(this.urlProvider);
        this.socket.addEventListener("message", this.onMessage);
        this.socket.addEventListener("close", this.onClose);
    }
    private processDeviceStateMessage = debounceArgs((messages: Message[]): void => {
        let { deviceStates } = store.getState();
        messages.forEach(data => {
            deviceStates = { ...deviceStates, ...{ [data.topic]: { ...deviceStates[data.topic], ...(data.payload as DeviceState) } } };
        });
        store.setState({ deviceStates });
    }, { trailing: true, maxWait: apiDebounceDelay }) as (data: Message) => void;

    private processBridgeMessage = (data: Message): void => {
        switch (data.topic) {
            case "bridge/config":
                store.setState({
                    bridgeConfig: data.payload as unknown as BridgeConfig
                });
                break;

            case "bridge/info":
                store.setState({
                    bridgeInfo: data.payload as unknown as BridgeInfo
                });
                break;

            case "bridge/state":
                store.setState({
                    bridgeState: data.payload as BridgeState
                });
                break;

            case "bridge/devices":
                store.setState({
                    devices: keyBy(data.payload as unknown as Device[], 'ieee_address')
                });
                break;

            case "bridge/groups":
                store.setState({
                    groups: data.payload as unknown as Group[]
                })
                break;


            case "bridge/extensions":
                store.setState({ extensions: data.payload as Extension[] });
                break;

            case "bridge/logging":
                {
                    const { logs } = store.getState();
                    const newLogs = [...logs.slice(-MAX_LOGS_RECORDS_IN_BUFFER)];
                    newLogs.push({ ...(data.payload as unknown as LogMessage), timestamp: new Date() } as LogMessage);
                    store.setState({ logs: newLogs });
                    const log = data.payload as unknown as LogMessage;
                    if (blacklistedMessages.every(val => !val.test(log.message))) {
                        showNotify(log);
                    }
                }
                break;

            case "bridge/response/networkmap":
                {
                    const response = data.payload as unknown as ResponseWithStatus;
                    const stateUpdate = { networkGraphIsLoading: false };
                    if (response.status === "ok") {
                        const networkGraph = sanitizeGraph((response.data as { value: unknown }).value as GraphI);
                        stateUpdate['networkGraph'] = networkGraph;
                    }
                    store.setState(stateUpdate);
                }
                break;


            case "bridge/response/touchlink/scan":
                {
                    const { status, data: payloadData } = data.payload as unknown as TouchllinkScanResponse;
                    const stateUpdate = { touchlinkScanInProgress: false };
                    if (status === "ok") {
                        stateUpdate['touchlinkDevices'] = payloadData.found;
                    }
                    store.setState(stateUpdate);

                }
                break;

            case "bridge/response/touchlink/identify":
                store.setState({ touchlinkIdentifyInProgress: false });
                break;

            case "bridge/response/touchlink/factory_reset":
                store.setState({ touchlinkResetInProgress: false });
                break;


            default:
                break;
        }
        if (data.topic.startsWith("bridge/response/")) {
            showNotify(data.payload as unknown as ResponseWithStatus);
            this.resolvePromises(data.payload as unknown as ResponseWithStatus);
        }
    }

    private processAvailabilityMessage = debounceArgs((messages: Message[]): void => {
        let { availability } = store.getState();
        messages.forEach(data => {
            const friendlyName = data.topic.split(AVAILABILITY_FEATURE_TOPIC_ENDING, 1)[0];
            availability = { ...availability, ...{ [friendlyName]: data.payload as OnlineOrOffline } };
        });
        store.setState({ availability });
    }, { trailing: true, maxWait: apiDebounceDelay }) as (data: Message) => void;

    private resolvePromises(message: ResponseWithStatus): void {
        const { transaction, status } = message;
        if (transaction !== undefined && this.requests.has(transaction)) {
            const [resolve, reject] = this.requests.get(transaction) as [Callable, Callable];
            if (status === "ok" || status === undefined) {
                resolve();
            } else {
                reject();
            }
            this.requests.delete(transaction);
        }
    }

    private onClose = (e: CloseEvent): void => {
        if (e.code === UNAUTHORIZED_ERROR_CODE) {
            local.setItem(AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME, true);
            local.remove(TOKEN_LOCAL_STORAGE_ITEM_NAME);
            NotificationManager.error("Unauthorized");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

    private onMessage = (event: MessageEvent): void => {
        let data = {} as Message;
        try {
            data = JSON.parse(event.data) as Message;
            if (data.topic.endsWith(AVAILABILITY_FEATURE_TOPIC_ENDING)) {
                this.processAvailabilityMessage(data);
            } else if (data.topic.startsWith("bridge/")) {
                this.processBridgeMessage(data);
            } else {
                this.processDeviceStateMessage(data);
            }
        } catch (e) {
            NotificationManager.error(e.message);
            console.error(event.data);
        }

    }
}
const apiUrl = `${window.location.host}${document.location.pathname}api`;
const api = new Api(`${isSecurePage() ? 'wss' : 'ws'}://${apiUrl}`);
export default api;
