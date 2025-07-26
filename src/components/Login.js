import React from 'react';

function Login({ onBack }) {
  return (
    <div className="App">
      <div className="login-container">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        
        <div className="login-card">
          <div className="login-header">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#FF4500"/>
                <path d="M12 15h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
              </svg>
            </div>
            <h1 className="login-title">FoundryScribe</h1>
          </div>
          
          <h2 className="login-subtitle">Production Data Management System</h2>
          
          <form className="login-form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Enter any username" />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter any password" />
            </div>
            
            <button type="submit" className="login-btn" onClick={'home'}>Login</button>
            
            <a href="#" className="forgot-password">Forgot Password?</a>
          </form>
          
          
        </div>
      </div>
    </div>
  );
}

export default Login;
