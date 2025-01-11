import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Signup.css';

const Signup = ({ csrfToken }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: confirmPassword,
        }),
      });
      
      if (!response.ok) throw new Error('Registration failed');
      const userData = await response.json();
      const jwtToken = userData.token;

      localStorage.setItem('jwtToken', jwtToken);
      window.alert('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-welcome">
        <h1>Welcome to True Beauty</h1>
        <p>Join us for an exclusive beauty experience.</p>
      </div>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="form-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
