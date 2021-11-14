import React from 'react';
import { Route, Routes } from "react-router-dom";

import './App.css';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )

}

export default App;
