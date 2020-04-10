import { FunctionalComponent, h } from "preact";
import Button from "../button";
import { Device } from "../../types";
import { removeDevice, renameDevice } from "../actions";

interface DeviceControlGroupProps {
    device: Device;
}


const onBindClick = (device: Device): void => {
    location.href = `/zigbee/device?dev=${encodeURIComponent(device.nwkAddr)}&activeTab=Bind`;
};

const onRenameClick = (device: Device): void => {
    const newName = prompt("Enter new name", device.friendly_name);
    if (newName !== null && newName !== device.friendly_name) {
        renameDevice(device.nwkAddr, newName, (err, response) => {
            if (!err) {
                window.location.reload();
            }
        });
    }
};

const onRemoveClick = (device: Device): void => {
    if (confirm("Remove device?")) {
        removeDevice(device.nwkAddr, (err, response) => {
            if (!err) {
                window.location.reload();
            }
        });
    }
};

const DeviceControlGroup: FunctionalComponent<DeviceControlGroupProps> = (props) => {
    const { device } = props;
    return (
        <div className="btn-group btn-group-sm" role="group">
            <Button<Device> className="btn btn-danger" onClick={onRemoveClick} item={device}><i
                className="fa fa-trash" /></Button>
            <Button<Device> className="btn btn-secondary" onClick={onRenameClick} item={device}><i
                className="fa fa-edit" /></Button>
            <Button<Device> className="btn btn-success" onClick={onBindClick} item={device}>Bind</Button>
        </div>
    );
};

export default DeviceControlGroup;
