import React, { FunctionComponent } from 'react';
import { ClimateFeature } from '../../../types';

import { BaseFeatureProps } from '../base';
import { TranslatedComposite } from '../composite/composite';

type ClimateProps = BaseFeatureProps<ClimateFeature>;

const Climate: FunctionComponent<ClimateProps> = (props) => <TranslatedComposite type="climate" {...props} />;

export default Climate;
