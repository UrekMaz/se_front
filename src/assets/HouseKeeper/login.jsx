import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./styleLogin.css";

function AppName() {
  return <h1 className="app-name">App name</h1>;
}

function LoginHeader() {
  return <h2 className="login-header">Login</h2>;
}

function InputField({ label, placeholder, id }) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="input-box"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}

function LoginButton({ message }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/${message}`);
  }
  
  return (
    <button className="login-button" type="button" onClick={handleClick}>
      Login
    </button>
  );
}

function LoginForm({ message }) {
  return (
    <form className="login-form">
      <InputField
        label="Enter your id number to login"
        placeholder="12345678"
        id="idNumber"
      />
      <InputField
        label="Enter password"
        placeholder="Password"
        id="password"
      />
      <LoginButton message={message} />
    </form>
  );
}

function Login({message}) {
  
  return (
    <main className="main-container">
      <AppName />
      <section className="login-section">
        <LoginHeader />
        <LoginForm message={message} />
      </section>
    </main>
  );
}

export default Login;
