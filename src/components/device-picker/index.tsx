import { Component, ComponentChild, h } from "preact";
import { Device } from "../../types";
import { getDeviceDisplayName } from "../../utils";
import { Group } from "../../store";

interface DevicePickerProps {
    devices: Device[];
    groups?: Group[];
    onSelect(device: Device | Group): void;
}
export default class DevicePicker extends Component<DevicePickerProps, {}> {
    onSelect = (e: Event): void => {
        const { onSelect, devices, groups = [] } = this.props;
        const { value } = e.target as HTMLSelectElement;
        const device = devices.find(d => value === d.ieee_address);
        const group = groups.find(g => value === g.friendly_name);

        device && onSelect(device);
        group && onSelect(group);
    }
    render(): ComponentChild {
        const { devices, groups = [] } = this.props;
        let options = [<option hidden>Select device</option>];

        const devicesOptions = devices.map(device => <option value={device.ieee_address}>{getDeviceDisplayName(device)}</option>);
        if (groups.length) {
            options.push(<optgroup label="Devices">{devicesOptions}</optgroup>);
            const groupOptions = groups.map(group => <option value={group.friendly_name}>{group.friendly_name}</option>);
            options.push(<optgroup label="Groups">{groupOptions}</optgroup>);
        } else {
            options = options.concat(devicesOptions);
        }

        return <select onChange={this.onSelect} class="form-control">{options}</select>;

    }
}