import { FunctionalComponent, h } from "preact";
import Button from "../button";
import { Device } from "../../types";
import { genDeviceShortAddress } from "../../utils";
import { renameDevice, removeDevice } from "../actions";
interface DeviceControlGroupProps {
    device: Device;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onBindClick = (device: Device): void => {
    location.href = `/zigbee?bind=${genDeviceShortAddress(device.nwkAddr)}`;
};

const onRenameClick = (device: Device): void => {
    const newName = prompt('Enter new name', device.friendly_name);
    if (newName && newName !== device.friendly_name) {
        renameDevice(genDeviceShortAddress(device.nwkAddr), newName, this.loadData);
    }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onRemoveClick = (device: Device): void => {
    if (confirm('Remove device?')) {
        removeDevice(genDeviceShortAddress(device.nwkAddr), this.loadData);
    }
};

const DeviceControlGroup: FunctionalComponent<DeviceControlGroupProps> = (props) => {
    const { device } = props;
    return (
        <div className="btn-group" role="group">
            <Button<Device> className="btn btn-danger" onClick={onRemoveClick} item={device}><i className="fa fa-trash" /></Button>
            <Button<Device> className="btn btn-secondary" onClick={onRenameClick} item={device}><i className="fa fa-edit" /></Button>
            <Button<Device> className="btn btn-success" onClick={onBindClick} item={device}>Bind</Button>
        </div>
    )
};

export default DeviceControlGroup;
