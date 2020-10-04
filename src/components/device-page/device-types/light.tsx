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
    return <table className="table table-borderless align-middle">
      <tbody>
        {
          features?.map(feature => {
            switch (feature) {
              case "state":
                return <tr key={feature}>
                  <td>State</td>
                  <td>
                    <Toggle
                      onChange={this.onFeatureChange}
                      name="state"
                      value={deviceState["state"] ?? 'OFF' as string}
                    />
                  </td>
                </tr>
              case "brightness":
                return <tr key={feature}>
                  <td>Brightness</td>
                  <td>
                    <Range
                      key={feature}
                      onChange={this.onFeatureChange}
                      name="brightness"
                      value={deviceState["brightness"] ?? 0}
                      min={0}
                      max={254}
                      steps={brighnessSteps}
                    />
                  </td>
                </tr>
              case "color_temp":
                return <tr key={feature}>
                  <td>Color temp</td>
                  <td><Range
                    key={feature}
                    onChange={this.onFeatureChange}
                    name="color_temp"
                    value={deviceState["color_temp"] ?? 0}
                    min={0}
                    max={512}
                    steps={colorTemSteps}
                  />
                  </td>
                </tr>

              case "color_xy":
              case "color_hs":
                {
                  const { color, brightness } = deviceState;
                  return <tr key={feature}>
                    <td>Color ({feature})</td>
                    <td>
                      <Color
                        key={feature}
                        onChange={this.onFeatureChange}
                        name="color"
                        value={color}
                        brightness={brightness}
                        format={feature}
                      />
                    </td>
                  </tr>
                }


              default:
                return <tr key={feature}><td>Unknown feature</td><td>{feature}{JSON.stringify(deviceState)}</td></tr>
                break;
            }
          })
        }
      </tbody>
    </table>
  }
}
