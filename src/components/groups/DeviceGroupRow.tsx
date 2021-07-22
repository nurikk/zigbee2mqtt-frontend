import React from "react";
import Button from "../button";
import { genDeviceDetailsLink } from "../../utils";
import style from './style.css';
import cx from 'classnames';
import { Link } from "react-router-dom";
import DeviceImage from "../device-image";
import { GroupAddress, WithDevices } from "../../store";
import { useTranslation } from "react-i18next";


type DeviceGroupRowProps = {
    rowNumber: number;
    groupAddress: GroupAddress;
    removeDeviceFromGroup(deviceFriendlyName: string): void;
} & WithDevices;


export function DeviceGroupRow(props: DeviceGroupRowProps): JSX.Element {
    const { t } = useTranslation('devicePage');
    const { rowNumber, removeDeviceFromGroup, groupAddress, devices } = props;
    const device = devices[groupAddress.ieee_address] ?? { ieee_address: groupAddress.ieee_address, friendly_name: t('unknown_device') };

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
