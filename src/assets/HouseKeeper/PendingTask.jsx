import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./stylePendingTask.css";
import TopNavBar from "../Components/TopNavBar";

function Task({ task, onClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleTaskClick = (event) => {
    if (!event.target.classList.contains("task-checkbox")) {
      onClick(task);
    }
  };

  return (
    <div className="task-container" onClick={handleTaskClick}>
      <div className="task-time">{task.time}</div>
      <div className="task-content">
        <div className="task-number">{task.number}</div>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e397f7a47a40e425035fd00bf13b9cf61bdae76bd84c2c3e31119c42522acfd6?apiKey=433434157f134a548d8a823886c69352&" className="task-image" alt={task.altText} /> */}
        <input
          type="checkbox"
          className="task-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="task-description-container">
        <div className="task-description">{task.description}</div>
      </div>
    </div>
  );
}


function PendingTask({ hamburger }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { hamburger2 } = location.state || {};

  const tasks = [
    { time: "9:00", number: "101", altText: "", description: "Give EXTRA TOWEL to Uthkrist" },
    { time: "10:30", number: "205", altText: "", description: "Give PILLOWS to Anmol" },
    { time: "12:45", number: "309", altText: "", description: "Clean whiteboard markers" },
    { time: "14:15", number: "415", altText: "", description: "Replace light bulb in conference room" }
  ];

  const handleTaskClick = (task) => {
    if (hamburger === "manager") {
      navigate('/manager/task-detail', { state: { task, hamburger } });
    } else {
      navigate('/housekeeper/task-detail', { state: { task, hamburger } });
    }
  };

  return (
    <div className="main-container">
      <TopNavBar name="Pending Tasks" hamburger={hamburger} />
      <section className="tasks-section">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onClick={() => handleTaskClick(task)} />
        ))}
      </section>
    </div>
  );
}
export default PendingTask;
