import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuToggle, setmenuToggle] = useState(false);
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
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
          <Link to="/" className="text-link">
            <li className="menu_item active">
              <span>00</span> Home
            </li>
          </Link>
          <Link to="/destination" className="text-link">
            <li className="menu_item">
              <span>01</span> Destination
            </li>
          </Link>
          <Link to="/crew" className="text-link">
            <li className="menu_item">
              <span>02</span> Crew
            </li>
          </Link>
          <Link to="/technology" className="text-link">
            <li className="menu_item">
              <span>03</span> Technology
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
