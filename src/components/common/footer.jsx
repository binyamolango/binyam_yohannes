import React from 'react';
import { Link } from 'react-router-dom';

import './styles/footer.css';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-nav-link-list">
          <li className="footer-nav-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/about">About</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="footer-nav-link-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-credits">
        <div className="footer-credits-text">
          © 2024 Binyam Y. Olango, All Rights Reserved.
        </div>
      </div>
    </div>
  </>
);

export default Footer;
