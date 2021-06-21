import React, { Component, ReactNode } from "react";
import { BridgeInfo, Device, KVP } from "../../types";
import { DeviceApi } from "../../actions/DeviceApi";
import Form from '@rjsf/bootstrap-4';
import { JSONSchema7 } from "json-schema"
import { ISubmitEvent, UiSchema } from "@rjsf/core";

import customFields from "./../../i18n/rjsf-translation-fields";
import merge from "lodash/merge";

interface DeviceSettingsProps extends Pick<DeviceApi, "setDeviceOptions"> {
    device: Device;
    bridgeInfo: BridgeInfo;
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
        return merge({}, updatedDeviceConfig, config?.device_options, config?.devices[device.ieee_address]);
    }
    onFormChange = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        this.setState({ updatedDeviceConfig: formData });
    }
    updateConfig = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        const { setDeviceOptions, device } = this.props;
        setDeviceOptions(device.ieee_address, formData as Record<string, unknown>);
    }

    getSchemaAndConfig(): { schema: JSONSchema7, data: KVP | KVP[], uiSchema: UiSchema } {
        const genericDeviceSettingsSchema = this.getGenericDeviceSettingsSchema();
        const deviceConfig = this.getDeviceConfig();
        return { schema: genericDeviceSettingsSchema, data: deviceConfig, uiSchema: genericUiSchema };
    }

    render(): ReactNode {
        const { schema, data, uiSchema } = this.getSchemaAndConfig();
        return <Form schema={schema as JSONSchema7}
            formData={data}
            onSubmit={this.updateConfig}
            onChange={this.onFormChange}
            uiSchema={uiSchema}
            fields={customFields}
        />;
    }
}
