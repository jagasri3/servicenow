import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/servicenowlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <Link to="/" className="navbar-button">Home</Link>
        
        <div className="dropdown">
          <button className="dropbtn" style={{ backgroundColor: '#180d65' }}>Services</button>
          <div className="dropdown-content">
            <Link to="/services" className="navbar-button">Car</Link>
            <Link to="/bike" className="navbar-button">Bike</Link>
          </div>
        </div>
        
        <Link to="/about" className="navbar-button">About Us</Link>
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/contact" className="navbar-button">Contact</Link>
      </div>
      <div className="navbar-icons">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
        <Link to="/profile" className="profile-icon">
          <FontAwesomeIcon icon={faUserCircle} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
