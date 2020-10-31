import React, { Component } from "react";
import { LightFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type LightProps = BaseFeatureProps<LightFeature>

export default class Light extends Component<LightProps, {}> {
  render() {
    return <Composite type="light" {...this.props} />
  }
}
