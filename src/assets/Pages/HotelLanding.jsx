import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelLanding.css';

const HotelLanding = () => {
  const navigate = useNavigate();

  const handleNavigate = (path, state = {}) => {
    navigate(path, { state });
  };

  return (
    <div className="landing-container">
      <h1>Welcome to Our Hotel</h1>
      <div className="button-container">
        <button onClick={() => handleNavigate('/pending-tasks', { hamburger: 'housekeeper' })} className="landing-button">Housekeeper</button>
        <button onClick={() => handleNavigate('/pending-tasks', { hamburger: 'manager' })} className="landing-button">Manager</button>
        <button onClick={() => handleNavigate('/home', {hamburger : 'master'})} className="landing-button">Master</button>
        <button onClick={() => handleNavigate('/resto-pending', { hamburger: 'restaurant'})} className="landing-button">Restaurant</button>
      </div>
    </div>
  );
}

export default HotelLanding;
