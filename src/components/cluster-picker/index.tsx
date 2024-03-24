import { Cluster } from '../../types';

export const clusterDescriptions = {
    genPowerCfg: 'PowerCfg',
    genScenes: 'Scenes',
    genOnOff: 'OnOff',
    genLevelCtrl: 'LevelCtrl',
    lightingColorCtrl: 'LColorCtrl',
    closuresWindowCovering: 'Closures',
    genMultistateInput: 'MultistateInput',
    genGroups: 'Groups',
    genOta: 'Ota',
    touchlink: 'Touchlink',
    genIdentify: 'Identify',
    msTemperatureMeasurement: 'Temperature',
    msIlluminanceMeasurement: 'Illuminance',
    msRelativeHumidity: 'Humidity',
    msPressureMeasurement: 'Pressure',
    msSoilMoisture: 'Soil Moisture',
};

export enum PickerType {
    MULTIPLE,
    SINGLE,
}
export interface ClusterGroup {
    name: string;
    clusters: Cluster[];
}
export interface ClusterPickerProps {
    disabled?: boolean;
    value: Cluster[] | Cluster;
    label?: string;
    onChange(arg1: Cluster[] | Cluster | undefined): void;
    clusters: Cluster[] | ClusterGroup[];
    pickerType: PickerType;
}

export function isClusterGroup(clusters: Cluster[] | ClusterGroup[]): clusters is ClusterGroup[] {
    return clusters.length > 0 && typeof clusters[0] !== 'string';
}

interface PickerProps {
    onChange(arg1: Cluster[] | Cluster | undefined): void;
    label?: string;
    disabled?: boolean;
}
export interface MultiPickerProps extends PickerProps {
    clusters: Cluster[];
    value: Cluster[];
}
export interface SinglePickerProps extends PickerProps {
    clusters: Cluster[] | ClusterGroup[];
    value: Cluster;
}
