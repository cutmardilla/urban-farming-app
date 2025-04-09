import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.h1 
          className="hero-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🌿 Urban Farming untuk Masa Depan Hijau
        </motion.h1>
        <p className="hero-subtitle">
          Bersama kita ciptakan ruang hijau yang berkelanjutan di perkotaan.
        </p>
      </section>

      {/* About Content */}
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://source.unsplash.com/800x500/?green,plants"
          alt="Urban Farming"
          className="about-image"
        />
        <div className="about-text">
          <h2>🌱 Siapa Kami?</h2>
          <p>
            Kami berkomitmen untuk menjadikan urban farming lebih mudah diakses oleh semua orang.
            Misi kami adalah menciptakan ruang hijau yang berkelanjutan dan sehat di lingkungan perkotaan.
          </p>
        </div>
      </motion.div>

      {/* Founder Section */}
      <motion.div 
        className="founder-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>🚀 Pendiri Kami</h2>
        <motion.div className="founder-card" whileHover={{ scale: 1.05 }}>
          <img 
            src="https://source.unsplash.com/150x150/?woman,nature"
            alt="Founder"
            className="founder-image"
          />
          <h3>Cut Mardilla A</h3>
          <p>Founder & Visionary</p>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>📩 Hubungi Kami</h2>
        <p>Ingin tahu lebih lanjut? Mari berbincang dan tumbuhkan lingkungan hijau bersama!</p>
        <motion.a 
          href="mailto:contact@urbanfarming.com" 
          className="contact-btn"
          whileHover={{ scale: 1.1 }}
        >
          ✉️ Email Kami
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
