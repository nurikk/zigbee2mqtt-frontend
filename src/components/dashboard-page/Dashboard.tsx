import React, { useState } from 'react';
import DashboardDevice from './DashboardDevice';
import { CompositeFeature, Device, DeviceState, FriendlyName, GenericExposedFeature } from '../../types';
import { StateApi } from '../../actions/StateApi';
import { DashboardFeatureWrapper } from './DashboardFeatureWrapper';
import { isDeviceDisabled } from '../../utils';
import pickBy from 'lodash/pickBy';
import get from 'lodash/get';

import { getStorageKey, persist, restore } from '../grid/persist';
import { GlobalFilter } from '../grid/GlobalFilter';
import { DEVICES_GLOBAL_NAME } from '../zigbee/DEVICES_GLOBAL_NAME';
import { filterKeys, onlyValidFeaturesForDashboard, PropsFromStore } from '.';
import { Devices, GlobalState } from '../../store';
import actions from '../../actions/actions';
import { connect } from 'unistore/react';

type FeatureFilteringFn = (
    feature: GenericExposedFeature | CompositeFeature,
    deviceState: DeviceState,
) => GenericExposedFeature | CompositeFeature | false;
type DeviceStateAndFilteredFeatures = {
    device: Device;
    deviceState: DeviceState;
    filteredFeatures: GenericExposedFeature[];
};
function filterDeviceByFeatures(
    devices: Devices,
    deviceStates: Record<FriendlyName, DeviceState>,
    filterFn: FeatureFilteringFn,
): DeviceStateAndFilteredFeatures[] {
    return Object.values(devices)
        .filter((device) => device.supported)
        .map((device) => ({ device, deviceState: deviceStates[device.friendly_name] ?? ({} as DeviceState) }))
        .map(({ device, deviceState }) => {
            const _features = (device.definition?.exposes ?? []) as (GenericExposedFeature | CompositeFeature)[];
            const filteredFeatures = _features
                .map((e: GenericExposedFeature | CompositeFeature) => filterFn(e, deviceState))
                .filter((f) => f);
            return { device, deviceState, filteredFeatures } as DeviceStateAndFilteredFeatures;
        })
        .filter(({ filteredFeatures }) => filteredFeatures.length > 0)
        .sort((a, b) => a.device.friendly_name.localeCompare(b.device.friendly_name));
}

function Dashboard(props: PropsFromStore & StateApi) {
    const { setDeviceState, getDeviceState, deviceStates, bridgeInfo, devices } = props;

    const [filter, setFilter] = useState(() => {
        return restore(getStorageKey(DEVICES_GLOBAL_NAME)) ?? {};
    });

    const onFilterChange = (filterValue: string) => {
        const newFilterValue = { ...filter, globalFilter: filterValue };
        setFilter(newFilterValue);
        persist(DEVICES_GLOBAL_NAME, newFilterValue);
    };

    const filteredDevices = pickBy(devices, (device, ieeeAddress) => {
        if (isDeviceDisabled(device, bridgeInfo.config)) {
            return false;
        }
        if (filter.globalFilter) {
            return filterKeys
                .map((k) => get(device, k))
                .filter(Boolean)
                .map(String)
                .map((v) => v.toLowerCase())
                .some((v) => v.includes(filter.globalFilter.toLowerCase()));
        }
        return true;
    });
    return (
        <div className="row">
            <div className="col-12">
                <div className="flex-fill card flex-shrink-1">
                    <div className="card-footer">
                        <GlobalFilter globalFilter={filter.globalFilter} setGlobalFilter={onFilterChange} />
                    </div>
                </div>
            </div>
            {filterDeviceByFeatures(filteredDevices, deviceStates, onlyValidFeaturesForDashboard).map(
                ({ device, deviceState, filteredFeatures }) => {
                    return (
                        <DashboardDevice
                            key={device.ieee_address}
                            feature={{ features: filteredFeatures } as CompositeFeature}
                            device={device}
                            deviceState={deviceState}
                            onChange={(endpoint, value) => setDeviceState(device.friendly_name, value)}
                            onRead={(endpoint, value) => getDeviceState(device.friendly_name, value)}
                            featureWrapperClass={DashboardFeatureWrapper}
                            lastSeenType={bridgeInfo.config.advanced.last_seen}
                        />
                    );
                },
            )}
        </div>
    );
}

export const ConnectedDashboardPage = connect<unknown, unknown, GlobalState, unknown>(
    ['devices', 'deviceStates', 'bridgeInfo'],
    actions,
)(Dashboard);
