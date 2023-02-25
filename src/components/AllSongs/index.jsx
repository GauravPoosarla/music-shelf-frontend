import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Card';
import iconGenre from '../../assets/icon-genre.svg';
import { GET_SONGS_DATA } from '../../constants/apiEndPoint';
import makeRequest from '../../utils/makeRequest';
import { SongDataContext } from '../../contexts/SongData';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './AllSongs.css';

const AllSongs = () => {
  const navigate = useNavigate();
  // const [songs, setSongs] = useState([]);
  const { songs, setSongs } = useContext(SongDataContext);
  const [genreClicked, setGenreClicked] = useState(false);

  const genreHandler = () => {
    setGenreClicked(!genreClicked);
  };

  useEffect(() => {
    makeRequest(GET_SONGS_DATA(), {
      headers: { authorization: 'Bearer QWlzaHdhcnlhIE4=' },
    }).then((data) => {
      setSongs(data.data);
    });
  }, []);

  useEffect(() => {
    if (genreClicked) {
      navigate('/genre');
    }
  }, [genreClicked]);

  return (
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
  );
};

export default AllSongs;
