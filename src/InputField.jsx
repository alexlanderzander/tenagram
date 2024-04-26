import React from 'react';

const styles = {
  Input: {
    top: '344px', // This is typically not used for inline styles unless absolutely positioned within a relative container
    left: '420px', // Same as above
    width: '600px',
    height: '60px',
    padding: '0px 8px',
    border: '1px solid #030303',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: 'rgba(224,224,224,0.64)',
    color: '#525252',
    fontSize: '16px',
    fontFamily: 'Roboto Mono',
    lineHeight: '22px',
    outline: 'none',
  },
};

// Using placeholder as prop directly, setting default via defaultProps
const InputField = ({ placeholder }) => {
  return (
    <input style={styles.Input} placeholder={placeholder} />
  );
};

InputField.defaultProps = {
  placeholder: 'Enter your location to find nearby clubs', // Adjusted the placeholder
};

export default InputField;
