import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/*" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
