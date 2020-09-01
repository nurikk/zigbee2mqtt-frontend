import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Group } from "./store";
import { BridgeConfig, Device } from './types';

import { sanitizeGraph } from "./utils";
import { Notyf } from "notyf";
import { GraphI } from "./components/map/types";
interface Message {
    topic: string;
    message?: unknown;
    payload?: unknown;
}
interface LogMessage {
    level: "error" | "info" | "warning";
    message: string;
}
const showNotity = (message: LogMessage): void => {
    switch (message.level) {
        case "error":
        case "warning":
            new Notyf().error(message.message);
            break;
        case "info":
            new Notyf().success(message.message);
            break;


        default:
            debugger
            break;
    }
}

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
        console.log(topic, payload);
        this.socket.send(JSON.stringify({ topic, payload }));
    }

    connect(): void {
        this.socket = new ReconnectingWebSocket(this.url);

        this.socket.addEventListener("message", this.onMessage);
    }

    private onMessage = (event: MessageEvent): void => {
        let data = {} as Message;
        try {
            if (event.data) {
                data = JSON.parse(event.data) as Message;
            }
        } catch (e) {
            new Notyf().error(e.message);
            new Notyf().error(event.data);
        }

        let response: ResponseWithStatus;
    

        let parsedPayload = {};
        try {
            if (data.payload) {
                parsedPayload = JSON.parse(data.payload as string)
            }
        } catch (e) {
            // debugger
            new Notyf().error(e.message);
            new Notyf().error(data.payload);
        }


        if (data.topic.indexOf("/") == -1) {
            const { deviceStates } = store.getState();


            deviceStates[data.topic] = { ...deviceStates[data.topic], ...parsedPayload };
            store.setState({ deviceStates, forceRender: Date.now() });
        } else {
            switch (data.topic) {
                case "bridge/state":
                    break;
                case "bridge/config":
                    store.setState({
                        bridgeConfig: parsedPayload as BridgeConfig
                    });
                    break;
                case "bridge/info":
                    store.setState({
                        bridgeConfig: parsedPayload as BridgeConfig
                    });
                    break;
                case "bridge/devices":
                    store.setState({
                        isLoading: false,
                        devices: parsedPayload as Device[]
                    });
                    break;

                case "bridge/groups":
                    store.setState({
                        isLoading: false,
                        groups: parsedPayload as Group[]
                    })
                    break;
                case "bridge/response/networkmap":
                    response = parsedPayload as ResponseWithStatus;
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

                case "bridge/response/device/bind":
                    response = parsedPayload as ResponseWithStatus;
                    if (response.status == "ok") {
                        new Notyf().success("ok");
                    } else {
                        new Notyf().error(response.error);
                    }
                    break;

                case "bridge/event":
                    break;

                case "bridge/response/device/ota_update/check":

                    break;


                case "bridge/logging":
                    showNotity(parsedPayload as LogMessage);
                    break;
                default:
                    if (data.topic.startsWith("bridge/request/")) {

                    } else {
                        debugger
                    }
                    break;
            }
        }


    }
}
const api = new Api(`ws://${window.location.host}/api`);
export default api;