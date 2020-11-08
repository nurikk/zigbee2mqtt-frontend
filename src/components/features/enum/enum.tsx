
import React, { Component } from "react";

import { EnumFeature, FeatureAccessMode } from "../../../types";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";

import { BaseFeatureProps } from "../base";

type EnumProps = BaseFeatureProps<EnumFeature>
export default class Enum extends Component<EnumProps> {

  renderView() {
    const { feature: { property }, deviceState } = this.props;
    const value = deviceState[property] ?? "N/A";
    return value === '' ? '<empty string>' : <strong>{value}</strong>
  }
  renderEditor() {
    const { onChange, feature: { name, values, endpoint, property }, deviceState } = this.props;
    return (
      <EnumEditor
        onChange={(value) => onChange(endpoint, { [name]: value })}
        values={values as unknown as ValueWithLabelOrPrimitive[]}
        value={deviceState[property] as ValueWithLabelOrPrimitive}
      />
    )
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