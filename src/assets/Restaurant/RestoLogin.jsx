import React from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LabelInputRow({ label, inputType, inputId, placeholder }) {
  return (
    <div className="input-row">
      <label htmlFor={inputId} className="input-label">
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        className="input-field"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}

function RestoLogin() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Add your authentication logic here
    // For demo purposes, let's navigate to a different route after login
    navigate('/restaurant/restaurant-pending'); 
  };

  return (
    <section className="login-section">
      <header>
        <h1 className="app-name">App name</h1>
      </header>
      <main className="login-main">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <LabelInputRow
            label="Enter your ID number to login"
            inputType="text"
            inputId="idNumber"
            placeholder="12345678"
          />
          <LabelInputRow
            label="Enter password"
            inputType="password"
            inputId="password"
            placeholder="Password"
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </main>
    </section>
  );
}

export default RestoLogin;



