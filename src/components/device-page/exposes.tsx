import React, { Component } from "react";
import { Device, DeviceState, LightFeatures } from "../../types";
import actions, { StateApi } from "../../actions";

import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import Light from "./device-types/light";

interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
interface ExposesProps {
    device: Device;
}

class Exposes extends Component<ExposesProps & PropsFromStore & StateApi, {}> {
    render() {
        const { device, deviceStates, setStateValue, getStateValue } = this.props;
        if (device.definition?.exposes) {
            const deviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
            return device.definition?.exposes.map(exposeDetails => {
                switch (exposeDetails.type) {
                    case "light":
                        return <div className="card" key={JSON.stringify(exposeDetails)}>
                            <Light
                                endpoint={exposeDetails.endpoint}
                                device={device}
                                deviceState={deviceState}
                                features={exposeDetails.features as LightFeatures[]}
                                setStateValue={setStateValue}
                                getStateValue={getStateValue}
                            />
                        </div>
                    default:
                        return <div key={JSON.stringify(exposeDetails)}>Unnknown feature {JSON.stringify(exposeDetails, null, 4)}</div>
                }
            })
        } else {
            return "Device doesn't expose anything"
        }
    }
}

const mappedProps = ["deviceStates"];

const ConnectedDeviceExposes = connect<ExposesProps, {}, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
