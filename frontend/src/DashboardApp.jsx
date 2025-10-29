// ineffable-rock/academic_planner/academic_planner-78b3aa83899e19731a8c1abb043654f5579c5dc8/frontend/src/DashboardApp.jsx

import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';
import CareerCards from './components/CareerCards';
import CourseGraph from './components/CourseGraph';
import RoadmapPage from './components/RoadmapPage';
import FullRoadmapGraph from './components/FullRoadmapGraph'; // ✅ New Import

const DashboardApp = () => {
  const { user } = useUser();
  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [viewingFullRoadmap, setViewingFullRoadmap] = useState(false); // ✅ New state

  const userName = user ? user.fullName : 'User';

  const handleNavigate = (page) => {
    setActivePage(page);
    setSelectedCareer(null);
    setViewingFullRoadmap(false);
  };

  const toggleProfileSettings = () => setIsProfileOpen(!isProfileOpen);

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
  };

  const handleBackToCareers = () => {
    setSelectedCareer(null);
  };

  const handleViewGraph = (career) => {
    setSelectedCareer(career);
    setActivePage('graph');
  };

  // ✅ New Handlers
  const handleViewFullRoadmap = (career) => {
    setSelectedCareer(career);
    setViewingFullRoadmap(true);
  };

  const handleBackToRoadmap = () => {
    setViewingFullRoadmap(false);
  };

  // ✅ Show FullRoadmapGraph when viewingFullRoadmap is true
  if (viewingFullRoadmap) {
    return (
      <div className="h-screen bg-zinc-100 p-4 font-sans">
        <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
          <Sidebar activePage={activePage} onNavigate={handleNavigate} />
          <main className="flex-1 p-8 overflow-y-auto bg-white">
            <FullRoadmapGraph
              careerPath={selectedCareer}
              onBack={handleBackToRoadmap}
            />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-zinc-100 p-4 font-sans">
      <div className="flex h-full w-full rounded-2xl shadow-sm overflow-hidden">
        <Sidebar activePage={activePage} onNavigate={handleNavigate} />
        <main className="flex-1 p-8 overflow-y-auto bg-white">
          <Header toggleProfileSettings={toggleProfileSettings} userName={userName} />
          <div>
            {activePage === 'dashboard' && (
              selectedCareer ? (
                <RoadmapPage
                  careerPath={selectedCareer}
                  onBack={handleBackToCareers}
                  onViewGraph={() => handleViewGraph(selectedCareer)}
                  onViewFullRoadmap={() => handleViewFullRoadmap(selectedCareer)} // ✅ New Prop
                />
              ) : (
                <CareerCards onCareerSelect={handleCareerSelect} />
              )
            )}
            {activePage === 'graph' && <CourseGraph careerPath={selectedCareer} />}
          </div>
        </main>
      </div>
      {isProfileOpen && <ProfileSettings onClose={toggleProfileSettings} />}
    </div>
  );
};

export default DashboardApp;
