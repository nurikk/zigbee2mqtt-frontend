import { FunctionalComponent, h } from "preact";
import { PowerSource } from "../../types";
import style from "./style.css";


interface PowerSourceProps {
    source: PowerSource;
    battery?: number;
    className?: string;
}


const PowerSourceComp: FunctionalComponent<PowerSourceProps> = ({ source, battery, className }) => {
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
            return <i className={`fa ${batteryClass} ${className}`}
                title={`${source} ${battery ? `, power level ${battery}%` : ""} `} />;

        case "Mains (single phase)":
            return <i className={`fa fa-plug ${style.plug} ${className}`} title={source} />;
        default:
            return <i className={`fa fa-question ${className}`} title={source} />;
    }
};

export default PowerSourceComp;
