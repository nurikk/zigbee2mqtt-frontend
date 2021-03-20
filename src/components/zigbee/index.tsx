import React, { Component, Fragment, ReactNode } from "react";

import { Device, SortDirection, DeviceState } from "../../types";
import { Notyf } from "notyf";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions from "../../actions/actions";

import isEqual from "lodash/isEqual";
import orderBy from "lodash/orderBy";
import Spinner from "../spinner";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { getLastSeenType, lastSeen } from "../../utils";

export type SortColumn =
    | "device.network_address"
    | "device.friendly_name"
    | "device.ieee_address"
    | "device.definition.vendor"
    | "device.definition.model"
    | "state.linkquality"
    | "lastSeen"
    | "state.elapsed"
    | "state.battery";


interface ZigbeeTableState {
    sortDirection: SortDirection;
    sortColumn: SortColumn | SortColumn[];
    currentTime: number;
    sortedTableData: ZigbeeTableData[];
    error?: ReactNode;
}

interface ZigbeeTableData {
    device: Device;
    state: DeviceState;
    lastSeen?: Date;
}

const storeKey = "ZigbeeTableState";
const longLoadingTimeout = 15 * 1000;
export type LastSeenType = "elapsed" | "disable" | "ISO_8601" | "ISO_8601_local" | "epoch";

export class ZigbeeTable extends Component<GlobalState, ZigbeeTableState> {
    constructor(props: Readonly<GlobalState>) {
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
    handleLongLoading = (): void=> {
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
        const { devices, deviceStates, bridgeInfo } = props;
        const tableData: ZigbeeTableData[] = [];


        const lastSeenType = getLastSeenType(bridgeInfo?.config.advanced);


        devices.forEach((device) => {
            if (device.type !== "Coordinator") {
                const state = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
                tableData.push({
                    device,
                    state,
                    lastSeen: lastSeen(state, lastSeenType)

                });
            }
        });
        return { sortedTableData: orderBy<ZigbeeTableData>(tableData, sortColumn, [sortDirection]) };
    }


    onSortChange = (column: SortColumn | SortColumn[], sortDir?: SortDirection): void => {
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
        if (devices.size) {
            return this.renderDevicesTable();
        }
        if (error) {
            return this.renderError();
        }
        return (<div className="h-100 d-flex justify-content-center align-items-center">
            <Spinner />
        </div>);
    }

    renderDevicesTable(): JSX.Element {
        const { bridgeInfo } = this.props;
        const { sortedTableData, sortColumn, sortDirection } = this.state;
        const lastSeenType = getLastSeenType(bridgeInfo.config.advanced);
        return (<div className="card">
            <div className="table-responsive">
                <table className="table align-middle">
                    <TableHeader
                        lastSeenType={lastSeenType}
                        sortColumn={sortColumn}
                        sortDirection={sortDirection}
                        onSortChange={this.onSortChange}
                    />
                    <tbody>
                        {sortedTableData.map(({ device, state }, id) => <TableRow
                            key={device.friendly_name}
                            device={device}
                            deviceState={state}
                            id={id}
                            lastSeenType={lastSeenType}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

const mappedProps = ["devices", "deviceStates", "bridgeInfo"];
const ConnectedZigbeePage = connect<unknown, ZigbeeTableState, GlobalState, unknown>(mappedProps, actions)(ZigbeeTable);
export default ConnectedZigbeePage;
