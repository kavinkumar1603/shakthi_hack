import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { role } = useParams();

  const handleBack = () => {
    navigate('/select-role');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(`Logging in as ${role}`);
  };

  const capitalizeRole = (role) => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div className="App">
      <div className="login-container">
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
        
        <div className="login-card">
          <div className="login-header">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#FF4500"/>
                <path d="M12 16h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
              </svg>
            </div>
            <h1 className="login-title">FoundryScribe</h1>
          </div>
          
          <p className="login-subtitle">Production Data Management System</p>
          <p className="login-role">Logging in as: <strong>{capitalizeRole(role)}</strong></p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter any username" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter any password" 
                required 
              />
            </div>
            
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          
          <a href="#" className="forgot-password">Forgot Password?</a>
          
          <div className="prototype-note">
            <strong>Design Prototype:</strong><br/>
            Enter any username and password to continue<br/>
            No validation required - this is for design testing only
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
