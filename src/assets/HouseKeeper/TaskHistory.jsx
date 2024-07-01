
import React, { useEffect, useState } from 'react';
import './StyleTaskHistory.css';
import TopNavBar from '../Components/TopNavBar';
import SearchIcon from './search-icon.png';
import FilterIcon from './filter-icon.png';

// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import './StyleTaskHistory.css';
// import TopNavBar from "../Components/TopNavBar";


const TaskItem = ({ roomNumber, taskDescription, taskTime }) => (
  <div className="task-item">
    <div className="room-number">{roomNumber}</div>
    <div className="task-description">{taskDescription}</div>
    <div className="task-time">{new Date(taskTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
  </div>
);


function TaskHistory({ hamburger }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompletedTasks();
  }, []);

  const fetchCompletedTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/completedTasks/completedTasks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setCompletedTasks(data);
      } else {
        throw new Error('Response was not in JSON format');
      }
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
      setError(error.message || 'Error fetching completed tasks');
    }
  };

  return (
    <section className="task-history">
      <TopNavBar name="Task history" hamburger={hamburger} />
      <div className="search-container">
        <div className="search-bar">
          <img src={SearchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
          <img src={FilterIcon} alt="Filter" className="filter-icon" />
        </div>
      </div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="task-list">
          <div className="task-header">
            <div className="header-room">Room</div>
            <div className="header-task">Task</div>
            <div className="header-time">Time</div>
          </div>
          {completedTasks.map((task, index) => (
            task.items.map((item, itemIndex) => (
              <TaskItem 
                key={`${index}-${itemIndex}`} 
                roomNumber={task.roomId} 
                taskDescription={item.serviceName} 
                taskTime={task.time_of_assignment} 
              />
            ))
          ))}
        </div>
      )}
    </section>
  );
}


export default TaskHistory;


// export default TaskHistoryManager;

