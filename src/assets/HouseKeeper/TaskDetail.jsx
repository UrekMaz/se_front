import React from 'react';
import { useLocation } from 'react-router-dom';
import './StyleTaskDetails.css';
import TopNavBar from '../Components/TopNavBar';
import PropTypes from 'prop-types';

function TaskDetails({ task }) { 
  const handlePrint = () => {
    window.print();
  };

  // Function to convert time string "HH:MM:SS" to AM/PM format
  const formatTimeToAMPM = (time) => {
    const [hours, minutes, seconds] = time.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return ( 
    <div className="task-details-container"> 
      <div className="task-header"> 
        <div className="task-room">{task.roomId}</div> 
        <div className="task-checkbox-container">
          <input type="checkbox" className="task-checkbox" checked={task.completed} readOnly />
        </div>
      </div> 
      <div className="task-requirement"> 
        <p className="requirement">Items:</p>
        {task.items.map((item, index) => (
          <p key={index} className="requirement">{item.quantity} - {item.serviceName}</p>
        ))}
      </div> 
      <div className="task-info"> 
        <p className="info-item"><span className="info-label">Total cost:</span> {task.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p> 
        <p className="info-item"><span className="info-label">Time of order:</span> {formatTimeToAMPM(task.time_of_order)}</p> 
        <p className="info-item"><span className="info-label">Time of assignment:</span> {task.time_of_assignment ? new Date(task.time_of_assignment).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : "Not assigned"}</p> 
        <p className="info-item"><span className="info-label">Time of completion:</span> {task.completed ? (task.time_of_completion ? new Date(task.time_of_completion).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }) : "Not completed") : "Not completed"}</p> 
        <p className="info-item"><span className="info-label">Assigned to:</span> {task.assigned_to?.name || "Not assigned"}</p>
      </div> 
      <div className="task-actions"> 
        <button className="print-button" onClick={handlePrint}>Print</button> 
      </div> 
    </div>
  ); 
}

function TaskDetail({ hamburger }) { 
  const location = useLocation();
  const { task } = location.state;

  return ( 
    <main className="main-container"> 
      <TopNavBar name="Task Details" hamburger={hamburger}/> 
      <TaskDetails task={task} /> 
    </main> 
  ); 
} 

TaskDetails.propTypes = {
  task: PropTypes.shape({
    roomId: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      serviceName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
    time_of_order: PropTypes.string.isRequired,
    time_of_assignment: PropTypes.string,
    time_of_completion: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    assigned_to: PropTypes.shape({
      user_id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

TaskDetails.defaultProps = {
  task: {
    roomId: "",
    items: [],
    time_of_order: "",
    time_of_assignment: null,
    time_of_completion: null,
    completed: false,
    assigned_to: {
      user_id: "",
      name: "",
    },
  },
};

export default TaskDetail;
