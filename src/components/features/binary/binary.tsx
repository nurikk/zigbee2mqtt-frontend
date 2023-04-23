import React, { FunctionComponent } from 'react';

import { BinaryFeature, Endpoint, FeatureAccessMode } from '../../../types';
import Toggle from '../../toggle';

import { BaseFeatureProps, BaseViewer, NoAccessError } from '../base';

type BinaryProps = BaseFeatureProps<BinaryFeature>;

const Binary: FunctionComponent<BinaryProps> = (props) => {
    const {
        feature: {
            access = FeatureAccessMode.ACCESS_WRITE,
            endpoint,
            name,
            property,
            value_off: valueOff,
            value_on: valueOn,
        },
        deviceState,
        onChange,
        minimal,
    } = props;
    if (access & FeatureAccessMode.ACCESS_WRITE) {
        return (
            <Toggle
                onChange={(value) => onChange(endpoint as Endpoint, { [property]: value })}
                value={deviceState[property]}
                valueOn={valueOn}
                valueOff={valueOff}
                minimal={minimal}
                name={name}
            />
        );
    } else if (access & FeatureAccessMode.ACCESS_STATE) {
        return <BaseViewer {...props} />;
    } else {
        return <NoAccessError {...props} />;
    }
};
export default Binary;
