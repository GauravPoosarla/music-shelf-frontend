import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { SongDataContext } from '../../contexts/SongData';
import SongsOfGenre from '../../components/SongsOfGenre';
import GenreBollywood from '../../assets/genre-bollywood.png';
import GenreCountry from '../../assets/genre-country.png';
import GenrePop from '../../assets/genre-pop.png';
import GenreRock from '../../assets/genre-rock.png';
import IconGrid from '../../assets/icon-grid.svg';
import './FilterByGenre.css';
import { useNavigate } from 'react-router-dom';

const FilterByGenre = () => {
  const { songs, setSongs } = useContext(SongDataContext);
  const genres = [];
  const navigate = useNavigate();
  const gridClickHandler = () => {
    navigate('/songs');
  };

  songs.forEach((song) => {
    if (!genres.includes(song.genre.name)) {
      genres.push(song.genre.name);
    }
  });

  const songsByGenreObject = {};
  genres.forEach((genre) => {
    songsByGenreObject[genre] = [];
  });

  songs.forEach((song) => {
    songsByGenreObject[song.genre.name].push(song);
  });

  const [songsByGenre, setSongsByGenre] = useState(songsByGenreObject);

  const genreImages = {
    Bollywood: GenreBollywood,
    Country: GenreCountry,
    Pop: GenrePop,
    Rock: GenreRock,
  };

  return (
    <div className="songs-by-genre">
      <div className="genre-header">
        <h2>genres</h2>
        <img src={IconGrid} alt="icon-grid" onClick={gridClickHandler} />
      </div>
      <div className="genre-content">
        {genres.map((genre) => (
          <SongsOfGenre
            key={genre}
            genre={genre}
            songs={songsByGenre[genre]}
            genreImage={genreImages[genre]}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByGenre;
