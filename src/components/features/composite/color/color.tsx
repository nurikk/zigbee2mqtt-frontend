import React, { Component } from "react";
import { AnyColor, ColorFeature } from "../../../../types";
import ColorEditor from "../../../color-editor/color-editor";

import { BaseFeatureProps } from "../../base";


type ColorProps = BaseFeatureProps<ColorFeature>;

export default class Light extends Component<ColorProps, {}> {
  render() {
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
}
