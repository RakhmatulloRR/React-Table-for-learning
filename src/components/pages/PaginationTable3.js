import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from '../mocks/MOCK_DATA.json'
import { COLUMNS1 } from '../mocks/columns'
import './table.css'


export default function PaginationTable3() {
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
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable({
    columns,
    data,
    initialState: {pageIndex: 3}
  }, usePagination)

  const {pageIndex, pageSize} = state

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
        <span>{" "}
          Page{" "}
          <strong>
            {pageIndex+1} of {pageOptions.length} {" "}
          </strong>
        </span>
        {" "}
        <span>
          | Go To Page: {" "}
          <input type="number" defaultValue={pageIndex + 1}  
          onChange={e => {
            const pageNumber = e.target.value ? +e.target.value - 1 : 0;
            gotoPage(pageNumber)
          }} style={{width: "50px"}}/>
        </span>
        {" "}
        <select value={pageSize} onChange={e => setPageSize(+e.target.value)}>
          {[5, 10, 15, 50].map((pageSize) => (<option value={pageSize} key={pageSize}>
            Show {pageSize}
          </option>))}
        </select>
        
        <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
        <button onClick={()=> previousPage()} disabled={!canPreviousPage}>prev</button>
        <button onClick={()=> nextPage()} disabled={!canNextPage}>next</button>
        <button onClick={()=> gotoPage(pageCount-1)} disabled={!canNextPage}>{">>"}</button>
      </div>
    </>
  )
}