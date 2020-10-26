import React, { Component } from "react";
import { SwitchFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type SwitchProps = BaseFeatureProps<SwitchFeature>
export default class Switch extends Component<SwitchProps> {
  render() {
    const { deviceState, device, feature, onChange } = this.props;

    return <Composite type="switch" feature={feature} device={device} deviceState={deviceState} onChange={onChange} />
  }
}