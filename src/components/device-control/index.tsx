import React, { ChangeEvent, Component } from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import cx from "classnames";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";
import { GlobalState } from "../../store";
import { WithTranslation, withTranslation } from "react-i18next";
import { RenameAction } from "./RenameAction";
interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
}
interface DeviceRemovalParams {
    block: boolean;
    force: boolean;
}


interface DeviceControlGroupState {
    isRenameModalOpened: boolean;
    isDeviceRemovalModalOpened: boolean;
    removeParams: DeviceRemovalParams;
}

export class DeviceControlGroup extends Component<DeviceControlGroupProps & DeviceApi & GlobalState & WithTranslation<"zigbee">, DeviceControlGroupState> {
    state = {
        isRenameModalOpened: false,
        isDeviceRemovalModalOpened: false,

        removeParams: {
            block: false,
            force: false
        }
    }

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

    onDeviceRemovalParamChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { removeParams } = this.state;
        const { checked, name } = e.target;
        removeParams[name] = checked;
        this.setState({ removeParams });
    }
    renderDeviceRemovalButton(): JSX.Element {
        const { device, t } = this.props;
        const { isDeviceRemovalModalOpened, removeParams } = this.state;
        const checks = [
            { label: t('force_remove'), name: 'force', value: removeParams.force },
            { label: t('block_join'), name: 'block', value: removeParams.block },
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
                    <button type="button" className="btn btn-secondary" onClick={this.toggleDeviceRemovalModal}>{t('common:close')}</button>
                    <button type="button" className="btn btn-danger" onClick={this.onRemoveClick}>{t('common:delete')}</button>
                </ModalFooter>
            </Modal>
                <button onClick={this.toggleDeviceRemovalModal} className="btn btn-danger" title={t('remove_device')}><i className={cx("fa", "fa-trash")} /></button></>
        )
    }

    render(): JSX.Element {
        const { device, bridgeInfo, configureDevice, renameDevice, t } = this.props;
        const { isRenameModalOpened } = this.state;
        return (
            <div className="btn-group btn-group-sm" role="group">
                <RenameAction device={device} bridgeInfo={bridgeInfo}
                    isOpen={isRenameModalOpened}
                    onClose={this.toggleRenameModal}
                    renameDevice={renameDevice}
                />
                <Button<string> className="btn btn-warning" onClick={configureDevice} item={device.friendly_name} title={t('reconfigure')} promt><i className={cx("fa", "fa-retweet")} /></Button>
                {this.renderDeviceRemovalButton()}
            </div>
        );
    }
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = withTranslation(["zigbee", "common"])(connect<DeviceControlGroupProps, unknown, GlobalState, DeviceApi>(mappedProps, actions)(DeviceControlGroup));
export default ConnectedDeviceControlGroup;

