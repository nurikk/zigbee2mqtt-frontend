import { Component, ComponentChild, Fragment, FunctionalComponent, h, VNode } from "preact";

import style from "./style.css";
import { genDeviceDetailsLink, genDeviceImageUrl, last } from "../../utils";
import cx from "classnames";
import { ZigbeeEvent, ZigbeePayload } from "./types";
import groupBy from "lodash/groupBy";
import { Device, Dictionary } from "../../types";
import DeviceControlGroup from "../device-control";
import Button from "../button";
import { startInterview } from "../actions";
import SafeImg from "../safe-image";
import PowerSourceComp from "../power-source";
import uniqWith from "lodash/uniqWith";
import isEqual from "lodash/isEqual";

const INTERVIEW_STEPS_COUNT = 9;
const DEVICE_NOT_RESPONDING_TIMEOUT = 20;
const DEVICE_MANUAL_WAKEUP_TIMEOUT = 5;

interface DeviceCardProps {
    ieeeAddr: string;
    events: ZigbeePayload[];
}

const EventLabels = new Map<ZigbeeEvent, string>([
    ["LeaveInd", "Left network"],
    ["TcDeviceInd", "Device joined"],
    ["DeviceAnnceInd", "Announce received"],
    ["SimpleDescRsp", "Clusters received"],
    ["ActiveEpRsp", "Endpoints received"],
    ["ModelRcv", "Model received"],
    ["NodeDescRsp", "Processing interviews"],
    ["PowerSrcRcv", "Power source received"],
    ["ConfRsp", "Finished interview"]
]);

const RowCol: FunctionalComponent<{ title: string; content: ComponentChild }> = ({ title, content }) => {
    return (
        <div class={`row ${style["scale-in-center"]}`}>
            <div class="col-5 text-nowrap">{title}</div>
            <div class="col">{content}</div>
        </div>
    );
};

interface EventRowProps {
    eventName: ZigbeeEvent;
    events: ZigbeePayload[];
}

const EventRow: FunctionalComponent<EventRowProps> = ({ eventName, events }): VNode<any> => {
    switch (eventName) {
        case "LeaveInd":
            return (
                <RowCol title="Old nwkAddr:" content={<del>{last(events).nwkAddr}</del>} />
            );


        case "TcDeviceInd":
            return (
                <Fragment>
                    <RowCol title="New nwkAddr:" content={last(events).nwkAddr} />
                    {
                        last(events).ParentnwkAddr ? (
                            <RowCol title="ParentnwkAddr:" content={last(events).ParentnwkAddr} />
                        ) : null
                    }
                </Fragment>
            );


        case "DeviceAnnceInd":
            return <RowCol title="Type:" content={last(events).type} />;


        case "PowerSrcRcv":
            return <RowCol title="Power source:" content={<PowerSourceComp source={last(events).PowerSource} />} />;

        case "SimpleDescRsp":
            return <Fragment>
                {uniqWith(events
                        .filter(e => e.ep)
                        .map(({ ep, ProfileId, DeviceId }) => ({ ep, ProfileId, DeviceId }))
                    , isEqual)
                    .map(evt => (
                        <RowCol title={`Endpoint #${evt.ep}:`}
                                content={`ProfileId=${evt.ProfileId} DeviceId=${evt.DeviceId}`} />
                    ))}
            </Fragment>;


        case "ModelRcv":
            return (
                <Fragment>
                    <RowCol title="ManufName:" content={last(events).ManufName || <small>detecting...</small>} />
                    <RowCol title="Model:" content={
                        <Fragment>
                            <div>{last(events).ModelId}</div>
                            <SafeImg class={cx(style["device-image"])}
                                     src={genDeviceImageUrl({ ModelId: last(events).ModelId } as Device)
                                     } />
                        </Fragment>
                    } />
                </Fragment>
            );

        default:
            return undefined;

    }
};

interface DeviceCardState {
    currentTimestamp: number;
    updateTimerId: number;
    manualInterviewStarted: boolean;
    isDone: boolean;
}

export default class DeviceCard extends Component<DeviceCardProps, DeviceCardState> {
    constructor() {
        super();
        const updateTimerId = window.setInterval(() => {
            this.setState({ currentTimestamp: Date.now() });
        }, 1000);


        this.state = {
            isDone: false,
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
        startInterview(nwkAddr, 0,(err, response) => {
            if (!err) {
                this.setState({ manualInterviewStarted: true });
            }
        });
    };

    renderManualInterviewHelper(): ComponentChild {
        const { manualInterviewStarted } = this.state;
        const { ieeeAddr } = this.props;

        const lastUpdateTime = this.getLastUpdateTime();
        if (manualInterviewStarted && lastUpdateTime > DEVICE_MANUAL_WAKEUP_TIMEOUT) {
            return (<div class={`row ${style["scale-in-center"]}`}>
                <div class={`col-12 ${style.blink}`}>Press wakeup button</div>
            </div>);
        }
        if (!manualInterviewStarted && lastUpdateTime > DEVICE_NOT_RESPONDING_TIMEOUT)
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

    // eslint-disable-next-line react/no-deprecated
    componentWillReceiveProps(nextProps: Readonly<DeviceCardProps>, nextContext: any): void {
        const { events } = nextProps;
        const lastEvent = events[events.length - 1];
        const { updateTimerId } = this.state;
        if (lastEvent && lastEvent.event === "PowerSrcRcv") {
            // progressValue = 100;
            window.clearInterval(updateTimerId);
            this.setState({ isDone: true });
        }
    }

    render(): ComponentChild {

        const { isDone } = this.state;
        const { events, ieeeAddr } = this.props;
        const groupedEvents = groupBy(events, "event") as Dictionary<ZigbeePayload[]>;
        const eventsCount = Object.keys(groupedEvents).length;
        const progressValue = Math.round(100 / INTERVIEW_STEPS_COUNT * eventsCount);

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