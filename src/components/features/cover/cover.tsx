import React, { Component } from "react";

import { CoverFeature } from "../../../types";


import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";


type CoverProps = BaseFeatureProps<CoverFeature>
export default class Cover extends Component<CoverProps, {}> {

  render() {
    const { deviceState, device, feature, onChange } = this.props;
    return <Composite endpoint={feature.endpoint} type="cover" feature={feature} device={device} deviceState={deviceState} onChange={onChange} />
  }
}
