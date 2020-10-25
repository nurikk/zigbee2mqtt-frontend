import React, { Component } from "react";
import { AnyColor, ColorXYFeature } from "../../../../types";
import { withEndpoint } from "../../../../utils";
import ColorEditor from "../../../color-editor/color-editor";

import { BaseFeatureProps } from "../../base";


type ColorProps = BaseFeatureProps<ColorXYFeature>;

export default class Light extends Component<ColorProps, {}> {
  render() {
    const { deviceState, feature, onChange } = this.props;
    const value = {};
    for (const innerFeature of feature.features) {
      value[innerFeature.property] = deviceState[withEndpoint(feature.property, feature.endpoint)]?.[withEndpoint(innerFeature.property, innerFeature.endpoint)];
    }

    return <ColorEditor
      onChange={(v) => onChange(feature.endpoint, { [feature.property]: v })}
      value={value as AnyColor}
      format={feature.name} />
  }
}
