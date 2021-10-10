import React, { ChangeEvent, Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";

import { GlobalState, WithBridgeInfo, WithDevices, WithDeviceStates, WithGroups } from "../../store";
import Button from "../button";

import { RenameGroupForm } from "./RenameForm";
import { GroupsApi } from "../../actions/GroupsApi";
import { withTranslation, WithTranslation } from "react-i18next";
import { SceneApi } from "../../actions/SceneApi";
import { Group } from "../../types";
import { StateApi } from "../../actions/StateApi";
import { Link } from "react-router-dom";
interface GroupsPageState {
    newGroupName: string;
    newGroupId?: number;
}
type PropsFromStore = WithDevices & WithDeviceStates & WithGroups & WithBridgeInfo;

export class GroupsPage extends Component<PropsFromStore & StateApi & SceneApi & GroupsApi & WithTranslation<"groups">, GroupsPageState> {
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

    renderGroupCreationForm(): JSX.Element {
        const { t } = this.props;
        const { newGroupName, newGroupId } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="input-group">
                        <label htmlFor="newGroupName" className="sr-only">{t('new_group_name')}</label>
                        <input onChange={this.changeHandler} value={newGroupName} required type="text" name="newGroupName" className="form-control" id="newGroupName" placeholder={t('new_group_name_placeholder')} />

                        <label htmlFor="newGroupName" className="sr-only">{t('new_group_id')}</label>
                        <input onChange={this.changeHandler} value={newGroupId === undefined ? '' : newGroupId} type="number" name="newGroupId" className="form-control" id="newGroupId" placeholder={t('new_group_id_placeholder')} />
                        <Button<void> onClick={this.onGroupCreateSubmit} className="btn btn-primary form-control">{t('create_group')}</Button>
                    </div>
                </div>
            </div>
        )
    }
    removeGroup = (friendlyName: string): void => {
        const { removeGroup } = this.props;
        removeGroup(friendlyName);
    }

    renameGroup = (oldName: string, newName: string): void => {
        const { renameGroup } = this.props;
        renameGroup(oldName, newName);
    }
    renderGroups(): JSX.Element {
        const { groups, t
        } = this.props;
        const { setStateValue, setDeviceState, getDeviceState } = this.props;

        return <div className="card">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">{t('group_id')}</th>
                            <th scope="col">{t('group_name')}</th>
                            <th scope="col">{t('group_members')}</th>
                            <th scope="col">{t('group_scenes')}</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            groups.map(group => (
                                <tr key={group.id}>
                                    <td><Link to={`/group/${group.id}`}>{group.id}</Link></td>
                                    <td><Link to={`/group/${group.id}`}>{group.friendly_name}</Link></td>
                                    <td>{group.members.length}</td>
                                    <td>{group.scenes.length}</td>
                                    <td>
                                        <div className="btn-group float-right btn-group-sm" role="group">
                                            <RenameGroupForm name={group.friendly_name} onRename={this.renameGroup} />
                                            <Button<string> promt title={t('remove_group')} item={group.friendly_name} onClick={this.removeGroup} className="btn btn-danger"><i className="fa fa-trash" /></Button>
                                        </div>
                                    </td>
                                </tr>
                            )).reverse()
                        }
                    </tbody>
                </table>
            </div>
        </div>

    }

    render(): JSX.Element {
        return <>
            {this.renderGroupCreationForm()}
            {this.renderGroups()}
        </>

    }
}

const mappedProps = ["groups", "devices", "deviceStates", "bridgeInfo"];
const ConnectedGroupsPage = withTranslation("groups")(connect<unknown, unknown, PropsFromStore, GroupsApi>(mappedProps, actions)(GroupsPage));
export default ConnectedGroupsPage;
