import React, { FunctionComponent } from 'react';
import { LightFeature } from '../../../types';
import { scale } from '../../../utils';
import { ValueWithLabelOrPrimitive } from '../../enum-editor/enum-editor';
import { BaseFeatureProps } from '../base';
import Composite from '../composite/composite';

type LightProps = BaseFeatureProps<LightFeature>;
const stepsConfiguration = {
    brightness: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>((item) => ({
        value: scale(item, [0, 100], [0, 255]),
        name: item + '%',
    })),
    color_temp: [1000, 2000, 3000, 4000, 5000, 6500].map<ValueWithLabelOrPrimitive>((kelvin) => ({
        value: 1000000.0 / kelvin,
        name: kelvin + 'K',
    })),
};

const Light: FunctionComponent<LightProps> = (props) => (
    <Composite type="light" {...props} stepsConfiguration={stepsConfiguration} />
);
export default Light;
