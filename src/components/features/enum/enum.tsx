import React, { Component } from "react";

import { EnumFeature } from "../../../types";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";

import { BaseFeatureProps } from "../base";

type EnumProps = BaseFeatureProps<EnumFeature>
export default class Enum extends Component<EnumProps> {

  renderView() {
    const { feature: { property }, deviceState } = this.props;
    return <strong>{deviceState[property] ?? "N/A"}</strong>
  }
  renderEditor() {
    const { onChange, feature: { name, values, endpoint } } = this.props;
    return (
      <EnumEditor
        onChange={(value) => onChange(endpoint, { [name]: value })}
        values={values as unknown as ValueWithLabelOrPrimitive[]}
      />
    )
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