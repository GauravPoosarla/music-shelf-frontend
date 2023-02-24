import React from 'react';
import './Body.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button';
import Card from '../Card';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS_DATA } from '../../constants/apiEndPoint';
import iconGenre from '../../assets/icon-genre.svg';

function Body() {
  const [songs, setSongs] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [genreClicked, setGenreClicked] = useState(false);

  useEffect(() => {
    makeRequest(GET_SONGS_DATA(), {
      headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
    }).then((data) => {
      setSongs(data.data);
    });
  }, []);

  const genreHandler = () => {
    setGenreClicked(!genreClicked);
  };

  return (
    <div className="body">
      {!isClicked ? (
        <div className="loading-screen">
          <p>:</p>
          <p>seems a bit empty in here ...</p>
          <Button setIsClicked={setIsClicked} />
        </div>
      ) : (
        <div className="body-content">
          <div className="body-header">
            <p> all songs </p>
            <img src={iconGenre} alt="icon-grid" onClick={genreHandler} />
          </div>
          <div className="songs">
            {songs.map((song, index) => (
              <Card key={index} song={song} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
