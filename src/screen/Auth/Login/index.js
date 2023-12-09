// LoginPage.js
import React from 'react';
import './style.css'; // Ensure you create this CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
      <h2 className='heading'>Login to Your Account</h2>
        <form className="login-form">
          <input type="text" id="username" name="username" placeholder="Username/Email" />
          <input type="password" id="password" name="password" placeholder="Password" />
          <button type="submit" className="login-button">Login</button>
          <div className="help-links">
            <a href="/forgot-password">Forgot password?</a>
            <a href="/register">Signup here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
