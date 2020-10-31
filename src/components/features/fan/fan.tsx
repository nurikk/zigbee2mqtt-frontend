import React, { Component } from "react";
import { FanFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type FanProps = BaseFeatureProps<FanFeature>
export default class Fan extends Component<FanProps> {
  render() {
    return <Composite type="fan" {...this.props} />
  }
}