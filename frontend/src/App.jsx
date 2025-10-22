import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardApp from './DashboardApp'; // The component you just renamed

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // If the user is logged in, show the DashboardApp. Otherwise, show the LandingPage.
  return (
    isLoggedIn 
      ? <DashboardApp onLogout={handleLogout} /> 
      : <LandingPage onLogin={handleLogin} />
  );
}

export default App;