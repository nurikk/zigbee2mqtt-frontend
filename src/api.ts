import ReconnectingWebSocket from "reconnecting-websocket";
import store, { Group } from "./store";
import { BridgeConfig, Device } from './types';

import { sanitizeGraph } from "./utils";
import { Notyf } from "notyf";
import { GraphI } from "./components/map/types";
interface Message {
    topic: string;
    message: unknown;
}
interface LogMessage {
    level: "error" | "info";
    message: string;
}
const showNotity = (message: LogMessage): void => {
    switch (message.level) {
        case "error":
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
    status: "ok";
    data: unknown;
}
class Api  {
    url: string;
    socket: ReconnectingWebSocket;
    constructor(url: string) {

        this.url = url;
    }
    send = (topic: string, payload: unknown): void => {
        console.log(topic, payload);
        this.socket.send(JSON.stringify({topic, payload}));
    }

    connect(): void {
        this.socket = new ReconnectingWebSocket(this.url);

        this.socket.addEventListener("message", this.onMessage);
    }

    private onMessage = (event: MessageEvent): void => {
        const data = JSON.parse(event.data) as Message;
        let response: ResponseWithStatus;
        switch (data.topic) {
            case "bridge/state":
                break;
            case "bridge/config":
                store.setState({
                    bridgeConfig: JSON.parse(data.message as string) as BridgeConfig
                });
                break;
            case "bridge/info":
                store.setState({
                    bridgeConfig: JSON.parse(data.message as string) as BridgeConfig
                });
                break;
            case "bridge/devices":
                store.setState({
                    isLoading: false,
                    devices: JSON.parse(data.message as string) as Device[]
                });
                break;

            case "bridge/groups":
                store.setState({
                    isLoading: false,
                    groups: JSON.parse(data.message as string)  as Group[]
                })
                break;
            case "bridge/response/networkmap":
                response = JSON.parse(data.message as string);
                if (response.status == "ok") {

                    store.setState({
                        isLoading: false,
                        networkGraph: sanitizeGraph(JSON.parse((response.data as {value: string}).value as string) as GraphI)
                    });
                } else {
                    store.setState({isLoading: false});
                }
                break;

            case "bridge/logging":
                showNotity(JSON.parse(data.message as string));
                break;
            default:
                if (data.topic.startsWith("bridge/request/")){

                } else {
                    debugger
                }
                break;
        }
        // if (data.topic.endsWith('/bridge/info')) {
        //     this.emit('info', JSON.parse(data.message));
        // } else if (data.topic.endsWith('/bridge/devices')) {
        //     this.emit('devices', JSON.parse(data.message));
        // }
    }
}
const api = new Api(`ws://${window.location.host}/api`);
export default api;