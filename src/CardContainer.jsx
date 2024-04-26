import React from 'react';

const styles = {
  CardContainer: {
    top: '505px',
    left: '0px',
    width: '1440px',
    height: '236px',
    backgroundColor: '#ccc',
  },
};

const CardContainer = (props) => {
  return (
    <div style={styles.Card}>
      {props.children}
    </div>
  );
};

export default CardContainer;