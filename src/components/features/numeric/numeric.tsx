import React, { FunctionComponent } from "react";
import { FeatureAccessMode, NumericFeature } from "../../../types";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import RangeEditor from "../../range-editor/range-editor";
import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

interface NumericProps extends BaseFeatureProps<NumericFeature> {
  steps?: ValueWithLabelOrPrimitive[];
}

const Numeric: FunctionComponent<NumericProps> = (props) => {
  const { feature: { access, endpoint, name, property, unit, value_max: valueMax, value_min: valueMin }, deviceState, steps, onChange } = props;
  if (access & FeatureAccessMode.ACCESS_WRITE) {
    return <RangeEditor
      onChange={(value) => onChange(endpoint, { [name]: value })}
      value={deviceState[property] as number ?? 0}
      min={valueMin}
      max={valueMax}
      steps={steps}
      unit={unit}
    />
  } else if (access & FeatureAccessMode.ACCESS_STATE) {
    return <BaseViewer {...props} />
  } else {
    return <NoAccessError {...props} />
  }
}

export default Numeric;