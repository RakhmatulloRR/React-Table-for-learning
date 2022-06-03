import React from "react";

export default function ColumnFilter(props) {
  const {filterValue, setFilter} = props.column
  return (
    <span>
      <input value={filterValue || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
}