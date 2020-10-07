import React, { Component } from "react";
import { Device, DeviceState, LightFeatures } from "../../types";
import actions, { StateApi } from "../../actions";

import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import Light from "./device-types/light";
import Switch from "./device-types/switch";
import Numeric from "./device-types/numeric";
import Boolean from "./device-types/boolean";
import groupBy from "lodash/groupBy";


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
                switch (type) {
                    case "light":
                        return exposes.map(exposeDetails => <div className="card" key={JSON.stringify(exposeDetails)}>
                            <Light
                                endpoint={exposeDetails.endpoint}
                                device={device}
                                deviceState={deviceState}
                                features={exposeDetails.features as LightFeatures[]}
                                setDeviceState={setDeviceState}
                            />
                        </div>);
                    case "switch":
                        return <div key={type} className="card">
                            <table className="table table-borderless align-middle">
                                <tbody>
                                    {
                                        exposes.map(exposeDetails =>
                                            <tr key={JSON.stringify(exposeDetails)}>
                                                <th scope="row">{exposeDetails.property}</th>
                                                <td>
                                                    <Switch
                                                        endpoint={exposeDetails.endpoint}
                                                        device={device}
                                                        deviceState={deviceState}
                                                        setStateValue={setStateValue}
                                                        property={exposeDetails.property}
                                                    />
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    case "boolean":
                        return <div key={type} className="card">
                            <table className="table table-borderless align-middle">
                                <tbody>
                                    {
                                        exposes.map(exposeDetails =>
                                            <tr key={JSON.stringify(exposeDetails)}>
                                                <th scope="row">{exposeDetails.property}</th>
                                                <td>
                                                    <Boolean
                                                        endpoint={exposeDetails.endpoint}
                                                        device={device}
                                                        deviceState={deviceState}
                                                        property={exposeDetails.property}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    case "numeric":
                        return <div className="card" key="numeric">
                            <table className="table table-borderless align-middle">
                                <tbody>
                                    {
                                        exposes.map(exposeDetails =>
                                            <tr key={JSON.stringify(exposeDetails)}>
                                                <th scope="row">{exposeDetails.property}</th>
                                                <td>
                                                    <Numeric
                                                        endpoint={exposeDetails.endpoint}
                                                        device={device}
                                                        deviceState={deviceState}
                                                        property={exposeDetails.property}
                                                        unit={exposeDetails.unit}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
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
