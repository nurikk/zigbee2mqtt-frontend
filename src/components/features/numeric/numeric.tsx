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
    const { feature: { endpoint, name, property, value_max: valueMax, value_min: valueMin }, deviceState, steps, onChange } = this.props;
    return <RangeEditor
      onChange={(value) => onChange(endpoint, { [name]: value })}
      value={deviceState[property] as number ?? 0}
      min={valueMin}
      max={valueMax}
      steps={steps}
    />
  }
  renderView() {
    const { feature: { property, unit }, deviceState } = this.props;
    return <Fragment><strong>{deviceState[property] ?? "N/A"}</strong> {unit ? <small className="text-muted ml-1">{unit}</small> : null}</Fragment>
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