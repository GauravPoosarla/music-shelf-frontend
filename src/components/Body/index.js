import React from 'react';
import './Body.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button';
import Card from '../Card';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS_DATA } from '../../constants/apiEndPoint';

function Body() {
  const [songs, setSongs] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    makeRequest(GET_SONGS_DATA(), {
      headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
    }).then((data) => {
      setSongs(data.data);
    });
  }, []);

  return (
    <div className="body">
      {!isClicked ? (
        <div className="loading-screen">
          <p>::</p>
          <p>seems a bit empty in here ...</p>
          <Button setIsClicked={setIsClicked} />
        </div>
      ) : (
        <div className="body-content">
          <div className="songs">
            {songs.map((song) => (
              <Card song={song} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
