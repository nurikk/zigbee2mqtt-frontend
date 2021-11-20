import React, { Component, Fragment, ReactNode } from "react";

import { Device, DeviceState } from "../../types";
import { Notyf } from "notyf";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions/actions";
import style from "./style.css";
import Spinner from "../spinner";
import { genDeviceDetailsLink, getLastSeenType, lastSeen, toHex } from "../../utils";
import { WithTranslation, withTranslation } from "react-i18next";
import DeviceImage from "../device-image";
import { ModelLink, VendorLink } from "../vendor-links/verndor-links";
import { Link } from "react-router-dom";
import { DisplayValue } from "../display-value/DisplayValue";
import { LastSeen } from "../LastSeen";
import PowerSource from "../power-source";
import DeviceControlGroup from "../device-control/DeviceControlGroup";
import { Table } from "./ReactTableCom";
import { CellProps, Column } from "react-table";
import { join } from "lodash";

type SortOrder = "asc" | "desc";

interface ZigbeeTableState {
    sortDirection: SortOrder;
    sortColumnId: number;
    error?: ReactNode;
    search: string;
    columnOrder: string[];
}

export interface ZigbeeTableData {
    id: string;
    device: Device;
    state: DeviceState;
}

const storeKey = "ZigbeeTableState";
const longLoadingTimeout = 15 * 1000;

type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo'>;
type ZigbeeTableProps = PropsFromStore & WithTranslation<"zigbee">;



const pesistToLocalStorage = (storeData) => {
    //in private mode localstorage access can throw exceptions
    try {
        localStorage.setItem(storeKey, JSON.stringify(storeData));
    } catch (e) {
        new Notyf().error(e.toString());
    }
};
export class ZigbeeTable extends Component<ZigbeeTableProps, ZigbeeTableState> {
    constructor(props: Readonly<ZigbeeTableProps>) {
        super(props);
        this.state = {
            sortDirection: "desc" as SortOrder,
            sortColumnId: 1,
            search: "",
            columnOrder: []
        };
    }

    restoreState(): void {
        const storedState = localStorage.getItem(storeKey);
        if (storedState) {
            try {
                const restored: Pick<ZigbeeTableState, "sortDirection" | "sortColumnId" | "columnOrder"> = JSON.parse(storedState);
                this.setState(restored);
            } catch (e) {
                new Notyf().error(e.toString());
            }
        }
    }
    saveState(): void {
        const { sortColumnId, sortDirection, columnOrder } = this.state;
        const storeData = {
            sortColumnId,
            sortDirection,
            columnOrder
        }
        pesistToLocalStorage(storeData);
    }
    // onSortChange = (selectedColumn: TableColumn<ZigbeeTableData>, sortDirection: SortOrder): void => {
    //     this.setState({
    //         sortDirection,
    //         sortColumnId: selectedColumn.id as number
    //     }, this.saveState);
    // }

    handleLongLoading = (): void => {
        const { devices } = this.props;
        if (Object.keys(devices).length == 0) {
            const error = <Fragment>
                <strong>Loading devices takes too long time.</strong>
                <div>Consider reading <a href="https://www.zigbee2mqtt.io/guide/configuration/webui.html#webui">documentation</a></div>
            </Fragment>;
            this.setState({ error });
        }
    }
    componentDidMount(): void {
        setTimeout(this.handleLongLoading, longLoadingTimeout);
        this.restoreState();
    }

    renderError(): JSX.Element {
        const { error } = this.state;
        return (<div className="h-100 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                {error}
            </div>
        </div>);
    }

    render(): JSX.Element {
        const { error } = this.state;
        const { devices } = this.props;
        if (Object.keys(devices).length) {
            return this.renderDevicesTable();
        }
        if (error) {
            return this.renderError();
        }
        return (<div className="h-100 d-flex justify-content-center align-items-center">
            <Spinner />
        </div>);
    }
    getDevicesToRender(): ZigbeeTableData[] {
        const { devices, deviceStates } = this.props;
        return Object.values(devices)
            .filter(device => device.type !== "Coordinator")
            .map((device) => {
                const state = deviceStates[device.friendly_name] ?? {} as DeviceState;
                return {
                    id: device.friendly_name,
                    device,
                    state
                } as ZigbeeTableData;
            });
    }

    renderDevicesTable(): JSX.Element {
        const { bridgeInfo, t } = this.props;
        const devices = this.getDevicesToRender();
        const { sortColumnId, sortDirection, search } = this.state;
        const lastSeenType = getLastSeenType(bridgeInfo.config.advanced);
        const reactTableColumns: Column<ZigbeeTableData>[] = [
            {
                Header: '#',
                id: '-rownumber',
                Cell: ({ row }: CellProps<ZigbeeTableData>) => <div className="font-weight-bold">{row.index + 1}</div>,
                disableSortBy: true,

            },
            {
                Header: t('pic') as string,
                Cell: ({ value: { device, state } }) => <DeviceImage className={style["device-image"]} device={device} deviceStatus={state} />,
                accessor: rowData => rowData,
                disableSortBy: true,

            },
            {
                Header: t('friendly_name') as string,
                accessor: ({ device }) => device.friendly_name,
                Cell: ({ row: { original: { device } } }) => <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>

            },
            {
                Header: t('ieee_address') as string,
                accessor: ({ device }) => [device.ieee_address, toHex(device.network_address, 4)].join(' '),
                Cell: ({ row: { original: { device } } }) => <>{device.ieee_address} ({toHex(device.network_address, 4)})</>,
            },
            {
                Header: t('manufacturer') as string,
                accessor: ({ device }) => [device.manufacturer, device.definition?.vendor].join(' '),
                Cell: ({ row: { original: { device } } }) => <VendorLink device={device} />
            },
            {
                Header: t('model') as string,
                accessor: ({ device }) => [device.model_id, device.definition?.model].join(' '),
                Cell: ({ row: { original: { device } } }) => <ModelLink device={device} />
            },
            {
                Header: t('lqi') as string,
                accessor: ({ state }) => state.linkquality,
                Cell: ({ row: { original: { state } } }) => <DisplayValue value={state.linkquality} name="linkquality" />,
            },
            {
                Header: t('last_seen') as string,
                accessor: ({ state }) => lastSeen(state, lastSeenType)?.getTime(),
                Cell: ({ row: { original: { state } } }) => <LastSeen state={state} lastSeenType={lastSeenType} />,
                // isVisible: lastSeenType !== "disable"

            },
            {
                Header: t('power') as string,
                accessor: ({ device }) => device.power_source,
                Cell: ({ row: { original: { state, device } } }) => <PowerSource source={device.power_source} battery={state.battery as number} batteryLow={state.battery_low as boolean} />,
            },
            {
                Header: '',
                id: '-controls',
                Cell: ({ row: { original: { state, device } } }) => <DeviceControlGroup device={device} state={state} />,
                disableSortBy: true,
            }
        ];
        return (<div className="card">
            <div className="table-responsive mt-1">
                <Table
                    columns={reactTableColumns}
                    data={devices}
                />
            </div>
        </div>);
    }
}

const mappedProps = ["devices", "deviceStates", "bridgeInfo"];
const ConnectedZigbeePage = withTranslation(["zigbee", "common"])(connect<unknown, ZigbeeTableState, PropsFromStore, unknown>(mappedProps, actions)(ZigbeeTable));
export default ConnectedZigbeePage;
