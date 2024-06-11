import * as React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./styleLogin.css";
import PendingTask from "./PendingTask";
import TaskDetail from "./TaskDetail";

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

function LoginButton() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/pending-tasks");
  }
  
  return (
    <button className="login-button" type="button" onClick={handleClick}>
      Login
    </button>
  );
}

function LoginForm() {
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
      <LoginButton />
    </form>
  );
}

function Login() {
  return (
    <main className="main-container">
      <AppName />
      <section className="login-section">
        <LoginHeader />
        <LoginForm />
      </section>
    </main>
  );
}

// Redundant component

// function login() {
//   const navigate = useNavigate();
//   navigate('/pending-tasks');
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path="/" element={<Login />} />
//     //     <Route path="/pending-task" element={<PendingTask />} />
//     //     {/* <Route path="/task-detail/:taskId" element={<TaskDetail />} /> */}
//     //     {/* <Route path="/task-detail" element={<TaskDetail />} /> */}
//     //   </Routes>
//     // </Router>
//     null
//   );
// }

export default Login;
