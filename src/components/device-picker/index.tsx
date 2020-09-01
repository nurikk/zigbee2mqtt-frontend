import { Component, ComponentChild, h } from "preact";
import { Device, ObjectType } from "../../types";
import { getDeviceDisplayName, noCoordinator } from "../../utils";
import { Group } from "../../store";
const DELIMITER = '|';
interface DevicePickerProps {
    type: ObjectType;
    value: string | number;
    devices: Device[];
    groups?: Group[];
    onSelect(device: Device | Group, type: ObjectType): void;
}
export default class DevicePicker extends Component<DevicePickerProps, {}> {
    onSelect = (e: Event): void => {
        const { onSelect, devices, groups = [] } = this.props;
        const { value } = e.target as HTMLSelectElement;
        const [type, identificator] = value.split(DELIMITER) as [ObjectType, string | number];
        if (type === "group") {
            const group = groups.find(g => identificator === g.friendly_name);
            onSelect(group, type);
        } else if (type === "device") {
            const device = devices.find(d => identificator === d.ieee_address);
            onSelect(device, type);
        }
    }
    render(): ComponentChild {
        const { devices, groups = [], value, type } = this.props;
        let options = [<option hidden>Select device</option>];

        const devicesOptions = devices.filter(noCoordinator).map(device => <option selected={type === "device" && value == device.ieee_address} value={`device${DELIMITER}${device.ieee_address}`}>{getDeviceDisplayName(device)}</option>);
        if (groups.length) {
            options.push(<optgroup label="Devices">{devicesOptions}</optgroup>);
            const groupOptions = groups.map(group => <option selected={type === "group" && value == group.id} value={`group${DELIMITER}${group.friendly_name}`}>{group.friendly_name}</option>);
            options.push(<optgroup label="Groups">{groupOptions}</optgroup>);
        } else {
            options = options.concat(devicesOptions);
        }

        return <select onChange={this.onSelect} class="form-control">{options}</select>;

    }
}