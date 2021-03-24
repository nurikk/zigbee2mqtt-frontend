import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Extension, Group, LogMessage } from "./store";
import { BridgeConfig, BridgeInfo, TouchLinkDevice, Device, DeviceState, BridgeState } from './types';
import { sanitizeGraph, isSecurePage, randomString, stringifyWithPreservingUndefinedAsNull } from "./utils";
import { Notyf } from "notyf";
import { GraphI } from "./components/map/types";

import orderBy from "lodash/orderBy";


const MAX_LOGS_RECORDS_IN_BUFFER = 100;
const TOKEN_LOCAL_STORAGE_ITEM_NAME = "z2m-token";
const AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME = "z2m-auth";
const UNAUTHORIZED_ERROR_CODE = 4401;

const notyf = new Notyf();

interface Message {
    topic: string;
    payload: string | object | object[] | string[];
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

const showNotity = (data: LogMessage | ResponseWithStatus): void => {
    let message = "", level = "";
    if (isLogMessage(data)) {
        message = data.message;
        level = data.level;
    } else if (isResponseWithStatus(data)) {
        switch (data.status) {
            case "error":
                level = "error";
                message = data.error as string;
                break;
            default:
                break;
        }
    }

    switch (level) {
        case "error":
        case "warning":
            notyf.error(message);
            break;
        case "info":
            notyf.success(message);
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
interface ExtensionReadResponse extends ResponseWithStatus {
    data: {
        name: string;
        content: string;
    };
}
interface Callable {
    (): void;
}

class Api {
    url: string;
    socket: ReconnectingWebSocket;
    requests: Map<string, [Callable, Callable]> = new Map<string, [Callable, Callable]>();
    transactionNumber = 1;
    transactionRndPreffix: string;
    constructor(url: string) {
        this.url = url;
        this.transactionRndPreffix = randomString(5);
    }
    send = (topic: string, payload: object): Promise<void> => {
        console.debug("Calling API", { topic, payload });

        if (topic.startsWith('bridge/request/')) {
            const transaction = `${this.transactionRndPreffix}-${this.transactionNumber++}`;
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
        let token = localStorage.getItem(TOKEN_LOCAL_STORAGE_ITEM_NAME);
        const authRequired = !!localStorage.getItem(AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME);
        if (authRequired) {
            if (!token) {
                token = prompt("enter your z2m admin token");
                localStorage.setItem(TOKEN_LOCAL_STORAGE_ITEM_NAME, token as string);
            }
            url.searchParams.append("token", token as string);
        }
        return url.toString();
    }

    connect(): void {
        this.socket = new ReconnectingWebSocket(this.urlProvider);
        this.socket.addEventListener("message", this.onMessage);
        this.socket.addEventListener("close", this.onClose);
    }
    private procsessBridgeMessage = (data: Message): void => {
        switch (data.topic) {
            case "bridge/config":
                store.setState({
                    bridgeConfig: data.payload as BridgeConfig
                });
                break;

            case "bridge/info":
                store.setState({
                    bridgeInfo: data.payload as BridgeInfo
                });
                break;

            case "bridge/state":
                store.setState({
                    bridgeState: data.payload as BridgeState
                });
                break;

            case "bridge/devices":
                {
                    const devicesMap = {};
                    (data.payload as Device[]).forEach((device) => {
                        devicesMap[device.ieee_address] = device;
                    });
                    store.setState({
                        devices: devicesMap
                    });
                }
                break;

            case "bridge/groups":
                store.setState({
                    groups: data.payload as Group[]
                })
                break;

            case "bridge/event":
                break;

            case "bridge/extensions":
                {
                    const extensions = data.payload as Extension[];
                    store.setState({ extensions });
                }
                break;

            case "bridge/logging":
                {
                    const { logs } = store.getState();
                    const newLogs = [...logs.slice(-MAX_LOGS_RECORDS_IN_BUFFER)];
                    newLogs.push(data.payload as LogMessage);
                    store.setState({ logs: newLogs });
                    const log = data.payload as LogMessage;
                    if (blacklistedMessages.every(val => !val.test(log.message))) {
                        showNotity(log);
                    }
                }
                break;

            case "bridge/response/networkmap":
                {
                    const response = data.payload as ResponseWithStatus;
                    if (response.status == "ok") {
                        const { value } = response.data as { value: unknown };
                        store.setState({
                            networkGraphIsLoading: false,
                            networkGraph: sanitizeGraph(value as GraphI)
                        });
                    } else {
                        store.setState({ networkGraphIsLoading: false });
                    }
                }
                break;


            case "bridge/response/touchlink/scan":
                {
                    const { status, data: payloadData } = data.payload as TouchllinkScanResponse;
                    if (status === "ok") {
                        store.setState({ touchlinkScanInProgress: false, touchlinkDevices: payloadData.found });
                    } else {
                        store.setState({ touchlinkScanInProgress: false });
                    }
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
            showNotity(data.payload as ResponseWithStatus);
            this.resolvePromises(data.payload as ResponseWithStatus);
        }
    }

    private resolvePromises(message: ResponseWithStatus): void {
        const { transaction, status } = message;
        if (transaction !== undefined && this.requests.has(transaction)) {
            const [resolve, reject] = this.requests.get(transaction) as [Callable, Callable];
            if (status == "ok" || status == undefined) {
                resolve();
            } else {
                reject();
            }
            this.requests.delete(transaction);
        }
    }

    private onClose = (e: CloseEvent): void => {
        if (e.code === UNAUTHORIZED_ERROR_CODE) {
            localStorage.setItem(AUTH_FLAG_LOCAL_STORAGE_ITEM_NAME, "true");
            localStorage.removeItem(TOKEN_LOCAL_STORAGE_ITEM_NAME);
            notyf.error("Unauthorized");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

    private onMessage = (event: MessageEvent): void => {
        let data = {} as Message;
        try {
            data = JSON.parse(event.data) as Message;
        } catch (e) {
            notyf.error(e.message);
            notyf.error(event.data);
        }

        if (data.topic.startsWith("bridge/")) {
            this.procsessBridgeMessage(data);
        } else {
            let { deviceStates } = store.getState();
            deviceStates = { ...deviceStates, ...{ [data.topic]: { ...deviceStates[data.topic], ...(data.payload as DeviceState) } } };
            store.setState({ deviceStates });
        }
    }
}
const apiUrl = `${window.location.host}${document.location.pathname}api`;
const api = new Api(`${isSecurePage() ? 'wss' : 'ws'}://${apiUrl}`);
export default api;
