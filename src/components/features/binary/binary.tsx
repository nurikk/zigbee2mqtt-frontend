import React, { Component } from "react";

import { BinaryFeature } from "../../../types";
import Toggle from "../../toggle";

import { BaseFeatureProps } from "../base";

type BinaryProps = BaseFeatureProps<BinaryFeature>
export default class Binary extends Component<BinaryProps> {

  renderEditor() {
    const { feature: { endpoint, name, property, value_off: valueOff, value_on: valueOn }, deviceState, onChange } = this.props;
    return <Toggle
      onChange={(value) => onChange(endpoint, value)}
      name={name}
      value={deviceState[property]}
      valueOn={valueOn}
      valueOff={valueOff}
    />
  }
  renderView() {
    const { feature: { property }, deviceState } = this.props;
    return <strong>{deviceState[property] ? 'TRUE' : 'FALSE'}</strong>
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