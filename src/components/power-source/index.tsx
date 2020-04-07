import { Fragment, FunctionalComponent, h } from "preact";
import { PowerSource } from "../../types";
import style from "./style.css";
import { bitOps } from "../../utils";

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
    //Bit b7 of this attribute SHALL be set to 1 if the device has a secondary power source in the form of a battery
    // backup. Otherwise, bit b7 SHALL be set to 0.
    const hasSecondaryPowerSource = bitOps.getBit(source, 7) == 1;
    if (hasSecondaryPowerSource) {
        source = bitOps.clearBit(source, 7);
    }

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
                {hasSecondaryPowerSource ? <PowerSourceComp className={'d-block'} source={PowerSource.Battery} battery={battery} /> : null }
            </Fragment>);
        case PowerSource.DC:
            return (<Fragment>
                <i class={`fa fa-charging-station ${className}`} title={description[source]} />
                {hasSecondaryPowerSource ? <PowerSourceComp className={'d-block'} source={PowerSource.Battery} battery={battery} /> : null }
            </Fragment>);

        case PowerSource.Unknown:
        default:
            return <i className={`fa fa-question ${className}`} title={description[0]} />;
    }
};

export default PowerSourceComp;
