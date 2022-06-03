import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from '../mocks/MOCK_DATA.json'
import { COLUMNS1 } from '../mocks/columns'
import './table.css'


export default function PaginationTable1() {
  const columns = useMemo(() => COLUMNS1, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow
  } = useTable({
    columns,
    data
  }, usePagination)

  const {pageIndex} = state

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
          {page.map(row => {
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
      <div>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>prev</button>
        <span>{" "}
          Page{" "}
          <strong>
            {pageIndex+1} of {pageOptions.length} {" "}
          </strong>
        </span>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>next</button>
      </div>
    </>
  )
}


