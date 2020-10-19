import React, { Component } from "react";
import { BinaryFeature, ComposeiteFeatureType, Device, DeviceState, EnumFeature, GenericFeatureType, LightFeature, NumericFeature, SwitchFeature } from "../../types";
import actions, { StateApi } from "../../actions";

import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import Switch from "./device-types/switch";
import Numeric from "./device-types/numeric";
import Boolean from "./device-types/boolean";
import groupBy from "lodash/groupBy";
import Light from "./device-types/light";
import Enum from "../enum/enum";


interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
interface ExposesProps {
    device: Device;
}
type AnyPossibleType = GenericFeatureType & ComposeiteFeatureType;
class Exposes extends Component<ExposesProps & PropsFromStore & StateApi, {}> {
    render() {
        const { device, deviceStates, setStateValue, setDeviceState } = this.props;
        if (device.definition?.exposes) {
            const deviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
            const rows = Object.entries(groupBy(device.definition?.exposes, (e: { type: AnyPossibleType }) => e.type)).map(([type, exposes]) => {
                switch (type as AnyPossibleType) {
                    case "light":
                        return exposes.map((exposeDetails: LightFeature) =>
                            <div className="card" key={JSON.stringify(exposeDetails)}>
                                <div className="card-body">
                                    <h5 className="card-title">Light</h5>
                                    <Light
                                        endpoint={exposeDetails.endpoint}
                                        device={device}
                                        deviceState={deviceState}
                                        features={exposeDetails.features}
                                        setDeviceState={setDeviceState}
                                    />
                                </div>
                            </div>);

                    case "enum":
                        return exposes.map((exposeDetails: EnumFeature) =>
                            <div className="card" key={JSON.stringify(exposeDetails)}>
                                <div className="card-body">
                                    <h5 className="card-title">Light</h5>
                                    <Enum
                                        onChange={(v) => setDeviceState(device.friendly_name, v as object)}
                                        name={exposeDetails.name}
                                        values={exposeDetails.values}
                                    />
                                </div>
                            </div>);
                    case "switch":
                        return <div key={type} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Switch</h5>
                                {
                                    exposes.map((exposeDetails: SwitchFeature) =>
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
                    case "binary":
                        return <div key={type} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Binary</h5>
                                {
                                    exposes.map((exposeDetails: BinaryFeature) =>
                                        <div className="row mb-3" key={JSON.stringify(exposeDetails)}>
                                            <label className="col-3 col-form-label">{exposeDetails.name}</label>
                                            <div className="col-9">
                                                <Boolean
                                                    endpoint={exposeDetails.endpoint}
                                                    device={device}
                                                    deviceState={deviceState}
                                                    property={exposeDetails.name}
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
                                    exposes.map((exposeDetails: NumericFeature) =>
                                        <div className="row mb-3" key={JSON.stringify(exposeDetails)}>
                                            <label className="col-3 col-form-label">{exposeDetails.name}</label>
                                            <div className="col-9">
                                                <Numeric
                                                    endpoint={exposeDetails.endpoint}
                                                    device={device}
                                                    deviceState={deviceState}
                                                    property={exposeDetails.name}
                                                    unit={exposeDetails.unit}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    // case "cover":
                    //     return exposes.map(exposeDetails =>
                    //         <div className="card" key={JSON.stringify(exposeDetails)}>
                    //             <div className="card-body">
                    //                 <h5 className="card-title">Cover</h5>
                    //                 <Cover
                    //                     device={device}
                    //                     deviceState={deviceState}
                    //                     setDeviceState={setDeviceState}
                    //                     features={exposeDetails.features as CoverFeatures[]}
                    //                 />
                    //             </div>
                    //         </div>
                    //     )

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
