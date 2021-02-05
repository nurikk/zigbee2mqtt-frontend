import React from 'react';


import { connect } from 'unistore/react';


import DashboardDevice from './DashboardDevice';
import { DeviceState, CompositeFeature } from '../../types';
import actions, { StateApi } from '../../actions';
import { GlobalState } from '../../store';




type Props = Pick<GlobalState, 'devices' | 'deviceStates'> & StateApi;

const Dashboard: React.FC<Props> = (props) => {
  const { setDeviceState, getDeviceState } = props;
  return (

    <div className="container-fluid">
      <div className="row my-4 align-items-stretch">
        {Array.from(props.devices).filter(([, device]) => device.supported).map(([key, device]) => {
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

  );
};

const mappedProps = ['devices', 'deviceStates'];
export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(Dashboard);