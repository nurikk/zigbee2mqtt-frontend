import React, { FunctionComponent } from "react";
import { FanFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type FanProps = BaseFeatureProps<FanFeature>

const Fan: FunctionComponent<FanProps> = (props) => <Composite type="fan" {...props} />;
export default Fan;