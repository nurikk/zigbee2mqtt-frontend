import React, { Component } from "react";
import { CompositeFeature, Device, DeviceState } from "../../types";
import actions from "../../actions/actions";
import { StateApi } from "../../actions/StateApi";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";

import Composite from "../features/composite/composite";
import { FeatureWrapper } from "../features/composite/FeatureWrapper";
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
interface ExposesProps {
    device: Device;
}
class Exposes extends Component<ExposesProps & PropsFromStore & StateApi, {}> {
    render() {
        const { device, deviceStates, setDeviceState, getDeviceState } = this.props;
        const deviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
        if (device.definition?.exposes) {
            return <Composite feature={{ features: device.definition.exposes } as CompositeFeature} type="composite" device={device} deviceState={deviceState}
                onChange={(endpoint, value) => {
                    setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                }}
                onRead={(endpoint, value) => {
                    getDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                }}
                featureWrapperClass={FeatureWrapper}
            />
        } else {
            return "Device doesn't expose anything"
        }
    }
}

const mappedProps = ["deviceStates"];

const ConnectedDeviceExposes = connect<ExposesProps, {}, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
