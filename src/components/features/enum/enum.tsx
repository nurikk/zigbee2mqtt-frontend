

import React, { FunctionComponent } from "react";

import { EnumFeature, FeatureAccessMode } from "../../../types";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";

import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

type EnumProps = BaseFeatureProps<EnumFeature>

const Enum: FunctionComponent<EnumProps> = (props) => {
  const { onChange, feature: { access, name, values, endpoint, property }, deviceState } = props;
  if (access & FeatureAccessMode.ACCESS_WRITE) {
    return <EnumEditor
      onChange={(value) => onChange(endpoint, { [name]: value })}
      values={values as unknown as ValueWithLabelOrPrimitive[]}
      value={deviceState[property] as ValueWithLabelOrPrimitive}
    />
  } else if (access & FeatureAccessMode.ACCESS_STATE) {
    return <BaseViewer {...props} />
  } else {
    return <NoAccessError {...props} />
  }
}
export default Enum;