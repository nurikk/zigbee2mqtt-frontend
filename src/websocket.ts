import ReconnectingWebSocket from "reconnecting-websocket";
import { WebsocketMessage } from "./components/discovery/types";
import { Notyf } from "notyf";
import {PubSub} from "pubsub-ts";
import { Dictionary } from "./types";
type ZigbeeCallback = (payload: WebsocketMessage) => void;

class EventEmitter {
    events: Dictionary<Function[]>;
    constructor() {
        this.events = {};
    }
    on(event: string, listener: Function): Function {
        if (typeof this.events[event] !== 'object') {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        return () => this.removeListener(event, listener);
    }
    removeListener(event: string, listener: Function): void {
        if (typeof this.events[event] === 'object') {
            const idx = this.events[event].indexOf(listener);
            if (idx > -1) {
                this.events[event].splice(idx, 1);
            }
        }
    }
    emit(event: string, ...args) {
        if (typeof this.events[event] === 'object') {
            this.events[event].forEach(listener => listener.apply(this, args));
        }
    }
    once(event: string, listener: Function) {
        const remove = this.on(event, (...args) => {
            remove();
            listener.apply(this, args);
        });
    }
}

export default class WebsocketManager {
    ws: ReconnectingWebSocket;
    publisher: PubSub.Publisher;
    em: EventEmitter;
    categories: string[];

    remoteSubscribe = (category: string): void => {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
        }
        this.ws.send(JSON.stringify({ action: "subscribe", category }))
    }

    private connect(): void {
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
        this.em = new EventEmitter();
        // this.publisher = new PubSub.Publisher();
        this.connect();
    }
    onMessageReceive = (wsEvent: MessageEvent): void => {
        try {
            const event = JSON.parse(wsEvent.data) as WebsocketMessage;
            this.em.emit(event.category, event);
            // this.publisher.notify(event.category, event);
        } catch (e) {
            new Notyf().error(`Cant parse json, ${e}`);
            console.log(`Cant parse json, ${e}`, wsEvent.data);
        }
    };

    subscribe(eventCategory: string, consumer: ZigbeeCallback): Function {
        this.remoteSubscribe(eventCategory);
        return this.em.on(eventCategory, consumer)
    }
}