import React, { FunctionComponent } from 'react';
import { ClimateFeature } from '../../../types';

import { BaseFeatureProps } from '../base';
import Composite from '../composite/composite';

type ClimateProps = BaseFeatureProps<ClimateFeature>;

const Climate: FunctionComponent<ClimateProps> = (props) => <Composite type="climate" {...props} />;

export default Climate;
