import React from 'react';
import './Card.css'; // Ensure this CSS file exists with card styles

const Card = ({ IconComponent, children }) => {
  return (
    <div className="card">
      {IconComponent && <IconComponent />} // Render the icon if provided
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
