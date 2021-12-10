import React from "react";
import style from "./style.css";
import { genDeviceDetailsLink, lastSeen, toHex } from "../../utils";
import { useTranslation } from "react-i18next";
import DeviceImage from "../device-image";
import { ModelLink, VendorLink } from "../vendor-links/verndor-links";
import { Link } from "react-router-dom";
import { DisplayValue } from "../display-value/DisplayValue";
import { LastSeen } from "../LastSeen";
import PowerSource from "../power-source";
import DeviceControlGroup from "../device-control/DeviceControlGroup";
import { Table } from "../grid/ReactTableCom";
import { CellProps, Column } from "react-table";
import { DevicesPageData } from "./index";
import { Availability } from "./Availability";
import { LastSeenType } from "../../types";

export type DevicesTableProps = {
    data: DevicesPageData[];
    lastSeenType: LastSeenType;
    availabilityFeatureEnabled: boolean;
}

export function DevicesTable(props: DevicesTableProps) {
    const { data, lastSeenType, availabilityFeatureEnabled } = props;
    const { t } = useTranslation(["zigbee", "common", "avaliability"]);
    const lastSeenCol = lastSeenType !== "disable" ? [{
        id: 'last_seen',
        Header: t('last_seen'),
        accessor: ({ state }) => lastSeen(state, lastSeenType)?.getTime(),
        Cell: ({ row: { original: { state } } }) => <LastSeen state={state} lastSeenType={lastSeenType} />,
    }] : [];
    const availabilityCol = availabilityFeatureEnabled ? [{
        id: 'availability',
        Header: t('avaliability:avaliability'),
        accessor: ({ availabilityState }) => availabilityState,
        Cell: ({ row: { original: { availabilityState, availabilityEnabledForDevice } } }) => {
            return <Availability
                availability={availabilityState}
                availabilityEnabledForDevice={availabilityEnabledForDevice} />;
        },
    }] : [];
    const columns = [
        {
            id: 'number',
            Header: '#',
            Cell: ({ row }: CellProps<DevicesPageData>) => <div className="font-weight-bold">{row.index + 1}</div>,
            disableSortBy: true,
        },
        {
            id: 'pic',
            Header: t('pic'),
            Cell: ({ row: { original: { device, state } } }) => <DeviceImage className={style["device-image"]} device={device} deviceStatus={state} />,
            accessor: rowData => rowData,
            disableSortBy: true,
        },
        {
            id: 'friendly_name',
            Header: t('friendly_name'),
            accessor: ({ device }) => device.friendly_name,
            Cell: ({ row: { original: { device } } }) => <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
        },
        {
            id: 'ieee_address',
            Header: t('ieee_address'),
            accessor: ({ device }) => [device.ieee_address, toHex(device.network_address, 4)].join(' '),
            Cell: ({ row: { original: { device } } }) => <>{device.ieee_address} ({toHex(device.network_address, 4)})</>,
        },
        {
            id: 'manufacturer',
            Header: t('manufacturer'),
            accessor: ({ device }) => [device.definition?.vendor, device.manufacturer].join(' '),
            Cell: ({ row: { original: { device } } }) => <VendorLink device={device} />
        },
        {
            id: 'model',
            Header: t('model'),
            accessor: ({ device }) => [device.definition?.model, device.model_id].join(' '),
            Cell: ({ row: { original: { device } } }) => <ModelLink device={device} />
        },
        {
            id: 'lqi',
            Header: t('lqi'),
            accessor: ({ state }) => state.linkquality,
            Cell: ({ row: { original: { state } } }) => <DisplayValue value={state.linkquality} name="linkquality" />,
        },
        ...lastSeenCol,
        ...availabilityCol,
        {
            id: 'power',
            Header: t('power'),
            accessor: ({ state, device }) => [state.battery, device.definition?.power].join(' '),
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
                columns={columns as unknown as Column<Record<string, unknown>>[]}
                data={data as unknown as Record<string, unknown>[]} />
        </div>
    </div>);
}
