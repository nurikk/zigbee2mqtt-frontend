import React, { useState } from "react";
import Button from "../button";
import { Device, Endpoint, Group } from "../../types";
import { getEndpoints } from "../../utils";
import EndpointPicker from "../endpoint-picker";
import DevicePicker from "../device-picker";
import { useTranslation } from "react-i18next";

import { WithDevices } from "../../store";


type AddDeviceToGroupState = {
    device?: string;
    endpoint?: Endpoint;
}

type AddDeviceToGroupProps = {
    group: Group;
    addDeviceToGroup(deviceName: string, groupName: string): void;
} & WithDevices;

export function AddDeviceToGroup(props: AddDeviceToGroupProps): JSX.Element {
    const [state, setState] = useState<AddDeviceToGroupState>({});
    const { addDeviceToGroup, group, devices } = props;
    const { device, endpoint } = state;

    const deviceObj = devices[device as string] as Device;
    const endpoints = getEndpoints(deviceObj);
    const { t } = useTranslation(["groups", "zigbee"]);

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

    return <>
        <div className="mb-3">
            <DevicePicker label={t('zigbee:device')} value={device as string} devices={devices} onChange={onDeviceSelect} />
            <EndpointPicker label={t('zigbee:endpoint')} values={endpoints} value={endpoint as Endpoint} onChange={onEpChange} />
        </div>
        <div className="d-flex">
            <div className="ms-auto">
                <Button<void> type="button" onClick={onSubmit} className="btn btn-primary">{t('add_to_group')}</Button>
            </div>
        </div>
    </>;

}
