/* eslint-disable react/display-name */
import React, { Component, ReactNode } from "react";
import { Device, KVP } from "../../types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import Form from '@rjsf/bootstrap-4';
import { JSONSchema7 } from "json-schema"
import { ISubmitEvent, UiSchema } from "@rjsf/core";
import deviceSpecificSchema from "./deviceSpecificSchema.json";
import { ModelLink } from "../vendor-links/verndor-links";
import customFields from "./../../i18n/rjsf-translation-fields";
type SettingsType = "generic" | "specific";

type DeviceSettingsProps = {
    device: Device;
    type: SettingsType;
}


const genericUiSchema: UiSchema = {
    "ui:order": ["friendly_name", "retain", "retention", "qos", "filtered_attributes", "*"]
};

const toType = (obj: unknown): string => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

export class DeviceSettings extends Component<DeviceSettingsProps & GlobalState & DeviceApi> {
    getGenericDeviceSettingsSchema(): JSONSchema7 {
        const { bridgeInfo: { config_schema: configSchema } } = this.props;
        return (configSchema.definitions?.device ?? { properties: {} }) as JSONSchema7;
    }
    getDeviceConfig(): Record<string, unknown> {
        const { bridgeInfo: { config }, device } = this.props;
        return { ...config?.device_options, ...config?.devices[device.ieee_address] };
    }
    updateConfig = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        const { setDeviceOptions, type, device } = this.props;

        const genericPropNames = Object.keys(this.getGenericDeviceSettingsSchema().properties as KVP);

        if (type === "generic") {
            setDeviceOptions(device.ieee_address, formData as Record<string, unknown>);
        } else {
            const params = {};
            Object.entries(this.getDeviceConfig())
                .filter(([key]) => !genericPropNames.includes(key))
                .forEach(([key]) => {
                    const updatedProp = (formData as KVP[]).find(f => f.key === key) as KVP;
                    if (updatedProp !== undefined) {
                        params[key] = updatedProp.value;
                    } else {
                        params[key] = undefined;
                    }
                });
            setDeviceOptions(device.ieee_address, params);
        }
    }

    getSchemaAndConfig(): { schema: JSONSchema7, data: KVP | KVP[], uiSchema: UiSchema } {
        const { type } = this.props;
        const genericDeviceSettingsSchema = this.getGenericDeviceSettingsSchema();
        const deviceConfig = this.getDeviceConfig();
        if (type === "generic") {
            return { schema: genericDeviceSettingsSchema, data: deviceConfig, uiSchema: genericUiSchema };
        } else {
            const genericPropNames = Object.keys(genericDeviceSettingsSchema.properties as KVP);
            const filteredDeviceConfig = Object.entries(deviceConfig)
                .filter(([key]) => !genericPropNames.includes(key))
                .map(([key, value]) => {
                    const valueType = toType(value);
                    return { value, valueType, key };
                })
            return { schema: deviceSpecificSchema as JSONSchema7, data: [{}].concat(filteredDeviceConfig), uiSchema: {} }
        }
    }
    renderHelp(): ReactNode {
        const { type, device } = this.props;
        if (type === "specific") {
            return <h2>Get possible device specific parameters on <ModelLink device={device} anchor="device-type-specific-configuration" /></h2>
        }
    }
    render(): ReactNode {

        const { schema, data, uiSchema } = this.getSchemaAndConfig();

        return <>
            {this.renderHelp()}
            <Form schema={schema as JSONSchema7}
                formData={data}
                onSubmit={this.updateConfig}
                uiSchema={uiSchema}
                fields={customFields}
            />
        </>;
    }
}

const mappedProps = ["bridgeInfo"];

const ConnectedDeviceSettingsPage = connect<DeviceSettingsProps, unknown, GlobalState, DeviceApi>(mappedProps, actions)(DeviceSettings);
export default ConnectedDeviceSettingsPage;
