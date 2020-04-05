import { FunctionalComponent, h } from "preact";
import { PowerSources } from "../../types";

interface PowerSourceProps {
    source: PowerSources;
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

const PowerSource: FunctionalComponent<PowerSourceProps> = ({ source }) => {
    switch (source) {
        case PowerSources.Battery:
            return <i className="fa fa-battery-full" title={description[source]} />;

        case PowerSources.EmergencyMains:
        case PowerSources.MainsThreePhase:
        case PowerSources.EmergencyMainsConstantPower:
        case PowerSources.MainsSinglePhase:
            return <i className="fa fa-plug" title={description[source]} />;
        case PowerSources.DC:
            return <i class="fa fa-charging-station" title={description[source]} />;

        case PowerSources.Unknown:
        default:
            return <i className="fa fa-question" title={description[source]} />;
    }
};

export default PowerSource;
