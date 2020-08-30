import style from "./style.css";
import { Component, ComponentChild, h } from "preact";
import orderBy from "lodash/orderBy";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import { Device, SortDirection } from "../../types";
import { genDeviceDetailsLink, genDeviceImageUrl, lastSeen, toHex, noCoordinator } from "../../utils";
import SafeImg from "../safe-image";
import { Notyf } from "notyf";
import PowerSource from "../power-source";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import actions, { Actions } from "../../actions";
import ActionTH from "./ActionTH";


//TODO: proper type alias
type SortColumns =
    "lastSeen"
    | "network_address"
    | "friendly_name"
    | "ieee_addr"
    | "definition.vendor"
    | "st.linkquality"
    | "definition.model"
    | "Interview.State"
    | "PowerSource";


interface ZigbeeTableState {
    sortDirection: SortDirection;
    sortColumn: SortColumns;
    currentTime: number;
}




const storeKey = "ZigbeeTableState";

export class ZigbeeTable extends Component<Actions & GlobalState, ZigbeeTableState> {
    constructor() {
        super();
        this.state = {
            sortDirection: "desc",
            sortColumn: "lastSeen",
            currentTime: Date.now()
        };
    }

    restoreState(): void {
        const storedState = localStorage.getItem(storeKey);
        if (storedState) {
            try {
                const restored: Partial<ZigbeeTableState> = JSON.parse(storedState);
                this.setState(restored);
            } catch (e) {
                new Notyf().error(e.toString());
            }
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

    loadData = (showLoading = true): void => {
        const { getZigbeeDevicesList } = this.props;
        getZigbeeDevicesList(showLoading);

    };


    componentDidMount(): void {
        this.restoreState();
        this.loadData();
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
        const { devices, isLoading } = this.props;
        if (devices.length) {
            return this.renderDevicesTable();

        }
        return <div class="container h-100"><div class="row h-100 justify-content-center align-items-center">

            {isLoading ? (<div class="row ">
                <div class="col-12">
                    Loading, please wait.
                                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>) : 'No data'}
        </div></div>

    }


    renderDevicesTable(): ComponentChild {
        const { sortColumn, sortDirection } = this.state;
        const { devices, deviceStates } = this.props;
        const sortedDevices = orderBy<Device>(devices, [sortColumn], [sortDirection]).filter(noCoordinator);
        const { onSortChange } = this;

        return (
            <table className={`table table-striped table-borderless ${style.adaptive} ${style.zigbee}`}>
                <thead>
                    <tr className="text-nowrap">
                        <th>#</th>
                        <th>Pic</th>
                        <ActionTH<SortColumns> className={cx(style["nwk-addr"], style["action-column"])} column="network_address"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange}>nwkAddr</ActionTH>
                        <ActionTH<SortColumns> className={style["action-column"]} column="friendly_name"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange}>Friendly name</ActionTH>
                        <ActionTH<SortColumns> className={cx(style["ieee-addr"], style["action-column"])} column="ieee_addr"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange}>ieee_addr</ActionTH>
                        <ActionTH<SortColumns> className={cx(style["manu-name"], style["action-column"])} column="definition.vendor"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange} titile="definition.vendor">Manufacturer</ActionTH>
                        <ActionTH<SortColumns> className={style["action-column"]} column="definition.model"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange}>Model</ActionTH>
                        <th>LQI</th>
                        <ActionTH<SortColumns> className={style["action-column"]} column="lastSeen"
                            currentDirection={sortDirection} current={sortColumn}
                            onClick={onSortChange}>Last seen</ActionTH>

                        <th>Power</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDevices.map((device: Device, index) => 
                    <tr className={cx({'table-danger': !device.supported})}>
                        <td className="font-weight-bold">{index + 1}</td>
                        <td className={style["device-pic"]}><SafeImg class={cx(style["device-image"])}
                            src={genDeviceImageUrl(device.definition?.model)} />
                        </td>
                        <td className={style["nwk-addr"]}><a
                            href={genDeviceDetailsLink(device.ieee_address)}>{toHex(device.network_address)}</a>
                        </td>
                        <td>{device.friendly_name}</td>
                        <td className={style["ieee-addr"]}>{device.ieee_address}</td>
                        <td title={device.definition?.vendor ?? 'Unsupported'}
                            className={cx(style["manu-name"], "text-truncate", "text-nowrap", "position-relative")}>{device.definition?.vendor ?? 'Unsupported'}</td>
                        <td>{device.definition?.model ?? 'Unsupported'}</td>
                        <td>{deviceStates[device.friendly_name]?.linkquality}</td>
                        <td>{lastSeen(device)}</td>
                        <td className="text-left">
                            <PowerSource source={device.power_source} battery={deviceStates[device.friendly_name]?.battery} />
                        </td>
                        <td>
                            <DeviceControlGroup device={device} />
                        </td>
                    </tr>)}

                </tbody>
            </table>

        );
    }
}

const mappedProps = ["isLoading", "time", "devices", "forceRender", "deviceStates"];
const ConnectedDevicePage = connect<{}, ZigbeeTableState, GlobalState, Actions>(mappedProps, actions)(ZigbeeTable);
export default ConnectedDevicePage;
