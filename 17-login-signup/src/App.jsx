import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import './styles/auth.css';

// Navigation component to handle active states
const Navigation = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    // Update active tab based on current route
    if (location.pathname === '/signup') {
      setActiveTab('signup');
    } else {
      setActiveTab('login');
    }
  }, [location]);

  return (
    <nav className="auth-nav">
      <Link 
        to="/login" 
        className={`auth-link ${activeTab === 'login' ? 'active' : ''}`}
      >
        Sign In
      </Link>
      <Link 
        to="/signup" 
        className={`auth-link ${activeTab === 'signup' ? 'active' : ''}`}
      >
        Create Account
      </Link>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="auth-wrapper">
          <div className="auth-card">
            <div className="logo-container">
              <p>Welcome back! Please enter your details</p>
            </div>
            
            <Navigation />
            
            <div className="auth-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Login />} />
              </Routes>
            </div>
          </div>
          
          <div className="auth-footer">
            <p> {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;