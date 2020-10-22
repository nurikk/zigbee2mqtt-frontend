/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from "react";
import { LockFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";


type LockProps = BaseFeatureProps<LockFeature>

export default class Lock extends Component<LockProps, {}> {
  render() {
    const { deviceState, device, feature, onChange } = this.props;
    return <Composite type="lock" feature={feature} device={device} deviceState={deviceState} onChange={onChange} />
  }
}
