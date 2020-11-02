import React, { FunctionComponent } from "react";
import { PowerSource as PowerSourceType } from "../../types";
import style from "./style.css";
import Battery20Icon from '@material-ui/icons/Battery20';
import Battery30Icon from '@material-ui/icons/Battery30';
import Battery50Icon from '@material-ui/icons/Battery50';
import Battery60Icon from '@material-ui/icons/Battery60';
import Battery80Icon from '@material-ui/icons/Battery80';
import Battery90Icon from '@material-ui/icons/Battery90';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import PowerIcon from '@material-ui/icons/Power';

type PowerSourceProps = {
    source: PowerSourceType;
    battery?: number;
}

const PowerSource: FunctionComponent<PowerSourceProps> = ({ source, battery }) => {
    let BatteryIcon;

    switch (source) {
        case "Battery":
            if (battery >= 95) {
                BatteryIcon = BatteryFullIcon;
            } else if (battery >= 90) {
                BatteryIcon = Battery90Icon;
            } else if (battery >= 80) {
                BatteryIcon = Battery80Icon;
            } else if (battery >= 60) {
                BatteryIcon = Battery60Icon;
            } else if (battery >= 50) {
                BatteryIcon = Battery50Icon;
            } else if (battery >= 30) {
                BatteryIcon = Battery30Icon;
            } else if (battery >= 20) {
                BatteryIcon = Battery20Icon;
            } else if (battery >= 10) {
                BatteryIcon = BatteryAlertIcon;
            } else if (battery === undefined || battery === null) {
                BatteryIcon = BatteryUnknownIcon;
            } else {
                return <span className={`${style.blinking} ${style.danger}`} role="alert">{battery}%</span>
            }
            return <BatteryIcon className={`${battery < 20 ? style.blinking : null}`} titleAccess={`${source} ${battery ? `, power level ${battery}%` : ""} `} />;

        case "Mains (single phase)":
        case "DC Source":
            return <PowerIcon titleAccess={source} />;
        default:
            return <BatteryUnknownIcon titleAccess={source} />;
    }
};

export default PowerSource;
