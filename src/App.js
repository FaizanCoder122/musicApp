// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar'; // Import the Navbar component
import './App.css';
import Login from './screen/Auth/Login';
import SignUpPage from './screen/Auth/Register';
import ForgotPasswordPage from './screen/Auth/Forgotpassword';
import { Navbar, Nav, Container } from 'react-bootstrap';
import WorkInProgressPage from './screen/workprogress/workprogress';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <NavigationBar /> {/* Include the Navbar before your Routes */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/" element={<WorkInProgressPage />} />
          <Route path="/music" element={<WorkInProgressPage />} />
          <Route path="/page" element={<WorkInProgressPage />} />

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
