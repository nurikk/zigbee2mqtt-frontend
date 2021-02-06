/* eslint-disable react/display-name */
import React, { Component } from "react";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import Form from '@rjsf/bootstrap-4';
import { JSONSchema7 } from "json-schema"
type DeviceSettingsProps = {
    device: Device;
}
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
const uiSchema = {
    "ui:order": ["friendly_name", "retain", "retention", "qos", "filtered_attributes", "*"]
};
export class DeviceSettings extends Component<DeviceSettingsProps & GlobalState & PropsFromStore & DeviceApi, {}> {
    updateConfig = ({ formData }): void => {
        const { setDeviceOptions, device } = this.props;
        setDeviceOptions(device.ieee_address, formData);
    }
    render() {
        const { bridgeInfo: { config_schema: configSchema, config }, device } = this.props;
        const deviceConfig = { ...config?.device_options, ...config?.devices[device.ieee_address] };

        return <Form schema={configSchema.definitions?.device as JSONSchema7}
            formData={deviceConfig}
            onSubmit={this.updateConfig}
            uiSchema={uiSchema}
        />;

    }
}

const mappedProps = ["deviceStates", "bridgeInfo"];

const ConnectedDeviceSettingsPage = connect<DeviceSettingsProps, {}, GlobalState, PropsFromStore & DeviceApi>(mappedProps, actions)(DeviceSettings);
export default ConnectedDeviceSettingsPage;
