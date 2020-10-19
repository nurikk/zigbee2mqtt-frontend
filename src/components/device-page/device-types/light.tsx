/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, Endpoint, GenericExposedFeature, GenericFeatureType } from "../../../types";
import Toggle from "../../toggle";
import Range, { RangeStep } from "../../range";
import Color from "../../color";
import { scale } from "../../../utils";
import { isBinaryFeature, isEnumFeature, isNumericFeature } from "../type-guards";
import Enum from "../../enum/enum";


interface LightProps {
  device: Device;
  features: GenericExposedFeature[];
  deviceState: DeviceState;
  endpoint?: Endpoint;

}


const steps = {
  brightness: [0, 25, 50, 75, 100].map<RangeStep>(item => ({ stepValue: scale(item, [0, 100], [0, 255]), title: item + '%' })),
  color_temp: [1000, 2000, 3000, 4000, 5000, 6500].map<RangeStep>(kelvin => ({ stepValue: 1000000.0 / kelvin, title: kelvin + 'K' }))
}
export default class Light extends Component<LightProps & Pick<StateApi, 'setDeviceState'>, {}> {
  onFeatureChange = (value: object) => {
    const { setDeviceState, device, endpoint } = this.props;
    setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value);
  }
  render() {

    const { features, deviceState } = this.props;

    return features?.map(feature => {
      if (isBinaryFeature(feature)) {
        return <div className="row mb-3" key={JSON.stringify(feature)}>
          <label className="col-3 col-form-label">{feature.name}</label>
          <div className="col-9">
            <Toggle
              onChange={this.onFeatureChange}
              name={feature.name}
              value={deviceState[feature.name]}
              value_on={feature.value_on}
              value_off={feature.value_off}
            />
          </div>
        </div>
      } else if (isNumericFeature(feature)) {
        return <div className="row mb-3" key={JSON.stringify(feature)}>
          <label className="col-3 col-form-label">{feature.name}</label>
          <div className="col-9">
            <Range
              onChange={this.onFeatureChange}
              name={feature.name}
              value={deviceState[feature.name] as number ?? 0}
              min={feature.value_min}
              max={feature.value_max}
              steps={steps[feature.name]}
            />
          </div>
        </div>
      } else if (isEnumFeature(feature)) {
        return <div className="row mb-3" key={JSON.stringify(feature)}>
          <label className="col-3 col-form-label">{feature.name}</label>
          <div className="col-9">
            <Enum
              onChange={this.onFeatureChange}
              name={feature.name}
              values={feature.values}

            />
          </div>
        </div>
      }
      switch (feature.type) {


        // case "brightness":

        // case "color_temp":
        //   return <div className="row mb-3" key={feature}>
        //     <label className="col-3 col-form-label">Color temp</label>
        //     <div className="col-9"><Range
        //       key={feature}
        //       onChange={this.onFeatureChange}
        //       name="color_temp"
        //       value={deviceState["color_temp"] ?? 0}
        //       min={0}
        //       max={512}
        //       steps={colorTemSteps}
        //     />
        //     </div>
        //   </div>

        // case "color_xy":
        // case "color_hs":
        //   {
        //     const { color, brightness } = deviceState;
        //     return <div className="row mb-3" key={feature}>
        //       <label className="col-3 col-form-label">Color ({feature})</label>
        //       <div className="col-9">
        //         <Color
        //           key={feature}
        //           onChange={this.onFeatureChange}
        //           name="color"
        //           value={color}
        //           brightness={brightness}
        //           format={feature}
        //         />
        //       </div>
        //     </div>
        //   }


        default:
          return (<div className="row mb-3" key={JSON.stringify(feature)}>
            <label className="col-3 col-form-label">Unknown feature {feature.type}({feature.name})</label>
            <div className="col-9">{JSON.stringify(feature)}{JSON.stringify(deviceState)}</div>
          </div>);

      }
    })

  }
}
