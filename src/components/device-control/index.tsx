import { Component, ComponentChild, h } from "preact";
import Button from "../button";
import { Device, DeviceStats } from "../../types";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import cx from "classnames";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";
import { GlobalState } from "../../store";
interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceStats;
}
interface DeviceRenameParams {
    friendlyName: string;
    isHassRename: boolean;
}
interface DeviceRemovalParams {
    block: boolean;
    force: boolean;
}


interface DeviceControlGroupState {
    isRenameModalOpened: boolean;
    isDeviceRemovalModalOpened: boolean;
    removeParams: DeviceRemovalParams;
    renameParams: DeviceRenameParams;

}

export class DeviceControlGroup extends Component<DeviceControlGroupProps & Actions & GlobalState, DeviceControlGroupState> {
    state = {
        isRenameModalOpened: false,
        isDeviceRemovalModalOpened: false,
        renameParams: {
            friendlyName: this.props.device.friendly_name,
            isHassRename: false
        },
        removeParams: {
            block: false,
            force: false
        }
    }
    onBindClick = (): void => {
        const { device } = this.props;
        location.href = `/zigbee/device?dev=${encodeURIComponent(device.friendly_name)}&activeTab=Bind`;
    };

    onRenameClick = async (): Promise<void> => {
        const { renameDevice, device } = this.props;
        const { renameParams } = this.state;

        renameDevice(device.friendly_name, renameParams.friendlyName, renameParams.isHassRename);
        this.setState({
            isRenameModalOpened: false
        });

    };


    onRemoveClick = (): void => {
        const { removeDevice, device } = this.props;
        const { removeParams } = this.state;
        removeDevice(device.friendly_name, removeParams.force, removeParams.block);
        this.setState({
            isDeviceRemovalModalOpened: false
        });
    };

    toggleRenameModal = (): void => {
        const { isRenameModalOpened } = this.state;
        this.setState({ isRenameModalOpened: !isRenameModalOpened });
    }
    toggleDeviceRemovalModal = (): void => {
        const { isDeviceRemovalModalOpened } = this.state;
        this.setState({ isDeviceRemovalModalOpened: !isDeviceRemovalModalOpened });
    }

    onHassEntityIdChange = (e: Event): void => {
        const { renameParams } = this.state;
        const { checked } = e.target as HTMLInputElement;
        renameParams.isHassRename = checked;
        this.setState({ renameParams });
    }
    onFriendlyNameChange = (e: Event): void => {
        const { renameParams } = this.state;
        const { value } = e.target as HTMLInputElement;
        renameParams.friendlyName = value;
        this.setState({ renameParams });
    }

    onDeviceRemovalParamChange = (e: Event): void => {
        const { removeParams } = this.state;
        const { checked, name } = e.target as HTMLInputElement;
        removeParams[name] = checked;
        this.setState({ removeParams });
    }

    render(): ComponentChild {
        const { device, configureDevice, checkOTA, updateOTA, state, bridgeInfo } = this.props;
        const { isRenameModalOpened, isDeviceRemovalModalOpened, renameParams, removeParams } = this.state;


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
                            <input id={`fn${device.ieee_address}`} onChange={this.onFriendlyNameChange} type="text" class="form-control" value={renameParams.friendlyName} />
                        </div>
                        {bridgeInfo.config.homeassistant ? (
                            <div class="form-check form-switch">
                                <input class="form-check-input" checked={renameParams.isHassRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={this.onHassEntityIdChange} />
                                <label class="form-check-label" for={`hass${device.ieee_address}`}>Update Home Assistant entity ID</label>
                            </div>
                        ) : null}

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


                <Modal isOpen={isDeviceRemovalModalOpened}>
                    <ModalHeader>
                        <h3>Remove device</h3>
                        <button
                            type="button"
                            className="close"
                            aria-label="Close"
                            onClick={this.toggleDeviceRemovalModal}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <div class="form-check form-switch">
                            <input class="form-check-input" name="force" checked={removeParams.force} type="checkbox" id={`force${device.ieee_address}`} onChange={this.onDeviceRemovalParamChange} />
                            <label class="form-check-label" for={`force${device.ieee_address}`}>Force remove</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" name="block" checked={removeParams.block} type="checkbox" id={`block${device.ieee_address}`} onChange={this.onDeviceRemovalParamChange} />
                            <label class="form-check-label" for={`block${device.ieee_address}`}>Block from joining again</label>
                        </div>


                    </ModalBody>
                    <ModalFooter>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.toggleDeviceRemovalModal}
                        >
                            Close
            </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onRemoveClick}
                        >
                            Delete
            </button>
                    </ModalFooter>
                </Modal>
                <button onClick={this.toggleDeviceRemovalModal} class="btn btn-danger"><i className={cx("fa", "fa-trash")} /></button>


            </div>
        );
    }
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, {}, GlobalState, Actions>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

