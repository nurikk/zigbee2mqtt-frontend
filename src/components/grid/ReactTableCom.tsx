import React from "react";
import { useTable, useSortBy, HeaderGroup, Column, useAsyncDebounce, useGlobalFilter, ActionType, TableInstance, TableState } from 'react-table'

import cx from "classnames";
import { useTranslation } from "react-i18next";

import { set, get } from "local-storage";
import debounce from "lodash/debounce";

interface Props {
  id: string;
  columns: Array<Column<any>>;
  data: Array<any>;
}

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(v => {
    setGlobalFilter(v || undefined)
  }, 200);

  const { t } = useTranslation(['common'])

  return (
    <span>
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={t('common:enter_search_criteria')}
        className="form-control"
      />
    </span>
  )
}

const persist = debounce((key: string, data: Record<string, unknown>): void => {
  set(key, data);
})


const stateReducer = (newState: TableState<any>, action: ActionType, previousState: TableState<any>, instance?: TableInstance<any>): TableState<any> => {
  if (instance) {
    const { instanceId } = instance;
    const { sortBy, globalFilter } = newState;
    persist(instanceId, { sortBy, globalFilter })
  }
  return newState;
};

export const Table: React.FC<Props> = ({ columns, data, id }) => {
  const initialState = get<Partial<TableState<any>>>(id) || {};
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    setGlobalFilter,
  } = useTable<any>(
    {
      instanceId: id,
      stateReducer,
      columns,
      data,
      autoResetSortBy: false,
      autoResetFilters: false,
      initialState
    },
    useGlobalFilter,
    useSortBy
  )


  return (
    <table {...getTableProps()} className="table responsive">
      <thead>
        <tr>
          <th
            colSpan={visibleColumns.length}
          >
            <GlobalFilter
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {headerGroups.map((headerGroup: HeaderGroup<any>) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="text-nowrap" {...column.getHeaderProps(column.getSortByToggleProps())}>
                <span className={cx({ 'btn-link mr-1': column.canSort })}>{column.render('Header')}</span>
                <span>
                <i className={cx('fa', {
                  'fa-sort-amount-down invisible': !column.isSorted,
                  'fa-sort-amount-down-alt': column.isSorted && !column.isSortedDesc,
                  'fa-sort-amount-down': column.isSorted && column.isSortedDesc,
                })} />
                </span>
              </th>
            ))}
          </tr>
        ))}

      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            )
          }
        )}
      </tbody>
    </table>

  )
}