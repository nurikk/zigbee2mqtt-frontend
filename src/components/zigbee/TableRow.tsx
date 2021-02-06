
import React from "react";
import style from "./style.css";
import { Link } from "react-router-dom";
import { Device, DeviceState } from "../../types";
import { genDeviceDetailsLink, lastSeen, toHex } from "../../utils";
import  DeviceControlGroup from "../device-control";
import DeviceImage from "../device-image";
import { DisplayValue } from "../display-value/DisplayValue";
import PowerSource from "../power-source";
import { VendorLink, ModelLink } from "../vendor-links/verndor-links";
type TableRowProps = {
    device: Device;
    deviceState: DeviceState;
    id: number;
    lastSeenIsAvaliable: boolean;
}
export const TableRow = (props: TableRowProps) => {
    const { device, deviceState, id, lastSeenIsAvaliable } = props;
    return <tr key={device.friendly_name} title={deviceState.update?.state == "available" ? 'Avaliable OTA update' : device.definition?.description}>
    <td className="font-weight-bold">{id + 1}</td>
    <td className={style["device-pic"]}>
        <DeviceImage className={style["device-image"]} device={device} deviceStatus={deviceState} />
    </td>
    <td>
        <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
    </td>
    <td>{device.ieee_address} ({toHex(device.network_address, 4)})</td>
    <td className="text-truncate text-nowrap position-relative"><VendorLink device={device} /></td>
    <td title={device?.definition?.description}><ModelLink device={device} /></td>
    <td><DisplayValue value={deviceState?.linkquality} name="linkquality"/></td>
    {lastSeenIsAvaliable && <td>{lastSeen(deviceState.last_seen, deviceState.elapsed)}</td>}
    <td className="text-left">
        <PowerSource source={device.power_source} battery={deviceState?.battery as number} batteryLow={deviceState.battery_low as boolean} />
    </td>
    <td>
        <DeviceControlGroup device={device} state={deviceState} />
    </td>
</tr>
}
