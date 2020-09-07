import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Group, LogMessage } from "./store";
import { BridgeConfig, Device, BridgeInfo } from './types';

import { sanitizeGraph } from "./utils";
import { Notyf } from "notyf";
import { GraphI } from "./components/map/types";


const MAX_LOGS_RECORDS_IN_BUFFER = 100;


interface Message {
    topic: string;
    payload: string | object | object[] | string[];
}

const blacklistedMessages: RegExp[] = [
    /MQTT publish/
]
const errorNotyf = new Notyf();
const successNotyf = new Notyf();
const showNotity = (data: LogMessage): void => {
    // eslint-disable-next-line prefer-const
    let { message, level } = data;
    if (message.length > 50) {
        message = message.split(' ').slice(0, 5).join(' ');
    }
    switch (level) {
        case "error":
        case "warning":

            errorNotyf.error(message);
            break;
        case "info":
            if (blacklistedMessages.every(val => !val.test(message))) {
                successNotyf.success(message);
            }
            break;


        default:
            // debugger
            break;
    }
};

interface ResponseWithStatus {
    status: "ok" | "error";
    data: unknown;
    error?: string;
}
interface OtaUpdateResponse {
    id: string;
    updateAvailable: boolean;
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

        if (data.topic.indexOf("/") == -1) {
            const { deviceStates } = store.getState();
            deviceStates[data.topic] = { ...deviceStates[data.topic], ...(data.payload as object) };
            store.setState({ deviceStates, forceRender: Date.now() });
        } else {
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
                    store.setState({
                        isLoading: false,
                        devices: data.payload as Device[]
                    });
                    break;

                case "bridge/groups":
                    store.setState({
                        isLoading: false,
                        groups: data.payload as Group[]
                    })
                    break;
                case "bridge/response/networkmap":
                    response = data.payload as ResponseWithStatus;
                    if (response.status == "ok") {
                        store.setState({
                            isLoading: false,
                            forceRender: Date.now(),
                            networkGraph: sanitizeGraph(JSON.parse((response.data as { value: string }).value) as GraphI)
                        });
                    } else {
                        store.setState({ isLoading: false });
                    }
                    break;

                case "bridge/event":
                    break;



                case "bridge/logging":
                    // eslint-disable-next-line no-case-declarations
                    const { logs } = store.getState();
                    if (logs.length === MAX_LOGS_RECORDS_IN_BUFFER) {
                        logs.shift();
                    }
                    logs.push(data.payload as LogMessage);
                    store.setState({ logs, forceRender: Date.now() });
                    showNotity(data.payload as LogMessage);
                    break;
                default:
                    if (data.topic.startsWith("bridge/request/")) {

                    } else {
                        // debugger
                    }
                    break;
            }
        }


    }
}
const api = new Api(`ws://${window.location.host}/api`);
export default api;