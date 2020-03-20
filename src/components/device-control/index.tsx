import { FunctionalComponent, h } from "preact";
import Button from "../button";
import { Device } from "../../types";
import { genDeviceShortAddress } from "../../utils";
import { renameDevice, removeDevice } from "../actions";
interface DeviceControlGroupProps {
    device: Device;
}


const onBindClick = (device: Device): void => {
    location.href = `/zigbee?bind=${genDeviceShortAddress(device.nwkAddr)}`;
};

const onRenameClick = (device: Device): void => {
    const newName = prompt('Enter new name', device.friendly_name);
    if (newName && newName !== device.friendly_name) {
        renameDevice(genDeviceShortAddress(device.nwkAddr), newName, () => window.location.reload());
    }
};

const onRemoveClick = (device: Device): void => {
    if (confirm('Remove device?')) {
        removeDevice(genDeviceShortAddress(device.nwkAddr), () => window.location.reload());
    }
};

const DeviceControlGroup: FunctionalComponent<DeviceControlGroupProps> = (props) => {
    const { device } = props;
    return (
        <div className="btn-group btn-group-sm" role="group">
            <Button<Device> className="btn btn-danger" onClick={onRemoveClick} item={device}><i className="fa fa-trash" /></Button>
            <Button<Device> className="btn btn-secondary" onClick={onRenameClick} item={device}><i className="fa fa-edit" /></Button>
            <Button<Device> className="btn btn-success" onClick={onBindClick} item={device}>Bind</Button>
        </div>
    )
};

export default DeviceControlGroup;
