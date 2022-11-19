import React, { FunctionComponent } from "react";
import { Endpoint, FeatureAccessMode, NumericFeature } from "../../../types";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import RangeEditor from "../../range-editor/range-editor";
import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

interface NumericProps extends BaseFeatureProps<NumericFeature> {
    steps?: ValueWithLabelOrPrimitive[];
}

const Numeric: FunctionComponent<NumericProps> = (props) => {
    const { feature: { presets, access = FeatureAccessMode.ACCESS_WRITE, endpoint, property, unit, value_max: valueMax, value_min: valueMin, value_step: valueStep }, deviceState, steps, onChange, minimal } = props;
    if (access & FeatureAccessMode.ACCESS_WRITE) {
        return <RangeEditor
            onChange={(value) => onChange(endpoint as Endpoint, { [property]: value })}
            value={(deviceState[property] ?? '') as number }
            min={valueMin}
            max={valueMax}
            step={valueStep}
            steps={presets && presets.length ? presets as ValueWithLabelOrPrimitive[] : steps}
            unit={unit}
            minimal={minimal}
        />
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
        return <BaseViewer {...props} />
    } else {
        return <NoAccessError {...props} />
    }
}

export default Numeric;
