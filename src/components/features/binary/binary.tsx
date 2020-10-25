import React, { Component } from "react";

import { BinaryFeature } from "../../../types";
import { withEndpoint } from "../../../utils";
import Toggle from "../../toggle";

import { BaseFeatureProps } from "../base";

type BinaryProps = BaseFeatureProps<BinaryFeature>
export default class Binary extends Component<BinaryProps> {

  renderEditor() {
    const { feature: { endpoint, name, property, value_off: valueOff, value_on: valueOn }, deviceState, onChange } = this.props;
    return <Toggle
      onChange={(value) => onChange(endpoint, value)}
      name={name}
      value={deviceState[withEndpoint(property, endpoint)]}
      valueOn={valueOn}
      valueOff={valueOff}
    />
  }
  renderView() {
    const { feature: { property, endpoint }, deviceState } = this.props;
    return <strong>{deviceState[withEndpoint(property, endpoint)] ? 'TRUE' : 'FALSE'}</strong>
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