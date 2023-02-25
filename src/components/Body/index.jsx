import React from 'react';
import './Body.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

function Body() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isClicked) {
      navigate('/songs');
    }
  }, [isClicked]);

  return (
    <div className="body">
      <div className="loading-screen">
        <p>:((</p>
        <p>seems a bit empty in here ...</p>
        <br />
        <Button setIsClicked={setIsClicked} />
      </div>
    </div>
  );
}

export default Body;
