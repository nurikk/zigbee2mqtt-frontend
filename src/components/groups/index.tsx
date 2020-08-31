import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState, Group, GroupAddress } from "../../store";
import Button from "../button";
import { Device } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceImageUrl, noCoordinator } from "../../utils";
import style from './style.css';
import cx from 'classnames';


interface GroupsPageState {
    newGroupName: string;
}


interface AddDeviceToGroupProps {
    devices: Device[];
    group: Group;
    addDeviceToGroup(deviceName: string, groupName: string): void;
}

interface AddDeviceToGroupState {
    device: string;
    endpint: string;
}

interface DeviceGroupRowProps {
    rowNumber: number;
    groupAddress: GroupAddress;
    devices: Device[];
    removeDeviceFromGroup(deviceFriendlyName: string): void;
}

// eslint-disable-next-line react/prefer-stateless-function
class DeviceGroupRow extends Component<DeviceGroupRowProps, {}> {
    getDeviceObj(): Device | undefined {
        const { groupAddress, devices } = this.props;
        return devices.find(d => d.ieee_address === groupAddress.ieee_address);
    }
    render(): ComponentChild {
        const { rowNumber, groupAddress, removeDeviceFromGroup } = this.props;
        const device = this.getDeviceObj();

        return <tr>
            <th scope="row">{rowNumber + 1}</th>
            <td className={style["device-pic"]}>{device && <SafeImg class={cx(style["device-image"])}
                src={genDeviceImageUrl(device.definition?.model)} />}
            </td>
            <td>{device && device.friendly_name}</td>
            <td>{groupAddress.ieee_address}</td>
            <td>{groupAddress.endpoint}</td>
            <td>{device && <Button<string> promt item={device.friendly_name} onClick={removeDeviceFromGroup} className="btn btn-danger btn-sm float-right"><i className="fa fa-trash" /></Button>}</td>
        </tr>;
    }
}
interface DeviceGroupPropts {
    group: Group;
    devices: Device[];
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
                    <th scope="col">Endpint</th>
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
        const { device, endpint } = this.state;
        addDeviceToGroup(endpint ? `${device}/${endpint}` : device, group.friendly_name);

    }
    onDeviceSelect = (e: Event): void => {
        const { value } = e.target as HTMLSelectElement;
        this.setState({ device: value });
    }
    renderDevicePicker(): ComponentChild {
        const { devices } = this.props;
        return <select class="form-control form-control-sm" onChange={this.onDeviceSelect}>
            <option hidden>Select device</option>
            {devices.filter(noCoordinator).map(device => <option value={device.friendly_name} title={device.definition?.description}>{`${device.friendly_name} (${device.definition?.model ?? 'Unsupported'})`}</option>)}
        </select>;
    }
    onEpChange = (e: Event): void => {
        const { value } = e.target as HTMLInputElement;
        this.setState({ endpint: value });
    }
    render(): ComponentChild {
        return <form class="form-inline">
            <div class="form-group">
                <div class="form-group mx-sm-3">
                    {this.renderDevicePicker()}
                </div>
                <div class="form-group mx-sm-3">
                    <input onChange={this.onEpChange} title="In case you want to add a device to a group with multiple endpoints, e.g. a QBKG03LM with 2 buttons you can specify it here" class="form-control form-control-sm" type="text" placeholder="Endpoint name" />
                </div>

                <div>
                    <Button type="button" onClick={this.onSubmit} class="btn btn-primary btn-sm">Add to group</Button>
                </div>

            </div>
        </form>
    }
}

export class GroupsPage extends Component<Actions & GlobalState, GroupsPageState> {
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
            <form class="form-inline mt-2">
                <div class="form-group mx-sm-3 mb-2">
                    <label for="newGroupName" class="sr-only">Group name</label>
                    <input onChange={this.changeHandler} value={newGroupName} required type="text" name="newGroupName" class="form-control" id="newGroupName" placeholder="bedroom_lamps" />
                </div>
                <Button<void> onClick={this.onGroupCreateSubmit} className="btn btn-primary mb-2">Create group</Button>
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
                                    <DeviceGroup group={group} devices={devices} removeDeviceFromGroup={this.removeDeviceFromGroup} />
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
const ConnectedGroupsPage = connect<{}, {}, GlobalState, Actions>(mappedProps, actions)(GroupsPage);
export default ConnectedGroupsPage;