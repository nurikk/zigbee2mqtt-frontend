import React, { Component, Fragment } from "react";

import { NumericFeature } from "../../../types";
import { withEndpoint } from "../../../utils";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import RangeEditor from "../../range-editor/range-editor";
import { BaseFeatureProps } from "../base";

interface NumericProps extends BaseFeatureProps<NumericFeature> {
  steps?: ValueWithLabelOrPrimitive[];
}
export default class Numeric extends Component<NumericProps> {

  renderEditor() {
    const { feature: { endpoint, property, value_max: valueMax, value_min: valueMin }, deviceState, steps, onChange } = this.props;
    return <RangeEditor
      onChange={(value) => onChange(endpoint, { [property]: value as object })}
      name={name}
      value={deviceState[withEndpoint(property, endpoint)] as number ?? 0}
      min={valueMin}
      max={valueMax}
      steps={steps}
    />
  }
  renderView() {
    const { feature: { property, endpoint, unit }, deviceState } = this.props;
    return <Fragment><strong>{deviceState[withEndpoint(property, endpoint)] ?? "N/A"}</strong> {unit ? <small className="text-muted ml-1">{unit}</small> : null}</Fragment>
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