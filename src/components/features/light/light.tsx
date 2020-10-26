import React, { Component } from "react";
import { LightFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type LightProps = BaseFeatureProps<LightFeature>

export default class Light extends Component<LightProps, {}> {
  render() {
    const { deviceState, device, feature, onChange } = this.props;
    return <Composite type="light" feature={feature} device={device} deviceState={deviceState} onChange={onChange} />
  }
}
