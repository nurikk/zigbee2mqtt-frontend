import React, { FunctionComponent } from 'react';
import { LockFeature } from '../../../types';
import { BaseFeatureProps } from '../base';
import { TranslatedComposite } from '../composite/composite';

type LockProps = BaseFeatureProps<LockFeature>;

const Lock: FunctionComponent<LockProps> = (props) => <TranslatedComposite type="lock" {...props} />;
export default Lock;
