import React from 'react';
import './ButtonGenre.css';

const ButtonGenre = (props) => {
  return (
    <div className="button-genre">
      <button>{props.genre}</button>
    </div>
  );
};

export default ButtonGenre;
