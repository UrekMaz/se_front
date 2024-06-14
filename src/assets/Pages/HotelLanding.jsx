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
        <button onClick={() => handleNavigate('/housekeeper/pending-tasks')} className="landing-button">Housekeeper</button>
        <button onClick={() => handleNavigate('/manager/pending-tasks', { hamburger2: 'manager' })} className="landing-button">Manager</button>
        <button onClick={() => handleNavigate('/home', {hamburger : 'master'})} className="landing-button">Master</button>
        <button onClick={() => handleNavigate('/restaurant/login')} className="landing-button">Restaurant</button>
        <button onClick={() => handleNavigate('/confirmation')} className="landing-button">User</button>

      </div>
    </div>
  );
}

export default HotelLanding;
