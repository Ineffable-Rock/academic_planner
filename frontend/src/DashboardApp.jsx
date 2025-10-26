import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';
import LogoutConfirmationDialog from './components/LogoutConfirmationDialog'; // corrected file name


const DashboardApp = ({ onLogout }) => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState('Aman Bahuguna');
  const [profileImage, setProfileImage] = useState(null);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); // NEW: track logout dialog

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) setProfileImage(savedImage);
  }, []);

  const handleNavigate = (page) => setActivePage(page);
  const toggleProfileSettings = () => setIsProfileOpen(!isProfileOpen);

  // NEW: Open logout dialog
  const handleLogoutClick = () => setIsLogoutOpen(true);

  // NEW: Confirm logout
  const handleLogoutConfirm = () => {
    setIsLogoutOpen(false);
    if (onLogout) onLogout(); // call the passed logout function
  };

  return (
    <div className="h-screen bg-zinc-200 p-4 font-sans">
      <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
        <Sidebar 
          activePage={activePage} 
          onNavigate={handleNavigate} 
          onLogoutClick={handleLogoutClick} // pass the new handler
        />
        <main className="flex-1 p-8 overflow-y-auto bg-white">
          <Header 
            toggleProfileSettings={toggleProfileSettings} 
            userName={userName}
            profileImage={profileImage} 
          />
          <div>
            {activePage === 'dashboard' && <h1 className="text-2xl font-bold text-zinc-800">Dashboard Content</h1>}
            {activePage === 'graph' && <h1 className="text-2xl font-bold text-zinc-800">Course Graph Page</h1>}
          </div>
        </main>
      </div>

      {isProfileOpen && (
        <ProfileSettings 
          onClose={toggleProfileSettings} 
          userName={userName}
          onUserNameChange={setUserName}
          profileImage={profileImage}
          onProfileImageChange={setProfileImage}
        />
      )}

      {/* NEW: Logout confirmation dialog */}
      <LogoutConfirmationDialog 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </div>
  );
}

export default DashboardApp;
