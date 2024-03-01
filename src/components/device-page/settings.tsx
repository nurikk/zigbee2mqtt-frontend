import { Device, KVP } from '../../types';
import { DeviceApi } from '../../actions/DeviceApi';

import { UiSchema, withTheme } from '@rjsf/core';
import { Theme as Bootstrap5Theme } from '@rjsf/bootstrap-5';

export const Form = withTheme(Bootstrap5Theme);

import { WithBridgeInfo } from '../../store';

export interface DeviceSettingsProps extends Pick<DeviceApi, 'setDeviceOptions'>, WithBridgeInfo {
    device: Device;
}

export type ParamValue = {
    key: string;
    value: unknown;
    type: unknown;
};

export type DeviceSettingsState = {
    newSetting: ParamValue;
    updatedDeviceConfig: KVP | KVP[];
};
