import React from "react";
import { useTranslation } from "react-i18next";
import { Group, WithDevices } from "../../store";
import { Device } from "../../types";
import { DeviceGroupRow } from "./DeviceGroupRow";



export interface DeviceGroupProps extends WithDevices {
    group: Group;
    removeDeviceFromGroup(groupFriendlyName: string, deviceFriendlyName: string): void;
} 




export function DeviceGroup(props: DeviceGroupProps): JSX.Element {
    const { t } = useTranslation(["zigbee", "common"]);
    const { group, removeDeviceFromGroup, devices } = props;
    const onRemove = (deviceFriendlyName: string): void => {
        removeDeviceFromGroup(group.friendly_name, deviceFriendlyName);
    };

    return <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{t('pic')}</th>
                <th scope="col">{t('friendly_name')}</th>
                <th scope="col">{t('ieee_address')}</th>
                <th scope="col">{t('endpoint')}</th>
                <th scope="col" className="text-right">{t('common:action')}</th>
            </tr>
        </thead>
        <tbody>
            {group.members.map((groupMemebershipInfo, idx) => <DeviceGroupRow key={groupMemebershipInfo.ieee_address} removeDeviceFromGroup={onRemove} rowNumber={idx} devices={devices} groupAddress={groupMemebershipInfo} />)}
        </tbody>
    </table>;
}
