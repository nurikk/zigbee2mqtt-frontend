import style from "./style.css";
import { Component, ComponentChild, h } from "preact";
import { fetchZigbeeDevicesList, startInterview } from "../actions";
import Timed, { lastSeen, TimedProps } from "../time";
import Button from "../button";
import orderBy from "lodash/orderBy";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import { Device, DeviceSupportStatus, inteviewsCount } from "../../types";
import { genDeviceDetailsLink, genDeviceShortAddress } from "../../utils";

type SortDirection = "asc" | "desc";
//TODO: proper type alias
type SortColumns =
    "last_seen"
    | "nwkAddr"
    | "friendly_name"
    | "ieeeAddr"
    | "ManufName"
    | "st.linkquality"
    | "ModelId"
    | "Interview.State"
    | "st.battery";


interface State {
    isLoading: boolean;
    sortDirection: SortDirection;
    sortColumn: SortColumns;
    devices: Device[];
}


interface ActionTHProps<T> {
    column: T;
    current: T;
    currentDirection: SortDirection;

    onClick?(arg1: unknown): void;

    [k: string]: unknown;
}

class ActionTH<T> extends Component<ActionTHProps<T>, {}> {
    onClick = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        const { column, onClick } = this.props;
        onClick && onClick(column);
    };

    renderArrow(): ComponentChild {
        const { currentDirection, current, column } = this.props;
        if (current === column) {
            return <i className={`fa fa-sort-amount-${currentDirection}`}/>;
        }
        return <i className={`fa fa-sort-amount-asc ${style.invisible}`}/>;

    }

    render(): ComponentChild {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, onClick, current, column, ...rest } = this.props;
        return <th {...rest}>
            <a href="#" onClick={this.onClick}>{children}</a>
            {this.renderArrow()}
        </th>;
    }
}

const storeKey = "ZigbeeTableState";

export class ZigbeeTable extends Component<TimedProps, State> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            sortDirection: "desc",
            sortColumn: "last_seen",
            devices: []
        };
    }

    restoreState(): void {
        const storedState = localStorage.getItem(storeKey);
        if (storedState) {
            try {
                const restored: Partial<State> = JSON.parse(storedState);
                this.setState(restored);
            } catch (e) {
                console.error(e);
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
            console.error(e);
        }
    };
    loadData = (): void => {
        this.setState({ isLoading: true }, () => {
            fetchZigbeeDevicesList((err, devices: Device[]) => {
                this.setState({ isLoading: false, devices });
            });
        });
    };

    componentDidMount(): void {
        this.restoreState();
        this.loadData();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onInterviewClick = (device: Device): void => {
        if (confirm("Start Interview?")) {
            startInterview(genDeviceShortAddress(device.nwkAddr), this.loadData);
        }
    };

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
        const { devices, isLoading } = this.state;
        if (isLoading) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>;
        }
        return (devices.length ? this.renderDevicesTable() : <div>No data</div>);
    }

    renderInterviewState(device: Device): ComponentChild {
        const { onInterviewClick } = this;
        const interviewTrigger = <Button<Device> className="btn btn-normal btn-sm" onClick={onInterviewClick}
                                                 item={device}><i className="fa fa-refresh"/></Button>;

        if (device.Interview) {
            if (inteviewsCount === device.Interview.State) {
                return "Ok";
            }
            return <div>{device.Interview.State ?? 0}/{inteviewsCount} {interviewTrigger}</div>;
        }
        return <div>N/A {interviewTrigger}</div>;
    }

    renderPowerSource(device: Device): ComponentChild {
        if (device.st && device.st.battery) {
            return device.st.battery;
        }
        if (device.powerSource == "Main") {
            return <i className="fa fa-plug"/>;
        }
        if (device.powerSource == "Battery") {
            return <i className="fa fa-battery"/>;
        }
        return <i className="fa fa-question"/>;
    }

    renderDevicesTable(): ComponentChild {
        const { sortColumn, sortDirection } = this.state;
        const { time } = this.props;
        const { devices } = this.state;
        const sortedDevices = orderBy<Device>(devices, [sortColumn], [sortDirection]);
        const { onSortChange } = this;

        return (
            <table className={`table table-striped ${style.adaptive} ${style.zigbee}`}>
                <thead>
                <tr className="text-nowrap">
                    <th>#</th>
                    <ActionTH<SortColumns> className={style["action-column"]} column="nwkAddr"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>nwkAddr</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="friendly_name"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>FriendlyName</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="ieeeAddr"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>ieeeAddr</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="ManufName"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>ManufName</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="ModelId"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>ModelId</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="st.linkquality"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>LinkQuality</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="Interview.State"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>Interview</ActionTH>
                    <ActionTH<SortColumns> className={style["action-column"]} column="last_seen"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>LastSeen</ActionTH>
                    <th>Routes</th>
                    <ActionTH<SortColumns> className={style["action-column"]} column="st.battery"
                                           currentDirection={sortDirection} current={sortColumn}
                                           onClick={onSortChange}>PS</ActionTH>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {sortedDevices.map((device: Device, index) => <tr className={cx({
                    "table-danger": !device.ieeeAddr
                })}>
                    <td className="font-weight-bold">{index + 1}</td>
                    <td><a href={genDeviceDetailsLink(device.nwkAddr)}>{genDeviceShortAddress(device.nwkAddr)}</a>
                    </td>
                    <td>{device.friendly_name}</td>
                    <td>{device.ieeeAddr ? `0x${device.ieeeAddr}` : "<corrupted>"}</td>
                    <td>{device.ManufName}</td>
                    <td className={cx({
                        "table-success": device.supported == DeviceSupportStatus.Supported,
                        "table-danger": device.supported == DeviceSupportStatus.UnSupported,
                        "table-warning": device.supported == DeviceSupportStatus.Unknown
                    })}>{device.ModelId}</td>
                    <td>{device.st?.linkquality}</td>
                    <td className={cx({
                        "table-warning": device.Interview?.State !== 4
                    })}>{this.renderInterviewState(device)}</td>
                    <td>{lastSeen(device, time)}</td>
                    <td>{device?.Rtg?.map((route) => <a
                        href={genDeviceDetailsLink(route)}>{genDeviceShortAddress(route)}</a>)}</td>
                    <td className="text-left">{this.renderPowerSource(device)}</td>
                    <td>
                        <DeviceControlGroup device={device}/>
                    </td>
                </tr>)}

                </tbody>
            </table>

        );
    }
}


export default Timed(ZigbeeTable);
