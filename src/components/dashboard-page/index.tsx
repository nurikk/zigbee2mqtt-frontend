import React, { FunctionComponent, PropsWithChildren } from 'react';


import { connect } from 'unistore/react';


import DashboardDevice, { onlyValidFeaturesForDashboard } from './DashboardDevice';
import { DeviceState, CompositeFeature, GenericExposedFeature } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from "../../actions/StateApi";
import { GlobalState } from '../../store';
import { DashboardFeatureWrapper } from './DashboardFeatureWrapper';




type Props = Pick<GlobalState, 'devices' | 'deviceStates'> & StateApi;




const Dashboard: React.FC<Props> = (props) => {
    const { setDeviceState, getDeviceState, deviceStates } = props;
    return (

        <div className="container-fluid">
            <div className="row my-4 align-items-stretch">
                {Array.from(props.devices)
                    .filter(([, device]) => device.supported)
                    .map(([, device]) => ({ device, deviceState: deviceStates.get(device.friendly_name) ?? ({} as DeviceState)}))
                    .filter(({ device, deviceState }) => {
                        const _features = ((device.definition?.exposes ?? []) as (GenericExposedFeature | CompositeFeature)[]);
                        return _features.filter((e: GenericExposedFeature | CompositeFeature) => onlyValidFeaturesForDashboard(e, deviceState)).length > 0
                    })
                    .map(( { device, deviceState }) => {

                    return (
                        <DashboardDevice
                            key={device.ieee_address}
                            feature={{ features: device.definition?.exposes } as CompositeFeature}
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
