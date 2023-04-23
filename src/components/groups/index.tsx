import React, { ChangeEvent, Component } from 'react';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';

import { WithBridgeInfo, WithDevices, WithDeviceStates, WithGroups } from '../../store';
import Button from '../button';
import NiceModal from '@ebay/nice-modal-react';

import { GroupsApi } from '../../actions/GroupsApi';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { SceneApi } from '../../actions/SceneApi';
import { Group } from '../../types';
import { StateApi } from '../../actions/StateApi';
import { Link } from 'react-router-dom';
import { Column } from 'react-table';
import { Table } from '../grid/ReactTableCom';
import { RenameGroupForm } from '../modal/components/RenameGroupModal';

interface GroupsPageState {
    newGroupName: string;
    newGroupId?: number;
}
type PropsFromStore = WithDevices & WithDeviceStates & WithGroups & WithBridgeInfo;

type GroupsTableProps = WithGroups & Pick<GroupsApi, 'removeGroup' | 'renameGroup'>;

function GroupsTable(props: GroupsTableProps) {
    const { t } = useTranslation(['groups']);
    const { groups, removeGroup, renameGroup } = props;

    const columns: Column<Group>[] = [
        {
            id: 'group_id',
            Header: t('group_id') as string,
            accessor: (group) => group.id,
            Cell: ({ row: { original: group } }) => <Link to={`/group/${group.id}`}>{group.id}</Link>,
        },
        {
            id: 'friendly_name',
            Header: t('group_name') as string,
            accessor: (group) => group.friendly_name,
            Cell: ({ row: { original: group } }) => <Link to={`/group/${group.id}`}>{group.friendly_name}</Link>,
        },

        {
            id: 'members',
            Header: t('group_members') as string,
            accessor: (group) => group.members.length ?? 0,
        },
        {
            id: 'scenes',
            Header: t('group_scenes') as string,
            accessor: (group) => group.scenes?.length ?? 0,
        },
        {
            Header: '',
            id: 'actions',
            Cell: ({ row: { original: group } }) => (
                <div className="btn-group float-right btn-group-sm" role="group">
                    <Button<void>
                        className="btn btn-primary"
                        onClick={() =>
                            NiceModal.show(RenameGroupForm, { name: group.friendly_name, onRename: renameGroup })
                        }
                        title={t('rename_group')}
                    >
                        <i className="fa fa-edit" />
                    </Button>
                    <Button<string>
                        prompt
                        title={t('remove_group')}
                        item={group.friendly_name}
                        onClick={removeGroup}
                        className="btn btn-danger"
                    >
                        <i className="fa fa-trash" />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <div className="card">
            <Table id="groups" columns={columns} data={groups} />
        </div>
    );
}
export class GroupsPage extends Component<
    PropsFromStore & StateApi & SceneApi & GroupsApi & WithTranslation<'groups'>,
    GroupsPageState
> {
    state: GroupsPageState = {
        newGroupName: '',
        newGroupId: undefined,
    };

    changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as GroupsPageState);
    };

    onGroupCreateSubmit = (): void => {
        const { newGroupName, newGroupId } = this.state;
        const { createGroup } = this.props;
        createGroup(newGroupName, newGroupId);
    };

    renderGroupCreationForm(): JSX.Element {
        const { t } = this.props;
        const { newGroupName, newGroupId } = this.state;
        return (
            <div className="card">
                <div className="card-body">
                    <div className="input-group">
                        <label htmlFor="newGroupName" className="sr-only">
                            {t('new_group_name')}
                        </label>
                        <input
                            onChange={this.changeHandler}
                            value={newGroupName}
                            required
                            type="text"
                            name="newGroupName"
                            className="form-control"
                            id="newGroupName"
                            placeholder={t('new_group_name_placeholder')}
                        />

                        <label htmlFor="newGroupName" className="sr-only">
                            {t('new_group_id')}
                        </label>
                        <input
                            onChange={this.changeHandler}
                            value={newGroupId === undefined ? '' : newGroupId}
                            type="number"
                            name="newGroupId"
                            className="form-control"
                            id="newGroupId"
                            placeholder={t('new_group_id_placeholder')}
                        />
                        <Button<void> onClick={this.onGroupCreateSubmit} className="btn btn-primary form-control">
                            {t('create_group')}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    renameGroup = (oldName: string, newName: string): void => {
        const { renameGroup } = this.props;
        renameGroup(oldName, newName);
    };

    render(): JSX.Element {
        const { groups, removeGroup, renameGroup } = this.props;
        return (
            <>
                {this.renderGroupCreationForm()}
                <GroupsTable groups={groups} removeGroup={removeGroup} renameGroup={renameGroup} />
            </>
        );
    }
}

const mappedProps = ['groups', 'devices', 'deviceStates', 'bridgeInfo'];
const ConnectedGroupsPage = withTranslation('groups')(
    connect<unknown, unknown, PropsFromStore, GroupsApi>(mappedProps, actions)(GroupsPage),
);
export default ConnectedGroupsPage;
