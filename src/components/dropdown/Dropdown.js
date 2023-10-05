import React, { useState } from 'react';
import ArrowDown from '../../assets/arrowDown.svg';
import './Dropdown.scss';
function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropDown">
      <h3 className="dropDown__title" onClick={toggleCollapse}>
        {title}
        <img
          className={isOpen ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"}
          src={ArrowDown}
          alt={`Informations sur ${title}`}
        />
      </h3>
      {isOpen && <div className="dropDown__content"><p>{content}</p></div>}
    </div>
  );
}

export default Dropdown;