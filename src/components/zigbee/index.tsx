import style from "./style.css";
import { Component, ComponentChild, h } from "preact";
import orderBy from "lodash/orderBy";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import { Device, SortDirection, DeviceStats } from "../../types";
import { genDeviceDetailsLink, genDeviceImageUrl, lastSeen, toHex, noCoordinator } from "../../utils";
import SafeImg from "../safe-image";
import { Notyf } from "notyf";
import PowerSource from "../power-source";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import actions, { Actions } from "../../actions";
import ActionTH from "./ActionTH";


type SortColumns =
    | "device.network_address"
    | "device.friendly_name"
    | "device.ieee_address"
    | "device.definition.vendor"
    | "device.definition.model"
    | "state.linkquality"
    | "state.last_seen"
    | "state.battery";


interface ZigbeeTableState {
    sortDirection: SortDirection;
    sortColumn: SortColumns;
    currentTime: number;
    sortedTableData: ZigbeeTableData[];
}


interface ZigbeeTableData {
    device: Device;
    state: DeviceStats;
}



const storeKey = "ZigbeeTableState";

export class ZigbeeTable extends Component<Actions & GlobalState, ZigbeeTableState> {
    constructor() {
        super();
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
                const restored: Partial<ZigbeeTableState> = JSON.parse(storedState);
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

    componentDidMount(): void {
        this.restoreState();
    }

    static getDerivedStateFromProps(props: Readonly<GlobalState & Actions>, state: ZigbeeTableState): Partial<ZigbeeTableState> {
        const { sortColumn, sortDirection } = state;
        const { devices, deviceStates } = props;
        const tableData: ZigbeeTableData[] = devices.filter(noCoordinator).map((device) => {
            return {
                device,
                state: deviceStates[device.friendly_name]

            }
        });
        return { sortedTableData: orderBy<ZigbeeTableData>(tableData, [sortColumn], [sortDirection]) };
    }


    onSortChange = (column: SortColumns, sortDir: SortDirection | undefined = undefined): void => {
        const { sortColumn } = this.state;
        let { sortDirection } = this.state;

        if (sortColumn === column) {
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

    render(): ComponentChild {
        const { devices } = this.props;
        if (devices.length) {
            return this.renderDevicesTable();

        }
        return (<div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">No data</div>
        </div>);

    }


    renderDevicesTable(): ComponentChild {
        const { sortColumn, sortDirection, sortedTableData } = this.state;
        const { onSortChange } = this;

        return (
            <div class="table-responsive">
                <table className={`table table-striped table-borderless ${style.adaptive}`}>
                    <thead>
                        <tr className="text-nowrap">
                            <th>#</th>
                            <th>Pic</th>
                            <ActionTH<SortColumns> className={cx(style["action-column"])} column="device.network_address"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>nwkAddr</ActionTH>
                            <ActionTH<SortColumns> className={style["action-column"]} column="device.friendly_name"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>Friendly name</ActionTH>
                            <ActionTH<SortColumns> className={cx(style["ieee-addr"], style["action-column"])} column="device.ieee_address"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>IEEE address</ActionTH>
                            <ActionTH<SortColumns> className={cx(style["action-column"])} column="device.definition.vendor"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange} titile="definition.vendor">Manufacturer</ActionTH>
                            <ActionTH<SortColumns> className={style["action-column"]} column="device.definition.model"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>Model</ActionTH>

                            <ActionTH<SortColumns> className={style["action-column"]} column="state.linkquality"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>LQI</ActionTH>

                            <ActionTH<SortColumns> className={style["action-column"]} column="state.last_seen"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>Last seen</ActionTH>

                            <ActionTH<SortColumns> className={style["action-column"]} column="state.battery"
                                currentDirection={sortDirection} current={sortColumn}
                                onClick={onSortChange}>Power</ActionTH>

                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedTableData.map(({ device, state }, id) =>
                            <tr title={state?.update?.state == "available" ? 'Avaliable OTA update' : device.definition?.description} className={cx({ 'table-danger': !device.supported, 'table-info': state?.update?.state == "available" })}>
                                <td className="font-weight-bold">{id + 1}</td>
                                <td className={style["device-pic"]}><SafeImg class={cx(style["device-image"])}
                                    src={genDeviceImageUrl(device.definition?.model)} />
                                </td>
                                <td><a
                                    href={genDeviceDetailsLink(device.ieee_address)}>{toHex(device.network_address)}</a>
                                </td>
                                <td>{device.friendly_name}</td>
                                <td className={style["ieee-addr"]}>{device.ieee_address}</td>
                                <td title={device.definition?.vendor ?? 'Unsupported'}
                                    className={cx("text-truncate", "text-nowrap", "position-relative")}>{device.definition?.vendor ?? 'Unsupported'}</td>
                                <td>{device.definition?.model ?? 'Unsupported'}</td>
                                <td>{state?.linkquality ?? "N/A"}</td>
                                <td>{lastSeen(state?.last_seen, state?.elapsed)}</td>
                                <td className="text-left">
                                    <PowerSource source={device.power_source} battery={state?.battery} />
                                </td>
                                <td>
                                    <DeviceControlGroup device={device} state={state} />
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>

        );
    }
}

const mappedProps = ["isLoading", "time", "devices", "forceRender", "deviceStates"];
const ConnectedZigbeePage = connect<{}, ZigbeeTableState, GlobalState, Actions>(mappedProps, actions)(ZigbeeTable);
export default ConnectedZigbeePage;
