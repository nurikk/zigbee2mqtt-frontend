import { Component, ComponentChild, Fragment, h } from "preact";
import { Dictionary } from "../../types";
import { WebsocketMessage, ZigbeePayload } from "./types";
import DeviceCard from "./device-card";
import Button from "../button";
import { enableJoin } from "../actions";
import { WSConnect } from "../../utils";
import { Notyf } from "notyf";
import orderBy from "lodash/orderBy";

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
        // console.log("processZigbeeEvent", message);
        message.timestamp = Date.now();
        const { events } = this.state;
        const { ieeeAddr } = message;
        let { joinDuration, updateTimerId } = this.state;
        switch (message.event) {
            case "LinkData":
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
                if (events[ieeeAddr]) {
                    events[ieeeAddr].push(message);
                } else {
                    events[ieeeAddr] = [message];
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
            new Notyf().error(`Cant parse json, ${e}`);
            console.log(`Cant parse json, ${e}`, wsEvent.data);
        }
        if (event.category === "zigbee" && (event.payload as ZigbeePayload).event !== "LinkData") {
            console.log('wsEvent.data', wsEvent.data);
            this.processZigbeeEvent(event.payload as ZigbeePayload);
        }
    };
    connectWS = (): void => {
        const ws = WSConnect();
        ws.addEventListener("open", (): void => {
            ws.send(JSON.stringify({ action: "subscribe", category: "zigbee" }));
            this.enableJoin();
        });
        ws.addEventListener("message", this.onMessageReceive);
    };


    componentDidMount(): void {
        this.connectWS();

    }

    renderDevices(): ComponentChild {
        const { events } = this.state;
        const sortedEvents = orderBy(Object.entries(events), ([_, events]) => events[0].timestamp).reverse();

        return (<Fragment>
            {this.renderJoinButton()}
            <div className="row no-gutters">{sortedEvents.map(([ieeeAddr, events]) => <DeviceCard
                ieeeAddr={ieeeAddr} events={events} />)}</div>
        </Fragment>);

    }

    enableJoin = (): void => {
        enableJoin(255, undefined, (err, response) => {
            if (!err) {
                new Notyf({position: {x: "left", y: "bottom"}}).success("Join enabled");
            }
        });
    };
    disableJoin = (): void => {
        enableJoin(0, undefined, (err, response) => {
            if (!err) {
                new Notyf().success("Join disabled");
            }
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
            <Fragment>
                <div class="row h-100 justify-content-center align-items-center">
                    <h2>Nothing yet happened</h2>
                </div>
                {this.renderJoinButton()}
            </Fragment>
        );
    }


    render(): ComponentChild {
        const { events } = this.state;
        const hasAnyEvents = Object.keys(events).length !== 0;
        return <div class="container-fluid h-100">{hasAnyEvents ? this.renderDevices() : this.renderEmptyScreen()}</div>
    }

}