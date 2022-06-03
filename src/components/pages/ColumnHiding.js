import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../mocks/MOCK_DATA.json'
import { COLUMNS1 } from '../mocks/columns'
import './table.css'
import { Checkbox } from '../Filter/CheckBox'


export default function ColumnHiding() {
  const columns = useMemo(() => COLUMNS1, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    allColumns,
    getToggleHideAllColumnsProps,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
    <div>
      <div style={{textAlign: "center"}}>
        <Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
      </div>
      <div>
        {
          allColumns.map(column => (
            <div key={column.id}>
               <label>
                 <input type="checkbox" {...column.getToggleHiddenProps()}/>
                 {column.Header}
               </label>
            </div>
          ))
        }
      </div>
    </div>
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

