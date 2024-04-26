import React from 'react';
import './HeaderImage.css'; // Make sure this is the correct path to your CSS file

// You can pass the image URL as a prop if you want it to be dynamic
const HeaderImage = ({ image }) => {
  return (
    <div className="header-image" style={{ backgroundImage: `url(${image})` }} />
  );
};

// If the image URL is not passed as a prop, use the default image
HeaderImage.defaultProps = {
  image: 'https://images.unsplash.com/photo-1498612753354-772a30629934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxMZWFmJTJDJTIwQ2FubmFiaXMlMkMlMjBNYXJpanVhbmF8ZW58MXx8fHwxNzEzOTA5NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080',
};

export default HeaderImage;
