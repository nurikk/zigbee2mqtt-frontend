import React, { FunctionComponent } from "react";

import { BinaryFeature, FeatureAccessMode } from "../../../types";
import Toggle from "../../toggle";

import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

type BinaryProps = BaseFeatureProps<BinaryFeature>;

const Binary: FunctionComponent<BinaryProps> = (props) => {
  const { feature: { access, endpoint, name, property, value_off: valueOff, value_on: valueOn }, deviceState, onChange } = props;
  if (access & FeatureAccessMode.ACCESS_WRITE) {
    return <Toggle
      onChange={(value) => onChange(endpoint, { [property]: value })}
      value={deviceState[property]}
      valueOn={valueOn}
      valueOff={valueOff}
    />
  } else if (access & FeatureAccessMode.ACCESS_STATE) {
    return <BaseViewer {...props} />
  } else {
    return <NoAccessError {...props} />
  }
}
export default Binary;