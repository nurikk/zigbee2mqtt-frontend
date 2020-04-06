import { Fragment, FunctionalComponent, h } from "preact";
import { PowerSource } from "../../types";
import style from "./style.css";

interface PowerSourceProps {
    source: PowerSource;
    battery?: number;
    className?: string;
}
const description = [
    "Unknown",
    "Mains (single phase)",
    "Mains (3 phase)",
    "Battery",
    "DC source",
    "Emergency mains constantly powered",
    "Emergency mains and transfer switch"
];

const PowerSourceComp: FunctionalComponent<PowerSourceProps> = ({ source, battery,className }) => {
    let batteryClass = "fa-battery-full";
    switch (source) {
        case PowerSource.Battery:
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
                    batteryClass ="fa-battery-empty"
                }
            }
            return <i className={`fa ${batteryClass} ${className}`}
                      title={`${description[source]} ${battery ? `, power level ${battery}%` : ""} `} />;

        case PowerSource.EmergencyMains:
        case PowerSource.MainsThreePhase:
        case PowerSource.EmergencyMainsConstantPower:
        case PowerSource.MainsSinglePhase:
            return (<Fragment>
                <i className={`fa fa-plug ${style.plug} ${className}`} title={description[source]} />
                {battery ? <PowerSourceComp className={'d-block'} source={PowerSource.Battery} battery={battery} /> : null }
            </Fragment>);
        case PowerSource.DC:
            return <i class={`fa fa-charging-station ${className}`} title={description[source]} />;

        case PowerSource.Unknown:
        default:
            return <i className={`fa fa-question ${className}`} title={description[0]} />;
    }
};

export default PowerSourceComp;
