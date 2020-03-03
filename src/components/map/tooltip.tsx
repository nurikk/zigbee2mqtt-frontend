import { NodeI, Device, TimeInfo, DeviceType } from "./types";
import * as style from './tooltip.css';
import { h, FunctionalComponent } from "preact";
import { isOnline } from "./nodes";

interface TooltipProps {
    info: NodeI;
    time: TimeInfo | undefined;
}

const toHHMMSS = (secs: number): string => {
    const hours = Math.floor(secs / 3600)
    const minutes = Math.floor(secs / 60) % 60
    const seconds = secs % 60

    return [hours, minutes, seconds]
        .map(v => v < 10 ? `0${v}` : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":")
}

const getTooltip = (device: Device, timeInfo: TimeInfo): string[] => {
    const strings: string[] = [];
    if (device.ManufName) {
        if (device.ModelId) {
            strings.push(`${device.ManufName} ${device.ModelId}`);
        } else {
            strings.push(device.ManufName);
        }
    }
    if (device.ieeeAddr) {
        strings.push(device.ieeeAddr);
    }
    if (device?.st?.linkquality) {
        strings.push(`LinkQuality: ${device.st.linkquality}`)
    }
    if (strings.length == 0) {
        strings.push("A very strange device...");
    }
    if (device.type !== DeviceType.Coordinator) {
        if (device.last_seen && timeInfo) {
            const lastSeen = timeInfo.ts - parseInt(device.last_seen, 10);
            strings.push(`Last seen: ${toHHMMSS(lastSeen)}`);
        }
        if (!isOnline(device, timeInfo)) {
            strings.push("Offline");
        }
    }
    return strings;
};

const Tooltip: FunctionalComponent<TooltipProps> = (props: TooltipProps) => {
    const { info, time } = props;
    const { device } = info;
    return (
        <div className={style.tooltip}>
            {getTooltip(device, time).map((s) => <div>{s}</div>)}
        </div>

    );
};
export default Tooltip;