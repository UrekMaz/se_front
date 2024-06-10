import React from 'react';
import { useHistory } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button onClick={handleGoBack} className="back-button">
      &#8249;
    </button>
  );
}

export default BackButton;
