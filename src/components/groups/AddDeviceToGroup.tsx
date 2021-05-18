import React, { useState } from "react";
import Button from "../button";
import { Device, Endpoint } from "../../types";
import { getEndpoints } from "../../utils";
import EndpointPicker from "../endpoint-picker";
import DevicePicker from "../device-picker";
import { useTranslation } from "react-i18next";

import { Group } from "../../store";


type AddDeviceToGroupState = {
    device?: string;
    endpoint?: Endpoint;
}

type AddDeviceToGroupProps = {
    devices: Record<string, Device>;
    group: Group;
    addDeviceToGroup(deviceName: string, groupName: string): void;
}

export function AddDeviceToGroup(props: AddDeviceToGroupProps): JSX.Element {
    const [state, setState] = useState<AddDeviceToGroupState>({});
    const { addDeviceToGroup, group, devices } = props;
    const { device, endpoint } = state;

    const deviceObj = devices[device as string] as Device;
    const endpoints = getEndpoints(deviceObj);
    const { t } = useTranslation("groups");

    const onSubmit = (): void => {
        addDeviceToGroup(endpoint ? `${device}/${endpoint}` : device as string, group.friendly_name);
    };
    const onDeviceSelect = (device: Device): void => {
        const endpoints = getEndpoints(device);
        setState({ device: device.ieee_address, endpoint: endpoints[0] });
    };

    const onEpChange = (endpoint: Endpoint): void => {
        setState({ endpoint });
    };

    return <div className="row row-cols-lg-auto align-items-center">

        <DevicePicker value={device as string} devices={devices} onChange={onDeviceSelect} />
        <EndpointPicker values={endpoints} value={endpoint as Endpoint} onChange={onEpChange} />

        <Button<void> type="button" onClick={onSubmit} className="btn btn-primary">{t('add_to_group')}</Button>
    </div>;

}
