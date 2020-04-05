import { Component, ComponentChild, Fragment, FunctionalComponent, h } from "preact";

import style from "./style.css";
import { arrayUnique, genDeviceDetailsLink, genDeviceImageUrl, last } from "../../utils";
import cx from "classnames";
import { ZigbeeEvent, ZigbeePayload } from "./types";
import groupBy from "lodash/groupBy";
import { Device, Dictionary } from "../../types";
import DeviceControlGroup from "../device-control";
import Button from "../button";
import { startInterview } from "../actions";
import SafeImg from "../safe-image";
import PowerSource from "../power-source";

interface DeviceCardProps {
    ieeeAddr: string;
    events: ZigbeePayload[];
}

const EventLabels = new Map<ZigbeeEvent, string>([
    ["LeaveInd", "Left network"],
    ["TcDeviceInd", "Device joined"],
    ["DeviceAnnceInd", "Announce received"],
    ["SimpleDescRsp", "Endpoints received"],
    ["ActiveEpRsp", "Clusters received"],
    ["ModelRcv", "Model received"],
    ["NodeDescRsp", "Processing interviews"],
    ["PowerSrcRcv", "Power source received"]
]);

const EventRow: FunctionalComponent<{ eventName: ZigbeeEvent; events: ZigbeePayload[] }> = ({ eventName, events }) => {
    switch (eventName) {
        case "LeaveInd":
            return (
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Old nwkAddr:</div>
                    <div class="col">
                        <del>{last(events).nwkAddr}</del>
                    </div>
                </div>
            );


        case "TcDeviceInd":
            return (
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">New nwkAddr:</div>
                    <div class="col">
                        {last(events).nwkAddr}
                    </div>
                </div>
            );


        case "DeviceAnnceInd":
            return (<div class={`row ${style["scale-in-center"]}`}>
                <div class="col-5">Type:</div>
                <div class="col">
                    {last(events).type}
                </div>
            </div>);

        case "PowerSrcRcv":
            return (
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Power source:</div>
                    <div class="col">
                        <PowerSource source={last(events).PowerSource} />
                    </div>
                </div>
            );

        case "SimpleDescRsp":
            return (<div class={`row ${style["scale-in-center"]}`}>
                <div class="col-5">Endpoints:</div>
                <div class="col">
                    {arrayUnique(events.filter(e => e.ep).map(e => e.ep)).join(", ")}
                </div>
            </div>);


        case "ModelRcv":
            return (
                <Fragment>
                    {
                        last(events).ManufName ? (
                            <div class={`row ${style["scale-in-center"]}`}>
                                <div class="col-5">ManufName:</div>
                                <div class="col">
                                    {last(events).ManufName}
                                </div>
                            </div>
                        ) : undefined
                    }


                    <div class={`row ${style["scale-in-center"]}`}>
                        <div class="col-5">Model:</div>
                        <div class="col">
                            <div>{last(events).ModelId}</div>
                            <SafeImg class={cx(style["device-image"])}
                                     src={genDeviceImageUrl({ ModelId: last(events).ModelId } as Device)} />
                        </div>
                    </div>
                </Fragment>


            );

        // case "ActiveEpRsp":
        // case "NodeDescRsp":
        //     return <div>{EventLabels.get(eventName)}</div>

        default:
            break;
        // return <div>{EventLabels.get(eventName)} <pre>{JSON.stringify(events)}</pre></div>

    }
};

interface DeviceCardState {
    currentTimestamp: number;
    updateTimerId: number;
    manualInterviewStarted: boolean;
}

export default class DeviceCard extends Component<DeviceCardProps, DeviceCardState> {
    constructor() {
        super();
        const updateTimerId = window.setInterval(() => {
            this.setState({ currentTimestamp: Date.now() });
        }, 1000);


        this.state = {
            manualInterviewStarted: false,
            updateTimerId,
            currentTimestamp: Date.now()
        };
    }

    getLastEvent(): ZigbeePayload {
        const { events } = this.props;
        return events[events.length - 1];
    }

    getLastUpdateTime(): number {
        const { timestamp: messageTimestamp } = this.getLastEvent();
        const { currentTimestamp } = this.state;
        return Math.max(0, Math.round((currentTimestamp - messageTimestamp) / 1000));
    }

    getLastUpdateTimeMessage(): string {
        const lastMessage = this.getLastUpdateTime();
        return `${lastMessage} sec ago`;
    }

    getInterviewText(): string {
        const lastEvent = this.getLastEvent();
        return EventLabels.get(lastEvent.event);
    }

    onInterviewClick = (nwkAddr: string): void => {
        startInterview(nwkAddr, (err, response) => {
            if (!err) {
                this.setState({ manualInterviewStarted: true });
            }
        });
    };

    renderManualInterviewHelper(): ComponentChild {
        const { manualInterviewStarted } = this.state;
        const { ieeeAddr } = this.props;
        const deviceNotRespondingTimeout = 20;
        const deviceManualWakeupTimeout = 5;
        const lastUpdateTime = this.getLastUpdateTime();
        if (manualInterviewStarted && lastUpdateTime > deviceManualWakeupTimeout) {
            return (<div class={`row ${style["scale-in-center"]}`}>
                <div class={`col-12 ${style.blink}`}>Press wakeup button</div>
            </div>);
        }
        if (!manualInterviewStarted && lastUpdateTime > deviceNotRespondingTimeout)
            return (
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Start interview:</div>
                    <div class="col">
                        <Button<string> className="btn btn-normal btn-sm" onClick={this.onInterviewClick}
                                        item={ieeeAddr}><i className="fa fa-play" /></Button>
                    </div>
                </div>
            );
    }

    render(): ComponentChild {
        const INTERVIEW_STEPS_COUNT = 8;

        const { updateTimerId } = this.state;
        const { events, ieeeAddr } = this.props;
        const groupedEvents = groupBy(events, "event") as Dictionary<ZigbeePayload[]>;
        const eventsCount = Object.keys(groupedEvents).length;
        let progressValue = 100 / INTERVIEW_STEPS_COUNT * eventsCount;
        let isDone = false;
        const lastEvent = this.getLastEvent();
        if (lastEvent.event === "PowerSrcRcv") {
            progressValue = 100;
            isDone = true;
            window.clearInterval(updateTimerId);
        }



        return (
            <div className={cx("card", "col-sm-4", style["discovery-card"], style["scale-in-center"])}>
                <div class="card-header">
                    Device <a href={genDeviceDetailsLink(ieeeAddr)}>{ieeeAddr}</a>
                    <p class="card-text"><small class="text-muted">
                        {isDone ? "Successfully joined!" : `Last updated ${this.getLastUpdateTimeMessage()}`}</small>
                    </p>
                </div>
                <div className="card-body">
                    {!isDone ? (<p className="card-text">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                 style={`width: ${progressValue}%;`} aria-valuenow={progressValue} aria-valuemin="0"
                                 aria-valuemax="100">{progressValue}%
                            </div>
                        </div>
                    </p>) : null}


                    <div class={`row ${style["scale-in-center"]}`}>
                        <div class="col-5">Current status:</div>
                        <div class="col">
                            {this.getInterviewText()}
                        </div>
                    </div>

                    {
                        Object.entries(groupedEvents).map(([eventName, events]) => ((
                            <EventRow key={eventName} eventName={eventName as ZigbeeEvent} events={events} />)))
                    }
                    {
                        isDone ? null : this.renderManualInterviewHelper()
                    }
                </div>
                {isDone ? <div className="card-footer">
                    <DeviceControlGroup device={{ ieeeAddr } as Device} />
                </div> : null}
            </div>
        );
    }
}