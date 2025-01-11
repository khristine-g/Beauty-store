import React, { useState } from "react";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-welcome">
        <h1>Welcome Back!</h1>
        <p>Log in to access your account and continue your journey.</p>
      </div>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login to Your Account</h2>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
