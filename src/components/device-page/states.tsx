import React, { Component } from "react";
import { Device, DeviceState } from "../../types";
import actions, { StateApi } from "../../actions";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";

interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;

}
interface StatesProps {
    device: Device;
}

class States extends Component<StatesProps & PropsFromStore & StateApi, {}> {
    setStateValue = (name: string, value: unknown): void => {
        const { setStateValue, device } = this.props;
        setStateValue(device.friendly_name, name, value);
    };

    render() {
        const { device, deviceStates } = this.props;
        const deviceState = deviceStates.get(device.friendly_name) ?? {};
        return <pre>{JSON.stringify(deviceState, null, 4)}</pre>;
    }
}

const mappedProps = ["deviceStates"];
const ConnectedDeviceStates = connect<StatesProps, {}, GlobalState, StateApi>(mappedProps, actions)(States);
export default ConnectedDeviceStates;
