/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, Fragment } from "react";

import { NumericFeature } from "../../../types";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import RangeEditor from "../../range-editor/range-editor";
import { BaseFeatureProps } from "../base";

interface NumericProps extends BaseFeatureProps<NumericFeature> {
  steps?: ValueWithLabelOrPrimitive[];
}
export default class Numeric extends Component<NumericProps> {

  renderEditor() {
    const { feature: { endpoint, name, value_max, value_min }, deviceState, steps, onChange } = this.props;
    return <RangeEditor
      onChange={(value) => onChange(endpoint, value as object)}
      name={name}
      value={deviceState[name] as number ?? 0}
      min={value_min}
      max={value_max}
      steps={steps}
    />
  }
  renderView() {
    const { feature, deviceState } = this.props;
    const { name, unit } = feature;
    return <Fragment><strong>{deviceState[name] ?? "N/A"}</strong> {unit ? <small className="text-muted">{unit}</small> : null}</Fragment>
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