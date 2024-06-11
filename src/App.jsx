import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./assets/HouseKeeper/login.jsx";
import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import Rooms from './assets/Manager/Rooms.jsx';
import PendingTask from './assets/HouseKeeper/PendingTask.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/rooms" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Login />} />
                <Route path="/task-detail" element={<TaskDetail />} />
                <Route path="/task-history" element={<TaskHistory />} />
                <Route path="/pending-tasks" element={<PendingTask/>} />
                <Route path="/rooms" element={<Rooms />} />
            </Routes>
        </Router>
    );
}

export default App;
