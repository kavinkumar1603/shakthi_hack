import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/select-role');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="logo-icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="25" fill="#FF4500"/>
              <path d="M15 20h20v3H15v-3zm0 6h20v3H15v-3zm0 6h15v3H15v-3z" fill="white"/>
            </svg>
          </div>
          <h1 className="title">FoundryScribe</h1>
        </div>
        
        <h2 className="subtitle">Production Data Management System</h2>
        
        <p className="description">
          Streamline your manufacturing operations with real-time production tracking,
          quality control monitoring, and comprehensive reporting tools designed for the
          modern factory floor.
        </p>
        
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#FF4500"/>
                <path d="M20 25h20v2H20v-2zm0 4h20v2H20v-2zm0 4h15v2H20v-2z" fill="white"/>
              </svg>
            </div>
            <h3>Real-time Tracking</h3>
            <p>Monitor production metrics and quality data as it happens</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#FF4500"/>
                <circle cx="25" cy="25" r="4" fill="white"/>
                <circle cx="35" cy="25" r="4" fill="white"/>
                <path d="M20 40c0-3 2-5 5-5h10c3 0 5 2 5 5v3H20v-3z" fill="white"/>
              </svg>
            </div>
            <h3>Role-Based Access</h3>
            <p>Operators, supervisors, and admins each get tailored interfaces</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#FF4500"/>
                <path d="M25 20v20l15-10-15-10z" fill="white"/>
              </svg>
            </div>
            <h3>Offline Capable</h3>
            <p>Keep working even when network connectivity is intermittent</p>
          </div>
        </div>
        
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started →
        </button>
        
        <div className="footer">
          <p>Trusted by manufacturing facilities worldwide</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
