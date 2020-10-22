/* eslint-disable @typescript-eslint/camelcase */
import React, { Component } from "react";

import { BinaryFeature } from "../../../types";
import Toggle from "../../toggle";

import { BaseFeatureProps } from "../base";

type BinaryProps = BaseFeatureProps<BinaryFeature>
export default class Binary extends Component<BinaryProps> {

  renderEditor() {
    const { feature: {endpoint, name, value_off, value_on}, deviceState, onChange } = this.props;
    return <Toggle
      onChange={(value) => onChange(endpoint, value)}
      name={name}
      value={deviceState[name]}
      value_on={value_on}
      value_off={value_off}
    />
  }
  renderView() {
    const { feature, deviceState } = this.props;
    const { name } = feature;
    return <strong>{deviceState[name] ? 'TRUE' : 'FALSE'}</strong>
  }
  render() {
    const { feature: { access } } = this.props;
    switch (access) {
      case "r":
        return this.renderView();
      default:
        return this.renderEditor();
    }
  }
}