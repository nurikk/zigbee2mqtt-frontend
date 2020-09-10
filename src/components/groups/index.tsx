import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { GroupsApi } from "../../actions";
import { GlobalState, Group, GroupAddress } from "../../store";
import Button from "../button";
import { Device, Endpoint } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceImageUrl, genDeviceDetailsLink } from "../../utils";
import style from './style.css';
import cx from 'classnames';
import EndpointPicker from "../endpoint-picker";
import DevicePicker from "../device-picker";


interface GroupsPageState {
    newGroupName: string;
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
    render(): ComponentChild {
        const { rowNumber, groupAddress, removeDeviceFromGroup } = this.props;
        const device = this.getDeviceObj();

        return <tr>
            <th scope="row">{rowNumber + 1}</th>
            <td className={style["device-pic"]}>{<SafeImg class={cx(style["device-image"])}
                src={genDeviceImageUrl(device?.definition?.model)} />}
            </td>
            <td><a href={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</a></td>
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
    render(): ComponentChild {
        const { group, devices } = this.props;
        return <table class="table table-sm">
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
                {group.members.map((groupMemebershipInfo, idx) => <DeviceGroupRow removeDeviceFromGroup={this.onRemove} rowNumber={idx} devices={devices} groupAddress={groupMemebershipInfo} />)}
            </tbody>
        </table>;
    }
}

class AddDeviceToGroup extends Component<AddDeviceToGroupProps, AddDeviceToGroupState> {
    onSubmit = (): void => {
        const { addDeviceToGroup, group } = this.props;
        const { device, endpoint } = this.state;
        addDeviceToGroup(endpoint ? `${device}/${endpoint}` : device, group.friendly_name);

    }
    onDeviceSelect = (device: Device): void => {

        this.setState({ device: device.ieee_address });
    }

    onEpChange = (endpoint: Endpoint): void => {
        this.setState({ endpoint });
    }
    render(): ComponentChild {
        const { device, endpoint } = this.state;
        const { devices } = this.props;
        const deviceObj = devices.get(device);

        const endpoints = Object.keys(deviceObj?.endpoints ?? {});

        return <form class="row">

            <div class="col">
                <div class="input-group mb-3">
                    <DevicePicker type="device" value={device} devices={devices} onSelect={this.onDeviceSelect} />


                    <EndpointPicker values={endpoints} value={endpoint} onSelect={this.onEpChange} />
                </div>

            </div>

            <div class="col">
                <Button type="button" onClick={this.onSubmit} class="btn btn-primary">Add to group</Button>
            </div>


        </form>
    }
}

export class GroupsPage extends Component<GroupsApi & GlobalState, GroupsPageState> {
    state = {
        newGroupName: ''
    }

    changeHandler = (event): void => {
        const name: string = event.target.name;
        const value: string = event.target.value;
        this.setState({ [name]: value });
    }

    onGroupCreateSubmit = (): void => {
        const { newGroupName } = this.state;
        const { createGroup } = this.props;
        createGroup(newGroupName);
    }

    renderGroupCreationForm(): ComponentChild {
        const { newGroupName } = this.state;
        return (
            <form class="row mt-2">
                <div class="col">
                    <label for="newGroupName" class="sr-only">Group name</label>
                    <input onChange={this.changeHandler} value={newGroupName} required type="text" name="newGroupName" class="form-control" id="newGroupName" placeholder="bedroom_lamps" />
                </div>
                <div class="col">
                    <Button<void> onClick={this.onGroupCreateSubmit} className="btn btn-primary mb-2">Create group</Button>
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
    renderGroups(): ComponentChild {
        const { groups, devices, addDeviceToGroup } = this.props;
        return (
            <div id="accordion">
                {
                    groups.map(group => (
                        <div class="card mb-1">
                            <div class="card-header" id={`heading${group.id}`}>
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-sm">
                                        {group.friendly_name} (#{group.id})
                                    </button>
                                    <Button<string> promt title="Remove group" item={group.friendly_name} onClick={this.removeGroup} className="btn btn-danger btn-sm float-right"><i className="fa fa-trash" /></Button>
                                </h5>
                            </div>

                            <div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <DeviceGroup group={group} devices={devices} removeDeviceFromGroup={this.removeDeviceFromGroup} />
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <AddDeviceToGroup addDeviceToGroup={addDeviceToGroup} devices={devices} group={group} />
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }

    render(): ComponentChild {
        return <div class="container">
            {this.renderGroupCreationForm()}
            {this.renderGroups()}
        </div>

    }
}

const mappedProps = ["groups", "devices"];
const ConnectedGroupsPage = connect<{}, {}, GlobalState, GroupsApi>(mappedProps, actions)(GroupsPage);
export default ConnectedGroupsPage;