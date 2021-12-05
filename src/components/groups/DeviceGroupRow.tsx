import React from "react";
import Button from "../button";
import { WithBridgeInfo, WithDevices, WithDeviceStates, Devices } from "../../store";
import { useTranslation } from "react-i18next";
import { CompositeFeature, Device, DeviceState, FriendlyName, GenericExposedFeature, GroupAddress } from "../../types";
import DashboardDevice from "../dashboard-page/DashboardDevice";
import { DashboardFeatureWrapper } from "../dashboard-page/DashboardFeatureWrapper";
import { StateApi } from "../../actions/StateApi";
import { onlyValidFeaturesForScenes } from "../device-page/scene";


type DeviceGroupRowProps = {
    groupAddress: GroupAddress;
    removeDeviceFromGroup(deviceFriendlyName: string): void;
} & WithDevices & WithDeviceStates & WithBridgeInfo & StateApi;

type FeatureFilteringFn = (feature: GenericExposedFeature | CompositeFeature, deviceState: DeviceState) => GenericExposedFeature | CompositeFeature | false;
type DeviceStateAndFilteredFeatures = {
    device: Device;
    deviceState: DeviceState;
    filteredFeatures: GenericExposedFeature[];
}
export function filterDeviceByFeatures(
    devices: Devices,
    deviceStates: Record<FriendlyName, DeviceState>,
    filterFn: FeatureFilteringFn): DeviceStateAndFilteredFeatures[] {

    return Object.values(devices)
        .filter(device => device.supported)
        .map(device => ({ device, deviceState: deviceStates[device.friendly_name] ?? ({} as DeviceState) }))
        .map(({ device, deviceState }) => {
            const _features = ((device.definition?.exposes ?? []) as (GenericExposedFeature | CompositeFeature)[]);
            const filteredFeatures = _features
                .map((e: GenericExposedFeature | CompositeFeature) => filterFn(e, deviceState))
                .filter(f => f);
            return { device, deviceState, filteredFeatures } as DeviceStateAndFilteredFeatures;
        })
        .filter(({ filteredFeatures }) => filteredFeatures.length > 0)
        .sort((a, b) => a.device.friendly_name.localeCompare(b.device.friendly_name))
}
export function DeviceGroupRow(props: DeviceGroupRowProps): JSX.Element {
    const { t } = useTranslation('devicePage');

    const { removeDeviceFromGroup, groupAddress, devices, deviceStates, bridgeInfo } = props;
    const device = devices[groupAddress.ieee_address] ?? { ieee_address: groupAddress.ieee_address, friendly_name: t('unknown_device') };
    const deviceState = deviceStates[device.friendly_name] ?? {} as DeviceState;

    const { setDeviceState, getDeviceState } = props;

    let filteredFeatures: (false | GenericExposedFeature | CompositeFeature)[] = [];
    if (device.definition) {
        filteredFeatures = ((device.definition.exposes ?? []) as GenericExposedFeature[])
            .map((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForScenes(e, deviceState))
            .filter(f => f);
    }

    return <DashboardDevice
        key={device.ieee_address}
        feature={{ features: filteredFeatures } as CompositeFeature}
        device={device}
        deviceState={deviceState}
        onChange={(endpoint, value) =>
            setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
        }
        onRead={(endpoint, value) =>
            getDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
        }
        featureWrapperClass={DashboardFeatureWrapper}
        lastSeenType={bridgeInfo.config.advanced.last_seen}
        controls={<Button<string> prompt item={device.friendly_name} onClick={removeDeviceFromGroup} className="btn btn-danger btn-sm float-right"><i className="fa fa-trash" /></Button>}
    />

}
