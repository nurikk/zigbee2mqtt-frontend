import React from 'react';
import { Device } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from '../../actions/StateApi';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
type PropsFromStore = Pick<GlobalState, 'deviceStates'> & StateApi;
type StatesProps = { device: Device };

function States(props: StatesProps & PropsFromStore) {
    const { device, deviceStates } = props;
    const deviceState = deviceStates[device.friendly_name] ?? {};
    return <pre>{JSON.stringify(deviceState, null, 4)}</pre>;
}

const mappedProps = ['deviceStates'];
const ConnectedDeviceStates = connect<StatesProps, unknown, GlobalState, StateApi>(mappedProps, actions)(States);
export default ConnectedDeviceStates;
