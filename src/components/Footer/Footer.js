// Footer.js
import React from 'react';
import './style.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Contact Us: <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
