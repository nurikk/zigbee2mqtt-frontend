import { NodeI } from "./types";
import style from "./tooltip.css";
import { FunctionalComponent, h } from "preact";
// import { isOnline } from "./nodes";
// import { Device } from "../../types";
// import { lastSeen } from "../../utils";
// import { TimeInfo } from "../discovery/types";

interface TooltipProps {
    info: NodeI;
}

const getTooltip = (device: NodeI): string[] => {
    const strings: string[] = [];
    if (device.definition) {
        strings.push(`${device.definition.vendor} ${device.definition.model}`);
    }
    if (device.ieeeAddr) {
        strings.push(device.ieeeAddr);
    }
    // if (device?.st?.linkquality) {
    //     strings.push(`LinkQuality: ${device.st.linkquality}`);
    // }
    // if (strings.length == 0) {
    //     strings.push("A very strange device...");
    // }
    if (device.type !== "Coordinator") {
        // if (device.lastSeen && timeInfo) {
        //     strings.push(`Last seen: ${lastSeen(device)}`);
        // }
        // if (!isOnline(device, timeInfo)) {
        //     strings.push("Offline");
        // }
    }
    return strings;
};

const Tooltip: FunctionalComponent<TooltipProps> = (props: TooltipProps) => {
    const { info } = props;

    return (
        <div className={style.tooltip}>
            {getTooltip(info).map((s) => <div>{s}</div>)}
        </div>

    );
};
export default Tooltip;