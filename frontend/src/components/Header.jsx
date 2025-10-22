import React from 'react';
import { Search } from 'lucide-react';
import NotificationBell from './NotificationBell';

// A helper function to get initials, moved here for reusability
const getInitials = (name) => {
  const nameParts = name.split(' ');
  if (nameParts.length > 1) {
    return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
  }
  return nameParts[0] ? nameParts[0][0].toUpperCase() : '';
};

// Component now accepts userName and profileImage
const Header = ({ toggleProfileSettings, userName, profileImage }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-900">Hi, {userName.split(' ')[0]}!</h1>
        <p className="text-zinc-500">Welcome to your AcaPlanner dashboard.</p>
      </div>
      <div className="flex items-center gap-4">
        <button 
          className="p-2 bg-white/50 rounded-lg text-zinc-700 hover:bg-white/80 transition-colors"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        <NotificationBell />
        <button 
          onClick={toggleProfileSettings} 
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Open profile settings"
        >
          {/* --- NEW: Conditional Avatar Rendering --- */}
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="User Avatar" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/80"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-zinc-700 text-white flex items-center justify-center font-bold border-2 border-white/80">
              {getInitials(userName)}
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;