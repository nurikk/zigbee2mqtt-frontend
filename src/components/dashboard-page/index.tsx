import React, { useState } from 'react';

import { connect } from 'unistore/react';

import DashboardDevice from './DashboardDevice';
import { DeviceState, CompositeFeature, GenericExposedFeature, FeatureAccessMode, Device, Paths } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from '../../actions/StateApi';
import { GlobalState } from '../../store';
import { DashboardFeatureWrapper } from './DashboardFeatureWrapper';
import { isDeviceDisabled, isOnlyOneBitIsSet } from '../../utils';

import { isClimateFeature, isLightFeature } from '../device-page/type-guards';
import groupBy from 'lodash/groupBy';
import pickBy from 'lodash/pickBy';
import get from 'lodash/get';

import { filterDeviceByFeatures } from '../groups/DeviceGroupRow';
import { getStorageKey, GlobalFilter, persist, restore } from '../grid/ReactTableCom';
import { local } from '@toolz/local-storage';
import { DEVICES_GLOBAL_NAME } from '../zigbee/DevicesTable';

type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo'>;

const genericRendererIgnoredNames = [
    'linkquality',
    'battery',
    'battery_low',
    'battery_state',
//    'illuminance_lux',
    'color_temp_startup',
    'voltage',
    'strength',
    'color_options',
    'warning',
    'position',
    'operation_mode',
    'operation_mode2',
    'programming_mode',
    'options',
    'programming',
    'schedule_monday',
    'schedule_tuesday',
    'schedule_wednesday',
    'schedule_thursday',
    'schedule_friday',
    'schedule_saturday',
    'schedule_sunday',
    'holiday_mode_date',
];

const whitelistFeatureNames = ['state', 'brightness', 'color_temp', 'mode', 'sound', 'occupancy', 'tamper', 'alarm'];
const whitelistFeatureTypes = ['light'];
const nullish = ['', null, undefined];

export const onlyValidFeaturesForDashboard = (
    feature: GenericExposedFeature | CompositeFeature,
    deviceState: DeviceState = {} as DeviceState,
): GenericExposedFeature | CompositeFeature | false => {
    const { access, property, name, type } = feature;
    let { features } = feature as CompositeFeature;
    if (isLightFeature(feature) || isClimateFeature(feature)) {
        features = features
            .map((f) =>
                onlyValidFeaturesForDashboard(f, (property ? deviceState[property] : deviceState) as DeviceState),
            )
            .filter((f) => f) as (GenericExposedFeature | CompositeFeature)[];
        const groupedFeatures = groupBy(features, 'property');
        features = Object.values(groupedFeatures).map((f) => f[0]);
    }
    const filteredOutFeature = { ...feature, features } as GenericExposedFeature | CompositeFeature;
    if (whitelistFeatureNames.includes(name)) {
        return filteredOutFeature;
    }
    if (whitelistFeatureTypes.includes(type)) {
        return filteredOutFeature;
    }
    if (
        access &&
        !(
            access & FeatureAccessMode.ACCESS_STATE &&
            !nullish.includes(deviceState[property] as string | null | undefined)
        )
    ) {
        return false;
    }
    if (name == 'voltage' && deviceState.battery == undefined) {
        return filteredOutFeature;
    }
    if (genericRendererIgnoredNames.includes(name)) {
        return false;
    }

    if (access & FeatureAccessMode.ACCESS_STATE && isOnlyOneBitIsSet(access)) {
        return filteredOutFeature;
    }
    if (Array.isArray(features) && features.length > 0) {
        return filteredOutFeature;
    }
    return false;
};

const filterKeys: Paths<Device>[] = [
    'friendly_name',
    'description',
    'ieee_address',
    'manufacturer',
    'type',
    'power_source',
    'model_id',
    'definition.model',
    'definition.vendor',
];

const Dashboard: React.FC<PropsFromStore & StateApi> = (props) => {
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
};

const mappedProps = ['devices', 'deviceStates', 'bridgeInfo'];
export default connect<unknown, unknown, GlobalState, unknown>(mappedProps, actions)(Dashboard);
