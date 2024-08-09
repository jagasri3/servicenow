import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="row">
        <div className="col">
            <h6>Car Maintenance</h6>
            <ul className="footer-links">
              <li>Routine Maintenance Services</li>
              <li>Mechanical Repairs</li>
              <li>Electrical Services</li>
              <li>Full Vehicle Inspections</li>
              <li>Body and Interior Works</li>
              <li>Inspection and Diagnostics</li>
            </ul>
          </div>

          <div className="col">
            <h6>bike Maintenance</h6>
            <ul className="footer-links">
              <li>Basic Tune-Up</li>
              <li>Full Service</li>
              <li>Brake Service</li>
              <li>Gear Service</li>
              <li>Suspension Service</li>
              <li>Wheel and Tire Service</li>
            </ul>
          </div>

          <div className="col">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Contribute</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="footer-container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
            Copyright © 2023-2025 ServiceNow
              <a href="#"> HomePage</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;