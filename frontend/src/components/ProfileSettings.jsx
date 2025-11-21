import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { X } from 'lucide-react';

// Profile Settings Component
const ProfileSettings = ({ onClose }) => {
  const { user } = useUser(); // Get live user data from Clerk
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row w-full max-w-4xl h-full md:h-[600px] bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-[#151515] border-r border-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'bg-zinc-800 text-white'
                  : 'text-gray-400 hover:bg-zinc-800/60 hover:text-white'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'security'
                  ? 'bg-zinc-800 text-white'
                  : 'text-gray-400 hover:bg-zinc-800/60 hover:text-white'
              }`}
            >
              Security
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white capitalize">
              {activeTab}
            </h2>
          </div>

          {/* Profile Panel */}
          {activeTab === 'profile' && (
            <ProfilePanel
              userName={user ? user.fullName : ''}
              userEmail={user ? user.primaryEmailAddress.emailAddress : ''}
            />
          )}

          {/* Security Panel */}
          {activeTab === 'security' && <SecurityPanel />}
        </main>
      </div>
    </div>
  );
};

// Profile Panel Component
const ProfilePanel = ({ userName, userEmail }) => (
  <div className="space-y-8">
    <div>
      <label htmlFor="displayName" className="text-sm text-gray-400">
        Display Name
      </label>
      <input
        id="displayName"
        type="text"
        value={userName}
        readOnly
        className="w-full mt-2 px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none"
      />
    </div>

    <div>
      <label className="text-sm text-gray-400">Email Addresses</label>
      <div className="space-y-2 mt-2">
        <div className="group flex items-center justify-between p-3 rounded-md bg-zinc-800 border border-zinc-700">
          <span className="text-white">{userEmail}</span>
          <span className="px-2 py-0.5 text-xs bg-neutral-700 rounded-md text-gray-300">
            Primary
          </span>
        </div>
      </div>
    </div>
  </div>
);

// Security Panel Component
const SecurityPanel = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">Account Security</h3>
      <p className="text-gray-400 text-sm">
        Manage your password, authentication methods, and security alerts directly
        from your Clerk account dashboard.
      </p>
    </div>
    <div className="p-4 bg-zinc-800 rounded-md border border-zinc-700">
      <p className="text-sm text-gray-400">
        For password or 2FA updates, visit your{' '}
        <a
          href="https://dashboard.clerk.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Clerk Dashboard
        </a>
        .
      </p>
    </div>
  </div>
);

export default ProfileSettings;
