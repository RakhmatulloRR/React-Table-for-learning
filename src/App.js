import "./App.css";
import BasicTable1 from "./components/pages/BasicTable1";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BasicTable2 from "./components/pages/BasicTable2";
import BasicTable3 from "./components/pages/BasicTable3";
import SortingTable1 from "./components/pages/SortingTable1";
import SortingTable2 from "./components/pages/SortingTable2";
import FilteringTable1 from "./components/pages/FilteringTable1";
import FilteringTable2 from "./components/pages/FilteringTable3";
import FilteringTable3 from "./components/pages/FilteringTable3";
import FilteringTable4 from "./components/pages/FilteringTable4";
import FilteringTable5 from "./components/pages/FilteringTable5";
import PaginationTable1 from "./components/pages/PaginationTable1";
import PaginationTable2 from "./components/pages/PaginationTable2";
import PaginationTable3 from "./components/pages/PaginationTable3";
import RowSelection from "./components/pages/RowSelection";
import ColumnOrder from "./components/pages/ColumnOrder";
import ColumnHiding from "./components/pages/ColumnHiding";
import StickyTable from "./components/pages/StickyTable";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/" element={<Navigate to="/BasicTable1" />} />
              <Route path="/BasicTable1" element={<BasicTable1 />} />
              <Route path="/BasicTable2" element={<BasicTable2 />} />
              <Route path="/BasicTable3" element={<BasicTable3 />} />
              <Route path="/SortingTable1" element={<SortingTable1 />} />
              <Route path="/SortingTable2" element={<SortingTable2 />} />
              <Route path="/FilteringTable1" element={<FilteringTable1 />} />
              <Route path="/FilteringTable2" element={<FilteringTable2 />} />
              <Route path="/FilteringTable3" element={<FilteringTable3 />} />
              <Route path="/FilteringTable4" element={<FilteringTable4 />} />
              <Route path="/FilteringTable5" element={<FilteringTable5 />} />
              <Route path="/PaginationTable1" element={<PaginationTable1 />} />
              <Route path="/PaginationTable2" element={<PaginationTable2 />} />
              <Route path="/PaginationTable3" element={<PaginationTable3 />} />
              <Route path="/RowSelection" element={<RowSelection />} />
              <Route path="/ColumnOrder" element={<ColumnOrder />} />
              <Route path="/ColumnHiding" element={<ColumnHiding />} />
              <Route path="/StickyTable" element={<StickyTable />} />
            </Route>
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
