import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button style={{backgroundColor : !(props.item) ? '#ffd7d7':'#8b005d'}} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
