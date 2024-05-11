import React, { Component, ReactNode } from 'react';
import { KVP } from '../../types';
import { JSONSchema7 } from 'json-schema';
import { ISubmitEvent, UiSchema } from '@rjsf/core';
import { DescriptionField, TitleField } from '../../i18n/rjsf-translation-fields';
import merge from 'lodash/merge';
import { DeviceSettingsProps, DeviceSettingsState, Form, ParamValue } from './settings';

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
    onFormChange = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        this.setState({ updatedDeviceConfig: formData });
    };
    updateConfig = async (params: ISubmitEvent<KVP | KVP[]>): Promise<void> => {
        const { formData } = params;
        const { setDeviceOptions, device } = this.props;
        await setDeviceOptions(device.ieee_address, formData as Record<string, unknown>);
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
            <div>
                <div className="card alert alert-info" role="alert">
                    <div className="card-body">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-info-circle-fill flex-shrink-0 me-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>

                        <a
                            href="https://www.zigbee2mqtt.io/guide/configuration/devices-groups.html#common-device-options"
                            target="_blank"
                            rel="noreferrer"
                            className="alert-link align-middle"
                        >
                            Read about this in the documentation…
                        </a>
                    </div>
                </div>

                <Form
                    schema={schema}
                    formData={data}
                    onSubmit={this.updateConfig}
                    onChange={this.onFormChange}
                    uiSchema={uiSchema}
                    fields={{ TitleField, DescriptionField }}
                />
            </div>
        );
    }
}
