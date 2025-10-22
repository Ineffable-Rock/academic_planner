import React from 'react';
import {
  LayoutDashboard,
  GraduationCap,
  Network,
  Lightbulb,
  Calendar,
  ListTodo,
  Settings,
  LogOut,
} from 'lucide-react';

const Sidebar = ({ activePage, onNavigate, onLogoutClick }) => {
  return (
    <div className="flex flex-col justify-between h-full p-6 w-64 bg-zinc-900 text-zinc-100 rounded-l-2xl">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-white rounded-lg">
            <GraduationCap size={24} className="text-zinc-900" />
          </div>
          <span className="text-2xl font-bold text-zinc-100">AcaPlanner</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-y-3">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            onClick={() => onNavigate('dashboard')} 
            isActive={activePage === 'dashboard'}
          />
          <NavItem 
            icon={<Network size={20} />} 
            label="Course Graph" 
            onClick={() => onNavigate('graph')} 
            isActive={activePage === 'graph'}
          />
          {/* ...other items... */}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-y-3">
        <NavItem 
          icon={<Settings size={20} />} 
          label="Setting" 
          onClick={() => onNavigate('settings')} 
          isActive={activePage === 'settings'}
        />
        {/* This button now triggers the logout function from App.jsx */}
        <NavItem
          icon={<LogOut size={20} />}
          label="Logout"
          onClick={onLogoutClick}
        />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`flex items-center text-left w-full gap-3 p-3 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-white text-zinc-900 shadow-md'
        : 'text-zinc-400 hover:bg-zinc-800'
    }`}
  >
    {React.cloneElement(icon)}
    <span>{label}</span>
  </button>
);

export default Sidebar;