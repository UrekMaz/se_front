import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



import TaskDetail from './assets/HouseKeeper/TaskDetail.jsx';
import TaskHistory from './assets/HouseKeeper/TaskHistory.jsx';
import PendingTask from './assets/HouseKeeper/PendingTask.jsx';
import Login from "./assets/HouseKeeper/login.jsx";

// Manager
import Rooms from './assets/Manager/Rooms.jsx';
import TaskDetailManager from './assets/Manager/TaskDetail.jsx';
import TaskHistoryManager from './assets/Manager/TaskHistory.jsx';
import PendingTaskManager from './assets/Manager/PendingTask.jsx';
import BillingManager from './assets/Manager/billingManager.jsx';
// Master
import Home from './assets/master/Home.jsx';
import RestoPending from './assets/master/RestoPending.jsx';
import Billing from './assets/master/billing.jsx';
import RoomsT from './assets/master/Rooms.jsx'
// User
import Dashboard from './user/Dashboard2';
import RestaurantSelect from './user/RestaurantSelect';
import Menu from './user/Menu';
import OrderConfirmation from './user/OrderConfirmation';
import OrderHistory from './user/OrderHistory';
import Housekeeping from './user/Housekeeping.jsx';

// Restaurant
import RestoLogin from './assets/Restaurant/RestoLogin.jsx';
import RestaurantPending from './assets/Restaurant/RestaurantPending.jsx';
import RestoEditMenu from './assets/Restaurant/RestoEditMenu.jsx';
import RestoOrderHistory from './assets/Restaurant/RestoOrderHistory.jsx';

// Pages
import HotelLanding from './assets/Pages/HotelLanding.jsx';
import ManagerLogin from './assets/Manager/ManagerLogin.jsx';

import Edit_Menu from './assets/master/Menu_edit.jsx';

import Assign_task from './assets/master/Assign_task.jsx';
import InRoomDining from './assets/master/InRoomDining.jsx';
import HousekeeperLogin from './assets/HouseKeeper/Housekeeperlogin.jsx';
import MasterLogin from './assets/master/MasterLogin.jsx';
function App() {
    return (
        <Router>
            <Routes>
                 {/* Primary Path */}
                <Route path="/" element={<HotelLanding />} />

                {/* Landing */}
                <Route path="/hotel-landing" element={<HotelLanding />} />

                 {/* Login/logout */}
                <Route path="/login_h" element={<Login message="pending-tasks" />} />
                <Route path="/logout" element={<Login message="login_h" />} />
                
                {/* Housekeeper */}
                <Route path="/housekeeper/login" element={<HousekeeperLogin/>} />
                <Route path="/housekeeper/task-detail" element={<TaskDetail hamburger = "housekeeper"/>} />
                <Route path="/housekeeper/task-history" element={<TaskHistory hamburger = "housekeeper"/>} />
                <Route path="/housekeeper/pending-tasks" element={<PendingTask hamburger = "housekeeper"/>} />

                {/* Master */}
                <Route path="/task-detail" element={<TaskDetail />} />
                <Route path="/master/task-history" element={<TaskHistory hamburger="master"/>} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/resto-pending" element={<RestoPending />} />
                <Route path="/master/login" element={<MasterLogin/>} />
                <Route path="/master/home" element={<Home />} />
                <Route path="/edit-menu" element={<Edit_Menu/>} />
                <Route path="/task-assign" element={<Assign_task/>} />
                <Route path="/in-room-dining-history" element={<InRoomDining/>} />
                <Route path="/roomsMaster" element={<RoomsT/>} />

                {/* Manager */}
                <Route path="/manager/login" element={<ManagerLogin/>} />
                <Route path="/manager/rooms" element={<Rooms hamburger = "manager"/>} />
                <Route path="/manager/task-detail" element={<TaskDetail hamburger = "manager"/>} />
                <Route path="/manager/task-history" element={<TaskHistory hamburger = "manager"/>} />
                <Route path="/manager/pending-tasks" element={<PendingTask hamburger = "manager" />} />
                <Route path="/billingManager" element={<BillingManager />} />
                {/* User */}
                <Route path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/in-room-dining" element={<RestaurantSelect />} />
                <Route path="/user/order-history" element={<OrderHistory />} />
                <Route path="/:restaurantName" element={<Menu />} />
                <Route path="/confirm" element={<OrderConfirmation />} />
                <Route path="/user/housekeeping" element={<Housekeeping />} />
                {/* Restaurant */}
                <Route path="/restaurant/login" element={<RestoLogin/>} />
                <Route path="/restaurant/edit-menu" element={<RestoEditMenu/>} />
                <Route path="/restaurant/order-history" element={<RestoOrderHistory/>}/>
                <Route path="/restaurant/restaurant-pending" element={<RestaurantPending/>} />
            </Routes>
        </Router>
    );
}




export default App;
