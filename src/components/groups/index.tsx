import React, { ChangeEvent, Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";

import { GlobalState } from "../../store";
import Button from "../button";

import { RenameGroupForm } from "./RenameForm";
import { GroupsApi } from "../../actions/GroupsApi";
import { withTranslation, WithTranslation } from "react-i18next";
import { AddDeviceToGroup } from "./AddDeviceToGroup";
import { DeviceGroup } from "./DeviceGroup";
import { RecallRemoveAndMayBeStoreScene } from "../device-page/scene";
import { SceneApi } from "../../actions/SceneApi";
import { DeviceState } from "../../types";
interface GroupsPageState {
    newGroupName: string;
    newGroupId?: number;
}
type PropsFromStore = Pick<GlobalState, 'groups' | 'devices'>;
export class GroupsPage extends Component<PropsFromStore & SceneApi & GroupsApi & WithTranslation<"groups">, GroupsPageState> {
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
    removeDeviceFromGroup = (groupFriendlyName: string, deviceFriendlyName: string): void => {
        const { removeDeviceFromGroup } = this.props;
        removeDeviceFromGroup(deviceFriendlyName, groupFriendlyName);
    }
    renameGroup = (oldName: string, newName: string): void => {
        const { renameGroup } = this.props;
        renameGroup(oldName, newName);
    }
    renderGroups(): JSX.Element[] {
        const { groups, devices, addDeviceToGroup, sceneStore, sceneRecall, sceneRemove, sceneRemoveAll, t } = this.props;
        return groups.map(group => (
            <div key={group.id} className="card">
                <div className="card-header" id={`heading${group.id}`}>
                    <h5 className="mb-0">
                        <button className="btn btn-link btn-sm">{group.friendly_name} (#{group.id})</button>
                        <div className="btn-group float-right btn-group-sm" role="group">
                            <RenameGroupForm name={group.friendly_name} onRename={this.renameGroup} />
                            <Button<string> promt title={t('remove_group')} item={group.friendly_name} onClick={this.removeGroup} className="btn btn-danger"><i className="fa fa-trash" /></Button>
                        </div>
                    </h5>
                </div>


                <div className="card-body">
                    <div className="table-responsive">
                        <DeviceGroup group={group} devices={devices} removeDeviceFromGroup={this.removeDeviceFromGroup} />
                    </div>
                </div>

                <div className="card-footer">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xxl-6 d-flex">
                            <div className="form-group w-100">
                                <AddDeviceToGroup addDeviceToGroup={addDeviceToGroup} devices={devices} group={group} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xxl-6 d-flex">
                            <div className="form-group w-100">
                                <RecallRemoveAndMayBeStoreScene
                                    target={group}
                                    sceneStore={sceneStore}
                                    sceneRecall={sceneRecall}
                                    sceneRemove={sceneRemove}
                                    showStoreButton={true}
                                    deviceState={{} as DeviceState}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )).reverse()

    }

    render(): JSX.Element {
        return <>
            {this.renderGroupCreationForm()}
            {this.renderGroups()}
        </>

    }
}

const mappedProps = ["groups", "devices"];
const ConnectedGroupsPage = withTranslation("groups")(connect<unknown, unknown, PropsFromStore, GroupsApi>(mappedProps, actions)(GroupsPage));
export default ConnectedGroupsPage;
