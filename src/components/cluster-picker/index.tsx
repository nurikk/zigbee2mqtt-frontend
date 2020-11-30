import React, { ChangeEvent, Component, InputHTMLAttributes } from "react";
import { Cluster } from "../../types";
import { randomString } from "../../utils";



const clusterDescriptions = {
    genPowerCfg: "PowerCfg",
    genScenes: "Scenes",
    genOnOff: "OnOff",
    genLevelCtrl: "LevelCtrl",
    lightingColorCtrl: "LColorCtrl",
    closuresWindowCovering: "Closures",
    genMultistateInput: "MultistateInput",
    genGroups: "Groups",
    genOta: "Ota",
    touchlink: "Touchlink",
    genIdentify: "Identify",
    msTemperatureMeasurement: "Temperature",
    msIlluminanceMeasurement: "Illuminance",
    msRelativeHumidity: "Humidity",
    msPressureMeasurement: "Pressure",
    msSoilMoisture: "Soil Moisture",
}
interface ClusterPickerProps {
    value: Cluster[];
    onChange(arg1: Cluster[] | undefined): void;
    clusters: Cluster[];

}
interface ClusterPickerState {
    pickerId: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ClusterPicker extends Component<ClusterPickerProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>, ClusterPickerState> {
    public static defaultProps = {
        clusters: []
    };
    state: Readonly<ClusterPickerState> = {
        pickerId: randomString(5)
    }

    onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { onChange } = this.props;
        let { value } = this.props;
        const { checked: isChecked, name } = e.target;
        if (isChecked) {
            value.push(name);
        } else {
            value = value.filter(v => v !== name);
        }

        onChange(value);
    }
    render() {
        const { pickerId } = this.state;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { clusters, value, onChange, ...rest } = this.props;

        const options = clusters.map(cluster => (
            <div key={cluster} className="form-check form-check-inline">
                <input className="form-check-input"
                    type="checkbox"
                    checked={value.includes(cluster)}
                    name={cluster}
                    id={`${pickerId}_${cluster}`}
                    value={cluster}
                    onChange={this.onChange}
                    {...rest}
                />
                <label className="form-check-label" htmlFor={`${pickerId}_${cluster}`} title={cluster}>{clusterDescriptions[cluster] ?? cluster}</label>
            </div>
        ));
        return options;
    }
}