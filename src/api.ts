import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Group, LogMessage } from "./store";
import { BridgeConfig, BridgeInfo, TouchLinkDevice, Device, DeviceState } from './types';
import { sanitizeGraph, isSecurePage } from "./utils";
import { Notyf } from "notyf";
import { GraphI } from "./components/map/types";
import debounce from "lodash/debounce"


const MAX_LOGS_RECORDS_IN_BUFFER = 100;


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
                message = data.error;
                break;
            default:
                break;
        }
    }

    switch (level) {
        case "error":
        case "warning":
            new Notyf().error(message);
            break;
        case "info":
            new Notyf().success(message);
            break;

        default:
            break;
    }
};

interface ResponseWithStatus {
    status: "ok" | "error";
    data: unknown;
    error?: string;
}
interface TouchllinkScanResponse extends ResponseWithStatus {
    data: {
        found: TouchLinkDevice[];
    };
}
class Api {
    url: string;
    socket: ReconnectingWebSocket;
    constructor(url: string) {
        this.url = url;
    }
    send = (topic: string, payload: unknown): void => {
        this.socket.send(JSON.stringify({ topic, payload }));
    }
    sendDebounced = debounce(this.send, 200, { trailing: true, leading: false });

    connect(): void {
        this.socket = new ReconnectingWebSocket(this.url);

        this.socket.addEventListener("message", this.onMessage);
    }

    private onMessage = (event: MessageEvent): void => {
        let data = {} as Message;
        try {
            data = JSON.parse(event.data) as Message;
        } catch (e) {
            new Notyf().error(e.message);
            new Notyf().error(event.data);
        }


        if (data.topic.startsWith("bridge/")) {
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

                case "bridge/devices":
                    {
                        const devicesMap = new Map();
                        (data.payload as Device[]).forEach((device) => {
                            const dev = { ...device };
                            dev.endpoints = new Map(Object.entries(device.endpoints));
                            devicesMap.set(device.ieee_address, dev);
                        });
                        store.setState({
                            devices: devicesMap
                        })
                    }
                    break;

                case "bridge/groups":
                    store.setState({
                        groups: data.payload as Group[]
                    })
                    break;

                case "bridge/event":
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
                            store.setState({
                                networkGraphIsLoading: false,
                                networkGraph: sanitizeGraph(JSON.parse((response.data as { value: string }).value) as GraphI)
                            });
                        } else {
                            store.setState({ networkGraphIsLoading: false });
                        }
                    }

                // eslint-disable-next-line no-fallthrough
                case "bridge/response/touchlink/scan":
                    {
                        const { status, data: payloadData } = data.payload as TouchllinkScanResponse;
                        if (status === "ok") {
                            store.setState({ touchlinkScanInProgress: false, touchlinkDevices: payloadData.found });
                        } else {
                            store.setState({ touchlinkScanInProgress: false });
                        }
                    }

                // eslint-disable-next-line no-fallthrough
                case "bridge/response/touchlink/identify":
                    store.setState({ touchlinkIdentifyInProgress: false });

                // eslint-disable-next-line no-fallthrough
                case "bridge/response/touchlink/factory_reset":
                    store.setState({ touchlinkResetInProgress: false });

                // eslint-disable-next-line no-fallthrough
                default:
                    if (data.topic.startsWith("bridge/response/")) {
                        showNotity(data.payload as ResponseWithStatus);
                    }
                    break;
            }
        } else {
            const { deviceStates } = store.getState();
            const newDeviceStates = new Map(deviceStates);
            newDeviceStates.set(data.topic, { ...newDeviceStates.get(data.topic), ...(data.payload as DeviceState) });
            store.setState({ deviceStates: newDeviceStates });
        }
    }
}
const apiUrl = `${window.location.host}${document.location.pathname}api`;
const api = new Api(`${isSecurePage() ? 'wss' : 'ws'}://${apiUrl}`);
export default api;