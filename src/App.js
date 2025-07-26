import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Header with logo and title */}
        <div className="header">
          <div className="logo">
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#FF4500"/>
                <path d="M12 15h16v2H12v-2zm0 4h16v2H12v-2zm0 4h12v2H12v-2z" fill="white"/>
              </svg>
            </div>
          </div>
          <h1 className="title">FoundryScribe</h1>
        </div>

        {/* Subtitle */}
        <h2 className="subtitle">Production Data Management System</h2>

        {/* Description */}
        <p className="description">
          Streamline your manufacturing operations with real-time production tracking,
          quality control monitoring, and comprehensive reporting tools designed for the
          modern factory floor.
        </p>

        {/* Feature Cards */}
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#FF4500"/>
                <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
              </svg>
            </div>
            <h3>Real-time Tracking</h3>
            <p>Monitor production metrics and quality data as it happens</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#FF4500"/>
                <circle cx="16" cy="12" r="4" fill="white"/>
                <path d="M10 20c0-3.31 2.69-6 6-6s6 2.69 6 6v2H10v-2z" fill="white"/>
              </svg>
            </div>
            <h3>Role-Based Access</h3>
            <p>Operators, supervisors, and admins each get tailored interfaces</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#FF4500"/>
                <path d="M8 8h16v16H8V8zm2 2v12h12V10H10z" fill="white"/>
                <path d="M12 14h8v2h-8v-2zm0 3h6v2h-6v-2z" fill="#FF4500"/>
              </svg>
            </div>
            <h3>Offline Capable</h3>
            <p>Keep working even when network connectivity is intermittent</p>
          </div>
        </div>

        {/* Get Started Button */}
        <button className="get-started-btn">
          Get Started →
        </button>

        {/* Footer */}
        <div className="footer">
          <p>Trusted by manufacturing facilities worldwide</p>
        </div>
      </div>
    </div>
  );
}

export default App;
