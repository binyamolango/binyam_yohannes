/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './styles/card.css';

const Card = (props) => {
  const { icon, title, body } = props;
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-header">
          <div className="card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="card-title">{title}</div>
        </div>
        <div className="card-body">
          <div className="card-text">{body}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  body: PropTypes.object.isRequired,
};

export default Card;
