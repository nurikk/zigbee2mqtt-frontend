import React, { Component } from "react";

import { EnumFeature } from "../../../types";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";

import { BaseFeatureProps } from "../base";

type EnumProps = BaseFeatureProps<EnumFeature>
export default class Enum extends Component<EnumProps> {
  render() {
    const { onChange, feature: { name, values, endpoint } } = this.props;
    return (
      <EnumEditor
        onChange={(value) => onChange(endpoint, value as object)}
        name={name}
        values={values as unknown as ValueWithLabelOrPrimitive[]}
      />
    )
  }
}