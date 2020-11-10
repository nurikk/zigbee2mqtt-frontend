import React, { Component } from "react";

import { CoverFeature } from "../../../types";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";


import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

const stepsConfiguration = {
  position: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, label: item + '' })),
  tilt: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, label: item + '' }))
};

type CoverProps = BaseFeatureProps<CoverFeature>
export default class Cover extends Component<CoverProps, {}> {
  render() {
    return <Composite type="cover" {...this.props} stepsConfiguration={stepsConfiguration} />
  }
}
