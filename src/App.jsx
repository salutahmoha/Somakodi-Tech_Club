import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Leadership from "./Pages/Leadership/Leadership";
import Tracks from "./Pages/Tracks/Tracks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leadership" element={<Leadership />} />
        <Route path="/Tracks" element={<Tracks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
