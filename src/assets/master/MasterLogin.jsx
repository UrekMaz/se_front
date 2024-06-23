import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Restaurant/LoginForm.css';

function LabelInputRow({ label, inputType, inputId, placeholder, value, onChange }) {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function MasterLogin() {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/master/login', { // Updated endpoint
      hotelId:"hotel123",  
      userId: idNumber,
        password,
      });
      console.log(response.data);
      if (response.status === 200) {
        navigate('/master/home'); // Updated navigation route
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error logging in the user!', error);
      alert('Login failed. Please check your credentials and try again.');
    }
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
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <LabelInputRow
            label="Enter password"
            inputType="password"
            inputId="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </main>
    </section>
  );
}

export default MasterLogin;