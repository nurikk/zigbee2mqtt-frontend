import React from 'react';


import { connect } from 'unistore/react';


import DashboardDevice from './DashboardDevice';
import { DeviceState, CompositeFeature, GenericExposedFeature, FeatureAccessMode } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from "../../actions/StateApi";
import { GlobalState } from '../../store';
import { DashboardFeatureWrapper } from './DashboardFeatureWrapper';
import { isOnlyOneBitIsSet } from '../../utils';




type Props = Pick<GlobalState, 'devices' | 'deviceStates'> & StateApi;



const genericRendererIgnoredNames = ['linkquality', 'battery', 'battery_low'];
const whitelistFeatureNames = ['state', 'brightness', 'color_temp'];
const whitelistFeatureTypes = ['light'];
const nullish = ['', null, undefined];

export const onlyValidFeaturesForDashboard = (feature: GenericExposedFeature | CompositeFeature, deviceState: DeviceState): boolean => {
    const { access, property, name, type } = feature;
    if (whitelistFeatureNames.includes(name)) {
        return true;
    }
    if (whitelistFeatureTypes.includes(type)) {
        return true;
    }
    if (!(access & FeatureAccessMode.ACCESS_STATE && !nullish.includes(deviceState[property] as string | null | undefined))) {
        return false;
    }
    if (genericRendererIgnoredNames.includes(name)) {
        return false;
    }

    if (access & FeatureAccessMode.ACCESS_STATE && isOnlyOneBitIsSet(access)) {
        return true;
    }
    return false;
}

const Dashboard: React.FC<Props> = (props) => {
    const { setDeviceState, getDeviceState, deviceStates } = props;
    return (

        <div className="container-fluid">
            <div className="row my-4 align-items-stretch">
                {Array.from(props.devices)
                    .filter(([, device]) => device.supported)
                    .map(([, device]) => ({ device, deviceState: deviceStates.get(device.friendly_name) ?? ({} as DeviceState) }))
                    .map(({ device, deviceState }) => {
                        const _features = ((device.definition?.exposes ?? []) as (GenericExposedFeature | CompositeFeature)[]);
                        const filteredFeatures = _features.filter((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForDashboard(e, deviceState));
                        return { device, deviceState, filteredFeatures };
                    })
                    .filter(({ filteredFeatures }) => filteredFeatures.length > 0)
                    .map(({ device, deviceState, filteredFeatures }) => {

                        return (
                            <DashboardDevice
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
                            />
                        );
                    })}
            </div>
        </div>

    );
};

const mappedProps = ['devices', 'deviceStates'];
export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(Dashboard);
