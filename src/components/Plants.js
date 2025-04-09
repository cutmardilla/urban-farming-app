import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash, FaSeedling, FaPlus } from "react-icons/fa";
import "./Plants.css";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  // Load data dari localStorage saat pertama kali komponen dimuat
  useEffect(() => {
    const storedPlants = JSON.parse(localStorage.getItem("plants")) || [];
    setPlants(storedPlants);
  }, []);

  // Simpan ke localStorage setiap kali daftar tanaman berubah
  useEffect(() => {
    if (plants.length > 0) {
      localStorage.setItem("plants", JSON.stringify(plants));
    }
  }, [plants]);

  const handleChange = (e) => {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlant.name.trim() === "" || newPlant.description.trim() === "") {
      alert("Nama dan deskripsi tanaman harus diisi!");
      return;
    }

    if (editingId) {
      const updatedPlants = plants.map((plant) =>
        plant.id === editingId ? { ...plant, ...newPlant } : plant
      );
      setPlants(updatedPlants);
      setEditingId(null);
    } else {
      const newEntry = {
        id: Date.now(), // Gunakan timestamp agar unik
        name: newPlant.name,
        description: newPlant.description,
      };
      setPlants([...plants, newEntry]);
    }

    setNewPlant({ name: "", description: "" });
  };

  const handleEdit = (plant) => {
    setNewPlant({ name: plant.name, description: plant.description });
    setEditingId(plant.id);
  };

  const handleDelete = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
    localStorage.setItem("plants", JSON.stringify(updatedPlants)); // Hapus dari localStorage juga
  };

  return (
    <motion.div 
      className="plants-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">🌿 Daftar Tanaman</h1>

      {/* Form Input */}
      <motion.form 
        onSubmit={handleSubmit} 
        className="plant-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          name="name"
          value={newPlant.name}
          onChange={handleChange}
          placeholder="Nama tanaman"
        />
        <input
          type="text"
          name="description"
          value={newPlant.description}
          onChange={handleChange}
          placeholder="Deskripsi tanaman"
        />
        <motion.button 
          type="submit"
          className="add-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlus /> {editingId ? "Update" : "Tambah"}
        </motion.button>
      </motion.form>

      {/* List Tanaman */}
      <motion.ul 
        className="plant-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <AnimatePresence>
          {plants.map((plant) => (
            <motion.li 
              key={plant.id} 
              className="plant-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <FaSeedling className="plant-icon" />
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
              </div>
              <div className="actions">
                <button className="edit-btn" onClick={() => handleEdit(plant)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(plant.id)}>
                  <FaTrash />
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </motion.div>
  );
};

export default Plants;
