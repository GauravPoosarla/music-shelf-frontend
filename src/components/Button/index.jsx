import React from 'react';
import './Button.css';

export function Button(props) {
  const { setIsClicked } = props;
  function clickHandler() {
    setIsClicked(true);
  }

  return (
    <div className="click">
      <button onClick={clickHandler}>Sync</button>
    </div>
  );
}

export default Button;
