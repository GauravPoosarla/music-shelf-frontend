import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const SongDataContext = createContext({});

export const SongDataProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);

  return (
    <SongDataContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongDataContext.Provider>
  );
};

export default SongDataProvider;
