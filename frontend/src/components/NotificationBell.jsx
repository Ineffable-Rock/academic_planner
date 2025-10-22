import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, Zap, CalendarClock } from 'lucide-react';

// Dummy notifications related to the Academic Planner
const dummyNotifications = [
  {
    id: 1,
    icon: <Zap size={20} className="text-blue-500" />,
    title: 'New Course Recommendation',
    message: 'AI suggests "Machine Learning" based on your progress.',
    timestamp: '2 mins ago',
  },
  {
    id: 2,
    icon: <CalendarClock size={20} className="text-red-500" />,
    title: 'Task Due Soon',
    message: '"Calculus II" assignment is due tomorrow.',
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    icon: <Check size={20} className="text-green-500" />,
    title: 'Prerequisite Unlocked',
    message: 'You can now enroll in "Data Structures".',
    timestamp: '1 day ago',
  },
];

/**
 * A stateful notification bell component with a dropdown.
 */
const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(dummyNotifications);
  const [hasUnread, setHasUnread] = useState(true);

  const dropdownRef = useRef(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown and mark as read
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (hasUnread) {
      setHasUnread(false);
    }
  };

  // Clear all notifications
  const clearAll = (e) => {
    e.stopPropagation();
    setNotifications([]);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon Button */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 bg-white/50 rounded-lg text-zinc-700 hover:bg-white/80 transition-colors"
        aria-label="Notifications"
      >
        <Bell size={20} />
        {/* Red unread dot */}
        {hasUnread && (
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div 
          className="absolute top-12 right-0 w-80 bg-white/80 backdrop-blur-lg rounded-lg shadow-xl z-20 overflow-hidden"
          // Adding a simple fade-in animation
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          {/* Dropdown Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/60">
            <h3 className="font-semibold text-zinc-800">Notifications</h3>
            <button
              onClick={clearAll}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear All
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="flex gap-3 p-4 border-b border-white/60 hover:bg-white/50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">{notif.icon}</div>
                  <div>
                    <h4 className="font-medium text-zinc-800">{notif.title}</h4>
                    <p className="text-sm text-zinc-600">{notif.message}</p>
                    <p className="text-xs text-zinc-400 mt-1">{notif.timestamp}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-zinc-500 p-8">No new notifications</p>
            )}
          </div>
        </div>
      )}

      {/* Simple CSS Keyframe for fade-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NotificationBell;
