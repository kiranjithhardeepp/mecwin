import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import log from "../../assets/logoW.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={log} alt="logo" className="logo" />
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>
              <Link to="/Home" className="nav-link">
                Home
              </Link>
              <Link to="/product" className="nav-link">
                product
              </Link>
              <Link to="/" className="nav-link">
                logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
