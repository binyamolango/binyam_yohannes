/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './styles/card.css';

const Card = (props) => {
  const { icon, title, body } = props;
  return (
    <div className="works__card">
      <div className="works__card-container">
        <div className="works__card-header">
          <div className="works__card-icon">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="works__card-title">{title}</div>
        </div>
        <div className="works__card-body">
          <div className="works__card-text">{body}</div>
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
