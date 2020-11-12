import React, { FunctionComponent } from "react";
import { AnyColor, ColorFeature } from "../../../../types";
import ColorEditor from "../../../color-editor/color-editor";

import { BaseFeatureProps } from "../../base";


type ColorProps = BaseFeatureProps<ColorFeature>;


const Light: FunctionComponent<ColorProps> = (props) => {

    const { deviceState, feature, onChange } = props;
    const value = {};
    for (const innerFeature of feature.features) {
      value[innerFeature.name] = deviceState[feature.property]?.[innerFeature.property] ?? 0;
    }
    return <ColorEditor
      onChange={(color) => onChange(feature.endpoint, { color })}
      value={value as AnyColor}
      format={feature.name} />
}
export default Light;