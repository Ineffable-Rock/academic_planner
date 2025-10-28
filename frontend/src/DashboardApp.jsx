 import React, { useState, useEffect } from 'react';
import { useUser, UserButton } from '@clerk/clerk-react'; 
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';
import CareerCards from './components/CareerCards';
// import Dashboard from './components/Dashboard'; // You already created this
import CourseGraph from './components/CourseGraph'; // Import the new component

const DashboardApp = () => {
  const { user } = useUser(); 

  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const userName = user ? user.fullName : 'User';
  const profileImage = user ? user.imageUrl : null;

  const handleNavigate = (page) => setActivePage(page);
  const toggleProfileSettings = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className="h-screen bg-zinc-200 p-4 font-sans">
      <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
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
            {/* Conditional rendering for the active page */}
            {/* {activePage === 'dashboard' && <Dashboard />} */}
            {activePage === 'dashboard' && <CareerCards />}
            {activePage === 'graph' && <CourseGraph />}
          </div>
        </main>
      </div>
      {isProfileOpen && (
        <ProfileSettings 
          onClose={toggleProfileSettings}
        />
      )}
    </div>
  );
}

export default DashboardApp;