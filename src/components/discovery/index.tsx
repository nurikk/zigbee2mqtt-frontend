import { Component, ComponentChild, Fragment, h } from "preact";
import { Dictionary } from "../../types";
import { ZigbeePayload } from "./types";
import DeviceCard from "./device-card";
import Button from "../button";
import { Notyf } from "notyf";
import orderBy from "lodash/orderBy";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import actions, { Actions } from "../../actions";
import WebsocketManager from "../../websocket";
window["wsEventsData"] = window["wsEventsData"] || [];
const wsEventsData: object[] = window['wsEventsData'];

interface DiscoveryState {
    updateTimerId: number;
    joinDuration: number;
    events: Dictionary<ZigbeePayload[]>;
}

export class Discovery extends Component<GlobalState & Actions, DiscoveryState> {
    constructor() {
        super();

        this.state = {
            updateTimerId: 0,
            joinDuration: 0,
            events: {}
        };

    }

    processZigbeeEvent = ({category, payload}): void => {
        wsEventsData.push({category, payload})

        const message = {...payload};
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

    componentDidMount(): void {
        const manager = new WebsocketManager();
        console.log("use `copy(wsEventsData)` to copy events log");
        manager.subscribe("zigbee", this.processZigbeeEvent);
        setTimeout(() => this.enableJoin(), 500);
    }

    renderDevices(): ComponentChild {
        const { startInterview } = this.props;
        const { events } = this.state;
        const sortedEvents = orderBy(Object.entries(events), ([_, events]) => events[0].timestamp).reverse();

        return (<Fragment>
            {this.renderJoinButton()}
            <div className="row no-gutters">{sortedEvents.map(([ieeeAddr, events]) => <DeviceCard startInterview={startInterview}
                ieeeAddr={ieeeAddr} events={events} />)}</div>
        </Fragment>);

    }

    enableJoin = async () => {
        const { setJoinDuration } = this.props;
        await setJoinDuration(255, '0x0000');
        new Notyf({ position: { x: "left", y: "bottom" } }).success("Join enabled");
    };
    disableJoin = async () => {
        const { setJoinDuration } = this.props;
        await setJoinDuration(0, '0x0000');
        new Notyf({ position: { x: "left", y: "bottom" } }).success("Join disabled");
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

const mappedProps = ["isLoading", "time", "devices"];
const ConnectedDiscovery = connect<{}, DiscoveryState, GlobalState, Actions>(mappedProps, actions)(Discovery);
export default ConnectedDiscovery;
