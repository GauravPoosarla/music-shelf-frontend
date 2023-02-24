import React from 'react';
import './Card.css';
import { GET_SONG_DATA } from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import heartRed from '../../assets/heart-red.svg';
import { useState } from 'react';

function Card({ song }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card">
      <img src={song.imageUrl} alt="song img" />
      <div className="song-user">
        <div className="song-info">
          <p className="song-name">{song.name}</p>
          <p className="song-artist">{song.artist.name}</p>
        </div>
        <div className="like">
          <img src={heartRed} alt="heart" />
        </div>
      </div>
    </div>
  );
}

export default Card;
