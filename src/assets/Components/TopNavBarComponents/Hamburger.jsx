import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems = [
        { path: "/manager/pending-tasks", label: "Pending tasks" },
        { path: "/manager/task-history", label: "Task history" },
        { path: "/manager/rooms", label: "Rooms" },
        { path: "/login_h", label: "Logout from _____" }
    ];

    return (
        <div>
            <button 
                onClick={toggleMenu} 
                className="hamburger-button" 
                aria-expanded={menuOpen} 
                aria-controls="main-nav"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            {menuOpen && (
                <nav id="main-nav" className="main-nav">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link to={item.path} onClick={toggleMenu} className="nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
function HamburgerMaster() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems = [
        { path: "/edit-menu", label: "Temporarily edit menu" },
        { path: "/task-assign", label: "Pending tasks" },
        { path: "/billing", label: "Billing" },
        { path: "/master/task-history", label: "Task history"},
        { path: "/in-room-dining-history", label: "In-room dining history" },
        { path: "/logout", label: "Logout from _____" }
    ];

    return (
        <div>
            <button 
                onClick={toggleMenu} 
                className="hamburger-button" 
                aria-expanded={menuOpen} 
                aria-controls="main-nav"
            >
                &#9776; {/* Hamburger icon */}
            </button>
            {menuOpen && (
                <nav id="main-nav" className="main-nav">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link to={item.path} onClick={toggleMenu} className="nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
function HamburgerRestaurant() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
//     const navItems = [
//         { path: "/restaurant-pending", label: "Pending orders" },
//         { path: "/resto-edit-menu", label: "Edit Menu" },
//         { path: "/resto-order-history", label: "History" },
//         { path: "/resto-login", label: "Logout from _____" }
//     ];
    const navItems = [
        { path: "/restaurant/restaurant-pending", label: "Pending orders" },
        { path: "/restaurant/edit-menu", label: "Edit Menu" },
        { path: "/restaurant/order-history", label: "Order History" },
        { path: "/restaurant/login", label: "Logout from_____"}
    ];

    return (
        <div>
            <button 
                onClick={toggleMenu} 
                className="hamburger-button" 
                aria-expanded={menuOpen} 
                aria-controls="main-nav"
            >
                &#9776; {/* Hamburger icon */}
            </button>
            {menuOpen && (
                <nav id="main-nav" className="main-nav">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link to={item.path} onClick={toggleMenu} className="nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
function HamburgerHousekeeper() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems = [
        { path: "/housekeeper/pending-tasks", label: "Pending tasks" },
        { path: "/housekeeper/task-history", label: "Task history" },
        { path: "/login_h", label: "Logout from _____" }
    ];

    return (
        <div>
            <button 
                onClick={toggleMenu} 
                className="hamburger-button" 
                aria-expanded={menuOpen} 
                aria-controls="main-nav"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            {menuOpen && (
                <nav id="main-nav" className="main-nav">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link to={item.path} onClick={toggleMenu} className="nav-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
export {Hamburger, HamburgerMaster, HamburgerRestaurant, HamburgerHousekeeper};
// export default Hamburger;
