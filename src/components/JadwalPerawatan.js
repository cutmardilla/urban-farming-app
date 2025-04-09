import React, { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import "./JadwalPerawatan.css";

const JadwalPerawatan = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [date.toDateString()]: [...(prevTasks[date.toDateString()] || []), newTask],
      }));
      setNewTask("");
    }
  };

  const handleRemoveTask = (taskIndex) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks[date.toDateString()]];
      updatedTasks.splice(taskIndex, 1);
      return {
        ...prevTasks,
        [date.toDateString()]: updatedTasks,
      };
    });
  };

  return (
    <motion.div 
      className="jadwal-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title">📅 Jadwal Perawatan Tanaman</h1>
      <p className="subtitle">Atur dan kelola perawatan tanamanmu dengan mudah!</p>

      <motion.div 
        className="calendar-section"
        whileHover={{ scale: 1.02 }}
      >
        <Calendar onChange={setDate} value={date} />
      </motion.div>

      <div className="task-section">
        <h2>📝 Tugas pada {date.toDateString()}</h2>
        <ul className="task-list">
          {tasks[date.toDateString()]?.map((task, index) => (
            <motion.li 
              key={index}
              className="task-item"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {task} 
              <button className="remove-btn" onClick={() => handleRemoveTask(index)}>❌</button>
            </motion.li>
          ))}
        </ul>

        <div className="task-input">
          <input
            type="text"
            placeholder="Tambahkan tugas..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <motion.button 
            onClick={handleAddTask}
            whileHover={{ scale: 1.1 }}
            className="add-btn"
          >
            ➕ Tambah
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default JadwalPerawatan;
