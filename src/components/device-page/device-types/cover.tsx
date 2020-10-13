import React, { Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, CoverFeatures } from "../../../types";
import Toggle from "../../toggle";
import Range, { RangeStep } from "../../range";

interface CoverProps {
  device: Device;
  features: CoverFeatures[];
  deviceState: DeviceState;
}
const steps = [0, 25, 50, 75, 100].map<RangeStep>(item => ({ stepValue: item, title: item + '' }));
export default class Cover extends Component<CoverProps & Pick<StateApi, 'setDeviceState'>, {}> {
  onFeatureChange = (value: object) => {
    const { setDeviceState, device } = this.props;
    setDeviceState(device.friendly_name, value);
  }
  render() {
    const { features, deviceState } = this.props;
    return features?.map(feature => {
      switch (feature) {
        case "state":
          return <div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">State</label>

            <div className="col-9">
              <Toggle
                onChange={this.onFeatureChange}
                name="state"
                value={deviceState["state"] ?? 'close' as string}
              />
            </div>
          </div>
        case "position":
          return <div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Position</label>
            <div className="col-9">
              <Range
                key={feature}
                onChange={this.onFeatureChange}
                name="position"
                value={deviceState["position"] ?? 0}
                min={0}
                max={100}
                steps={steps}
              />
            </div>
          </div>
        case "tilt":
          return <div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Tilt</label>
            <div className="col-9">
              <Range
                key={feature}
                onChange={this.onFeatureChange}
                name="tilt"
                value={deviceState["tilt"] ?? 0}
                min={0}
                max={100}
                steps={steps}
              />
            </div>
          </div>


        default:
          return (<div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Unknown feature</label>
            <div className="col-9">{feature}{JSON.stringify(deviceState)}</div>
          </div>);

      }
    })
  }
}
