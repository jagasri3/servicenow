import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog, faUsers, faTools, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/servicenowlogo.png';
import './AdminSidebar.css'; // Import the CSS file

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear authentication token (example: localStorage.removeItem('authToken'))
    localStorage.removeItem('authToken');
    // Redirect to login page
    navigate('/login');
  };

  return (
    
    <div>
      
      <div className={`admin-sidebar ${isOpen ? 'admin-sidebar-open' : 'admin-sidebar-closed'}`}>
        <a href="dashboad" className="admin-sidebar-link">
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="/booking-details" className="admin-sidebar-link">
          <FontAwesomeIcon icon={faCog} /> Booking Details
        </a>
        <a href="#" className="admin-sidebar-link">
          <FontAwesomeIcon icon={faUsers} /> Customer Details
        </a>
        <Link to="/mechanics-management" className="admin-sidebar-link">
          <FontAwesomeIcon icon={faTools} /> Manage Mechanics
        </Link>
        <a href="#" className="admin-sidebar-link" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </a>
      </div>

      <div id="admin-main" className={`admin-main-content ${isOpen ? 'admin-main-content-shifted' : ''}`}>
        <div className="admin-header">
          <span className="admin-openbtn" onClick={toggleNav}>
            &#9776;
          </span>
          <img src={logo} alt="Logo" className={`admin-logo ${isOpen ? 'admin-logo-shifted' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
