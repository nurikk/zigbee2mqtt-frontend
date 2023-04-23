import React from 'react';
import { useTranslation } from 'react-i18next';
import { AddDeviceToGroup } from './AddDeviceToGroup';
import { DeviceGroup } from './DeviceGroup';
import { DeviceState, Group } from '../../types';

import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { WithBridgeInfo, WithDevices, WithDeviceStates, WithGroups } from '../../store';
import { GroupsApi } from '../../actions/GroupsApi';
import { StateApi } from '../../actions/StateApi';
import { SceneApi } from '../../actions/SceneApi';
import { AddScene } from '../device-page/AddScene';
import { RecallRemove } from '../device-page/RecallRemove';

type PropsFromStore = WithDevices & WithDeviceStates & WithGroups & WithBridgeInfo;

type UrlParams = {
    groupId?: string;
};
export type GroupPageProps = WithDevices &
    WithDeviceStates &
    WithBridgeInfo &
    WithGroups &
    StateApi &
    GroupsApi &
    SceneApi &
    RouteComponentProps<UrlParams>;

function GroupPage(props: GroupPageProps) {
    const { devices, deviceStates, bridgeInfo, groups } = props;
    const { match } = props;
    const groupId = parseInt(match.params.groupId as string, 10);
    const group =
        groups.find((g) => g.id === groupId) ||
        ({
            id: groupId,
            friendly_name: 'Unknown group',
            members: [],
            scenes: [],
        } as unknown as Group);
    const { setStateValue, setDeviceState, getDeviceState } = props;
    const { addDeviceToGroup, removeDeviceFromGroup } = props;
    const { sceneStore, sceneRemoveAll, sceneRecall, sceneRemove } = props;

    const { t } = useTranslation(['groups']);

    return (
        <div>
            <h5>
                {t('group_name')}: {group.friendly_name} (#{group.id})
            </h5>

            <div className="row">
                <div className="col-12 col-sm-4 col-xxl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="form-group">
                                <AddDeviceToGroup addDeviceToGroup={addDeviceToGroup} devices={devices} group={group} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-xxl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="form-group">
                                <RecallRemove
                                    target={group}
                                    sceneStore={sceneStore}
                                    sceneRecall={sceneRecall}
                                    sceneRemove={sceneRemove}
                                    sceneRemoveAll={sceneRemoveAll}
                                    deviceState={{} as DeviceState}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-xxl-4 d-flex">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="form-group">
                                <AddScene
                                    sceneStore={sceneStore}
                                    target={group}
                                    deviceState={{} as DeviceState}
                                    setDeviceState={(dev: string, value: Record<string, unknown>) => {
                                        return Promise.resolve();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeviceGroup
                group={group}
                devices={devices}
                deviceStates={deviceStates}
                bridgeInfo={bridgeInfo}
                removeDeviceFromGroup={(groupFriendlyName: string, deviceFriendlyName: string): void => {
                    removeDeviceFromGroup(deviceFriendlyName, groupFriendlyName);
                }}
                {...{ setStateValue, setDeviceState, getDeviceState }}
            />
        </div>
    );
}
const GroupPageWithRouter = withRouter(GroupPage);
const mappedProps = ['groups', 'devices', 'deviceStates', 'bridgeInfo'];
const ConnectedGroupPage = connect<unknown, unknown, PropsFromStore, GroupsApi>(
    mappedProps,
    actions,
)(GroupPageWithRouter);
export default ConnectedGroupPage;
