import React, { ChangeEvent, Component, SelectHTMLAttributes } from "react";
import { Device, ObjectType } from "../../types";
import { getDeviceDisplayName } from "../../utils";
import { Group } from "../../store";
const DELIMITER = '|';
interface DevicePickerProps {
    type: ObjectType;
    value: string | number;
    devices: Map<string, Device>;
    groups?: Group[];
    onChange(device: Device | Group, type: ObjectType): void;
}
export default class DevicePicker extends Component<DevicePickerProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>, {}> {
    onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onChange, devices, groups = [] } = this.props;
        const { value } = e.target as HTMLSelectElement;

        if (devices.has(value)) {
            onChange(devices.get(value), "device");
        } else {
            const group = groups.find(g => parseInt(value, 10) === g.id);
            onChange(group, "group");
        }
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { devices, groups, value, type, onChange, ...rest } = this.props;
        let options = [<option key="hidden" hidden>Select device</option>];

        const devicesOptions = [];
        devices.forEach((device) => {
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
            options.push(<optgroup key="Groups" label="Groups">{groupOptions}</optgroup>);
            options.push(<optgroup key="Devices" label="Devices">{devicesOptions}</optgroup>);
        } else {
            options = options.concat(devicesOptions);
        }
        return <select
            value={value}
            onChange={this.onSelect}
            className="form-control"
            {...rest}
        >{options}

        </select>;

    }
}