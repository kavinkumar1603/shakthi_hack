import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigateToLogin = () => {
    setCurrentRoute('login');
  };

  const navigateToHome = () => {
    setCurrentRoute('home');
  };

  const renderCurrentRoute = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onGetStarted={navigateToLogin} />;
      case 'login':
        return <Login onBack={navigateToHome} />;
      default:
        return <Home onGetStarted={navigateToLogin} />;
    }
  };

  return (
    <div>
      {renderCurrentRoute()}
    </div>
  );
}

export default App;
