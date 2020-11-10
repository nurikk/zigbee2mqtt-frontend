import style from "./style.css";
import React, { Component, Fragment } from "react";
import orderBy from "lodash/orderBy";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import { Device, SortDirection, DeviceState } from "../../types";
import { genDeviceDetailsLink, lastSeen, toHex } from "../../utils";
import { Notyf } from "notyf";
import PowerSource from "../power-source/power-source";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions";
import { Link } from "react-router-dom";
import DeviceImage from "../device-image";
import TableContainer from "@material-ui/core/TableContainer";
import { TableHead, TableRow, TableCell, Table, TableBody, TableSortLabel, Box, CircularProgress, createStyles } from "@material-ui/core";
import isEqual from "lodash/isEqual";
import Alert from '@material-ui/lab/Alert';
import { Center } from "../center/center";


const styles = createStyles({
    visuallyHidden: {
        display: 'none'
    },
});

type SortColumn =
    | "device.network_address"
    | "device.friendly_name"
    | "device.ieee_address"
    | "device.definition.vendor"
    | "device.definition.model"
    | "state.linkquality"
    | "state.last_seen"
    | "state.elapsed"
    | "state.battery";


interface ZigbeeTableState {
    sortDirection: SortDirection;
    sortColumn: SortColumn | SortColumn[];
    currentTime: number;
    sortedTableData: ZigbeeTableData[];
    error?: object;
}


interface ZigbeeTableData {
    device: Device;
    state: DeviceState;
}

const storeKey = "ZigbeeTableState";
const longLoadingTimeout = 15 * 1000;
interface HeadCell {
    id?: SortColumn;
    label: string;
    numeric: boolean;
    hidden?: boolean;
}


export class ZigbeeTable extends Component<GlobalState, ZigbeeTableState> {
    constructor(props) {
        super(props);
        this.state = {
            sortDirection: "desc",
            sortColumn: "device.network_address",
            currentTime: Date.now(),
            sortedTableData: []
        };
    }

    restoreState(): void {
        const { sortColumn, sortDirection } = this.state;

        const storedState = localStorage.getItem(storeKey);
        if (storedState) {
            try {
                const restored: Pick<ZigbeeTableState, "sortDirection" | "sortColumn"> = JSON.parse(storedState);
                this.setState(restored);
            } catch (e) {
                new Notyf().error(e.toString());
            }
        } else {
            this.onSortChange(sortColumn, sortDirection);
        }
    }

    saveState = (): void => {
        const { sortDirection, sortColumn } = this.state;
        const storeData = {
            sortDirection,
            sortColumn
        };
        //in private mode localstorage access can throw exceptions
        try {
            localStorage.setItem(storeKey, JSON.stringify(storeData));
        } catch (e) {
            new Notyf().error(e.toString());
        }
    };
    handleLongLoading = () => {
        const { devices } = this.props;

        if (devices.size == 0) {
            const error = <Fragment>
                <strong>Loading devices takes too long time.</strong>
                <div>Consider reading <a href="https://www.zigbee2mqtt.io/information/frontend.html">documentation</a></div>
            </Fragment>;
            this.setState({ error });
        }
    }
    componentDidMount(): void {
        setTimeout(this.handleLongLoading, longLoadingTimeout);
        this.restoreState();
    }

    static getDerivedStateFromProps(props: Readonly<GlobalState>, state: ZigbeeTableState): Partial<ZigbeeTableState> {
        const { sortColumn, sortDirection } = state;
        const { devices, deviceStates } = props;
        const tableData: ZigbeeTableData[] = [];
        devices.forEach((device) => {
            if (device.type !== "Coordinator") {
                tableData.push({
                    device,
                    state: deviceStates.get(device.friendly_name)

                });
            }
        });
        return { sortedTableData: orderBy<ZigbeeTableData>(tableData, sortColumn, [sortDirection]) };
    }


    onSortChange = (column: SortColumn | SortColumn[], sortDir: SortDirection = undefined): void => {
        const { sortColumn } = this.state;
        let { sortDirection } = this.state;

        if (isEqual(sortColumn, column)) {
            if (sortDir) {
                sortDirection = sortDir;
            } else if (sortDirection == "asc") {
                sortDirection = "desc";
            } else {
                sortDirection = "asc";
            }
        }

        this.setState({ sortColumn: column, sortDirection }, this.saveState);
    };

