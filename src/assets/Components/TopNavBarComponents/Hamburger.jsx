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
        { path: "/pending-tasks-manager", label: "Pending tasks" },
        { path: "/task-history-manager", label: "Task history" },
        { path: "/rooms-manager", label: "Rooms" },
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
        { path: "/pending-tasks", label: "Pending tasks" },
        { path: "/billing", label: "Billing" },
        { path: "/task-history", label: "Task history" },
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

    const navItems = [
        { path: "/pending-orders", label: "Pending orders" },
        { path: "/edit-menu", label: "Temporarily edit menu" },
        { path: "/dining-history", label: "In-room dining history" },
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
function HamburgerHousekeeper() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navItems = [
        { path: "/pending-tasks", label: "Pending tasks" },
        { path: "/task-history", label: "Task history" },
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
