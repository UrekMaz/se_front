import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./assets/HouseKeeper/login.jsx";
import "./assets/HouseKeeper/styleLogin.css";
import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import "./assets/HouseKeeper/StyleTaskDetails.css";
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import "./assets/HouseKeeper/StyleTaskHistory.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
{/* <TaskDetail /> */}
{/* <TaskHistory /> */}
  </React.StrictMode>
);

