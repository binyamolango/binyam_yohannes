import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './styles/navBar.css';

const NavBar = (props) => {
  const { active } = props;

  return (
    <>
      <div className="nav-container">
        <nav className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className={
                  active === 'home' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  active === 'about' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === 'projects' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === 'contact' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
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
