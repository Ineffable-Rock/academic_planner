import React, { useState, useEffect } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react'; // Import Clerk hooks
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';

const DashboardApp = () => {
  const { user } = useUser(); // Get the current user data

  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // The username and profile image now come from Clerk
  const userName = user ? user.fullName : 'User';
  const profileImage = user ? user.imageUrl : null;

  const handleNavigate = (page) => setActivePage(page);
  const toggleProfileSettings = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className="h-screen bg-zinc-200 p-4 font-sans">
      <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
        {/* Pass the UserButton for logout functionality */}
        <Sidebar 
          activePage={activePage} 
          onNavigate={handleNavigate}
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
          // No need to pass user data handlers anymore
        />
      )}
    </div>
  );
}

export default DashboardApp;
