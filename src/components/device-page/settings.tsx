import React, { Component, ReactNode } from "react";
import { Device, KVP } from "../../types";
import { DeviceApi } from "../../actions/DeviceApi";

import { JSONSchema7 } from "json-schema"
import { ISubmitEvent, UiSchema, withTheme } from "@rjsf/core";
import { Theme as Bootstrap5Theme } from '@rjsf/bootstrap-5';

const Form = withTheme(Bootstrap5Theme);

import customFields from "./../../i18n/rjsf-translation-fields";
import merge from "lodash/merge";
import { WithBridgeInfo } from "../../store";

interface DeviceSettingsProps extends Pick<DeviceApi, "setDeviceOptions">, WithBridgeInfo {
    device: Device;
}

type ParamValue = {
    key: string;
    value: unknown;
    type: unknown;
}

const genericUiSchema: UiSchema = {
    "ui:order": ["friendly_name", "retain", "retention", "qos", "filtered_attributes", "*"]
};

type DeviceSettingsState = {
    newSetting: ParamValue;
    updatedDeviceConfig: KVP | KVP[];
}
export default class DeviceSettings extends Component<DeviceSettingsProps, DeviceSettingsState> {
    state = {
        newSetting: {
            key: "",
            value: "",
            type: ""
        } as ParamValue,

        updatedDeviceConfig: {}
    }
    getGenericDeviceSettingsSchema(): JSONSchema7 {
        const { bridgeInfo: { config_schema: configSchema = {} } } = this.props;
        return (configSchema.definitions?.device ?? { properties: {} }) as JSONSchema7;
    }
    getDeviceConfig(): KVP | KVP[] {
        const { bridgeInfo: { config }, device } = this.props;
        const { updatedDeviceConfig } = this.state;
        return merge({}, config?.device_options, config?.devices[device.ieee_address], updatedDeviceConfig);
    }
    onFormChange = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        this.setState({ updatedDeviceConfig: formData });
    }
    updateConfig = async (params: ISubmitEvent<KVP | KVP[]>): Promise<void> => {
        const { formData } = params;
        const { setDeviceOptions, device } = this.props;
        await setDeviceOptions(device.ieee_address, formData as Record<string, unknown>);
        this.setState({ updatedDeviceConfig: {} });
    }

    getSchemaAndConfig(): { schema: JSONSchema7, data: KVP | KVP[], uiSchema: UiSchema } {
        const genericDeviceSettingsSchema = this.getGenericDeviceSettingsSchema();
        const deviceConfig = this.getDeviceConfig();
        return { schema: genericDeviceSettingsSchema, data: deviceConfig, uiSchema: genericUiSchema };
    }

    render(): ReactNode {
        const { schema, data, uiSchema } = this.getSchemaAndConfig();
        return <Form schema={schema}
            formData={data}
            onSubmit={this.updateConfig}
            onChange={this.onFormChange}
            uiSchema={uiSchema}
            fields={customFields}
        />;
    }
}
