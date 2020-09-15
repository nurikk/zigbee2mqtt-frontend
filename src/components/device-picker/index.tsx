import React, { ChangeEvent, Component } from "react";
import { Device, ObjectType } from "../../types";
import { getDeviceDisplayName } from "../../utils";
import { Group } from "../../store";
const DELIMITER = '|';
interface DevicePickerProps {
    type: ObjectType;
    value: string | number;
    devices: Map<string, Device>;
    groups?: Group[];
    onSelect(device: Device | Group, type: ObjectType): void;
}
export default class DevicePicker extends Component<DevicePickerProps, {}> {
    onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onSelect, devices, groups = [] } = this.props;
        const { value } = e.target as HTMLSelectElement;
        const [type, identificator] = value.split(DELIMITER) as [ObjectType, string];
        if (type === "group") {
            const group = groups.find(g => identificator === g.friendly_name);
            onSelect(group, type);
        } else if (type === "device") {
            const device = devices.get(identificator);
            onSelect(device, type);
        }
    }
    render() {
        const { devices, groups, value, type } = this.props;
        let options = [<option key="hidden" hidden>Select device</option>];

        const devicesOptions = [];
        devices.forEach((device) => {
            if (device.type !== "Coordinator") {
                devicesOptions.push(<option
                    title={device.definition?.description}
                    key={device.ieee_address}
                    value={`device${DELIMITER}${device.ieee_address}`}
                >{getDeviceDisplayName(device)}</option>);
            }

        });
        if (groups && groups.length) {
            const groupOptions = groups.map(group => <option key={group.id} value={`group${DELIMITER}${group.friendly_name}`}>{group.friendly_name}</option>);
            options.push(<optgroup key="Groups" label="Groups">{groupOptions}</optgroup>);
            options.push(<optgroup key="Devices" label="Devices">{devicesOptions}</optgroup>);
        } else {
            options = options.concat(devicesOptions);
        }


        return <select defaultValue={`${type}${DELIMITER}${value}`} onChange={this.onSelect} className="form-control">{options}</select>;

    }
}