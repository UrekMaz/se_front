import * as React from "react";
import "./Assign_tasks.css";
import TopNavBar from "../Manager/TopNavBar";
const Card = ({ time, requestId, description }) => {
  const [assignedTo, setAssignedTo] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(false);

  const handleAssignChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleButtonClick = () => {
    setIsCompleted(!isCompleted);
  };

  const assignees = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <section className="card">
      <time className="time-tag">{time}</time>
      <div className="request-content">
        <div className="request-header">
          <div className="request-id">{requestId}</div>
          <button
            className={`complete-button ${isCompleted ? "completed" : ""}`}
            onClick={handleButtonClick}
          >
            ✓
          </button>
        </div>
        <p className="description">{description}</p>
        <div className="assigned-to">
          Assigned to: 
          <select value={assignedTo} onChange={handleAssignChange}>
            <option value="">None</option>
            {assignees.map((assignee, index) => (
              <option key={index} value={assignee}>{assignee}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

function Assign_task() {
  const data = [
    { time: "3:24", requestId: "123", description: "Extra towel required", id: 1 },
    { time: "3:24", requestId: "124", description: "Room cleaning", id: 2 },
    { time: "3:24", requestId: "125", description: "Food delivery", id: 3 },
    { time: "3:24", requestId: "126", description: "Laundry service", id: 4 },
  ];

  return (
    <>
      <TopNavBar name="Pending tasks" hamburger="master"/>
      {data.map(({ time, requestId, description, id }) => (
        <Card key={id} time={time} requestId={requestId} description={description} />
      ))}
    </>
  );
}

export default Assign_task;
