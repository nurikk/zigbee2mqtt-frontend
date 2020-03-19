import { h, ComponentChild, Component, Fragment } from "preact";
import { Dictionary, Device } from "../../types";




import { WebsocketMessage, ZigbeePayload } from "./types";
import DeviceCard from "./device-card";
import Button from "../button";
import { enableJoin } from "../actions";

// const ws = new WebSocket("ws://localhost:8579/");
const ws = new WebSocket("ws://192.168.1.209:81/log");
// const ws = new WebSocket(`ws://${document.location.hostname}:81/log`);



interface DiscoveryState {
    updateTimerId: number;

    joinDuration: number;
    events: Dictionary<ZigbeePayload[]>;
}

export default class Discovery extends Component<{}, DiscoveryState> {
    constructor() {
        super();

        this.state = {
            updateTimerId: 0,
            joinDuration: 0,
            events: {}
        }

    }
    processZigbeeEvent(message: ZigbeePayload): void {
        message.timestamp = Date.now();
        const { events } = this.state;
        const { nwkAddr } = message;
        let { joinDuration, updateTimerId } = this.state;
        switch (message.event) {
            case "LinkData":
            case "LeaveInd":
                break;
            case "PermitJoin":
                joinDuration = message.duration;
                updateTimerId = window.setInterval(() => {
                    const { joinDuration, updateTimerId } = this.state;
                    if (joinDuration <= 0) {
                        window.clearInterval(updateTimerId);
                    } else {
                        this.setState({ joinDuration: joinDuration - 1 })
                    }

                }, 1000);
                // console.log("LinkData", payload.payload);
                break;
            default:
                if (events[nwkAddr]) {
                    events[nwkAddr].push(message);
                } else {
                    events[nwkAddr] = [message];
                }
                break;

        }
        this.setState({ events, joinDuration, updateTimerId });
    }
    onMessageRecieve = (wsEvent: MessageEvent): void => {
        const event = JSON.parse(wsEvent.data) as WebsocketMessage;
        switch (event.category) {
            case "log":
                // console.log(event.payload);
                break;
            case "zigbee":
                console.log(wsEvent.data);
                this.processZigbeeEvent(event.payload as ZigbeePayload);
                break;
            default:
                console.warn("Unknow event", event);
                break;
        }
    }
    connectWS = (): void => {

        ws.addEventListener("open", (): void => {
            console.log("[WS] Connected!")
            // ws.send("hello");
        });

        ws.addEventListener("message", this.onMessageRecieve);
        ws.addEventListener("error", (event) => {
            console.error("[WS] error", event);
        });


    }


    componentDidMount(): void {
        this.connectWS();
        ws.send("hello");
        this.enableJoin();
    }
    renderDevices(): ComponentChild {
        const { events } = this.state;
        return <div className="row no-gutters">{Object.entries(events).map(([nkwAaar, events]) => <DeviceCard nwkAddr={nkwAaar} events={events} />)}</div>
    }
    enableJoin = (): void => {
        enableJoin(255, () => {
            console.log("Enabled");
        });
    }
    renderEmptyScreen(): ComponentChild {
        const { joinDuration } = this.state;
        return (<Fragment>
            <h1>Nothing yet happened </h1>

            {joinDuration <= 0 ?
                <Button<void> className="btn btn-success" onClick={this.enableJoin} item={undefined}>Enable join</Button> :
                <div>Join enabled for {joinDuration} seconds</div>}

        </Fragment>);
    }
    render(): ComponentChild {
        const { events } = this.state;
        const hasAnyEvents = Object.keys(events).length !== 0;
        return hasAnyEvents ? this.renderDevices() : this.renderEmptyScreen();
    }

}