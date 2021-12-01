import React, { useState } from "react";
import Button from "../button";
import { Device, Endpoint, Group } from "../../types";
import { getEndpoints } from "../../utils";
import EndpointPicker from "../endpoint-picker";
import DevicePicker from "../device-picker";
import { useTranslation } from "react-i18next";
import { WithDevices } from "../../store";

type AddDeviceToGroupProps = {
    group: Group;
    addDeviceToGroup(deviceName: string, groupName: string): void;
} & WithDevices;

export function AddDeviceToGroup(props: AddDeviceToGroupProps): JSX.Element {
    const [endpoint, setEndpoint] = useState<Endpoint>("");
    const [device, setDevice] = useState<string>("");
    const { addDeviceToGroup, group, devices } = props;


    const deviceObj = devices[device as string];
    const endpoints = getEndpoints(deviceObj);
    const { t } = useTranslation(["groups", "zigbee"]);

    const onSubmit = (): void => {
        addDeviceToGroup(endpoint ? `${device}/${endpoint}` : device as string, group.friendly_name);
    };
    const onDeviceSelect = (d: Device): void => {
        const eps = getEndpoints(d);
        setDevice(d.ieee_address)
        setEndpoint(eps[0]);
    };

    const onEpChange = (ep: Endpoint): void => {
        setEndpoint(ep);
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
