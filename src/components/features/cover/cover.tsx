import React, { FunctionComponent } from 'react';
import { CoverFeature } from '../../../types';
import { ValueWithLabelOrPrimitive } from '../../enum-editor/enum-editor';
import { BaseFeatureProps } from '../base';
import { TranslatedComposite } from '../composite/composite';

const stepsConfiguration = {
    position: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>((item) => ({ value: item, name: item + '' })),
    tilt: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>((item) => ({ value: item, name: item + '' })),
};

type CoverProps = BaseFeatureProps<CoverFeature>;

const Cover: FunctionComponent<CoverProps> = (props) => (
    <TranslatedComposite type="cover" {...props} stepsConfiguration={stepsConfiguration} />
);

export default Cover;
