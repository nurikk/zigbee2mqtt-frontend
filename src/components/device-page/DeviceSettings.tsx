import React, { Component, ReactNode } from 'react';
import { KVP } from '../../types';
import { JSONSchema7 } from 'json-schema';
import { ISubmitEvent, UiSchema } from '@rjsf/core';
import { DescriptionField, TitleField } from '../../i18n/rjsf-translation-fields';
import merge from 'lodash/merge';
import { DeviceSettingsProps, DeviceSettingsState, Form, ParamValue } from './settings';
import { computeSettingsDiff } from '../../utils';
import { ReadTheDocsInfo } from '../ReadTheDocsInfo';

const genericUiSchema: UiSchema = {
    'ui:order': ['friendly_name', 'disabled', 'retain', 'retention', 'qos', 'filtered_attributes', '*'],
};

export class DeviceSettings extends Component<DeviceSettingsProps, DeviceSettingsState> {
    state = {
        newSetting: {
            key: '',
            value: '',
            type: '',
        } as ParamValue,

        updatedDeviceConfig: {},
    };
    getGenericDeviceSettingsSchema(): JSONSchema7 {
        const {
            bridgeInfo: { config_schema: configSchema = {} },
        } = this.props;
        return (configSchema.definitions?.device ?? { properties: {} }) as JSONSchema7;
    }
    getDeviceConfig(): KVP | KVP[] {
        const {
            bridgeInfo: { config },
            device,
        } = this.props;
        const { updatedDeviceConfig } = this.state;
        return merge({}, config?.device_options, config?.devices[device.ieee_address], updatedDeviceConfig);
    }
    updateConfig = async (params: ISubmitEvent<KVP | KVP[]>): Promise<void> => {
        const { formData } = params;
        const { data } = this.getSchemaAndConfig();
        const { setDeviceOptions, device } = this.props;
        const diff = computeSettingsDiff(data, formData);
        await setDeviceOptions(device.ieee_address, diff as Record<string, unknown>);
        this.setState({ updatedDeviceConfig: {} });
    };

    getSchemaAndConfig(): { schema: JSONSchema7; data: KVP | KVP[]; uiSchema: UiSchema } {
        const genericDeviceSettingsSchema = this.getGenericDeviceSettingsSchema();
        const deviceConfig = this.getDeviceConfig();
        return { schema: genericDeviceSettingsSchema, data: deviceConfig, uiSchema: genericUiSchema };
    }

    render(): ReactNode {
        const { schema, data, uiSchema } = this.getSchemaAndConfig();
        return (
            <>
                <ReadTheDocsInfo
                    docsUrl={'https://www.zigbee2mqtt.io/guide/configuration/devices-groups.html#common-device-options'}
                />

                <Form
                    schema={schema}
                    formData={data}
                    onSubmit={this.updateConfig}
                    uiSchema={uiSchema}
                    fields={{ TitleField, DescriptionField }}
                />
            </>
        );
    }
}
