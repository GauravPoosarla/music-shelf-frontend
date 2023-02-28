import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  setIsClicked: PropTypes.func,
};
