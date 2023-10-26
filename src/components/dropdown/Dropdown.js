import React, { useState } from 'react';
import ArrowDown from '../../assets/arrowDown.svg';
import './Dropdown.scss';
function Dropdown({ title, content, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <h3 className={`${className}__title`} onClick={toggleCollapse}>
        {title}
        <img
          className={isOpen ? "dropDown__title__arrow__down" : "dropDown__title__arrow__up"}
          src={ArrowDown}
          alt={`Informations sur ${title}`}
        />
      </h3>
      {isOpen && (
        <div className="dropDown__content">
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Dropdown;