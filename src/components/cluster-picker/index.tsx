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

export enum PickerType {
    MULTIPLE,
    SINGLE
}
export interface ClusterGroup {
    name: string;
    clusters: Cluster[];
}
interface ClusterPickerProps {
    value: Cluster[] | Cluster;
    onChange(arg1: Cluster[] | Cluster | undefined): void;
    clusters: Cluster[] | ClusterGroup[];
    pickerType: PickerType;
}
interface ClusterPickerState {
    pickerId: string;
}



function isClusterGroup(clusters: Cluster[] | ClusterGroup[]): clusters is ClusterGroup[] {

    return typeof clusters[0] !== 'string';
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ClusterPicker extends Component<ClusterPickerProps & Omit<InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>, 'onChange'>, ClusterPickerState> {
    public static defaultProps = {
        clusters: []
    };
    state: Readonly<ClusterPickerState> = {
        pickerId: randomString(5)
    }

    onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { onChange, pickerType } = this.props;
        let { value } = this.props;
        const { name } = e.target;
        if (pickerType === PickerType.MULTIPLE) {
            const { checked: isChecked } = e.target as HTMLInputElement;
            if (isChecked) {
                (value as Cluster[]).push(name);
            } else {
                value = (value as Cluster[]).filter(v => v !== name);
            }
        } else {
            const { value: selectedValue } = e.target as HTMLInputElement;
            value = selectedValue;
        }
        onChange(value);
    }
    render() {
        const { pickerType } = this.props;
        if (pickerType === PickerType.MULTIPLE) {
            return this.renderMultiPicker();
        } else {
            return this.renderSinglePicker();
        }
    }
    renderMultiPicker() {
        const { pickerId } = this.state;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { clusters, value, pickerType, onChange, ...rest } = this.props;
        let options = [] as JSX.Element[];
        if (isClusterGroup(clusters)) {
            //TODO: implement if necessary
            console.warn("Not implemented");
        } else {
            options = clusters.map(cluster => (
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
        }

        return options;
    }

    renderSinglePicker() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { clusters, onChange, pickerType, ...rest } = this.props;
        const options = [<option key="hidden" hidden>Select cluster</option>];
        if (isClusterGroup(clusters)) {
            clusters.forEach(group => {
                const groupOptions = group.clusters.map(cluster => <option key={cluster} value={cluster}>{clusterDescriptions[cluster] ?? cluster}</option>)
                if (groupOptions.length === 0) {
                    groupOptions.push(<option key="none" disabled>None</option>)
                }
                options.push(<optgroup key={group.name} label={group.name}>{groupOptions}</optgroup>);
            });


        } else {
            clusters.forEach(cluster => {
                options.push(<option key={cluster} value={cluster}>{clusterDescriptions[cluster] ?? cluster}</option>);
            })
        }
        return (<select className="form-select" onChange={this.onChange} {...rest}>
            {options}
        </select>)
    }
}