import React, { useMemo } from 'react'
import { useTable, useColumnOrder } from 'react-table'
import MOCK_DATA from '../mocks/MOCK_DATA.json'
import { COLUMNS1 } from '../mocks/columns'
import './table.css'


export default function ColumnOrder() {
  const columns = useMemo(() => COLUMNS1, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    setColumnOrder,
    prepareRow
  } = useTable({
    columns,
    data
  }, useColumnOrder)
  const changeColumnOrder = () => { 
    setColumnOrder(["id", "first_name", "last_name", "phone", "country", "date_of_birth"])
   }

  return (
    <>
    <button onClick={changeColumnOrder}>Change Column Order</button>
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
          {rows.map(row => {
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
    </>
  )
}

