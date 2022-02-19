import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Info from "./pages/Info/Info";
import Statistcs from "./pages/Stats/Statistics";

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
