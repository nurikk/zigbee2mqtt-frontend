import React from 'react';
import { StateApi } from '../../actions/StateApi';
import { WithBridgeInfo, WithDevices, WithDeviceStates } from '../../store';
import { Endpoint, Group } from '../../types';
import { DeviceGroupRow } from './DeviceGroupRow';
import { GroupsApi } from '../../actions/GroupsApi';

export interface DeviceGroupProps
    extends WithDevices,
        WithDeviceStates,
        WithBridgeInfo,
        Pick<GroupsApi, 'removeDeviceFromGroup'> {
    group: Group;
}

export function DeviceGroup(props: DeviceGroupProps & StateApi): JSX.Element {
    const { group, removeDeviceFromGroup, devices, deviceStates, bridgeInfo } = props;
    const { setStateValue, setDeviceState, getDeviceState } = props;
    const removeMember = (device: string, endpoint: Endpoint): Promise<void> =>
        removeDeviceFromGroup(device, endpoint, group.friendly_name);

    return (
        <div className="row">
            {group.members.map((groupMembershipInfo) => (
                <DeviceGroupRow
                    key={`${groupMembershipInfo.ieee_address}-${groupMembershipInfo.endpoint}`}
                    removeDeviceFromGroup={removeMember}
                    devices={devices}
                    groupAddress={groupMembershipInfo}
                    deviceStates={deviceStates}
                    bridgeInfo={bridgeInfo}
                    {...{ setStateValue, setDeviceState, getDeviceState }}
                />
            ))}
        </div>
    );
}
