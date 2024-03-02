import React, { FunctionComponent } from 'react';
import { FanFeature } from '../../../types';
import { BaseFeatureProps } from '../base';
import { TranslatedComposite } from '../composite/composite';

type FanProps = BaseFeatureProps<FanFeature>;

const Fan: FunctionComponent<FanProps> = (props) => <TranslatedComposite type="fan" {...props} />;
export default Fan;
