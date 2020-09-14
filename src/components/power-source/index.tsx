import  React, { FunctionComponent} from "react";
import { PowerSource as PowerSourceType } from "../../types";
import style from "./style.css";


interface PowerSourceProps {
    source: PowerSourceType;
    battery?: number;
}


const PowerSource: FunctionComponent<PowerSourceProps> = ({ source, battery, ...rest }) => {
    let batteryClass = "fa-battery-full";

    switch (source) {
        case "Battery":
            if (battery) {
                if (battery > 75) {
                    batteryClass = "fa-battery-full";
                } else if (battery >= 75) {
                    batteryClass = "fa-battery-three-quarters";
                } else if (battery >= 50) {
                    batteryClass = "fa-battery-half";
                } else if (battery >= 25) {
                    batteryClass = "fa-battery-quarter";
                } else {
                    batteryClass = "fa-battery-empty"
                }
            }
            return <i className={`fa ${batteryClass}`}
                title={`${source} ${battery ? `, power level ${battery}%` : ""} `} {...rest} />;

        case "Mains (single phase)":
            return <i className={`fa fa-plug ${style.plug}`} title={source} {...rest} />;
        default:
            return <i className={`fa fa-question`} title={source} {...rest} />;
    }
};

export default PowerSource;
