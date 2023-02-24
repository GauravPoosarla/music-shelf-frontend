import React from 'react';
import './Card.css';
import { GET_SONG_DATA, LIKE_SONG } from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import heartRed from '../../assets/heart-red.svg';
import heartGray from '../../assets/heart-gray.svg';
import { useState, useEffect } from 'react';

function Card({ song, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    makeRequest(GET_SONG_DATA(song.id), {
      headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
    }).then((data) => {
      setIsLiked(data.data.like);
      setCount(data.data.count);
    });
  }, []);

  const likeHandler = () => {
    if (isLiked) {
      makeRequest(LIKE_SONG(song.id), {
        headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
        data: { like: false },
      });
      setIsLiked(!isLiked);
      setCount(count - 1);
    } else {
      makeRequest(LIKE_SONG(song.id), {
        headers: { Authorization: 'Bearer QWlzaHdhcnlhIE4=' },
        data: { like: true },
      });
      setIsLiked(!isLiked);
      setCount(count + 1);
    }
  };

  const color = index % 2 === 0 ? 'dark' : 'light';

  return (
    <div className={`card card-${color}`}>
      <img src={song.imageUrl} alt="song img" />
      <div className="song-user">
        <div className="song-info">
          <p className="song-name">{song.name}</p>
          <p className="song-artist">{song.artist.name}</p>
        </div>
        <div className="like">
          {isLiked ? (
            <div className="box">
              <img src={heartRed} alt="heart-red" onClick={likeHandler} />
              <p>{count}</p>
            </div>
          ) : (
            <div>
              <img src={heartGray} alt="heart-gray" onClick={likeHandler} />
              <p>{count}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
