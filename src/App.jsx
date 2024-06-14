import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// Housekeeper
import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import PendingTask from './assets/HouseKeeper/PendingTask.jsx';

// Manager
import Rooms from './assets/Manager/Rooms.jsx';
import TaskDetailManager from './assets/Manager/TaskDetail.jsx';
import TaskHistoryManager from './assets/Manager/TaskHistory.jsx';
import PendingTaskManager from './assets/Manager/PendingTask.jsx';

import Dashboard from './user/Dashboard2'
import Login from "./assets/HouseKeeper/login.jsx";

import RestaurantSelect from './user/RestaurantSelect'
import Menu from './user/Menu'
import OrderConfirmation from './user/OrderConfirmation'
import OrderHistory from './user/OrderHistory'
import Housekeeping from './user/Housekeeping'
import Home from './assets/master/Home.jsx'
import RestoPending from './assets/master/RestoPending.jsx';
import HotelLanding from './assets/Pages/HotelLanding.jsx';
import Billing from './assets/master/billing.jsx';

// Idea is to have each part with different files and route them there
function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HotelLanding/>} />
                {/* Housekeeper */}
                    <Route path="/task-detail" element={<TaskDetail />} />
                    <Route path="/task-history" element={<TaskHistory />} />
                    <Route path="/pending-tasks" element={<PendingTask/>} />
                {/* Master */}
                    
                {/* Manager */}
                    <Route path="/rooms-manager" element={<Rooms />} />
                    <Route path="/task-detail-manager" element={<TaskDetailManager />} />
                    <Route path="/task-history-manager" element={<TaskHistoryManager />} />
                    <Route path="/pending-tasks-manager" element={<PendingTaskManager/>} />


                {/* User */}
                {/* Restaurant */}

                {/* <Route path="/housekeeping" element={<Housekeeping />} /> */}
                <Route path="/in-room-dining" element={<RestaurantSelect />} />
                <Route path="/order-history" element={<OrderHistory/>} />
                <Route path="/:restaurantName" element={<Menu/>} />
                <Route path="/confirm" element={<OrderConfirmation/>} />
                <Route path="/confirmation" element={<Dashboard/>} />
                <Route path="/login_h" element={<Login message="pending-tasks" />} />
                <Route path="/logout" element={<Login message="login_h" />} />
                
                <Route path="/login_master" element={<Login message="home"/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/billing" element={<Billing/>} />

                <Route path="/resto-pending" element={<RestoPending/>} />
                <Route path="/hotel-landing" element={<HotelLanding />} />

            </Routes>
        </Router>
    );
}

export default App;
