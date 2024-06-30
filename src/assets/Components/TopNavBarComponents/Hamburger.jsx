import React, { useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import './Hamburger.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const queryParams = location.search;

    const navItems = [
        { path: `/manager/pending-tasks${queryParams}`, label: "Pending tasks" },
        { path: `/manager/task-history${queryParams}`, label: "Task history" },
        { path: `/manager/rooms${queryParams}`, label: "Rooms" },
        { path: `/login_h${queryParams}`, label: "Logout from _____" }
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
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const queryParams = location.search;

    const navItems = [
        { path: `/edit-menu${queryParams}`, label: "Temporarily edit menu" },
        { path: `/task-assign${queryParams}`, label: "Pending tasks" },
        { path: `/billing${queryParams}`, label: "Billing" },
        { path: `/master/task-history${queryParams}`, label: "Task history" },
        { path: `/master/resto-pending${queryParams}`, label: "Restaurant Pending" },
        { path: `/in-room-dining-history${queryParams}`, label: "In-room dining history" },
        { path: `/logout${queryParams}`, label: "Logout from _____" }
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
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const queryParams = location.search;

    const navItems = [
        { path: `/restaurant/restaurant-pending${queryParams}`, label: "Pending orders" },
        { path: `/restaurant/edit-menu${queryParams}`, label: "Edit Menu" },
        { path: `/restaurant/order-history${queryParams}`, label: "Order History" },
        { path: `/restaurant/login${queryParams}`, label: "Logout from_____" }
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
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const queryParams = location.search;

    const navItems = [
        { path: `/housekeeper/pending-tasks${queryParams}`, label: "Pending tasks" },
        { path: `/housekeeper/task-history${queryParams}`, label: "Task history" },
        { path: `/login_h${queryParams}`, label: "Logout from _____" }
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
