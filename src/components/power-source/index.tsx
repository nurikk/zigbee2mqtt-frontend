import React, { Fragment, FunctionComponent } from "react";
import { PowerSource as PowerSourceType } from "../../types";
import style from "./style.css";


interface PowerSourceProps {
    source: PowerSourceType;
    battery?: number;
    batteryLow?: boolean;
    showLevel?: boolean;
}


const PowerSource: FunctionComponent<PowerSourceProps> = ({ source, battery, batteryLow, showLevel, ...rest }) => {
    let batteryClass = "";
    let title = "";

    switch (source) {
        case "Battery":
            title = 'Battery';
            if (batteryLow !== undefined) {
                batteryClass = batteryLow ? `fa-battery-empty ${style.blinking} text-danger` : 'fa-battery-full text-success';
                title += batteryLow ? ' LOW' : ' OK';
            }
            if (battery !== undefined) {
                if (battery >= 85) {
                    batteryClass += " fa-battery-full";
                } else if (battery >= 75) {
                    batteryClass += " fa-battery-three-quarters";
                } else if (battery >= 50) {
                    batteryClass += " fa-battery-half";
                } else if (battery >= 25) {
                    batteryClass += " fa-battery-quarter";
                } else if (battery >= 10) {
                    batteryClass += ` fa-battery-empty ${style.blinking}`
                } else {
                    return <span className={`${style.blinking} text-danger`} role="alert">{battery}%</span>
                }
            }
            title += `${battery ? `, power level ${battery}%` : ""}`;
            if (!batteryClass) {
                batteryClass = "fa-question";
            }
            return <Fragment>{showLevel ? <span className="pr-2">Battery {battery !== undefined ? `${battery}%` : null}</span> : null}<i className={`fa ${batteryClass}`} title={title} {...rest} /></Fragment>;

        case "Mains (single phase)":
        case "DC Source":
            return <i className={`fa fa-plug ${style.plug}`} title={source} {...rest} />;
        default:
            return <i className={`fa fa-question`} title={source} {...rest} />;
    }
};

export default PowerSource;
