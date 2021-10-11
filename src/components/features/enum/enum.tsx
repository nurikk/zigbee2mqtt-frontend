

import React, { FunctionComponent } from "react";

import { Endpoint, EnumFeature, FeatureAccessMode } from "../../../types";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";

import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";

type EnumProps = BaseFeatureProps<EnumFeature>
const VERY_BIG_ENUM_SIZE = 4;

const Enum: FunctionComponent<EnumProps> = (props) => {
    const { onChange, feature: { access = FeatureAccessMode.ACCESS_WRITE, name, values, endpoint, property }, deviceState, minimal } = props;

    const thisIsVeryBigEnumeration = values.length > VERY_BIG_ENUM_SIZE;

    if (access & FeatureAccessMode.ACCESS_WRITE) {
        return <EnumEditor
            onChange={(value) => onChange(endpoint as Endpoint, { [name]: value })}
            values={values as unknown as ValueWithLabelOrPrimitive[]}
            value={deviceState[property] as ValueWithLabelOrPrimitive}
            minimal={minimal || thisIsVeryBigEnumeration}
        />
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
        return <BaseViewer {...props} />
    } else {
        return <NoAccessError {...props} />
    }
}
export default Enum;
