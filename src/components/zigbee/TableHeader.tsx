
import React from "react";
import { LastSeenType, SortColumn } from ".";
import { SortDirection } from "../../types";
import ActionTH from "./ActionTH";
import style from "./style.css";

type TableHeaderProps = {
    sortColumn: SortColumn | SortColumn[];
    sortDirection: SortDirection;
    onSortChange(column: SortColumn | SortColumn[], sortDir?: SortDirection): void;
    lastSeenType: LastSeenType;
}
export const TableHeader = (props: TableHeaderProps): JSX.Element=> {
    const { sortColumn, sortDirection, onSortChange, lastSeenType } = props;

    return (
        <thead>
            <tr className="text-nowrap">
                <th>#</th>
                <th>Pic</th>
                <ActionTH<SortColumn> className={style["action-column"]} column="device.friendly_name"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>Friendly name</ActionTH>
                <ActionTH<SortColumn> className={style["action-column"]} column="device.ieee_address"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>IEEE address</ActionTH>
                <ActionTH<SortColumn> className={style["action-column"]} column="device.definition.vendor"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange} title="definition.vendor">Manufacturer</ActionTH>
                <ActionTH<SortColumn> className={style["action-column"]} column="device.definition.model"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>Model</ActionTH>
                <ActionTH<SortColumn> className={style["action-column"]} column="state.linkquality"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>LQI</ActionTH>
                {lastSeenType !== "disable" && <ActionTH<SortColumn> className={style["action-column"]} column="lastSeen"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>Last seen</ActionTH>}
                <ActionTH<SortColumn> className={style["action-column"]} column="state.battery"
                    currentDirection={sortDirection} current={sortColumn}
                    onClick={onSortChange}>Power</ActionTH>
                <th>&nbsp;</th>
            </tr>
        </thead>
    )
}
