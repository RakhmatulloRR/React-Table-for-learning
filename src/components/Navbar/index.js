import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData1 } from "./sidebarData/index";
import { Nav, NavbarBox } from "./style";
import { Link, Outlet, useLocation } from "react-router-dom";

function Navbar(props) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const location = useLocation();
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <NavbarBox>
          <span className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </span>

          <p style={{ color: "white", width: "100%", textAlign: "center" }}>
            {" "}
            {location.pathname}
          </p>
        </NavbarBox>
        <Nav tgl={sidebar}>
          <ul onClick={showSidebar}>
            <li className="navbar-toggle">
              <span className="menu-bars">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </span>
            </li>
            <ul>
              {SidebarData1.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ul>
        </Nav>
      </IconContext.Provider>
      <Outlet />
    </>
  );
}

export default Navbar;
