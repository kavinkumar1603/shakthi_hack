import React from 'react';
import { useNavigate } from 'react-router-dom';

function Role() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/login/${role}`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="App">
      <div className="role-container">
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
        
        <div className="role-content">
          <h1 className="role-title">Select Your Role</h1>
          <p className="role-subtitle">Choose your role to access the appropriate dashboard</p>
          
          <div className="role-cards">
            <div className="role-card" onClick={() => handleRoleSelect('operator')}>
              <div className="role-icon operator">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#3B82F6"/>
                  <path d="M20 12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 14c-4.4 0-8-1.8-8-4v-2h16v2c0 2.2-3.6 4-8 4z" fill="white"/>
                </svg>
              </div>
              <h3>Operator</h3>
              <p>Record production data, manage quality metrics, and track daily operations on the factory floor.</p>
              <ul>
                <li>• Production Entry Forms</li>
                <li>• Quality Control Data</li>
                <li>• Shift Management</li>
                <li>• Equipment Status</li>
              </ul>
            </div>

            <div className="role-card" onClick={() => handleRoleSelect('supervisor')}>
              <div className="role-icon supervisor">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#10B981"/>
                  <path d="M12 16h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
                  <path d="M8 12h24v2H8v-2z" fill="white"/>
                </svg>
              </div>
              <h3>Supervisor</h3>
              <p>Monitor team performance, generate reports, and oversee production quality across multiple shifts.</p>
              <ul>
                <li>• Performance Analytics</li>
                <li>• Team Oversight</li>
                <li>• Quality Reports</li>
                <li>• Production Dashboards</li>
              </ul>
            </div>

            <div className="role-card" onClick={() => handleRoleSelect('administrator')}>
              <div className="role-icon administrator">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="20" fill="#8B5CF6"/>
                  <circle cx="16" cy="16" r="3" fill="white"/>
                  <circle cx="24" cy="16" r="3" fill="white"/>
                  <path d="M12 26c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v2H12v-2z" fill="white"/>
                </svg>
              </div>
              <h3>Administrator</h3>
              <p>Manage system configuration, user accounts, and access comprehensive analytics across the organization.</p>
              <ul>
                <li>• User Management</li>
                <li>• System Configuration</li>
                <li>• Global Analytics</li>
                <li>• Database Operations</li>
              </ul>
            </div>
          </div>
          
          <p className="role-note">You can change roles anytime by logging out and selecting a different role</p>
        </div>
      </div>
    </div>
  );
}

export default Role;