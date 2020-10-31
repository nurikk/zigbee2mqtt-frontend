import React, { Component } from "react";

import { CoverFeature } from "../../../types";


import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";


type CoverProps = BaseFeatureProps<CoverFeature>
export default class Cover extends Component<CoverProps, {}> {
  render() {
    return <Composite type="cover" {...this.props} />
  }
}
