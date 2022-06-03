import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function AsyncGlobalFilter({ filterText, setFilterText }) {
  const [value, setValue] = useState(filterText);
  const onChange1 = useAsyncDebounce((value) => {
    setFilterText(value || undefined);
  }, 1000);

  return (
    <span>
      Filter:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange1(e.target.value)
        }}
      />
    </span>
  );
}
