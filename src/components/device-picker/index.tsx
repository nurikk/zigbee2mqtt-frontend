import { Component, ComponentChild, h } from "preact";
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
    onSelect = (e: Event): void => {
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
    render(): ComponentChild {
        const { devices, groups = [], value, type } = this.props;
        let options = [<option hidden>Select device</option>];

        const devicesOptions = [];
        devices.forEach((device) => {
            if (device.type !== "Coordinator") {
                devicesOptions.push(<option selected={type === "device" && value == device.ieee_address} value={`device${DELIMITER}${device.ieee_address}`}>{getDeviceDisplayName(device)}</option>);
            }

        });
        if (groups.length) {
            const groupOptions = groups.map(group => <option selected={type === "group" && value == group.id} value={`group${DELIMITER}${group.friendly_name}`}>{group.friendly_name}</option>);
            options.push(<optgroup label="Groups">{groupOptions}</optgroup>);
            options.push(<optgroup label="Devices">{devicesOptions}</optgroup>);
        } else {
            options = options.concat(devicesOptions);
        }

        return <select onChange={this.onSelect} class="form-control">{options}</select>;

    }
}