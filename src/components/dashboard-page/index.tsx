import React from 'react';


import { connect } from 'unistore/react';


import DashboardDevice from './DashboardDevice';
import { DeviceState, CompositeFeature, GenericExposedFeature, FeatureAccessMode } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from "../../actions/StateApi";
import { GlobalState } from '../../store';
import { DashboardFeatureWrapper } from './DashboardFeatureWrapper';
import { isOnlyOneBitIsSet } from '../../utils';

import { isClimateFeature, isLightFeature } from '../device-page/type-guards';
import groupBy from "lodash/groupBy";
import { filterDeviceByFeatures } from '../groups/DeviceGroupRow';


type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo'>;

const genericRendererIgnoredNames = [
    'linkquality', 'battery', 'battery_low',
    'illuminance_lux', 'color_temp_startup', 'voltage',
    'strength', 'color_options', 'warning', 'position', 
    'operation_mode', 'operation_mode2', 'programming_mode', 
    'options'];

const whitelistFeatureNames = ['state', 'brightness', 'color_temp', 'mode', 'sound', 'occupancy', 'tamper', 'alarm'];
const whitelistFeatureTypes = ['light'];
const nullish = ['', null, undefined];

export const onlyValidFeaturesForDashboard = (feature: GenericExposedFeature | CompositeFeature, deviceState: DeviceState = {} as DeviceState): GenericExposedFeature | CompositeFeature | false => {
    const { access, property, name, type } = feature;
    let { features } = feature as CompositeFeature;
    if (isLightFeature(feature) || isClimateFeature(feature)) {
        features = features.map(f => onlyValidFeaturesForDashboard(f, (property ? deviceState[property] : deviceState) as DeviceState)).filter(f => f) as (GenericExposedFeature | CompositeFeature)[];
        const groupedFeatures = groupBy(features, 'property');
        features = Object.values(groupedFeatures).map(f => f[0]);
    }
    const filteredOutFeature = { ...feature, features } as GenericExposedFeature | CompositeFeature;
    if (whitelistFeatureNames.includes(name)) {
        return filteredOutFeature;
    }
    if (whitelistFeatureTypes.includes(type)) {
        return filteredOutFeature;
    }
    if (access && !(access & FeatureAccessMode.ACCESS_STATE && !nullish.includes(deviceState[property] as string | null | undefined))) {
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
}

const Dashboard: React.FC<PropsFromStore & StateApi> = (props) => {
    const { setDeviceState, getDeviceState, deviceStates, bridgeInfo } = props;

    return (
        <div className="row">
            {filterDeviceByFeatures(props.devices, deviceStates, onlyValidFeaturesForDashboard).map(({ device, deviceState, filteredFeatures }) => {

                return (
                    <DashboardDevice
                        key={device.ieee_address}
                        feature={{ features: filteredFeatures } as CompositeFeature}
                        device={device}
                        deviceState={deviceState}
                        onChange={(endpoint, value) =>
                            setDeviceState(device.friendly_name, value)
                        }
                        onRead={(endpoint, value) =>
                            getDeviceState(device.friendly_name, value)
                        }
                        featureWrapperClass={DashboardFeatureWrapper}
                        lastSeenType={bridgeInfo.config.advanced.last_seen}
                    />
                );
            })}
        </div>);
};

const mappedProps = ['devices', 'deviceStates', 'bridgeInfo'];
export default connect<unknown, unknown, GlobalState, unknown>(mappedProps, actions)(Dashboard);


