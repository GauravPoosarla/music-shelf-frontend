import React from 'react';
import Home from './pages/Home';
import Songs from './pages/Songs';
import SongsByGenre from './pages/SongsByGenre';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SongDataProvider } from './contexts/SongData';
import './App.css';

function App() {
  return (
    <SongDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/genre" element={<SongsByGenre />} />
        </Routes>
      </BrowserRouter>
    </SongDataProvider>
  );
}

export default App;
