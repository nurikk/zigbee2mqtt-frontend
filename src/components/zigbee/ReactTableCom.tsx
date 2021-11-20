import React from "react";
import { useTable, useSortBy, HeaderGroup, Column, UseSortByOptions, UsePaginationOptions, useAsyncDebounce, useGlobalFilter } from 'react-table'
import { ZigbeeTableData as Data } from ".";
import cx from "classnames";
import { useTranslation } from "react-i18next";

interface Props {
  columns: Array<Column<Data>>;
  data: Array<Data>;
}

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
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

export const Table: React.FC<Props> = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    setGlobalFilter,
  } = useTable<Data>(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  )


  return (
    <>
      <table {...getTableProps()} className="table responsive mt-1">
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
          {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <span className={cx({ 'btn btn-link': column.canSort })}>{column.render('Header')}</span>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i className={`fa fa-sort-amount-down-alt`} />
                        : <i className={`fa fa-sort-amount-down`} />
                      : <i className={`fa fa-sort-amount-down invisible`} />}
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
    </>
  )
}