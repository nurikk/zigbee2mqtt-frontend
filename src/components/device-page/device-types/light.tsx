import React, { Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, Endpoint, LightFeatures } from "../../../types";
import Toggle from "../../toggle";
import Range, { RangeStep } from "../../range";
import Color from "../../color";
import { scale } from "../../../utils";


interface LightProps {
  device: Device;
  features: LightFeatures[];
  deviceState: DeviceState;
  endpoint?: Endpoint;

}
const colorTemSteps = [1000, 2000, 3000, 4000, 5000, 6500].map<RangeStep>(kelvin => ({ stepValue: 1000000.0 / kelvin, title: kelvin + 'K' }));
const brighnessSteps = [0, 25, 50, 75, 100].map<RangeStep>(item => ({ stepValue: scale(item, [0, 100], [0, 255]), title: item + '%' }));
export default class Light extends Component<LightProps & Pick<StateApi, 'setDeviceState'>, {}> {
  onFeatureChange = (value: object) => {
    const { setDeviceState, device, endpoint } = this.props;
    setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value);
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
                value={deviceState["state"] ?? 'OFF' as string}
              />
            </div>
          </div>
        case "brightness":
          return <div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Brightness</label>
            <div className="col-9">
              <Range
                key={feature}
                onChange={this.onFeatureChange}
                name="brightness"
                value={deviceState["brightness"] ?? 0}
                min={0}
                max={254}
                steps={brighnessSteps}
              />
            </div>
          </div>
        case "color_temp":
          return <div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Color temp</label>
            <div className="col-9"><Range
              key={feature}
              onChange={this.onFeatureChange}
              name="color_temp"
              value={deviceState["color_temp"] ?? 0}
              min={0}
              max={512}
              steps={colorTemSteps}
            />
            </div>
          </div>

        case "color_xy":
        case "color_hs":
          {
            const { color, brightness } = deviceState;
            return <div className="row mb-3" key={feature}>
              <label className="col-3 col-form-label">Color ({feature})</label>
              <div className="col-9">
                <Color
                  key={feature}
                  onChange={this.onFeatureChange}
                  name="color"
                  value={color}
                  brightness={brightness}
                  format={feature}
                />
              </div>
            </div>
          }


        default:
          return (<div className="row mb-3" key={feature}>
            <label className="col-3 col-form-label">Unknown feature</label>
            <div className="col-9">{feature}{JSON.stringify(deviceState)}</div>
          </div>);
      }
    })

  }
}
