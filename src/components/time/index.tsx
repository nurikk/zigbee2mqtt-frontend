
import { h, ComponentChild, Component, ComponentType } from "preact";
import { fetchTimeInfo } from "../actions";
import { Device } from "../../types";


export interface TimeInfo {
    ntp_enable: boolean;
    ntp_server: string;
    tz: string;
    ts: number;
}

export interface TimedProps {
    time: TimeInfo | undefined;
}

interface State {
    time: TimeInfo | undefined;
}


const toHHMMSS = (secs: number): string => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60) % 60;
    const seconds = secs % 60;

    return [hours, minutes, seconds]
        .map(v => v < 10 ? `0${v}` : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
};
export const lastSeen = (device: Device, timeInfo: TimeInfo): string => {
    if (device.last_seen && timeInfo) {
        const lastSeen = timeInfo.ts - parseInt(device.last_seen, 10);
        return toHHMMSS(lastSeen);
    }
};

const Timed = (WrappedComponent: ComponentType<TimedProps>): ComponentType => {
    return class TimeProviderHOC extends Component<{}, State> {
        time: TimeInfo | undefined;
        constructor(props: unknown) {
            super(props);
            this.state = {
                time: undefined
            };
        }
        componentDidMount(): void {
            fetchTimeInfo((err, time: TimeInfo) => {
                this.setState({ time });
            });
        }

        render(): ComponentChild {
            const { time } = this.state;
            return <WrappedComponent {...this.props} time={time} />
        }
    };
};

export default Timed;
