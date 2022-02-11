import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Statistcs from './pages/Stats/Statistics';
import Info from './pages/Info/Info';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Statistcs />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
