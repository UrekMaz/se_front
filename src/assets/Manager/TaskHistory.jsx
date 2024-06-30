import * as React from 'react';
import { useState, useEffect } from 'react';
import './StyleTaskHistory.css';
import TopNavBar from "../Components/TopNavBar";

const TaskItem = ({ roomNumber, taskDescription, taskTime }) => (
  <div className="task-item">
    <div className="room-number">{roomNumber}</div>
    <div className="task-description">{taskDescription}</div>
    <div className="task-time">{taskTime}</div>
  </div>
);

function TaskHistoryManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const hotelId = 'hotel123'; // Replace with actual hotel ID logic
      const response = await fetch(`http://localhost:5000/hotel-tasks/${hotelId}/completed-tasks`);
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

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
