import { Component, ComponentChild, Fragment, h } from "preact";
import { Dictionary } from "../../types";
import { WebsocketMessage, ZigbeePayload } from "./types";
import DeviceCard from "./device-card";
import Button from "../button";
import { enableJoin } from "../actions";
import { WSConnect } from "../../utils";


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
        };

    }

    processZigbeeEvent(message: ZigbeePayload): void {
        console.log("processZigbeeEvent", message);
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
                window.clearInterval(updateTimerId);
                updateTimerId = window.setInterval(() => {
                    const { joinDuration, updateTimerId } = this.state;
                    if (joinDuration <= 0) {
                        window.clearInterval(updateTimerId);
                    } else {
                        this.setState({ joinDuration: joinDuration - 1 });
                    }

                }, 1000);
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

    onMessageReceive = (wsEvent: MessageEvent): void => {
        let event = {} as WebsocketMessage;
        try {
            event = JSON.parse(wsEvent.data) as WebsocketMessage;
        } catch (e) {
            console.error("Cant parse json", e);
        }
        if (event.category === "zigbee") {
            this.processZigbeeEvent(event.payload as ZigbeePayload);
        }
    };
    connectWS = (): void => {
        const ws = WSConnect();
        ws.addEventListener("open", (): void => {
            console.log("[WS] Connected!");
            this.enableJoin();
        });
        ws.addEventListener("message", this.onMessageReceive);
    };


    componentDidMount(): void {
        this.connectWS();

    }

    renderDevices(): ComponentChild {
        const { events } = this.state;
        return (<Fragment>
            {this.renderJoinButton()}
            <div className="row no-gutters">{Object.entries(events).map(([nwkAddr, events]) => <DeviceCard
                nwkAddr={nwkAddr} events={events}/>)}</div>
        </Fragment>);

    }

    enableJoin = (): void => {
        enableJoin(255, undefined, () => {
            console.log("Enabled");
        });
    };
    disableJoin = (): void => {
        enableJoin(0, undefined, () => {
            console.log("Disabled");
        });
    };

    renderJoinButton(): ComponentChild {
        const { joinDuration } = this.state;

        return (<div class="row h-100 justify-content-center align-items-center">
            {joinDuration <= 0 ? <Button<void> className="btn btn-success" onClick={this.enableJoin} item={undefined}>Enable
                    join</Button> :
                <div>Join enabled for {joinDuration} seconds, <a href="#" onClick={this.disableJoin}>Stop</a></div>}
        </div>);
    }

    renderEmptyScreen(): ComponentChild {
        return (
            <div class="container h-100">
                <div class="row h-100 justify-content-center align-items-center">
                    <h2>Nothing yet happened</h2>
                </div>
                {this.renderJoinButton()}
            </div>
        );
    }


    render(): ComponentChild {
        const { events } = this.state;
        const hasAnyEvents = Object.keys(events).length !== 0;
        return hasAnyEvents ? this.renderDevices() : this.renderEmptyScreen();
    }

}