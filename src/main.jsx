import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./assets/HouseKeeper/login.jsx";
import "./assets/HouseKeeper/styleLogin.css";
import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import "./assets/HouseKeeper/StyleTaskDetails.css";
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import "./assets/HouseKeeper/StyleTaskHistory.css";
import Rooms from './assets/Manager/Rooms.jsx';
import FloorOptions from './assets/Manager/FloorOptions.jsx';
import App from './App.jsx';
import  Billing from './assets/master/billing.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
{/* <TaskDetail /> */}
{/* <TaskHistory /> */}
<Billing />
  </React.StrictMode>
);