    renderError() {
        const { error } = this.state;
        return <Center><Alert severity="error">{error}</Alert></Center>;
    }
    render() {
        const { error } = this.state;
        const { devices } = this.props;
        if (devices.size) {
            return this.renderDevicesTable();
        }
        if (error) {
            return this.renderError();
        }
        return (
            <Center>
                <CircularProgress />
            </Center>
        );
    }
    lastSeenIsAvaliable(): boolean {
        const { bridgeInfo } = this.props;
        return bridgeInfo?.config?.advanced?.elapsed || bridgeInfo?.config?.advanced?.last_seen != "disable";
    }

    renderDevicesTableHeader() {
        const { sortColumn, sortDirection } = this.state;
        const { onSortChange } = this;
        const createSortHandler = (property: SortColumn) => (event: React.MouseEvent<unknown>) => {
            onSortChange(property);
        };
        const headCells: HeadCell[] = [
            { numeric: false, label: '#' },
            { numeric: false, label: 'Pic' },
            { id: 'device.friendly_name', numeric: false, label: 'Friendly name' },
            { id: 'device.ieee_address', numeric: false, label: 'IEEE address' },
            { id: 'device.definition.vendor', numeric: false, label: 'Manufacturer' },
            { id: 'device.definition.model', numeric: false, label: 'Model' },
            { id: 'state.linkquality', numeric: true, label: 'LQI' },
            { id: 'state.last_seen', numeric: false, label: 'Last seen', hidden: !this.lastSeenIsAvaliable() },
            { id: 'state.battery', numeric: false, label: 'Power' },
            { numeric: false, label: ' ' },
        ];
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => <TableCell
                            key={headCell.label}
                            align={headCell.numeric ? 'right' : 'left'}
                            sortDirection={sortColumn === headCell.id ? sortDirection : false}
                        >
                            {headCell.id ? <TableSortLabel
                                active={sortColumn === headCell.id}
                                direction={sortColumn === headCell.id ? sortDirection : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                            >
                                {headCell.label}
                            </TableSortLabel> : headCell.label}
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
        )
    }

    renderDevicesTable() {
        const { sortedTableData } = this.state;
        console.log(styles.visuallyHidden);
        return (
            <TableContainer>
                <Table size="small" className={style.adaptive}>
                    {this.renderDevicesTableHeader()}
                    <TableBody>
                        {sortedTableData.map(({ device, state }, id) =>
                            <TableRow key={device.friendly_name} title={state?.update?.state == "available" ? 'Avaliable OTA update' : device.definition?.description}>
                                <TableCell scope="row">{id + 1}</TableCell>
                                <TableCell className={style["device-pic"]}>
                                    <DeviceImage className={style["device-image"]} device={device} deviceStatus={state} />
                                </TableCell>
                                <TableCell>
                                    <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
                                </TableCell>
                                <TableCell title={toHex(device.network_address)}>{device.ieee_address}</TableCell>
                                <TableCell>{device.definition?.vendor ?? 'Unsupported'}</TableCell>
                                <TableCell title={device?.definition?.description}>{device.definition?.model ?? 'Unsupported'}</TableCell>
                                <TableCell align="right">{state?.linkquality ?? "N/A"}</TableCell>
                                <TableCell className={cx({ 'd-none': !this.lastSeenIsAvaliable })}>{lastSeen(state?.last_seen, state?.elapsed)}</TableCell>
                                <TableCell>
                                    <PowerSource source={device.power_source} battery={state?.battery} />
                                </TableCell>
                                <TableCell>
                                    <DeviceControlGroup device={device} state={state} />
                                </TableCell>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

const mappedProps = ["devices", "deviceStates", "bridgeInfo"];
const ConnectedZigbeePage = connect<{}, ZigbeeTableState, GlobalState, {}>(mappedProps, actions)(ZigbeeTable);
export default ConnectedZigbeePage;
