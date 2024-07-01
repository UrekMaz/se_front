import * as React from 'react';
import {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './StyleTaskHistory.css';
import TopNavBar from "../Components/TopNavBar";
import axios from 'axios';

const TaskItem = ({ roomNumber, taskDescription, taskTime }) => (
  <div className="task-item">
    <div className="room-number">{roomNumber}</div>
    <div className="task-description">{taskDescription}</div>
    <div className="task-time">{taskTime}</div>
  </div>
);

function TaskHistoryManager() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hotelId = params.get("hotelId");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/hotel-tasks/${hotelId}/completed-tasks`, {
          params : {hotelId : hotelId}
        });
        setTasks(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchTasks();
  }, [hotelId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="task-history">
      <TopNavBar name="Task History" hamburger="manager"/>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" className="search-input" aria-label="Search" placeholder="Search" />
        </div>
      </div>
      <main className="task-list">
        <header className="tasks-header">
          <div className="column-title">Room</div>
          <div className="column-title">Task</div>
          <div className="column-title">Time</div>
        </header>
        {tasks.map((task, index) => (
          <TaskItem key={index} roomNumber={task.room_no} taskDescription={task.requirement} taskTime={new Date(task.time_of_completion).toLocaleTimeString()} />
        ))}
      </main>
    </section>
  );
}

export default TaskHistoryManager;