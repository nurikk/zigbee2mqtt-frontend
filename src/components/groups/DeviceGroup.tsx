import React from "react";
import { StateApi } from "../../actions/StateApi";
import { WithBridgeInfo, WithDevices, WithDeviceStates } from "../../store";
import { Group } from "../../types";
import { DeviceGroupRow } from "./DeviceGroupRow";



export interface DeviceGroupProps extends WithDevices, WithDeviceStates, WithBridgeInfo {
    group: Group;
    removeDeviceFromGroup(groupFriendlyName: string, deviceFriendlyName: string): void;
}


export function DeviceGroup(props: DeviceGroupProps & StateApi): JSX.Element {
    const { group, removeDeviceFromGroup, devices, deviceStates, bridgeInfo } = props;
    const { setStateValue, setDeviceState, getDeviceState } = props;
    const onRemove = (deviceFriendlyName: string): void => {
        removeDeviceFromGroup(group.friendly_name, deviceFriendlyName);
    };

    return <div className="row">{
        group.members.map((groupMembershipInfo) => <DeviceGroupRow
            key={groupMembershipInfo.ieee_address}
            removeDeviceFromGroup={onRemove}
            devices={devices}
            groupAddress={groupMembershipInfo}
            deviceStates={deviceStates}
            bridgeInfo={bridgeInfo}
            {...{ setStateValue, setDeviceState, getDeviceState }}
        />)
    }</div>

}
