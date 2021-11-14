import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import LanguagePage from './pages/languagePage';
import LoginPage from './pages/loginPage';
import KeyGroupPage from './pages/keyGroupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/languages" element={<LanguagePage />} />
        <Route path="/languages/:locale" element={<KeyGroupPage />} />
      </Routes>
    </div>
  )

}

export default App;
