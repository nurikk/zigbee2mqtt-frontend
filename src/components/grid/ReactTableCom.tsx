import React from 'react';
import {
    ActionType,
    Column,
    HeaderGroup,
    TableInstance,
    TableState,
    useGlobalFilter,
    useSortBy,
    useTable,
} from 'react-table';

import cx from 'classnames';

import * as local from 'store2';
import { GlobalFilter } from './GlobalFilter';
import { getStorageKey, persist } from './persist';

type PartialTableState = Partial<TableState<Record<string, unknown>>>;

interface Props {
    id: string;
    columns: Array<Column<any>>;
    data: Array<any>;
    initialState?: PartialTableState;
}

const stateReducer = (
    newState: TableState<Record<string, unknown>>,
    action: ActionType,
    previousState: TableState<Record<string, unknown>>,
    instance?: TableInstance<any>,
): TableState<Record<string, unknown>> => {
    if (instance) {
        const { instanceId } = instance;
        const { sortBy, globalFilter } = newState;
        persist(instanceId, { sortBy, globalFilter });
    }
    return newState;
};

export const Table: React.FC<Props> = ({ columns, data, id, initialState = {} }) => {
    const storedOrDefaultState = local.get<PartialTableState>(getStorageKey(id)) || initialState;
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, visibleColumns, setGlobalFilter } =
        useTable<Record<string, unknown>>(
            {
                instanceId: id,
                stateReducer,
                columns,
                data,
                autoResetSortBy: false,
                autoResetFilters: false,
                initialState: storedOrDefaultState,
            },
            useGlobalFilter,
            useSortBy,
        );

    return (
        <table {...getTableProps()} className="table responsive">
            <thead>
                <tr>
                    <th colSpan={visibleColumns.length + 1}>
                        <GlobalFilter globalFilter={state.globalFilter} setGlobalFilter={setGlobalFilter} />
                    </th>
                </tr>
                {headerGroups.map((headerGroup: HeaderGroup<Record<string, unknown>>, idx) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                        <th className="text-nowrap">#</th>
                        {headerGroup.headers.map((column) => (
                            <th
                                className="text-nowrap"
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                key={column.id}
                            >
                                <span className={cx({ 'btn-link me-1': column.canSort })}>
                                    {column.render('Header')}
                                </span>
                                <span>
                                    <i
                                        className={cx('fa', {
                                            'fa-sort-amount-down invisible': !column.isSorted,
                                            'fa-sort-amount-down-alt': column.isSorted && !column.isSortedDesc,
                                            'fa-sort-amount-down': column.isSorted && column.isSortedDesc,
                                        })}
                                    />
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            <td>
                                <div className="font-weight-bold">{i + 1}</div>
                            </td>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} key={cell.column.id}>
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
