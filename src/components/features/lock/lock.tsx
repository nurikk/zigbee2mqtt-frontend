import React, { Component } from "react";
import { LockFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";


type LockProps = BaseFeatureProps<LockFeature>

export default class Lock extends Component<LockProps, {}> {
  render() {
    return <Composite type="lock" {...this.props} />
  }
}
