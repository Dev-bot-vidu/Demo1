import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Tab.css";

function Tab() {
  return (
    <nav className="navbar1">
      <ul className="nav-links1">
        <li><Link to="/booking1">House Cleaning</Link></li>
        <li><Link to="/booking2">Exterior Cleaning</Link></li>
        <li><Link to="/booking3">Carpet Cleaning</Link></li>
      </ul>
    </nav>
  );
}

export default Tab;
