import React, { ChangeEvent, Component } from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions, { OtaApi, DeviceApi } from "../../actions";
import cx from "classnames";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";
import { GlobalState } from "../../store";
interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
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

export class DeviceControlGroup extends Component<DeviceControlGroupProps & DeviceApi & GlobalState, DeviceControlGroupState> {
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

    onRenameClick = async (): Promise<void> => {
        const { renameDevice, device } = this.props;
        const { renameParams } = this.state;

        await renameDevice(device.friendly_name, renameParams.friendlyName, renameParams.isHassRename);
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

    onHassEntityIdChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { renameParams } = this.state;
        const { checked } = e.target;
        renameParams.isHassRename = checked;
        this.setState({ renameParams });
    }
    onFriendlyNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { renameParams } = this.state;
        const { value } = e.target;
        renameParams.friendlyName = value;
        this.setState({ renameParams });
    }

    onDeviceRemovalParamChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { removeParams } = this.state;
        const { checked, name } = e.target;
        removeParams[name] = checked;
        this.setState({ removeParams });
    }
    renderRenameButton() {
        const { bridgeInfo, device } = this.props;
        const { isRenameModalOpened, renameParams } = this.state;
        return (
            <><Button<void> className="btn btn-secondary" onClick={this.toggleRenameModal} title="Rename device"><i className="fa fa-edit" /></Button>
                <Modal isOpen={isRenameModalOpened}>
                    <ModalHeader>
                        <h3>Rename device</h3>
                        <small>{device.friendly_name}</small>
                    </ModalHeader>
                    <ModalBody>
                        <div className="mb-3">
                            <label htmlFor={`fn${device.ieee_address}`} className="form-label">Friendly name</label>
                            <input id={`fn${device.ieee_address}`} onChange={this.onFriendlyNameChange} type="text" className="form-control" value={renameParams.friendlyName} />
                        </div>
                        {bridgeInfo?.config?.homeassistant ? (
                            <div className="form-check form-switch">
                                <input className="form-check-input" checked={renameParams.isHassRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={this.onHassEntityIdChange} />
                                <label className="form-check-label" htmlFor={`hass${device.ieee_address}`}>Update Home Assistant entity ID</label>
                            </div>
                        ) : null}
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-secondary" onClick={this.toggleRenameModal}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.onRenameClick}>Save changes</button>
                    </ModalFooter>
                </Modal></>
        )
    }
    renderDeviceRemovalButton() {
        const { device } = this.props;
        const { isDeviceRemovalModalOpened, removeParams } = this.state;
        const checks = [
            { label: 'Force remove', name: 'force', value: removeParams.force },
            { label: 'Block from joining again', name: 'block', value: removeParams.block },
        ];
        return (
            <><Modal isOpen={isDeviceRemovalModalOpened}>
                <ModalHeader>
                    <h3>Remove device</h3>
                    <small>{device.friendly_name}</small>
                </ModalHeader>
                <ModalBody>
                    {
                        checks.map(check => {
                            const id = `${check.name}${device.ieee_address}`;
                            return <div key={check.name} className="form-check form-switch">
                                <input className="form-check-input" name={check.name} checked={check.value} type="checkbox" id={id} onChange={this.onDeviceRemovalParamChange} />
                                <label className="form-check-label" htmlFor={id}>{check.label}</label>
                            </div>
                        })
                    }
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-secondary" onClick={this.toggleDeviceRemovalModal}>Close</button>
                    <button type="button" className="btn btn-danger" onClick={this.onRemoveClick}>Delete</button>
                </ModalFooter>
            </Modal>
                <button onClick={this.toggleDeviceRemovalModal} className="btn btn-danger" title="Remove device"><i className={cx("fa", "fa-trash")} /></button></>
        )
    }

    render() {
        const { device, configureDevice } = this.props;
        return (
            <div className="btn-group btn-group-sm" role="group">
                {this.renderRenameButton()}
                <Button<string> className="btn btn-secondary" onClick={configureDevice} item={device.friendly_name} title="Reconfigure" promt><i className={cx("fa", "fa-cogs")} /></Button>
                {this.renderDeviceRemovalButton()}
            </div>
        );
    }
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, {}, GlobalState, DeviceApi>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

