import { Component, ComponentChild, h, Fragment } from "preact";
import Button from "../button";
import { Device } from "../../types";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { isLeaveReqSend } from "../../binaryUtils";
import cx from "classnames";
interface DeviceControlGroupProps {
    device: Device;
}

export class DeviceControlGroup extends Component<DeviceControlGroupProps & Actions, {}> {
    onBindClick = (): void => {
        const { device } = this.props;
        location.href = `/zigbee/device?dev=${encodeURIComponent(device.nwkAddr)}&activeTab=Bind`;
    };

    onRenameClick = (): void => {
        const { renameDevice, getZigbeeDevicesList, getDeviceInfo, device } = this.props;
        const newName = prompt("Enter new name", device.friendly_name);
        if (newName !== null && newName !== device.friendly_name) {
            renameDevice(device.nwkAddr, newName).then(() => {
                getZigbeeDevicesList(true).then();
                getDeviceInfo(device.nwkAddr);
            });
        }
    };


    onRemoveClick = (force = false): void => {
        const { removeDevice, getZigbeeDevicesList, device } = this.props;
        const message = force ? "Remove device?" : "Send leave request?";
        if (confirm(message)) {
            removeDevice(device.nwkAddr, force).then(() => {
                getZigbeeDevicesList(true).then();
            });
        }
    };

    render(): ComponentChild {
        const { device } = this.props;
        const leaveSend = isLeaveReqSend(device.flags);
        const validDevice = !!device.ieeeAddr;

        return (
            <div className="btn-group btn-group-sm" role="group">
                <Button<void> className="btn btn-secondary" onClick={this.onRenameClick}><i
                    className="fa fa-edit" /></Button>
                <Button<void> className="btn btn-success" onClick={this.onBindClick}>Bind</Button>
                {


                    <Fragment>
                        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className={cx("fa", "fa-trash")} /></button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            {validDevice ? <a class="dropdown-item" href="#" onClick={(): void => this.onRemoveClick(false)}>Send leave req</a> : null}
                            <a class="dropdown-item" href="#" onClick={(): void => this.onRemoveClick(true)}>Remove</a>
                        </div>
                    </Fragment>


                }



            </div>
        );
    }
}

const mappedProps = [];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, {}, {}, Actions>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

