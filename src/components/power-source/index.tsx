import React, { Fragment, FunctionComponent } from "react";
import { PowerSource as PowerSourceType } from "../../types";
import style from "./style.css";
import { useTranslation } from "react-i18next";


interface PowerSourceProps {
    source: PowerSourceType;
    battery?: number;
    batteryLow?: boolean;
    showLevel?: boolean;
}


const PowerSource: FunctionComponent<PowerSourceProps> = ({ source = "", battery, batteryLow, showLevel, ...rest }) => {
    const { t } = useTranslation("zigbee");
    let batteryClass = "";
    let title = "";
    let translationKey = source?.toLowerCase().replace(/\s/g, '_').replace(/[^a-z0-9_]/g, '');

    switch (source) {
        case "Battery":
            title = t(translationKey);
            if (batteryLow !== undefined) {
                batteryClass = batteryLow ? `fa-battery-empty animation-blinking text-danger` : 'fa-battery-full text-success';
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
                    batteryClass += ` fa-battery-empty animation-blinking`
                } else {
                    return <span className={`animation-blinking text-danger`} role="alert">{battery}%</span>
                }
            }
            title += `${battery ? (`, ` + t(`power_level`) + ` ${battery}%`) : ""}`;
            if (!batteryClass) {
                batteryClass = "fa-question";
            }
            return <Fragment>{showLevel ? <span className="pe-2">{t('battery')} {battery !== undefined ? `${battery}%` : null}</span> : null}<i className={`fa ${batteryClass}`} title={title} {...rest} /></Fragment>;

        case "Mains (single phase)":
        case "DC Source":
            title = t(translationKey);
            return <i className={`fa fa-plug ${style.plug}`} title={title} {...rest} />;
        default:
            return <i className={`fa fa-question`} title={source} {...rest} />;
    }
};

export default PowerSource;
