import React, { Component } from "react";
import { CoverFeatures, Device, DeviceClassType, DeviceState, LightFeatures } from "../../types";
import actions, { StateApi } from "../../actions";

import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import Light from "./device-types/light";
import Switch from "./device-types/switch";
import Numeric from "./device-types/numeric";
import Boolean from "./device-types/boolean";
import groupBy from "lodash/groupBy";
import Cover from "./device-types/cover";


interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
interface ExposesProps {
    device: Device;
}

class Exposes extends Component<ExposesProps & PropsFromStore & StateApi, {}> {
    render() {
        const { device, deviceStates, setStateValue, setDeviceState } = this.props;
        if (device.definition?.exposes) {
            const deviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
            const rows = Object.entries(groupBy(device.definition?.exposes, e => e.type)).map(([type, exposes]) => {
                switch (type as DeviceClassType) {
                    case "light":
                        return exposes.map(exposeDetails => <div className="card" key={JSON.stringify(exposeDetails)}>
                            <div className="card-body">
                                <h5 className="card-title">Light</h5>
                                <Light
                                    endpoint={exposeDetails.endpoint}
                                    device={device}
                                    deviceState={deviceState}
                                    features={exposeDetails.features as LightFeatures[]}
                                    setDeviceState={setDeviceState}
                                />
                            </div>
                        </div>);
                    case "switch":
                        return <div key={type} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Switch</h5>
                                {
                                    exposes.map(exposeDetails =>
                                        <div className="row mb-3" key={JSON.stringify(exposeDetails)}>
                                            <label className="col-3 col-form-label">{Switch.getPropName(exposeDetails.endpoint)}</label>
                                            <div className="col-9">
                                                <Switch
                                                    endpoint={exposeDetails.endpoint}
                                                    device={device}
                                                    deviceState={deviceState}
                                                    setStateValue={setStateValue}
                                                />
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    case "boolean":
                        return <div key={type} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Boolean</h5>
                                {
                                    exposes.map(exposeDetails =>
                                        <div className="row mb-3" key={JSON.stringify(exposeDetails)}>
                                            <label className="col-3 col-form-label">{exposeDetails.property}</label>
                                            <div className="col-9">
                                                <Boolean
                                                    endpoint={exposeDetails.endpoint}
                                                    device={device}
                                                    deviceState={deviceState}
                                                    property={exposeDetails.property}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    case "numeric":
                        return <div className="card" key="numeric">
                            <div className="card-body">
                                <h5 className="card-title">Numeric states</h5>
                                {
                                    exposes.map(exposeDetails =>
                                        <div className="row mb-3" key={JSON.stringify(exposeDetails)}>
                                            <label className="col-3 col-form-label">{exposeDetails.property}</label>
                                            <div className="col-9">
                                                <Numeric
                                                    endpoint={exposeDetails.endpoint}
                                                    device={device}
                                                    deviceState={deviceState}
                                                    property={exposeDetails.property}
                                                    unit={exposeDetails.unit}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    case "cover":
                        return exposes.map(exposeDetails =>
                            <div className="card" key={JSON.stringify(exposeDetails)}>
                                <div className="card-body">
                                    <h5 className="card-title">Cover</h5>
                                    <Cover
                                        device={device}
                                        deviceState={deviceState}
                                        setDeviceState={setDeviceState}
                                        features={exposeDetails.features as CoverFeatures[]}
                                    />
                                </div>
                            </div>
                        )

                    default:
                        return <div key={JSON.stringify(type)}>Unnknown features {JSON.stringify(exposes, null, 4)}</div>
                }
            })
            return rows;
        } else {
            return "Device doesn't expose anything"
        }
    }
}

const mappedProps = ["deviceStates"];

const ConnectedDeviceExposes = connect<ExposesProps, {}, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
