import React from "react";
import { FaLeaf, FaSun, FaTint, FaSeedling, FaClock, FaRecycle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./PanduanUrbanFarming.css";

const PanduanUrbanFarming = () => {
  const panduan = [
    { id: 1, icon: <FaSeedling />, title: "Pilih Tanaman yang Cocok", desc: "Gunakan tanaman yang mudah tumbuh di lingkunganmu, seperti bayam, tomat, atau kangkung." },
    { id: 2, icon: <FaSun />, title: "Pastikan Mendapat Sinar Matahari", desc: "Tanaman butuh minimal 4-6 jam sinar matahari setiap hari untuk tumbuh optimal." },
    { id: 3, icon: <FaTint />, title: "Penyiraman yang Tepat", desc: "Jangan menyiram berlebihan. Sesuaikan kebutuhan air berdasarkan jenis tanaman." },
    { id: 4, icon: <FaClock />, title: "Rutin Memangkas", desc: "Pemangkasan membantu tanaman tumbuh lebih sehat dan mencegah hama." },
    { id: 5, icon: <FaLeaf />, title: "Gunakan Pupuk Organik", desc: "Pupuk alami seperti kompos meningkatkan kesuburan tanah dan hasil panen." },
    { id: 6, icon: <FaRecycle />, title: "Daur Ulang Limbah", desc: "Gunakan sampah organik sebagai pupuk alami untuk meningkatkan kualitas tanah." },
  ];

  return (
    <motion.div 
      className="panduan-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="panduan-title">🌱 Panduan Urban Farming</h1>
      <p className="panduan-subtitle">Tips dan langkah-langkah untuk merawat tanaman dengan baik.</p>

      <div className="panduan-list">
        {panduan.map((item) => (
          <motion.div 
            key={item.id} 
            className="panduan-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="panduan-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="video-container">
        <h2>🎥 Video Panduan Urban Farming</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yo29tnNkBPk"
          title="Panduan Urban Farming"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default PanduanUrbanFarming;
