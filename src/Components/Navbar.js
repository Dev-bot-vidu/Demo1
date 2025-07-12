import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import arrow from "../Assets/arrow.png";
import logoc from "../Assets/logoclean.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoc} alt="Logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

        <li
          className={`services-menu ${servicesOpen ? "open" : ""}`}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          <span className="nav-link service-link">
            Services <img src={arrow} alt="arrow" className="arrow" />
          </span>
          <div className="dropdown">
            <div className="dropdown-column">
              <h4>House Cleaning</h4>
              <Link to="/regular-cleaning">Regular Cleaning</Link>
              <Link to="/move-out-and-move-in">Move Out & Move In</Link>
              <Link to="/deep-cleaning">Deep Cleaning</Link>
              <Link to="/post-construction">Post Construction</Link>
            </div>
            <div className="dropdown-column">
              <h4>Exterior Cleaning</h4>
              <Link to="/roof-cleaning">Roof Cleaning</Link>
              <Link to="/gutter-cleaning">Gutter Cleaning</Link>
              <Link to="/house-washing">House Washing</Link>
              <Link to="/pressure-washing">Pressure Washing</Link>
            </div>
            <div className="dropdown-column">
            <h4>
                <Link to="/carpet-and-upholstery" style={{ color: 'white', fontWeight: 800 , fontSize: 16 }}>
                  Carpet & Upholstery
                </Link>
            </h4> 
            </div>
             <div className="dropdown-column">
              <h4>Commercial Cleaning</h4>
              <Link to="/construction">Construction Final Clean</Link>
              <Link to="/corporate-office">Corporate Office Cleaning</Link>
              <Link to="/retail-space"> Retail Spaces Cleaning</Link>
              <Link to="/vrbo-and-airbnb"> VRBO & AIRBNB Cleaning</Link>
            </div>
          </div>
        </li>

        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/booking1" onClick={() => setMenuOpen(false)}>Booking</Link></li>
        <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
      </ul>

      {/* Desktop-only login button */}
      <Link to="/booking" className="login-btn desktop-only">Book Now</Link>
    </nav>
  );
}

export default Navbar;
