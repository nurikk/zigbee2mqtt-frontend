import React, { FunctionComponent } from 'react';
import { CompositeFeature, Endpoint, FeatureAccessMode, GenericExposedFeature, ListFeature } from '../../../types';
import RangeListEditor from '../../range-list-editor/range-list-editor';
import { BaseFeatureProps, BaseViewer, NoAccessError } from '../base';
import ListEditor from '../list-editor';

const List: FunctionComponent<
    BaseFeatureProps<ListFeature> & { parentFeatures: (CompositeFeature | GenericExposedFeature)[] }
> = (props) => {
    const { feature, deviceState, onChange, minimal, parentFeatures } = props;
    const { access = FeatureAccessMode.ACCESS_WRITE, endpoint, property, item_type: itemType } = feature;
    if (access & FeatureAccessMode.ACCESS_WRITE) {
        if (itemType == 'number') {
            return (
                <RangeListEditor
                    onChange={(value) => onChange(endpoint as Endpoint, property ? { [property]: value } : value)}
                    value={property ? (deviceState[property] as number[]) : []}
                    minimal={minimal}
                />
            );
        } else {
            return (
                <ListEditor
                    feature={itemType}
                    parentFeatures={[...parentFeatures, feature]}
                    onChange={(value) => onChange(endpoint as Endpoint, property ? { [property]: value } : value)}
                    value={property ? ((deviceState[property] ?? []) as any[]) : []}
                />
            );
        }
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
        return <BaseViewer {...props} />;
    } else {
        return <NoAccessError {...props} />;
    }
};

export default List;
