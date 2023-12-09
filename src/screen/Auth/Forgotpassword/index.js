// ForgotPasswordWithOTP.js
import React, { useState } from 'react';
import './style.css'; // Make sure to create this CSS file

const ForgotPasswordWithOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [passwords, setPasswords] = useState({ newPassword: '', confirmNewPassword: '' });
  const [stage, setStage] = useState(1); // 1 for email input, 2 for OTP input, 3 for new password input

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Logic to send OTP to the user's email
    console.log('Email submitted for OTP:', email);
    setStage(2); // Proceed to OTP verification stage
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Logic to verify OTP
    console.log('OTP submitted for verification:', otp);
    setStage(3); // Proceed to new password stage after OTP verification
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    // Logic to set new password
    console.log('New passwords:', passwords);
    if (passwords.newPassword === passwords.confirmNewPassword) {
      // Proceed with password update logic
    } else {
      // Handle password mismatch
    }
  };

  return (
    <div className="forgot-password-otp-container">
      <div className="forgot-password-otp-box">
        <div className="logo">
          {/* Logo goes here - use an img tag and import your logo */}
        </div>
        {stage === 1 && (
          <form className="email-form" onSubmit={handleEmailSubmit}>
          <p>Please enter your email address to receive an OTP.</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="email-submit-button">Send OTP</button>
        </form>        )}
        {stage === 2 && (
        <form className="otp-form" onSubmit={handleOTPSubmit}>
        <p>Please enter the OTP you received.</p>
        <input
          type="text"
          id="otp"
          name="otp"
          placeholder="One-Time Password"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <button type="submit" className="otp-submit-button">Verify OTP</button>
      </form>        )}
        {stage === 3 && (
          <form className="new-password-form" onSubmit={handleNewPasswordSubmit}>
            <p>Please enter your new password.</p>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            />
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              value={passwords.confirmNewPassword}
              onChange={(e) => setPasswords({ ...passwords, confirmNewPassword: e.target.value })}
            />
            <button type="submit" className="new-password-submit-button">Set New Password</button>
          </form>
        )}
        <div className="back-to-login-link">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordWithOTP;
