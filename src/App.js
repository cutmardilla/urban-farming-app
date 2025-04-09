import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Plants from "./components/Plants";
import PanduanUrbanFarming from "./components/PanduanUrbanFarming";
import JadwalPerawatan from "./components/JadwalPerawatan"; // Pastikan sudah dibuat
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/panduan" element={<PanduanUrbanFarming />} />
        <Route path="/jadwal" element={<JadwalPerawatan />} /> {/* Tambahkan ini */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
