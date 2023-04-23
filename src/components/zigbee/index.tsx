import React from 'react';

import { Device, DeviceState } from '../../types';
import { connect } from 'unistore/react';
import { GlobalState, OnlineOrOffline } from '../../store';
import actions from '../../actions/actions';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DevicesTable } from './DevicesTable';
import { DeviceApi } from '../../actions/DeviceApi';
import { isDeviceDisabled } from '../../utils';
export interface DevicesPageData {
    id: string;
    device: Device;
    state: DeviceState;
    disabled: boolean;
    availabilityState: OnlineOrOffline;
    availabilityEnabledForDevice: boolean;
}

type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo' | 'availability'>;
type DevicesPageProps = Pick<DeviceApi, 'configureDevice' | 'renameDevice' | 'removeDevice' | 'setDeviceDescription'> &
    PropsFromStore &
    WithTranslation<'zigbee'>;

export function DevicesPage(props: DevicesPageProps): JSX.Element {
    const {
        devices,
        deviceStates,
        bridgeInfo: { config },
        availability,
    } = props;
    const { renameDevice, removeDevice, configureDevice, setDeviceDescription } = props;
    const availabilityFeatureEnabled = !!config.availability;
    const homeassistantEnabled = !!config?.homeassistant;
    const getDevicesToRender = (): DevicesPageData[] => {
        return Object.values<Device>(devices)
            .filter((device) => device.type !== 'Coordinator')
            .map((device) => {
                const state = deviceStates[device.friendly_name] ?? ({} as DeviceState);
                return {
                    id: device.friendly_name,
                    disabled: isDeviceDisabled(device, config),
                    device,
                    state,
                    availabilityState: availability[device.friendly_name] ?? 'offline',
                    availabilityEnabledForDevice: config.devices[device.ieee_address]?.availability !== false,
                } as DevicesPageData;
            });
    };
    const data = React.useMemo(() => getDevicesToRender(), [devices, deviceStates]);

    return (
        <DevicesTable
            data={data}
            lastSeenType={config.advanced.last_seen}
            availabilityFeatureEnabled={availabilityFeatureEnabled}
            homeassistantEnabled={homeassistantEnabled}
            {...{ renameDevice, removeDevice, configureDevice, setDeviceDescription }}
        />
    );
}

const mappedProps = ['devices', 'deviceStates', 'bridgeInfo', 'availability'];
const ConnectedZigbeePage = withTranslation(['zigbee', 'common'])(
    connect<unknown, unknown, PropsFromStore, unknown>(mappedProps, actions)(DevicesPage),
);
export default ConnectedZigbeePage;
