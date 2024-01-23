// Footer.js (React component)
import React from 'react';
import './Style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* BEM WAY NAME DENE KA  */}
      <div className="footer__container">
        <div className="footer__section">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell Under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 Your Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
