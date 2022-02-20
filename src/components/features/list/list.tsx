import React, { FunctionComponent } from "react";
import { Endpoint, FeatureAccessMode, ListFeature } from '../../../types';
import RangeListEditor from "../../range-list-editor/range-list-editor";
import { BaseFeatureProps, BaseViewer, NoAccessError } from "../base";
import { assertUnreachable } from '../../../utils';

const List: FunctionComponent<BaseFeatureProps<ListFeature>> = (props) => {
    const { feature, deviceState, onChange, minimal } = props;
    const { access = FeatureAccessMode.ACCESS_WRITE, endpoint, property, item_type: itemType } = feature;
    if (access & FeatureAccessMode.ACCESS_WRITE) {
        switch (itemType) {
            case 'number':
                return <RangeListEditor
                    onChange={(value) => onChange(endpoint as Endpoint, { [property]: value })}
                    value={deviceState[property] as number[] ?? []}
                    minimal={minimal}
                />
            default:
                assertUnreachable(itemType);
                return <pre>{JSON.stringify(feature, null, 4)}</pre>
        }
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
        return <BaseViewer {...props} />
    } else {
        return <NoAccessError {...props} />
    }
}

export default List;
