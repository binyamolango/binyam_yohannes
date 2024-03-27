/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import INFO from '../../data/user';

import './styles/logo.css';

const Logo = ({ width, link }) => {
  if (link === undefined) {
    // eslint-disable-next-line no-param-reassign
    link = true;
  }

  const imageElement = (
    <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
  );

  return (
    <>
      {link ? <Link to="/">{imageElement}</Link> : imageElement}
    </>
  );
};

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  link: PropTypes.bool.isRequired,
};

export default Logo;
