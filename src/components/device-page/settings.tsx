/* eslint-disable react/display-name */
import React, { Component } from "react";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions, { DeviceApi } from "../../actions";
import Form from '@rjsf/bootstrap-4';

type DeviceSettingsProps = {
    device: Device;
}
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}

const log = (type) => console.log.bind(console, type);

// eslint-disable-next-line react/prefer-stateless-function
export class DeviceSettings extends Component<DeviceSettingsProps & GlobalState & PropsFromStore & DeviceApi, {}> {
    updateConfig = (name: string, value: unknown): void => {

    }
    render() {
        return <div>Under construction</div>;
        // const { bridgeInfo: { configSchema, config } } = this.props;
        // console.log(configSchema);
        // return <Form schema={configSchema}
        //     formData={config}
        //     onChange={log("changed")}
        //     onSubmit={log("submitted")}
        //     onError={log("errors")} />;

    }
}

const mappedProps = ["deviceStates", "bridgeInfo"];

const ConnectedDeviceSettingsPage = connect<DeviceSettingsProps, {}, GlobalState, PropsFromStore & DeviceApi>(mappedProps, actions)(DeviceSettings);
export default ConnectedDeviceSettingsPage;