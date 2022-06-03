import React, { useMemo } from 'react'
import { useRowSelect, useTable } from 'react-table'
import MOCK_DATA from '../mocks/MOCK_DATA.json'
import { COLUMNS1 } from '../mocks/columns'
import './table.css'
import { Checkbox } from '../Filter/CheckBox'


export default function BasicTable() {
  const columns = useMemo(() => COLUMNS1, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    selectedFlatRows,
    prepareRow
  } = useTable({
    columns,
    data
  }, useRowSelect, (hooks) => hooks.visibleColumns.push((columns) => { return [
    {
      id: "selections ",
      Header: ({getToggleAllRowsSelectedProps}) => (<Checkbox {...getToggleAllRowsSelectedProps()} />),
      Cell: ({row}) => (<Checkbox {...row.getToggleRowSelectedProps()} />),
    },
    ...columns
  ] }))
  const firstPageRows = rows.slice(0,10)
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <pre style={{display: "flex",textAlign: "start"}}>
        <code>
          {
            JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map(row => row.original)
              },
              null,
              2
            )
          }
        </code>
      </pre>
    </>
  )
}

