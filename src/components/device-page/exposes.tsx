import React, { Component } from "react";
import { CompositeFeature, Device, DeviceState } from "../../types";
import actions, { StateApi } from "../../actions";

import { connect } from "unistore/react";
import { GlobalState } from "../../store";

import Composite from "../features/composite/composite";

interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
interface ExposesProps {
    device: Device;
}

class Exposes extends Component<ExposesProps & PropsFromStore & StateApi, {}> {
    render() {
        const { device, deviceStates, setDeviceState } = this.props;
        const deviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
        if (device.definition?.exposes) {
            return <div className="card">
                <div className="card-body">
                    <Composite feature={{ features: device.definition.exposes } as CompositeFeature} type="composite" device={device} deviceState={deviceState}
                        onChange={(endpoint, value) => {
                            setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
                        }}
                    />
                </div>
            </div>
        } else {
            return "Device doesn't expose anything"
        }
    }
}

const mappedProps = ["deviceStates"];

const ConnectedDeviceExposes = connect<ExposesProps, {}, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
