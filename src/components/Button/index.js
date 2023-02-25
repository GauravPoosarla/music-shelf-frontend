import React from 'react';
import './Button.css';

export function Button({ setIsClicked }) {
  return (
    <div className="click">
      <button onClick={() => setIsClicked(true)}>Sync</button>
    </div>
  );
}

export default Button;
