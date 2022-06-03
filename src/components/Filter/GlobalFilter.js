import React from "react";

export default function GlobalFilter({ filterText, setFilterText }) {
  return (
    <span>
      Filter:{" "}
      <input value={filterText || ""} onChange={(e) => setFilterText(e.target.value)} />
    </span>
  );
}
