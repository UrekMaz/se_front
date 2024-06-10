// src/assets/HouseKeeper/PendingTask.jsx
import * as React from "react";
import "./stylePendingTask.css";

function Task({ time, number, altText, description }) {
  return (
    <div className="task-container">
      <div className="task-time">{time}</div>
      <div className="task-content">
        <div className="task-number">{number}</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e397f7a47a40e425035fd00bf13b9cf61bdae76bd84c2c3e31119c42522acfd6?apiKey=433434157f134a548d8a823886c69352&" className="task-image" alt={altText} />
      </div>
      <div className="task-description-container">
        <div className="task-description">{description}</div>
      </div>
    </div>
  );
}

function PendingTask() {
  const tasks = [
    { time: "3:24", number: "123", altText: "", description: "Extra towel required" },
    { time: "3:24", number: "123", altText: "", description: "Extra towel required" },
    { time: "3:24", number: "123", altText: "", description: "Extra towel required" },
    { time: "3:24", number: "123", altText: "", description: "Extra towel required" }
  ];

  return (
    <div className="main-container">
      <header className="header-container">
        <div className="header-content">
          <div className="header-icon" />
          <div className="header-title">Pending tasks</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a464867f09dc52848d46ae3f3f93bd43d5282af05a1135e547af6533f7732bf5?apiKey=433434157f134a548d8a823886c69352&" className="header-image" alt="" />
        </div>
      </header>
      <section className="tasks-section">
        {tasks.map((task, index) => (
          <Task key={index} time={task.time} number={task.number} altText={task.altText} description={task.description} />
        ))}
      </section>
    </div>
  );
}

export default PendingTask;
