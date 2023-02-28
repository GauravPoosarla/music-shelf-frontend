import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGenre.css';

const ButtonGenre = props => {
  return (
    <div className="button-genre">
      <button>{props.genre}</button>
    </div>
  );
};

ButtonGenre.propTypes = {
  genre: PropTypes.string,
};

export default ButtonGenre;
