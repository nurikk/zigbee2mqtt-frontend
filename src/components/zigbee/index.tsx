import style from "./style.css";
import { h, ComponentChild, Component } from "preact";
import { fetchZibeeDevicesList, renameDevice, startInterview, removeDevice } from "../actions";
import Timed, { TimedProps, lastSeen } from "../time";
import Button from "../button";
import orderBy from "lodash/orderBy";
import cx from 'classnames';
import { Device, Dictionary } from "../../types";
import { genDeviceShortAddress, genDeviceDetailsLink } from "../../utils";
type SortDirection = "asc" | "desc";
//TODO: proper type alias
type SortColumns = "1.last_seen";

type DeviceKeyTupple = [string, Device];


interface State {
    isLoading: boolean;
    sortDirection: SortDirection;
    sortColumn: SortColumns;
    devices: Dictionary<Device>;
    sortedDevices: DeviceKeyTupple[];
}


interface ActionTHProps {
    column: string;
    onClick?(arg1: unknown): void;
    current: string;
    currenDirection: SortDirection;
    [k: string]: unknown;
}

class ActionTH extends Component<ActionTHProps, {}> {
    onClick = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        const { column, onClick } = this.props;
        onClick && onClick(column);
    }
    renderArrow(): ComponentChild {
        const { currenDirection, current, column } = this.props;
        if (current === column) {
            return <i className={`fa fa-sort-amount-${currenDirection}`} />
        }
        return <i className={`fa fa-sort-amount-asc ${style.invisible}`} />

    }
    render(): ComponentChild {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, onClick, current, column, ...rest } = this.props;
        return <th {...rest}>
            <a href="#" onClick={this.onClick}>{children}</a>
            {this.renderArrow()}
        </th>
    }
}

export class ZigbeeTable extends Component<TimedProps, State> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            sortDirection: "asc",
            sortColumn: "1.last_seen",
            devices: {},
            sortedDevices: []
        }
    }
    loadData = (): void => {
        this.setState({ isLoading: true }, () => {
            fetchZibeeDevicesList((err, devices: Dictionary<Device>) => {
                this.setState({ isLoading: false, devices }, () => {
                    this.onSortChange("1.last_seen")
                });
            });
        });

    }
    componentDidMount(): void {
        this.loadData();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onBindClick = ([nwkAddr, device]: DeviceKeyTupple): void => {
        location.href = `/zigbee?bind=${genDeviceShortAddress(nwkAddr)}`;
    }

    onRenameClick = ([nwkAddr, device]: DeviceKeyTupple): void => {
        const newName = prompt('Enter new name', device.friendly_name);
        if (newName && newName !== device.friendly_name) {
            renameDevice(genDeviceShortAddress(nwkAddr), newName, this.loadData);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRemoveClick = ([nwkAddr, device]: DeviceKeyTupple): void => {
        if (confirm('Remove device?')) {
            removeDevice(genDeviceShortAddress(nwkAddr), this.loadData);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onInteviewClick = ([nwkAddr, device]: DeviceKeyTupple): void => {
        if (confirm('Start Interview?')) {
            startInterview(genDeviceShortAddress(nwkAddr), this.loadData);
        }
    }

    onSortChange = (column: SortColumns): void => {
        const { sortColumn } = this.state;
        let { sortDirection } = this.state;
        if (sortColumn === column) {
            if (sortDirection == "asc") {
                sortDirection = "desc"
            } else {
                sortDirection = "asc";
            }
        }

        const { devices } = this.state;
        let sortedDevices = Object
            .entries(devices)
            .map(([k, device]) => [k, device] as DeviceKeyTupple);

        sortedDevices = orderBy<DeviceKeyTupple>(sortedDevices, [column], [sortDirection]);
        this.setState({ sortColumn: column, sortDirection, sortedDevices });
    }
    render(): ComponentChild {
        const { sortedDevices, isLoading } = this.state;
        if (isLoading) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        return (sortedDevices.length ? this.renderDevicesTable() : <div>No data</div>);
    }
    renderInterviewState([nwkAddr, device]: DeviceKeyTupple): ComponentChild {
        const { onInteviewClick } = this;
        const inteviewsCount = 4;
        const intreviewTrigger = <Button<DeviceKeyTupple> className="btn btn-normal btn-sm" onClick={onInteviewClick} item={[nwkAddr, device]}><i className="fa fa-refresh" /></Button>;
        if (device.Interview) {
            if (inteviewsCount === device.Interview.State) {
                return 'Ok';
            }
            return <div>{device.Interview.State}/{inteviewsCount} {intreviewTrigger}</div>;
        }
        return <div>N/A {intreviewTrigger}</div>;
    }
    renderDevicesTable(): ComponentChild {
        const { sortedDevices, sortColumn, sortDirection } = this.state;
        const { time } = this.props;
        const { onBindClick, onRenameClick, onRemoveClick, onSortChange } = this;

        return (
            <table className={`table table-striped ${style.adaptive}`}>
                <thead>
                    <tr className="text-nowrap">
                        <ActionTH className={style["action-colum"]} column="0" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>nwkAddr</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.friendly_name" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>FriendlyName</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.ieeeAddr" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>ieeeAddr</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.ManufName" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>ManufName</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.ModelId" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>ModelId</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.st.linkquality" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>LinkQuality</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.Interview.State" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>Interview</ActionTH>
                        <ActionTH className={style["action-colum"]} column="1.last_seen" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>LastSeen</ActionTH>
                        <th>Routes</th>
                        <ActionTH className={style["action-colum"]} column="1.st.battery" currenDirection={sortDirection} current={sortColumn} onClick={onSortChange}>PS</ActionTH>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedDevices.map(([k, device]: DeviceKeyTupple) => (
                        <tr>
                            <td><a href={genDeviceDetailsLink(k)}>{genDeviceShortAddress(k)}</a></td>
                            <td>{device.friendly_name}</td>
                            <td>{device.ieeeAddr}</td>
                            <td>{device.ManufName}</td>
                            <td className={style.green}>
                                {device.ModelId}
                            </td>
                            <td>{device.st?.linkquality}</td>
                            <td className={cx({
                                'table-success': device.Interview?.State == 4,
                                'table-warning': device.Interview?.State !== 4,
                            })}>{this.renderInterviewState([k, device])}</td>
                            <td>{lastSeen(device, time)}</td>
                            <td>{device?.Rtg?.join(', ')}</td>
                            <td>{device.st?.battery}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <Button<DeviceKeyTupple> className="btn btn-danger btn-sm" onClick={onRemoveClick} item={[k, device]}><i className="fa fa-trash" /></Button>
                                    <Button<DeviceKeyTupple> className="btn btn-secondary btn-sm" onClick={onRenameClick} item={[k, device]}><i className="fa fa-edit" /></Button>
                                    {device.ieeeAddr ? <Button<DeviceKeyTupple> className="btn btn-success btn-sm" onClick={onBindClick} item={[k, device]}>Bind</Button> : null}
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        );
    }
}


export default Timed(ZigbeeTable);
