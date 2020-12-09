import React, { ChangeEvent, Component } from "react";
import { connect } from "unistore/react";
import actions, { GroupsApi } from "../../actions";
import { GlobalState, Group, GroupAddress } from "../../store";
import Button from "../button";
import { Device, Endpoint } from "../../types";
import { genDeviceDetailsLink } from "../../utils";
import style from './style.css';
import cx from 'classnames';
import EndpointPicker from "../endpoint-picker";
import DevicePicker from "../device-picker";
import { Link } from "react-router-dom";
import { getEndpoints } from "../device-page/bind-row";
import DeviceImage from "../device-image";
import { RenameGroupForm } from "./RenameForm";


interface GroupsPageState {
    newGroupName: string;
    newGroupId?: number;
}


interface AddDeviceToGroupProps {
    devices: Map<string, Device>;
    group: Group;
    addDeviceToGroup(deviceName: string, groupName: string): void;
}

interface AddDeviceToGroupState {
    device: string;
    endpoint: Endpoint;
}

interface DeviceGroupRowProps {
    rowNumber: number;
    groupAddress: GroupAddress;
    devices: Map<string, Device>;
    removeDeviceFromGroup(deviceFriendlyName: string): void;
}

// eslint-disable-next-line react/prefer-stateless-function
class DeviceGroupRow extends Component<DeviceGroupRowProps, {}> {
    getDeviceObj(): Device | undefined {
        const { groupAddress, devices } = this.props;
        return devices.get(groupAddress.ieee_address);
    }
    render() {
        const { rowNumber, groupAddress, removeDeviceFromGroup } = this.props;
        const device = this.getDeviceObj();

        return <tr>
            <th scope="row">{rowNumber + 1}</th>
            <td className={style["device-pic"]}>
                <DeviceImage className={cx(style["device-image"])} device={device} />
            </td>
            <td><Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link></td>
            <td>{groupAddress.ieee_address}</td>
            <td>{groupAddress.endpoint}</td>
            <td>{device && <Button<string> promt item={device.friendly_name} onClick={removeDeviceFromGroup} className="btn btn-danger btn-sm float-right"><i className="fa fa-trash" /></Button>}</td>
        </tr>;
    }
}
interface DeviceGroupPropts {
    group: Group;
    devices: Map<string, Device>;
    removeDeviceFromGroup(groupFriendlyName: string, deviceFriendlyName: string): void;
}

// eslint-disable-next-line react/prefer-stateless-function
class DeviceGroup extends Component<DeviceGroupPropts, {}> {
    onRemove = (deviceFriendlyName: string): void => {
        const { group, removeDeviceFromGroup } = this.props;
        removeDeviceFromGroup(group.friendly_name, deviceFriendlyName);
    }
    render() {
        const { group, devices } = this.props;
        return <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Pic</th>
                    <th scope="col">friendlyName</th>
                    <th scope="col">ieee_addr</th>
                    <th scope="col">Endpoint</th>
                    <th scope="col" className="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                {group.members.map((groupMemebershipInfo, idx) => <DeviceGroupRow key={groupMemebershipInfo.ieee_address} removeDeviceFromGroup={this.onRemove} rowNumber={idx} devices={devices} groupAddress={groupMemebershipInfo} />)}
            </tbody>
        </table>;
    }
}

class AddDeviceToGroup extends Component<AddDeviceToGroupProps, AddDeviceToGroupState> {
    state = {
        device: undefined,
        endpoint: undefined
    };


    onSubmit = (): void => {
        const { addDeviceToGroup, group } = this.props;
        const { device, endpoint } = this.state;
        addDeviceToGroup(endpoint ? `${device}/${endpoint}` : device, group.friendly_name);

    }
    onDeviceSelect = (device: Device): void => {
        const endpoints = getEndpoints(device);
        this.setState({ device: device.ieee_address, endpoint: endpoints[0] });
    }

