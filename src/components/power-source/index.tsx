import { FunctionalComponent, h } from "preact";
import { PowerSource } from "../../types";

interface PowerSourceProps {
    source: PowerSource;
}
const description = [
    "Unknown",
    "Mains (single phase)",
    "Mains (3 phase)",
    "Battery",
    "DC source",
    "Emergency mains constantly powered",
    "Emergency mains and transfer switch",
];

const PowerSourceComp: FunctionalComponent<PowerSourceProps> = ({ source }) => {
    switch (source) {
        case PowerSource.Battery:
            return <i className="fa fa-battery-full" title={description[source]} />;

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
