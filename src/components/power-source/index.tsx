import { FunctionalComponent, h } from "preact";
import { PowerSource } from "../../types";

interface PowerSourceProps {
    source: PowerSource;
    battery?: number;
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

const PowerSourceComp: FunctionalComponent<PowerSourceProps> = ({ source, battery }) => {
    let batteryClass = "fa-battery-full";
    switch (source) {
        case PowerSource.Battery:
            if (typeof battery !== "undefined") {
                if (battery > 75) {
                    batteryClass = "fa-battery-full";
                } else if (battery >= 75) {
                    batteryClass = "fa-battery-three-quarters";
                } else if (battery >= 50) {
                    batteryClass = "fa-battery-half";
                } else if (battery >= 25) {
                    batteryClass = "fa-battery-empty";
                }
            }
            return <i className={`fa ${batteryClass}`}
                      title={`${description[source]} ${battery ? `, power level ${battery}` : null} `} />;

        case PowerSource.EmergencyMains:
        case PowerSource.MainsThreePhase:
        case PowerSource.EmergencyMainsConstantPower:
        case PowerSource.MainsSinglePhase:
            return <i className="fa fa-plug" title={description[source]} />;
        case PowerSource.DC:
            return <i class="fa fa-charging-station" title={description[source]} />;

        case PowerSource.Unknown:
        default:
            return <i className="fa fa-question" title={description[0]} />;
    }
};

export default PowerSourceComp;
