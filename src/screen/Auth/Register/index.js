// SignUpPage.js
import React, { useState } from 'react';
import './style.css'; // Make sure to create this CSS file

const SignUpPage = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('User Details:', userDetails);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
        <h2 className='heading'>Register</h2>

          {/* Logo goes here - use an img tag and import your logo */}
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
          />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userDetails.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="signup-button">Sign Up</button>
          <div className="login-link">
            <a href="/login">Already have an account? Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
