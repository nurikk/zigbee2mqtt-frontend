import { h, ComponentChild, Component, FunctionalComponent, Fragment } from "preact";

import style from "./style.css";
import { genDeviceDetailsLink, genDeviceShortAddress } from "../../utils";
import cx from 'classnames';
import { ZigbeePayload, ZigbeeEvent } from "./types";
import groupBy from "lodash/groupBy";
import isEqual from "lodash/isEqual";
import uniqWith from "lodash/uniqWith";
import { Dictionary, Device } from "../../types";
import DeviceControlGroup from "../device-control";
import Button from "../button";
import { startInterview } from "../actions";

interface DeviceCardProps {
    nwkAddr: string;
    events: ZigbeePayload[];
}

const EventLabels = new Map<ZigbeeEvent, string>([
    ['TcDeviceInd', 'Device joined'],
    ['DeviceAnnceInd', 'Announce recieved'],
    ['SimpleDescRsp', 'Endpoints recieved'],
    ['ActiveEpRsp', 'Clusters recieved'],
    ["ModelRcv", 'Model recieved'],
    ['NodeDescRsp', 'Processing inteviews']
]);

const EventRow: FunctionalComponent<{ eventName: ZigbeeEvent; events: ZigbeePayload[] }> = ({ eventName, events }) => {
    switch (eventName) {
        case "TcDeviceInd":
            return (

                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">ieeeAddr:</div>
                    <div class="col">
                        {events[0].ieeeAddr}
                    </div>
                </div>
            );


        case "DeviceAnnceInd":
            return (<Fragment>
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Type:</div>
                    <div class="col">
                        {events[0].type}
                    </div>
                </div>
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">powerSource:</div>
                    <div class="col">
                        {events[0].powerSource}
                    </div>
                </div>
            </Fragment>)

        case "SimpleDescRsp":
            return (<Fragment>
                {events.map((event) => event.ep ? <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Endpoint:</div>
                    <div class="col">
                        {event.ep}
                    </div>
                </div> : null)}
            </Fragment>);


        case "ModelRcv":
            return (

                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Model:</div>
                    <div class="col">
                        {events[0].ModelId}
                    </div>
                </div>




            )

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
    manualInteviewStarted: boolean;
}

export default class DeviceCard extends Component<DeviceCardProps, DeviceCardState> {
    constructor() {
        super();
        const updateTimerId = window.setInterval(() => {
            this.setState({ currentTimestamp: Date.now() })
        }, 1000);


        this.state = {
            manualInteviewStarted: false,
            updateTimerId,
            currentTimestamp: Date.now()
        }
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
        startInterview(genDeviceShortAddress(nwkAddr), () => this.setState({ manualInteviewStarted: true }));
    }

    renderManualIterviewHelper(): ComponentChild {
        const { manualInteviewStarted } = this.state;
        const { nwkAddr } = this.props;
        const deviceNotRespondingTimeout = 20;
        const deviceManualWakeupTimeouit = 5;
        const lastUpdateTime = this.getLastUpdateTime();
        if (manualInteviewStarted && lastUpdateTime > deviceManualWakeupTimeouit) {
            return (<div class={`row ${style["scale-in-center"]}`}>
                <div class={`col-12 ${style.blink}`}>Press wakeup button</div>
            </div>);
        }
        if (!manualInteviewStarted && lastUpdateTime > deviceNotRespondingTimeout)
            return (
                <div class={`row ${style["scale-in-center"]}`}>
                    <div class="col-5">Start interview:</div>
                    <div class="col">
                        <Button<string> className="btn btn-normal btn-sm" onClick={this.onInterviewClick} item={nwkAddr}><i className="fa fa-refresh" /></Button>
                    </div>
                </div>
            );
    }
    render(): ComponentChild {

        const { updateTimerId } = this.state;
        const { events, nwkAddr } = this.props;
        const uniqEvents = uniqWith(events, (a, b) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { timestamp: tsA, ...restA } = a;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { timestamp: tsB, ...restB } = b;
            return isEqual({ ...restA }, { ...restB });
        });
        const groupedEvents = groupBy(uniqEvents, 'event') as Dictionary<ZigbeePayload[]>;
        let progressValue = 0;
        let isDone = false;
        const lastEvent = this.getLastEvent();

        switch (lastEvent.event) {
            case "TcDeviceInd":
                progressValue = 16;
                break;

            case "DeviceAnnceInd":
                progressValue = 32;
                break;

            case "NodeDescRsp":
                progressValue = 48;
                break;


            case "ActiveEpRsp":
                progressValue = 64;
                break;

            case "SimpleDescRsp":
                progressValue = 80;
                break;

            case "ModelRcv":
                progressValue = 100;
                isDone = true;
                window.clearInterval(updateTimerId);
                break;
            default:
                console.log("Unknow event", lastEvent.event);
                break;
        }



        return (
            <div className={cx('card', "col-sm-4", style["discovery-card"], style["scale-in-center"])}>
                <div class="card-header">
                    New device <a href={genDeviceDetailsLink(nwkAddr)}>{genDeviceShortAddress(nwkAddr)}</a>
                    <p class="card-text"><small class="text-muted">
                        {isDone ? 'Successully joined!' : `Last updated ${this.getLastUpdateTimeMessage()}`}</small></p>
                </div>
                <div className="card-body">
                    {!isDone ? (<p className="card-text">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={`width: ${progressValue}%;`} aria-valuenow={progressValue} aria-valuemin="0" aria-valuemax="100" >{progressValue}%</div>
                        </div>
                    </p>) : null}


                    <div class={`row ${style["scale-in-center"]}`}>
                        <div class="col-5">Current status:</div>
                        <div class="col">
                            {this.getInterviewText()}
                        </div>
                    </div>

                    {
                        Object.entries(groupedEvents).map(([eventName, events]) => ((<EventRow key={eventName} eventName={eventName as ZigbeeEvent} events={events} />)))
                    }
                    {
                        this.renderManualIterviewHelper()
                    }


                    {/* {device.ModelId ? <img class="img-fluid card-img-bottom h-25" src="https://www.zigbee2mqtt.io/images/devices/4713407.jpg" alt="Card image cap" /> : null} */}
                </div>
                {isDone ? <div className="card-footer">
                    <DeviceControlGroup device={{ nwkAddr } as Device} />
                </div> : null}
            </div>
        )
    }
}