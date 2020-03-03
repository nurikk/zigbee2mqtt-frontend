import { NodeI, Device } from "./types";
import * as style from './tooltip.css';
import { h, FunctionalComponent } from "preact";

interface TooltipProps {
    info: NodeI;
}

const getTooltip = (device: Device): string[] => {
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
    return strings;
};

const Tooltip: FunctionalComponent<TooltipProps> = (props: TooltipProps) => {
    const { info } = props;
    const { device } = info;
    return (
        <div className={style.tooltip}>
           {getTooltip(device).map((s) => <div>{s}</div>)}
        </div>

    );
};
export default Tooltip;