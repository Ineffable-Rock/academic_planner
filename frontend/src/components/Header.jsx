import React from 'react';
import { Search } from 'lucide-react';
import NotificationBell from './NotificationBell';
import { UserButton } from '@clerk/clerk-react'; // Import UserButton

const Header = ({ toggleProfileSettings, userName }) => {
  // getInitials is no longer needed here if using UserButton
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-900">
          Hi, {userName ? userName.split(' ')[0] : 'User'}!
        </h1>
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
        {/* UserButton handles the user menu, profile, and sign out */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Header;
