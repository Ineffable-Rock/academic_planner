import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';
import CareerCards from './components/CareerCards';
import CourseGraph from './components/CourseGraph';
import RoadmapPage from './components/RoadmapPage';

const DashboardApp = () => {
  const { user } = useUser();
  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  
  const userName = user ? user.fullName : 'User';

  const handleNavigate = (page) => {
    setActivePage(page);
    setSelectedCareer(null); 
  };

  const toggleProfileSettings = () => setIsProfileOpen(!isProfileOpen);

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
  };

  const handleBackToCareers = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="h-screen bg-zinc-100 p-4 font-sans">
      <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
        <Sidebar 
          activePage={activePage} 
          onNavigate={handleNavigate}
        />
        <main className="flex-1 p-8 overflow-y-auto bg-white">
          <Header 
            toggleProfileSettings={toggleProfileSettings} 
            userName={userName}
          />
          <div>
            {activePage === 'dashboard' && (
              selectedCareer ? (
                <RoadmapPage careerPath={selectedCareer} onBack={handleBackToCareers} />
              ) : (
                <CareerCards onCareerSelect={handleCareerSelect} />
              )
            )}
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