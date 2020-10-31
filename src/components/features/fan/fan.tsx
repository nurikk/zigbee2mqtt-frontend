import React, { Component } from "react";
import { FanFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type FanProps = BaseFeatureProps<FanFeature>
export default class Fan extends Component<FanProps> {
  render() {
    const { deviceState, device, feature, onChange } = this.props;

    return <Composite type="fan" feature={feature} device={device} deviceState={deviceState} onChange={onChange} />
  }
}