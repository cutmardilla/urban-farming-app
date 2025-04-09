import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaHome, FaBook, FaCalendarAlt } from "react-icons/fa"; // Tambahkan ikon kalender
import "./Navbar.css";
import { FaInfoCircle } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Urban Farming 🌿</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/plants" className="nav-item">
            <FaLeaf /> Plants
          </Link>
        </li>
        <li>
          <Link to="/panduan" className="nav-item">
            <FaBook /> Panduan
          </Link>
        </li>
        <li>
          <Link to="/jadwal" className="nav-item">
            <FaCalendarAlt /> Jadwal Perawatan
          </Link>
        </li>
        <li>
  <Link to="/about" className="nav-item">
    <FaInfoCircle /> Tentang Kami
  </Link>
</li>
      </ul>
    </nav>
  );
};

export default Navbar;
