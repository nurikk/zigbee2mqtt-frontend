import React, { FunctionComponent } from "react";
import { LightFeature } from "../../../types";
import { scale } from "../../../utils";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type LightProps = BaseFeatureProps<LightFeature>
const stepsConfiguration = {
  brightness: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: scale(item, [0, 100], [0, 255]), name: item + '%' }))
};

const Light: FunctionComponent<LightProps> = (props) => <Composite type="light" {...props} stepsConfiguration={stepsConfiguration} />;
export default Light;
