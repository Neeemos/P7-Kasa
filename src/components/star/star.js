import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({ className }) => {
  return <FontAwesomeIcon icon={faStar}  className={className}  />;
};

export default Star;