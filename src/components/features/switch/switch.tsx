import React, { FunctionComponent } from 'react';
import { SwitchFeature } from '../../../types';
import { BaseFeatureProps } from '../base';
import Composite from '../composite/composite';

type SwitchProps = BaseFeatureProps<SwitchFeature>;

const Switch: FunctionComponent<SwitchProps> = (props) => <Composite type="switch" {...props} />;

export default Switch;
