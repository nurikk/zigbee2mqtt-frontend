import React, { ChangeEvent, SelectHTMLAttributes } from "react";
import { Device, ObjectType } from "../../types";
import { getDeviceDisplayName } from "../../utils";
import { Group } from "../../store";
import { useTranslation } from "react-i18next";

interface DevicePickerProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    value: string | number;
    label?: string;
    devices: Record<string, Device>;
    groups?: Group[];
    onChange(device: Device | Group, type: ObjectType): void;
}
export default function DevicePicker(props: DevicePickerProps): JSX.Element {
    const { t } = useTranslation("common");
    const { devices, value, label, onChange, groups = [], ...rest } = props;

    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { } = this.props;
        const { value } = e.target as HTMLSelectElement;

        if (devices[value]) {
            onChange(devices[value] as Device, "device");
        } else {
            const group = groups.find(g => parseInt(value, 10) === g.id);
            onChange(group as Group, "group");
        }
    }
    let options = [<option key="hidden" hidden>{t('select_device') }</option>];
    const devicesOptions = [] as JSX.Element[];
    Object.values(devices).forEach((device) => {
        devicesOptions.push(<option
            title={device.definition?.description}
            key={device.ieee_address}
            value={device.ieee_address}
        >{getDeviceDisplayName(device)}</option>);
    });
    if (groups && groups.length) {
        const groupOptions = groups.map(group => <option
            key={group.friendly_name}
            value={group.id}>{group.friendly_name}
        </option>);
        options.push(<optgroup key="Groups" label={t('groups')}>{groupOptions}</optgroup>);
        options.push(<optgroup key="Devices" label={t('devices')}>{devicesOptions}</optgroup>);
    } else {
        options = options.concat(devicesOptions);
    }
    return <div className="form-group">
        {label && <label className="form-label">{label}</label>}
        <select
            value={value}
            onChange={onSelectHandler}
            className="form-control"
            {...rest}
        >{options}
        </select>
    </div>;


}
