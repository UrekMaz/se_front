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
import Home from './assets/master/Home.jsx'
import RestoPending from './assets/master/RestoPending.jsx';
import Billing from './assets/master/billing.jsx';
import Edit_Menu from './assets/master/Menu_edit.jsx';

import Assign_task from './assets/master/Assign_task.jsx';
import InRoomDining from './assets/master/InRoomDining.jsx';
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
                <Route path="/login_h" element={<Login message="pending-tasks" />} />
                <Route path="/logout" element={<Login message="login_h" />} />
                <Route path="/task-detail" element={<TaskDetail />} />
                <Route path="/master/task-history" element={<TaskHistory hamburger="master"/>} />
                {/*<Route path="/task-history" element={<TaskHistory hamburger="manager"/>} />*/}
                <Route path="/pending-tasks" element={<PendingTask/>} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/login_master" element={<Login message="home"/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/resto-pending" element={<RestoPending/>} />
                <Route path="/billing" element={<Billing/>} />
                <Route path="/edit-menu" element={<Edit_Menu/>} />
                <Route path="/task-assign" element={<Assign_task/>} />
                <Route path="/in-room-dining-history" element={<InRoomDining/>} />
            </Routes>
        </Router>
    );
}

export default App;
