import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary';
import { connect } from 'unistore/react';
import { GlobalState } from 'store';
import actions, { StateApi } from 'actions';
import DashboardDevice from 'components/Dashboard/DashboardDevice';
import { CompositeFeature, DeviceState } from 'types';

type OwnProps = RouteComponentProps;

type Props = Pick<GlobalState, 'devices' | 'deviceStates'> & OwnProps & StateApi;

const Dashboard: React.FC<Props> = (props) => {
    const { setDeviceState, getDeviceState } = props;
    return (
        <ErrorBoundary {...props}>
            <div className="container-fluid">
                <div className="row my-4 align-items-stretch">
                    {Array.from(props.devices).map(([key, device]) => {
                        if (!device.definition) return null;
                        const deviceState = props.deviceStates.get(device.friendly_name) ?? ({} as DeviceState);
                        return (
                            <DashboardDevice
                                key={key}
                                feature={{ features: device.definition?.exposes } as CompositeFeature}
                                device={device}
                                deviceState={deviceState}
                                onChange={(endpoint, value) =>
                                    setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                                }
                                onRead={(endpoint, value) =>
                                    getDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </ErrorBoundary>
    );
};

const mappedProps = ['devices', 'deviceStates'];
export default connect<OwnProps, {}, GlobalState, {}>(mappedProps, actions)(Dashboard);
