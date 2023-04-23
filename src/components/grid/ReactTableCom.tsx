import React from 'react';
import {
    useTable,
    useSortBy,
    HeaderGroup,
    Column,
    useAsyncDebounce,
    useGlobalFilter,
    ActionType,
    TableInstance,
    TableState,
} from 'react-table';

import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import debounce from 'lodash/debounce';
import { local } from '@toolz/local-storage';

interface Props {
    id: string;
    columns: Array<Column<any>>;
    data: Array<any>;
}

type GlobalFilterProps = {
    globalFilter: string;
    setGlobalFilter(arg1: string): void;
};

export function GlobalFilter({ globalFilter, setGlobalFilter }: GlobalFilterProps) {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((v) => {
        setGlobalFilter(v);
    }, 200);

    const { t } = useTranslation(['common']);
    const clearInput = () => {
        setValue('');
        setGlobalFilter('');
    };

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={t('common:enter_search_criteria')}
            />
            <button className="btn btn-outline-secondary" type="button" onClick={clearInput}>
                <i className="fa fa-times"></i>
            </button>
        </div>
    );
}

const TABLE_STORAGE_PREFIX = 'z2m-';
export const getStorageKey = (id: string) => `${TABLE_STORAGE_PREFIX}${id}`;

export type StateItem = Partial<TableState<Record<string, unknown>>>;

export const persist = (key: string, data: StateItem): void => {
    local.setItem(getStorageKey(key), data);
};

export const restore = (key: string): StateItem => {
    return local.getItem<StateItem>(key);
};

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

export const Table: React.FC<Props> = ({ columns, data, id }) => {
    const initialState = local.getItem<Partial<TableState<Record<string, unknown>>>>(getStorageKey(id)) || {};
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, visibleColumns, setGlobalFilter } =
        useTable<Record<string, unknown>>(
            {
                instanceId: id,
                stateReducer,
                columns,
                data,
                autoResetSortBy: false,
                autoResetFilters: false,
                initialState,
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
                {headerGroups.map((headerGroup: HeaderGroup<Record<string, unknown>>) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        <th className="text-nowrap">#</th>
                        {headerGroup.headers.map((column) => (
                            <th className="text-nowrap" {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                        <tr {...row.getRowProps()}>
                            <td>
                                <div className="font-weight-bold">{i + 1}</div>
                            </td>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
