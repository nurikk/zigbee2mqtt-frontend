import { Component, ComponentChild, h } from "preact";
import Button from "../button";
import { Device, DeviceStats } from "../../types";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import cx from "classnames";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";
interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceStats;
}
interface DeviceControlGroupState {
    isRenameModalOpened: boolean;
    friendlyName: string;
    isHassRename: boolean;
}
export class DeviceControlGroup extends Component<DeviceControlGroupProps & Actions, DeviceControlGroupState> {
    state = {
        isRenameModalOpened: false,
        friendlyName: this.props.device.friendly_name,
        isHassRename: false
    }
    onBindClick = (): void => {
        const { device } = this.props;
        location.href = `/zigbee/device?dev=${encodeURIComponent(device.friendly_name)}&activeTab=Bind`;
    };

    onRenameClick = async (): Promise<void> => {
        const { renameDevice, device } = this.props;
        const { friendlyName, isHassRename } = this.state;

        renameDevice(device.friendly_name, friendlyName, isHassRename);
        this.setState({
            isRenameModalOpened: false
        });

    };


    onRemoveClick = async (force = false): Promise<void> => {
        const { removeDevice, device } = this.props;
        await removeDevice(device.friendly_name, force);
    };

    toggleRenameModal = (): void => {
        const { isRenameModalOpened } = this.state;
        this.setState({ isRenameModalOpened: !isRenameModalOpened });
    }
    onHassEntityIdChange = (e: Event): void => {
        const { checked } = e.target as HTMLInputElement;
        this.setState({ isHassRename: checked });
    }
    onFriendlyNameChange = (e: Event): void => {
        const { value } = e.target as HTMLInputElement;
        this.setState({ friendlyName: value });
    }

    render(): ComponentChild {
        const { device, configureDevice, checkOTA, updateOTA, state } = this.props;
        const { isRenameModalOpened, friendlyName, isHassRename } = this.state;
        const validDevice = !!device.ieee_address;

        return (
            <div className="btn-group btn-group-sm" role="group">
                <Button<void> className="btn btn-secondary" onClick={this.toggleRenameModal}><i className="fa fa-edit" /></Button>
                <Modal isOpen={isRenameModalOpened}>
                    <ModalHeader>
                        <h3>Rename device</h3>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={this.toggleRenameModal}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div class="mb-3">
                            <label for={`fn${device.ieee_address}`} class="form-label">Friendly name</label>
                            <input id={`fn${device.ieee_address}`} onChange={this.onFriendlyNameChange} type="text" class="form-control" value={friendlyName} />
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" checked={isHassRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={this.onHassEntityIdChange} />
                            <label class="form-check-label" for={`hass${device.ieee_address}`}>Update Home Assistant entity ID</label>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.toggleRenameModal}
                        >
                            Close
            </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onRenameClick}
                        >
                            Save changes
            </button>
                    </ModalFooter>
                </Modal>
                <div class="btn-group btn-group-sm" role="group">
                    <Button id="btnGroupDrop0" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className={cx("fa", "fa-cogs")} /></Button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop0">
                        <Button<string> class="dropdown-item" onClick={configureDevice} item={device.friendly_name}>Reconfigure</Button>
                        <Button<string> class="dropdown-item" onClick={checkOTA} item={device.friendly_name}>Check OTA</Button>
                        {state?.update?.state === "available" ? <Button<string> promt class="dropdown-item" onClick={updateOTA} item={device.friendly_name}>Update OTA</Button> : null}
                    </div>
                </div>
                <div class="btn-group btn-group-sm" role="group">
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

