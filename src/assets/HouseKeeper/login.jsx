import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./styleLogin.css";

function AppName() {
  return <h1 className="app-name">App name</h1>;
}

function LoginHeader() {
  return <h2 className="login-header">Login</h2>;
}

function InputField({ label, placeholder, id, type = "text", value, onChange }) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="input-box"
        placeholder={placeholder}
        aria-label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function LoginButton({ handleClick }) {
  return (
    <button className="login-button" type="button" onClick={handleClick}>
      Login
    </button>
  );
}

function LoginForm({ message, onSubmit }) {
  const [idNumber, setIdNumber] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleIdChange = (e) => setIdNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => {
    onSubmit(idNumber, password);
  };

  return (
    <form className="login-form" onSubmit={e => e.preventDefault()}>
      <InputField
        label="Enter your id number to login"
        placeholder="12345678"
        id="idNumber"
        value={idNumber}
        onChange={handleIdChange}
      />
      <InputField
        label="Enter password"
        placeholder="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <LoginButton handleClick={handleSubmit} />
    </form>
  );
}

function Login({ message }) {
  const navigate = useNavigate();

  const handleSubmit = async (idNumber, password) => {
    try {
      const response = await fetch('http://localhost:3000/manager/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hotelId: '1', // Replace with actual hotelId or retrieve it from input
          userId: idNumber,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., navigate to a dashboard
        navigate(`/dashboard`); // Update the path to the actual route
      } else {
        // Handle login errors
        const errorData = await response.json();
        console.error('Login error:', errorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <main className="main-container">
      <AppName />
      <section className="login-section">
        <LoginHeader />
        <LoginForm message={message} onSubmit={handleSubmit} />
      </section>
    </main>
  );
}

export default Login;
