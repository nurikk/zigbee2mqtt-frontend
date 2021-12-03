import React, { Component, Fragment, ReactNode } from "react";

import { Device, DeviceState, LastSeenType } from "../../types";
import { Notyf } from "notyf";
import { connect } from "unistore/react";
import { GlobalState, OnlineOrOffline } from "../../store";
import actions from "../../actions/actions";
import style from "./style.css";
import Spinner from "../spinner";
import { genDeviceDetailsLink, lastSeen, toHex } from "../../utils";
import { useTranslation, WithTranslation, withTranslation } from "react-i18next";
import DeviceImage from "../device-image";
import { ModelLink, VendorLink } from "../vendor-links/verndor-links";
import { Link } from "react-router-dom";
import { DisplayValue } from "../display-value/DisplayValue";
import { LastSeen } from "../LastSeen";
import PowerSource from "../power-source";
import DeviceControlGroup from "../device-control/DeviceControlGroup";
import { Table } from "../grid/ReactTableCom";
import { CellProps, Column } from "react-table";
import cx from "classnames";
export interface ZigbeeTableData {
    id: string;
    device: Device;
    state: DeviceState;
    avalilabilityState: OnlineOrOffline;
    avalilabilityEnabledForDevice: boolean;
}


type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo' | 'avalilability'>;
type ZigbeeTableProps = PropsFromStore & WithTranslation<"zigbee">;

type DevicesTableProps = {
    data: ZigbeeTableData[];
    lastSeenType: LastSeenType;
    availabilityFeatureEnabled: boolean;
}
type AvaliabilityStateProps = {
    avaliability: OnlineOrOffline;
    availabilityFeatureEnabled?: boolean;
    avalilabilityEnabledForDevice?: boolean;
}
export function Avaliability(props: AvaliabilityStateProps) {
    const { t } = useTranslation(["avaliability"]);
    const { avaliability, availabilityFeatureEnabled = true, avalilabilityEnabledForDevice = true } = props;
    if (availabilityFeatureEnabled && avalilabilityEnabledForDevice) {
        return <span className={cx({
            "text-danger animation-blinking": avaliability === "offline",
            'text-success': avaliability === "online"
        })}>{t(avaliability)}</span>
    } else {
        return <a target="_blank" rel="noopener noreferrer"
            href="https://www.zigbee2mqtt.io/guide/configuration/device-availability.html#availability-advanced-configuration">{t('disabled')}</a>
    }

}
function DevicesTable(props: DevicesTableProps) {
    const { data, lastSeenType, availabilityFeatureEnabled } = props;
    const { t } = useTranslation(["zigbee", "common", "avaliability"]);

    const columns: Column<ZigbeeTableData>[] = [
        {
            id: 'rownumber',
            Header: '#',
            Cell: ({ row }: CellProps<ZigbeeTableData>) => <div className="font-weight-bold">{row.index + 1}</div>,
            disableSortBy: true,

        },
        {
            id: 'pic',
            Header: t('pic') as string,
            Cell: ({ row: { original: { device, state } } }) => <DeviceImage className={style["device-image"]} device={device} deviceStatus={state} />,
            accessor: rowData => rowData,
            disableSortBy: true,


        },
        {
            id: 'friendly_name',
            Header: t('friendly_name') as string,
            accessor: ({ device }) => device.friendly_name,
            Cell: ({ row: { original: { device } } }) => <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>

        },
        {
            id: 'ieee_address',
            Header: t('ieee_address') as string,
            accessor: ({ device }) => [device.ieee_address, toHex(device.network_address, 4)].join(' '),
            Cell: ({ row: { original: { device } } }) => <>{device.ieee_address} ({toHex(device.network_address, 4)})</>,
        },
        {
            id: 'manufacturer',
            Header: t('manufacturer') as string,
            accessor: ({ device }) => [device.manufacturer, device.definition?.vendor].join(' '),
            Cell: ({ row: { original: { device } } }) => <VendorLink device={device} />
        },
        {
            id: 'model',
            Header: t('model') as string,
            accessor: ({ device }) => [device.model_id, device.definition?.model].join(' '),
            Cell: ({ row: { original: { device } } }) => <ModelLink device={device} />
        },
        {
            id: 'lqi',
            Header: t('lqi') as string,
            accessor: ({ state }) => state.linkquality,
            Cell: ({ row: { original: { state } } }) => <DisplayValue value={state.linkquality} name="linkquality" />,
        },
        ...(lastSeenType !== "disable" ? [{
            id: 'last_seen',
            Header: t('last_seen') as string,
            accessor: ({ state }) => lastSeen(state, lastSeenType)?.getTime(),
            Cell: ({ row: { original: { state } } }) => <LastSeen state={state} lastSeenType={lastSeenType} />,

        }] : []),
        ...(availabilityFeatureEnabled ? [{
            id: 'avaliability',
            Header: t('avaliability:avaliability') as string,
            accessor: ({ avalilabilityState }) => avalilabilityState,
            Cell: ({ row: { original: { avalilabilityState, avalilabilityEnabledForDevice } } }) => {
                return <Avaliability
                    avaliability={avalilabilityState}
                    avalilabilityEnabledForDevice={avalilabilityEnabledForDevice} />
            }
            ,
        }] : []),

        {
            id: 'power',
            Header: t('power') as string,
            accessor: ({ state }) => state.battery,
            Cell: ({ row: { original: { state, device } } }) => <PowerSource source={device.power_source} battery={state.battery as number} batteryLow={state.battery_low as boolean} />,
        },
        {
            id: 'controls',
            Header: '',
            Cell: ({ row: { original: { device, state } } }) => <DeviceControlGroup device={device} state={state} />,
            disableSortBy: true,
        }
    ];

    return (<div className="card">
        <div className="table-responsive">
            <Table
                id="zigbee"
                columns={columns}
                data={data}
            />
        </div>
    </div>);
}
export function ZigbeeTable(props: ZigbeeTableProps) {
    const { devices, deviceStates, bridgeInfo: { config }, avalilability } = props;
    const availabilityFeatureEnabled = !!config.availability;
    const getDevicesToRender = (): ZigbeeTableData[] => {
        return Object.values(devices)
            .filter(device => device.type !== "Coordinator")
            .map((device) => {
                const state = deviceStates[device.friendly_name] ?? {} as DeviceState;
                return {
                    id: device.friendly_name,
                    device,
                    state,
                    avalilabilityState: avalilability[device.friendly_name] ?? "offline",
                    avalilabilityEnabledForDevice: config.devices[device.ieee_address]?.availability !== false
                } as ZigbeeTableData;
            });
    }
    const data = React.useMemo(() => getDevicesToRender(), [devices, deviceStates]);

    return <DevicesTable
        data={data}
        lastSeenType={config.advanced.last_seen}
        availabilityFeatureEnabled={availabilityFeatureEnabled}
    />

}

const mappedProps = ["devices", "deviceStates", "bridgeInfo", "avalilability"];
const ConnectedZigbeePage = withTranslation(["zigbee", "common"])(connect<unknown, unknown, PropsFromStore, unknown>(mappedProps, actions)(ZigbeeTable));
export default ConnectedZigbeePage;
