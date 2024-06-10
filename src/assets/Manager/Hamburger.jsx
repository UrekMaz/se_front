import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';

function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleMenu} className="hamburger-button">
                &#9776; {/* Hamburger icon */}
            </button>
            {isOpen && (
                <div className="main-nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/pending-tasks" onClick={toggleMenu} className="nav-link">Pending tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/task-history" onClick={toggleMenu} className="nav-link">Task history</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rooms" onClick={toggleMenu} className="nav-link">Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" onClick={toggleMenu} className="nav-link">Logout from _____</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Hamburger;
