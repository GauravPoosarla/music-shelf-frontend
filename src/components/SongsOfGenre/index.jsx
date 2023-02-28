import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import ButtonGenre from '../ButtonGenre';
import './SongsOfGenre.css';

const SongsOfGenre = props => {
  return (
    <div className="songs-genre">
      <div className="genre-details">
        <img src={props.genreImage} alt={props.genre} />
        <ButtonGenre genre={props.genre} />
      </div>
      <div className="songs-genre-content">
        {props.songs.map((song, index) => (
          <Card key={index} song={song} index={index} />
        ))}
      </div>
    </div>
  );
};

SongsOfGenre.propTypes = {
  genre: PropTypes.string,
  genreImage: PropTypes.string,
  songs: PropTypes.array,
};

export default SongsOfGenre;
