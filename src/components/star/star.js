import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({ isFull, size }) => {
  const starColor = isFull ? "#FF6060" : "grey";
  return <FontAwesomeIcon icon={faStar} style={{ fontSize: size, color: starColor }} />;
};

export default Star;