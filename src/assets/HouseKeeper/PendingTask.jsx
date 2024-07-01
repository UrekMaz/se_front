import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import "./stylePendingTask.css";
import TopNavBar from "../Components/TopNavBar";

function Task({ task, onCheckboxChange, onTaskClick }) {
  return (
    <div className="task-container" onClick={(e) => onTaskClick(e, task)}>
      <div className="task-time">{task.time_of_order}</div>
      <div className="task-content">
        <div className="task-number">
          <strong>{task.roomId}<br /><br/>
            {task.items.map((item, index) => (
              <span key={index}>{item.quantity} - {item.serviceName}<br /></span>
            ))}
          </strong>
        </div>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => { e.stopPropagation(); onCheckboxChange(task); }}
        />
      </div>
    </div>
  );
}

function PendingTask({ hamburger }) {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userId = new URLSearchParams(location.search).get("userId");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const hotelId = new URLSearchParams(location.search).get("hotelId");
        const response = await axios.get(`http://localhost:5000/selected-items/selected-items/${hotelId}?userId=${userId}` ,{
          params: {hotelId : hotelId},
        });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasks();
  }, [location.search, userId]);

  const handleCheckboxChange = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const time_of_completion = new Date().toISOString();
  
    try {
      const hotelId = new URLSearchParams(location.search).get("hotelId");
      const response = await axios.put(`http://localhost:5000/selected-items/selected-items/${updatedTask._id}/complete`, 
        { 
          completed: updatedTask.completed, time_of_completion
        }, 
        {
          params: {hotelId : hotelId}
        });
      setTasks(tasks.map(t => t._id === task._id ? response.data : t));
    } catch (error) {
      console.error('Error updating task completion status:', error);
    }
  };

  const handleTaskClick = (event, task) => {
    if (!event.target.classList.contains("task-checkbox")) {
      if (hamburger === "manager") {
        navigate('/manager/task-detail', { state: { task, hamburger } });
      } else {
        navigate('/housekeeper/task-detail', { state: { task, hamburger } });
      }
    }
  };

  return (
    <div className="main-container">
      <TopNavBar name="Pending Tasks" hamburger={hamburger} />
      <section className="tasks-section">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onCheckboxChange={handleCheckboxChange}
            onTaskClick={handleTaskClick}
          />
        ))}
      </section>
    </div>
  );
}

export default PendingTask;