    onEpChange = (endpoint: Endpoint): void => {
        this.setState({ endpoint });
    }
    render() {
        const { device, endpoint } = this.state;
        const { devices } = this.props;
        const deviceObj = devices.get(device);

        const endpoints = getEndpoints(deviceObj);

        return <form className="row">

            <div className="col">
                <div className="input-group mb-3">
                    <DevicePicker type="device" value={device} devices={devices} onChange={this.onDeviceSelect} />
                    <EndpointPicker values={endpoints} value={endpoint} onChange={this.onEpChange} />
                </div>

            </div>

            <div className="col">
                <Button<void> type="button" onClick={this.onSubmit} className="btn btn-primary">Add to group</Button>
            </div>


        </form>
    }
}

export class GroupsPage extends Component<GroupsApi & GlobalState, GroupsPageState> {
    state: GroupsPageState = {
        newGroupName: '',
        newGroupId: undefined
    }


    changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as GroupsPageState);
    }

    onGroupCreateSubmit = (): void => {
        const { newGroupName, newGroupId } = this.state;
        const { createGroup } = this.props;
        createGroup(newGroupName, newGroupId);
    }

    renderGroupCreationForm() {
        const { newGroupName, newGroupId } = this.state;
        return (
            <form className="row mt-2">
                <div className="input-group  mb-2">
                    <label htmlFor="newGroupName" className="sr-only">Group name</label>
                    <input onChange={this.changeHandler} value={newGroupName} required type="text" name="newGroupName" className="form-control" id="newGroupName" placeholder="new group name" />

                    <label htmlFor="newGroupName" className="sr-only">Group id</label>
                    <input onChange={this.changeHandler} value={newGroupId === undefined ? '' : newGroupId} type="number" name="newGroupId" className="form-control" id="newGroupId" placeholder="enter group id if necessary" />

                    <Button<void> onClick={this.onGroupCreateSubmit} className="btn btn-primary form-control">Create group</Button>
                </div>

            </form>
        )
    }
    removeGroup = (friendlyName: string): void => {
        const { removeGroup } = this.props;
        removeGroup(friendlyName);
    }
    removeDeviceFromGroup = (groupFriendlyName: string, deviceFriendlyName: string): void => {
        const { removeDeviceFromGroup } = this.props;
        removeDeviceFromGroup(deviceFriendlyName, groupFriendlyName);
    }
    renameGroup = (oldName: string, newName: string) => {
        const { renameGroup } = this.props;
        renameGroup(oldName, newName);
    }
    renderGroups() {
        const { groups, devices, addDeviceToGroup } = this.props;
        return (
            <div id="accordion">
                {
                    groups.map(group => (
                        <div key={group.id} className="card mb-1">
                            <div className="card-header" id={`heading${group.id}`}>
                                <h5 className="mb-0">
                                    <button className="btn btn-link btn-sm">
                                        {group.friendly_name} (#{group.id})
                                    </button>
                                    <div className="btn-group float-right btn-group-sm" role="group" aria-label="Basic example">

                                        <Button<string> promt title="Remove group" item={group.friendly_name} onClick={this.removeGroup} className="btn btn-danger"><i className="fa fa-trash" /></Button>
                                        <RenameGroupForm name={group.friendly_name} onRename={this.renameGroup} />
                                    </div>
                                </h5>
                            </div>

                            <div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <DeviceGroup group={group} devices={devices} removeDeviceFromGroup={this.removeDeviceFromGroup} />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <AddDeviceToGroup addDeviceToGroup={addDeviceToGroup} devices={devices} group={group} />
                            </div>
                        </div>
                    )).reverse()
                }

            </div>
        )
    }

    render() {
        return <div className="container">
            {this.renderGroupCreationForm()}
            {this.renderGroups()}
        </div>

    }
}

const mappedProps = ["groups", "devices"];
const ConnectedGroupsPage = connect<{}, {}, GlobalState, GroupsApi>(mappedProps, actions)(GroupsPage);
export default ConnectedGroupsPage;