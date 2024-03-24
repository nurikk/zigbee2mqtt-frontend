import React, { FunctionComponent } from 'react';
import { SwitchFeature } from '../../../types';
import { BaseFeatureProps } from '../base';
import { TranslatedComposite } from '../composite/composite';

type SwitchProps = BaseFeatureProps<SwitchFeature>;

const Switch: FunctionComponent<SwitchProps> = (props) => <TranslatedComposite type="switch" {...props} />;

export default Switch;
