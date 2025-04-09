import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSeedling, FaInfoCircle } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="dashboard-title">🌿 Urban Farming Dashboard</h1>
      <p className="dashboard-subtitle">Kelola tanaman dan informasi urban farming dengan mudah!</p>

      <motion.div 
        className="menu"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Link to="/plants" className="menu-item">
          <FaSeedling className="icon" />
          Kelola Tanaman
        </Link>
        <Link to="/about" className="menu-item">
          <FaInfoCircle className="icon" />
          Tentang Kami
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
