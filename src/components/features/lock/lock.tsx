import React, { FunctionComponent } from "react";
import { LockFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import Composite from "../composite/composite";

type LockProps = BaseFeatureProps<LockFeature>

const Lock: FunctionComponent<LockProps> = (props) => <Composite type="lock" {...props} />
export default Lock;