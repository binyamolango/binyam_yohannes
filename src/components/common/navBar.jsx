import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/navBar.css';

const NavBar = (props) => {
  const { active } = props;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <div className="navbar__logo">
                <img src="./favicon.png" alt="logo-img" />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-label="navbar-icon"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse ${
                showMenu ? 'show' : ''
              }`}
            >
              <ul className="navbar-nav ml-auto">
                <li
                  className={`nav-item ${
                    active === 'home' ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    active === 'about' ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    active === 'projects' ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    active === 'contact' ? 'active' : ''
                  }`}
                >
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

NavBar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default NavBar;
