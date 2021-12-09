import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="menu">
        <img
          src={menuToggle ? closeMenu : hamburger}
          alt=""
          onClick={() => setmenuToggle(!menuToggle)}
        />
      </div>
      <div className={menuToggle ? "mobile_menu active" : "mobile_menu"}>
        <ul className="menu_items">
          <NavLink to="/" className="text-link" exact={true}>
            <li className="menu_item">
              <span>00</span> Home
            </li>
          </NavLink>
          <NavLink to="/destination" className="text-link">
            <li className="menu_item">
              <span>01</span> Destination
            </li>
          </NavLink>
          <NavLink to="/crew" className="text-link">
            <li className="menu_item">
              <span>02</span> Crew
            </li>
          </NavLink>
          <NavLink to="/technology" className="text-link">
            <li className="menu_item">
              <span>03</span> Technology
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
