import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog, faUsers, faTools, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Ensure you have this CSS file for additional styles
import AdminDashboad from '../AdminComp/AdminDashboad';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const sidebarStyles = {
    height: '100%', // Adjust the height as needed
    width: isOpen ? '15%' : '0', // Change this to reduce the width of the sidebar
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#111',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
  };

  const mainStyles = {
    marginLeft: isOpen ? '15%' : '0', // Change this to match the sidebar width
    transition: 'margin-left 0.5s',
  };

  const buttonStyles = {
    display: isOpen ? 'none' : 'inline-block',
    fontSize: '30px',
    cursor: 'pointer',
    color: '#fff',
    padding: '10px 15px',
  };

  const closeButtonStyles = {
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 15px',
  };

  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 15px',
    display: 'block',
    transition: '0.3s',
  };

  const imgStyles = {
    width: '100%',
    display: 'block',
    marginTop: '16px',
  };

  return (
    <div>
      <div style={sidebarStyles}>
        <button
          className="w3-bar-item w3-button w3-large"
          onClick={closeNav}
          style={closeButtonStyles}
        >
          Close &times;
        </button>
        <a href="#" className="w3-bar-item w3-button" style={linkStyles}>
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
        </a>
        <a href="#" className="w3-bar-item w3-button" style={linkStyles}>
          <FontAwesomeIcon icon={faCog} /> Services Details
        </a>
        <a href="#" className="w3-bar-item w3-button" style={linkStyles}>
          <FontAwesomeIcon icon={faUsers} /> Customer Details
        </a>
        <a href="#" className="w3-bar-item w3-button" style={linkStyles}>
          <FontAwesomeIcon icon={faTools} /> Manage Mechanics
        </a>
        <a href="#" className="w3-bar-item w3-button" style={linkStyles}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </a>
      </div>

      <div id="main" style={mainStyles}>
        <div className="w3-teal" style={{ backgroundColor: '#004d40', padding: '16px', color: '#fff' }}>
          <span
            id="openNav"
            onClick={openNav}
            style={buttonStyles}
          >
            &#9776;
          </span>
          <div className="w3-container">
            <h1>My Page</h1>
          </div>
        </div>

        <img src="img_car.jpg" alt="Car" style={imgStyles} />

        <div className="w3-container">
          <p>In this example, the sidebar is hidden (style="display:none")</p>
          <p>It is shown when you click on the menu icon in the top left corner.</p>
          <p>When it is opened, it shifts the page content to the right.</p>
          <p>We use JavaScript to add a 15% left margin to the div element with id="main" when this happens. The value "15%" matches the width of the sidebar.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
