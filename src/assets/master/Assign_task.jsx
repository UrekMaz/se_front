import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Assign_tasks.css";
import TopNavBar from "../Components/TopNavBar";

function Task({ task, assignees, onAssignChange, onCheckboxChange, onTextClick }) {
  // Function to extract time from the datetime string
  const formatTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return (
    <div className="task-container" onClick={() => onTextClick(task)}>
      <div className="task-time">{formatTime(task.time_of_order)}</div>
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
      <div className="task-assign" onClick={(e) => e.stopPropagation()}>
        Assigned to:
        <select value={task.assigned_to?.user_id || ""} onChange={(e) => { e.stopPropagation(); onAssignChange(task, e); }}>
          <option value="">None</option>
          {assignees.map((assignee, index) => (
            <option key={index} value={assignee.user_id}>{assignee.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Assign_task({ hamburger }) {
  const [tasks, setTasks] = useState([]);
  const [assignees, setAssignees] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasksAndAssignees = async () => {
      const params = new URLSearchParams(location.search);
      const hotelId = params.get("hotelId");
      console.log("Hotedl Id : " + hotelId);

      try {
        const [tasksResponse, assigneesResponse] = await Promise.all([
          axios.get(`http://localhost:5000/selected-items/selected-items/${hotelId}`, {
            params:{hotelId : hotelId}
          }),
          axios.get(`http://localhost:5000/hotel-employees/housekeepers/${hotelId}`, {
            params: {hotelId : hotelId}
          })
        ]);

        const sortedTasks = tasksResponse.data.sort((a, b) => {
          // Sort by not allotted first and then by time (newest first)
          if (!a.assigned_to?.user_id && b.assigned_to?.user_id) return -1;
          if (a.assigned_to?.user_id && !b.assigned_to?.user_id) return 1;
          return new Date(`1970-01-01T${b.time_of_order}Z`) - new Date(`1970-01-01T${a.time_of_order}Z`);
        });

        setTasks(sortedTasks);
        setAssignees(assigneesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasksAndAssignees();
  }, [location.search]);

  const handleAssignChange = async (task, e) => {
    const assigned_to_user_id = e.target.value;
    const assigned_to_name = assignees.find(assignee => assignee.user_id === assigned_to_user_id)?.name || "";
    const time_of_assignment = new Date().toISOString();
    const params = new URLSearchParams(location.search);
    const hotelId = params.get("hotelId");
    
    try {
      const response = await axios.put(
        `http://localhost:5000/selected-items/selected-items/${task._id}/assign`,
        {
          assigned_to: {
            user_id: assigned_to_user_id,
            name: assigned_to_name
          },
          time_of_assignment: time_of_assignment
        },
        {
          params: {
            hotelId: hotelId
          }
        }
      );
      
      setTasks(tasks.map(t => t._id === task._id ? response.data : t));
    } catch (error) {
      console.error('Error updating task assignment:', error);
    }
  };

  const handleCheckboxChange = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const time_of_completion = new Date().toISOString();
    const params = new URLSearchParams(location.search);
    const hotelId = params.get("hotelId");
  
    try {
      const response = await axios.put(`http://localhost:5000/selected-items/selected-items/${updatedTask._id}/complete`, { 
      completed: updatedTask.completed, time_of_completion },
      {params: {hotelId:hotelId}}
      );
      setTasks(tasks.map(t => t._id === task._id ? response.data : t));
    } catch (error) {
      console.error('Error updating task completion status:', error);
    }
  };

  const handleTextClick = (task) => {
    const hotelId = new URLSearchParams(location.search).get("hotelId");
    navigate(`/manager/task-detail`, { state: { task, hotelId } });
  };

  return (
    <div className="main-container">
      <TopNavBar name="Assign tasks" hamburger= "master" />
      <section className="tasks-section">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            assignees={assignees}
            onAssignChange={handleAssignChange}
            onCheckboxChange={handleCheckboxChange}
            onTextClick={handleTextClick}
          />
        ))}
      </section>
    </div>
  );
}

export default Assign_task;
