import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>CATEGORIES</h4>
            <ul>
              <li><a href="#">Web Builder</a></li>
              <li><a href="#">Hosting</a></li>
              <li><a href="#">Data Center</a></li>
              <li><a href="#">Robotic-Automation</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CONTACT</h4>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Service</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <select name="country" id="country">
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="option 3">option 3</option>
            </select>
          </div>
          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#"className="facebook"></a>
              <a href="#"className="twitter"></a>
              <a href="#"className="instagram"></a>
              <a href="#"className="linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
