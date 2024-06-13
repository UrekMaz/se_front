// BackButton.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css'; // Import the CSS file

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname !== '/login') {
      navigate(-1);
    }
  };

  return (
    <button className="hamburger-button" onClick={handleBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackButton;
