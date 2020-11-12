import React, { Component } from "react";
import { AnyColor, ColorFeature, FeatureAccessMode } from "../../../../types";
import ColorEditor, { toRGB } from "../../../color-editor/color-editor";

import { BaseFeatureProps } from "../../base";


type ColorProps = BaseFeatureProps<ColorFeature>;

export default class Light extends Component<ColorProps, {}> {
  renderEditor() {
    const { deviceState, feature, onChange } = this.props;
    const value = {};
    for (const innerFeature of feature.features) {
      value[innerFeature.name] = deviceState[feature.property]?.[innerFeature.property] ?? 0;
    }
    return <ColorEditor
      onChange={(color) => onChange(feature.endpoint, { color })}
      value={value as AnyColor}
      format={feature.name} />
  }
  renderView() {
    const { deviceState, feature } = this.props;
    const value = {};
    for (const innerFeature of feature.features) {
      value[innerFeature.name] = deviceState[feature.property]?.[innerFeature.property] ?? 0;
    }
    const rgbColor = toRGB(value as unknown as AnyColor, feature.name);

    return <div style={{backgroundColor: rgbColor}}>{rgbColor}</div>
  }
  render() {
    const { feature } = this.props;
    if (feature.access & FeatureAccessMode.ACCESS_WRITE) {
      return this.renderEditor();
    }
    if (feature.access & FeatureAccessMode.ACCESS_STATE) {
      return this.renderView();
    }
    return null;

  }
}
