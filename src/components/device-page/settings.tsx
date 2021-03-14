/* eslint-disable react/display-name */
import React, { Component, ReactNode } from "react";
import { Device, DeviceState, KVP } from "../../types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import Form from '@rjsf/bootstrap-4';
import { JSONSchema7 } from "json-schema"
import { ISubmitEvent, UiSchema } from "@rjsf/core";
import deviceSpecificSchema from "./deviceSpecificSchema.json";
import { ModelLink } from "../vendor-links/verndor-links";
type SettingsType = "generic" | "specific";

type DeviceSettingsProps = {
    device: Device;
    type: SettingsType;
}
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
const genericUiSchema: UiSchema = {
    "ui:order": ["friendly_name", "retain", "retention", "qos", "filtered_attributes", "*"]
};

const toType = (obj: unknown): string => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()

export class DeviceSettings extends Component<DeviceSettingsProps & GlobalState & PropsFromStore & DeviceApi> {
    updateConfig = (params: ISubmitEvent<KVP | KVP[]>): void => {
        const { formData } = params;
        const { setDeviceOptions, type, bridgeInfo: { config_schema: configSchema, config }, device } = this.props;
        const genericDeviceSettingsSchema = (configSchema.definitions?.device ?? { properties: {} }) as JSONSchema7;
        const genericPropNames = Object.keys(genericDeviceSettingsSchema.properties as KVP);
        const deviceConfig = { ...config?.device_options, ...config?.devices[device.ieee_address] };

        if (type === "generic") {
            setDeviceOptions(device.ieee_address, formData);
        } else {
            const params = {};
            Object.entries(deviceConfig)
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
        const { type, bridgeInfo: { config_schema: configSchema, config }, device } = this.props;
        const genericDeviceSettingsSchema = (configSchema.definitions?.device ?? { properties: {} }) as JSONSchema7;
        const deviceConfig = { ...config?.device_options, ...config?.devices[device.ieee_address] };
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
            return { schema: deviceSpecificSchema, data: filteredDeviceConfig, uiSchema: {} }
        }
    }
    renderHelp(): ReactNode {
        const { type, device } = this.props;
        if (type === "specific") {
            return <h2>Get possible device specific praemeters on <ModelLink device={device} anchor="device-type-specific-configuration" /></h2>
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

            />
        </>;

    }
}

const mappedProps = ["deviceStates", "bridgeInfo"];

const ConnectedDeviceSettingsPage = connect<DeviceSettingsProps, {}, GlobalState, PropsFromStore & DeviceApi>(mappedProps, actions)(DeviceSettings);
export default ConnectedDeviceSettingsPage;
