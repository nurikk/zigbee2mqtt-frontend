import ReconnectingWebSocket from "reconnecting-websocket";
import { WebsocketMessage } from "./components/discovery/types";
import { Notyf } from "notyf";
import {PubSub} from "pubsub-ts";
type ZigbeeCallback = (payload: WebsocketMessage) => void;

export default class WebsocketManager {
    ws: ReconnectingWebSocket;
    publisher: PubSub.Publisher;
    categories: string[];

    remoteSubscribe = (category: string): void => {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
        this.ws.send(JSON.stringify({ action: "subscribe", category }))
    }

    private connect() {
        const { hostname } = document.location;
        let wsUrl = `ws://${document.location.hostname}:81/log`;
        if (hostname === "localhost") {
            const { search } = document.location;
            if (hostname === "localhost") {
                if (search.indexOf("gate") > 0) {
                    wsUrl = `ws://192.168.1.209:81/log`;
                } else {
                    wsUrl = `ws://localhost:8579`;
                }
            }
        }
        this.ws = new ReconnectingWebSocket(wsUrl);
        this.ws.addEventListener("open", () => {
            this.categories.forEach(this.remoteSubscribe);
        })
        this.ws.addEventListener("message", this.onMessageReceive);
    }

    constructor() {
        this.categories = [];
        this.connect();
        this.publisher = new PubSub.Publisher();
    }
    onMessageReceive = (wsEvent: MessageEvent): void => {
        try {
            const event = JSON.parse(wsEvent.data) as WebsocketMessage;
            this.publisher.notify(event.category, event);
        } catch (e) {
            new Notyf().error(`Cant parse json, ${e}`);
            console.log(`Cant parse json, ${e}`, wsEvent.data);
        }
    };

    subscribe(eventCategory: string, consumer: ZigbeeCallback) {
        const subscriber = new PubSub.Subscriber();
        subscriber.on(eventCategory, (notification: PubSub.Notification) => {
            consumer(notification.body);
        });
        this.publisher.add(subscriber);
        this.remoteSubscribe(eventCategory);
        return subscriber;
    }
}