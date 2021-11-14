import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import LanguagePage from './pages/LanguagePage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="languages" element={<LanguagePage />} />
      </Routes>
    </div>
  )

}

export default App;
