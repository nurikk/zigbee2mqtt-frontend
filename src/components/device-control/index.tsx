import { Component, ComponentChild, h, Fragment } from "preact";
import Button from "../button";
import { Device } from "../../types";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import cx from "classnames";
interface DeviceControlGroupProps {
    device: Device;
}

export class DeviceControlGroup extends Component<DeviceControlGroupProps & Actions, {}> {
    onBindClick = (): void => {
        const { device } = this.props;
        location.href = `/zigbee/device?dev=${encodeURIComponent(device.friendly_name)}&activeTab=Bind`;
    };

    onRenameClick = async (): Promise<void> => {
        const { renameDevice, getZigbeeDevicesList, device } = this.props;
        const newName = prompt("Enter new name", device.friendly_name);
        if (newName !== null && newName !== device.friendly_name) {
            await renameDevice(device.friendly_name, newName);
            await getZigbeeDevicesList(true);
            // await getDeviceInfo(device.friendly_name);
        }
    };


    onRemoveClick = async (force = false): Promise<void> => {
        const { removeDevice, getZigbeeDevicesList, device } = this.props;


        await removeDevice(device.friendly_name, force);
        await getZigbeeDevicesList(true);

    };

    render(): ComponentChild {
        const { device, configureDevice, checkOTA } = this.props;
        const validDevice = !!device.ieeeAddr;

        return (
            <div className="btn-group btn-group-sm" role="group">
                <Button<void> className="btn btn-secondary" onClick={this.onRenameClick}><i
                    className="fa fa-edit" /></Button>
                <div class="btn-group" role="group">
                    <Button id="btnGroupDrop0" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className={cx("fa", "fa-cogs")} /></Button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop0">
                        <Button<string> class="dropdown-item" onClick={configureDevice} item={device.friendly_name}>Reconfigure</Button>
                        <Button<string> class="dropdown-item" onClick={checkOTA} item={device.friendly_name}>Check OTA</Button>
                    </div>
                </div>
                <div class="btn-group" role="group">

                    <Button id="btnGroupDrop1" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className={cx("fa", "fa-trash")} /></Button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        {validDevice ? <Button promt class="dropdown-item" onClick={this.onRemoveClick} item={false}>Remove</Button> : null}
                        <Button<boolean> promt class="dropdown-item" onClick={this.onRemoveClick} item={true}>Remove(force)</Button>

                    </div>
                </div>

            </div>
        );
    }
}

const mappedProps = [];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, {}, {}, Actions>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

