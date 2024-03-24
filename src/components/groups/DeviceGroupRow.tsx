import React from 'react';
import Button from '../button';
import { WithBridgeInfo, WithDevices, WithDeviceStates } from '../../store';
import { useTranslation } from 'react-i18next';
import { CompositeFeature, DeviceState, GenericExposedFeature, GroupAddress } from '../../types';
import DashboardDevice from '../dashboard-page/DashboardDevice';
import { DashboardFeatureWrapper } from '../dashboard-page/DashboardFeatureWrapper';
import { StateApi } from '../../actions/StateApi';
import { onlyValidFeaturesForScenes } from '../device-page/onlyValidFeaturesForScenes';

type DeviceGroupRowProps = {
    groupAddress: GroupAddress;
    removeDeviceFromGroup(deviceFriendlyName: string): void;
} & WithDevices &
    WithDeviceStates &
    WithBridgeInfo &
    StateApi;

export function DeviceGroupRow(props: DeviceGroupRowProps): JSX.Element {
    const { t } = useTranslation('devicePage');

    const { removeDeviceFromGroup, groupAddress, devices, deviceStates, bridgeInfo } = props;
    const { endpoint, ieee_address: IEEEEAddress } = groupAddress;
    const device = devices[IEEEEAddress] ?? { ieee_address: IEEEEAddress, friendly_name: t('unknown_device') };
    const deviceState = deviceStates[device.friendly_name] ?? ({} as DeviceState);

    const { setDeviceState, getDeviceState } = props;

    let filteredFeatures: (false | GenericExposedFeature | CompositeFeature)[] = [];
    if (device.definition) {
        filteredFeatures = ((device.definition.exposes ?? []) as GenericExposedFeature[])
            .map((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForScenes(e, deviceState))
            .filter((f) => f);
    }

    return (
        <DashboardDevice
            feature={{ features: filteredFeatures } as CompositeFeature}
            device={device}
            endpoint={endpoint}
            deviceState={deviceState}
            onChange={(endpoint, value) => setDeviceState(device.friendly_name, value)}
            onRead={(endpoint, value) => getDeviceState(device.friendly_name, value)}
            featureWrapperClass={DashboardFeatureWrapper}
            lastSeenType={bridgeInfo.config.advanced.last_seen}
            controls={
                <Button<string>
                    prompt
                    item={device.friendly_name}
                    onClick={removeDeviceFromGroup}
                    className="btn btn-danger btn-sm float-right"
                >
                    <i className="fa fa-trash" />
                </Button>
            }
        />
    );
}
