/* eslint-disable no-case-declarations */
import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Group, LogMessage } from "./store";
import { BridgeConfig, BridgeInfo, TouchLinkDevice, Device } from './types';
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
const showNotity = debounce((data: LogMessage): void => {
    // eslint-disable-next-line prefer-const
    let { message, level } = data;
    switch (level) {
        case "error":
        case "warning":
            new Notyf().error(message);
            break;
        case "info":
            if (blacklistedMessages.every(val => !val.test(message))) {
                new Notyf().success(message);
            }
            break;

        default:
            break;
    }
}, 200, { trailing: true });

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

        let response: ResponseWithStatus;

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
                    const devicesMap = new Map();
                    (data.payload as Device[]).forEach((device) => {
                        devicesMap.set(device.ieee_address, device);
                    });
                    store.setState({
                        devices: devicesMap
                    });
                    break;

                case "bridge/groups":
                    store.setState({
                        groups: data.payload as Group[]
                    })
                    break;
                case "bridge/response/networkmap":
                    response = data.payload as ResponseWithStatus;
                    if (response.status == "ok") {
                        store.setState({
                            networkGraphIsLoading: false,
                            networkGraph: sanitizeGraph(JSON.parse((response.data as { value: string }).value) as GraphI)
                        });
                    } else {
                        store.setState({ networkGraphIsLoading: false });
                    }
                    break;

                case "bridge/event":
                    break;

                case "bridge/response/touchlink/scan":
                    const { status, data: payloadData } = data.payload as TouchllinkScanResponse;
                    if (status === "ok") {
                        store.setState({ touchlinkScanInProgress: false, touchlinkDevices: payloadData.found });
                    } else {
                        store.setState({ touchlinkScanInProgress: false });
                    }
                    break;

                case "bridge/logging":
                    const { logs } = store.getState();
                    const newLogs = [...logs.slice(-MAX_LOGS_RECORDS_IN_BUFFER)];
                    newLogs.push(data.payload as LogMessage);
                    store.setState({ logs: newLogs });
                    showNotity(data.payload as LogMessage);
                    break;
                default:
                    break;
            }
        } else {
            const { deviceStates } = store.getState();
            const newDeviceStates = new Map(deviceStates);
            newDeviceStates.set(data.topic, { ...newDeviceStates[data.topic], ...(data.payload as object) });
            store.setState({ deviceStates: newDeviceStates });
        }


    }
}
const api = new Api(`${isSecurePage() ? 'wss' : 'ws'}://${window.location.host}/api`);
export default api;