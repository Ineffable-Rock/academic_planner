import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DashboardApp from './DashboardApp';
import AuthModal from './components/AuthModal';
import ContactPage from './pages/ContactPage'; // 1. Import the new page

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [showContactPage, setShowContactPage] = useState(false); // 2. Add state for contact page

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsAuthModalOpen(false);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // 3. Render logic
  if (isLoggedIn) {
    return <DashboardApp onLogout={handleLogout} />;
  }

  // In your App.jsx file...

  if (showContactPage) {
    // Pass onAuthClick to the ContactPage
    return <ContactPage onBack={() => setShowContactPage(false)} onAuthClick={openAuthModal} />;
  }
  
  return (
    <>
      <LandingPage onAuthClick={openAuthModal} onContactClick={() => setShowContactPage(true)} />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
}

export default App;