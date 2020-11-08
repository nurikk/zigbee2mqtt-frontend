import React, { Component } from "react";

import { BinaryFeature, FeatureAccessMode } from "../../../types";
import Toggle from "../../toggle";

import { BaseFeatureProps } from "../base";

type BinaryProps = BaseFeatureProps<BinaryFeature>
export default class Binary extends Component<BinaryProps> {

  renderEditor() {
    const { feature: { endpoint, name, property, value_off: valueOff, value_on: valueOn }, deviceState, onChange } = this.props;
    return <Toggle
      onChange={(value) => onChange(endpoint, { [name]: value })}
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
    if (access & FeatureAccessMode.ACCESS_WRITE) {
      return this.renderEditor();
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
      return this.renderView();
    } else {
      return null;
    }
  }
}