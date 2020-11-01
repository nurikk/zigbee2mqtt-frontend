import React, { ChangeEvent, Component, Fragment } from "react";

import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions, { OtaApi, DeviceApi } from "../../actions";

import { GlobalState } from "../../store";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import DeleteIcon from '@material-ui/icons/Delete';

import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import SaveIcon from '@material-ui/icons/Save';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { DialogTitle, DialogContent, TextField, DialogActions, Button, FormControlLabel, Checkbox, FormGroup } from "@material-ui/core";


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

export class DeviceControlGroup extends Component<DeviceControlGroupProps & DeviceApi & OtaApi & GlobalState, DeviceControlGroupState> {
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


    onRenameParamsChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { renameParams } = this.state;
        const { checked, name, value, type } = e.target;
        if (type === "checkbox") {
            this.setState({ renameParams: { ...renameParams, [name]: checked } });
        } else {
            this.setState({ renameParams: { ...renameParams, [name]: value } });
        }
    }

    onDeviceRemovalParamChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { removeParams } = this.state;
        const { checked, name } = e.target;
        this.setState({ removeParams: { ...removeParams, [name]: checked } });
    }
    renderRenameModal() {
        const { bridgeInfo } = this.props;
        const { isRenameModalOpened, renameParams } = this.state;
        return (
            <Dialog open={isRenameModalOpened} onClose={this.toggleRenameModal} aria-labelledby="form-dialog-title">
                <DialogTitle>Rename device</DialogTitle>
                <DialogContent>
                    <TextField
                        value={renameParams.friendlyName}
                        onChange={this.onRenameParamsChange}
                        autoFocus
                        margin="dense"
                        label="Friendly name"
                        type="text"
                        fullWidth
                        name="friendlyName"
                    />
                    {bridgeInfo.config.homeassistant ? (
                        <FormControlLabel
                            control={<Checkbox name="isHassRename" checked={renameParams.isHassRename} onChange={this.onRenameParamsChange} />}
                            label="Update Home Assistant entity ID"
                        />
                    ) : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.toggleRenameModal} color="primary">Close</Button>
                    <Button onClick={this.onRenameClick} color="secondary" variant="contained" startIcon={<SaveIcon />}>Save changes</Button>
                </DialogActions>
            </Dialog>
        )
    }
    renderDeviceRemovalModal() {
        const { isDeviceRemovalModalOpened, removeParams } = this.state;
        return (
            <Dialog open={isDeviceRemovalModalOpened} onClose={this.toggleDeviceRemovalModal} aria-labelledby="form-dialog-title">
                <DialogTitle>Remove device</DialogTitle>
                <DialogContent>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={removeParams.force} name="force" onChange={this.onDeviceRemovalParamChange} />}
                            label="Force remove"
                        />
                    </FormGroup>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={removeParams.block} name="block" onChange={this.onDeviceRemovalParamChange} />}
                            label="Block from joining again"
                        />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.toggleDeviceRemovalModal} color="primary">Close</Button>
                    <Button onClick={this.onRenameClick} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
                </DialogActions>
            </Dialog>
        )
    }
    render() {
        const { device, configureDevice, checkOTA, updateOTA, state } = this.props;
        return (
            <Fragment>
                {this.renderRenameModal()}
                {this.renderDeviceRemovalModal()}
                <ButtonGroup  size="small" variant="contained">
                    <Button onClick={this.toggleRenameModal} title="Rename device"><EditIcon /></Button>
                    <Button onClick={() => configureDevice(device.friendly_name)} title="Reconfigure"><SettingsIcon /></Button>
                    {
                        state?.update?.state === "available" ?
                            <Button onClick={() => updateOTA(device.friendly_name)} title="Update OTA"><CloudDownloadIcon /></Button>
                            : <Button onClick={() => checkOTA(device.friendly_name)} title="Check OTA"><CloudIcon /></Button>
                    }
                    <Button color="secondary" onClick={this.toggleDeviceRemovalModal} title="Remove device"><DeleteIcon /></Button>
                </ButtonGroup>
            </Fragment>

        );
    }
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, {}, GlobalState, DeviceApi & OtaApi>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

