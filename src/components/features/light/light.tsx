import React, { Component } from "react";
import { LightFeature } from "../../../types";
import { scale } from "../../../utils";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type LightProps = BaseFeatureProps<LightFeature>
const stepsConfiguration = {
  brightness: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: scale(item, [0, 100], [0, 255]), title: item + '%' })),
  'color_temp': [1000, 2000, 3000, 4000, 5000, 6500].map<ValueWithLabelOrPrimitive>(kelvin => ({ value: 1000000.0 / kelvin, title: kelvin + 'K' }))
};
export default class Light extends Component<LightProps, {}> {
  render() {
    return <Composite type="light" {...this.props} stepsConfiguration={stepsConfiguration} />
  }
}
