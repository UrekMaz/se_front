import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Dashboard from './user/Dashboard2'
import Login from "./assets/HouseKeeper/login.jsx";
import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import Rooms from './assets/Manager/Rooms.jsx';
import PendingTask from './assets/HouseKeeper/PendingTask.jsx';
import RestaurantSelect from './user/RestaurantSelect'
import Menu from './user/Menu'
import OrderConfirmation from './user/OrderConfirmation'
import OrderHistory from './user/OrderHistory'
import Housekeeping from './user/Housekeeping'
import Home from './master/Home'
import RestoPending from './master/RestoPending'
function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Dashboard/>} />
                <Route path="/housekeeping" element={<Housekeeping />} />
                <Route path="/in-room-dining" element={<RestaurantSelect />} />
                <Route path="/order-history" element={<OrderHistory/>} />
                <Route path="/:restaurantName" element={<Menu/>} />
                <Route path="/confirm" element={<OrderConfirmation/>} />
                <Route path="/confirmation" element={<Dashboard/>} />
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
