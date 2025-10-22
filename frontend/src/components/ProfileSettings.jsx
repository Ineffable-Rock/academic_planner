import React, { useState, useRef } from 'react';
import { X, User, Shield, MoreHorizontal, Mail, CheckCircle, Trash2, Camera } from 'lucide-react';

// ... (GoogleIcon SVG remains the same) ...
const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
);

    
// --- MODIFIED: Avatar Uploader Component ---
const AvatarUploader = ({ name, image, onImageChange, onToast }) => {
    const fileInputRef = useRef(null);

    const getInitials = (name) => {
        const nameParts = name.split(' ');
        if (nameParts.length > 1) return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();
        return nameParts[0] ? nameParts[0][0].toUpperCase() : '';
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                localStorage.setItem('profileImage', base64String);
                onImageChange(base64String); // Update parent state
                onToast("Avatar Updated", "Your profile picture has been changed.");
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        localStorage.removeItem('profileImage');
        onImageChange(null); // Update parent state
        onToast("Avatar Removed", "Your profile picture has been removed.");
    };

    return (
        <div className="relative group w-20 h-20">
            {/* ... (rest of the component is the same) ... */}
            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept=".png, .jpg, .jpeg" className="hidden"/>
            {image ? <img src={image} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-neutral-700" /> : <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-2xl font-bold text-gray-300 border-2 border-neutral-600">{getInitials(name)}</div>}
            <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={() => fileInputRef.current.click()} className="p-2 text-white hover:text-blue-400 relative" data-tooltip="Change Photo"><Camera size={24} /></button>
                {image && <button onClick={handleRemoveImage} className="p-2 text-white hover:text-red-500 relative" data-tooltip="Remove Photo"><Trash2 size={20} /></button>}
            </div>
            <style>{`[data-tooltip]:hover::after { content: attr(data-tooltip); position: absolute; bottom: 110%; left: 50%; transform: translateX(-50%); background-color: #161616; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; white-space: nowrap; }`}</style>
        </div>
    );
};


// --- MODIFIED: Main Component ---
// Now accepts props from App.jsx
const ProfileSettings = ({ onClose, userName, onUserNameChange, profileImage, onProfileImageChange }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [emails, setEmails] = useState([{ email: 'bahugunaaman09@gmail.com', primary: true }]);
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);
    const [toast, setToast] = useState({ show: false, title: '', message: '' });
    const [isAddEmailOpen, setIsAddEmailOpen] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    
    const showToast = (title, message) => {
        setToast({ show: true, title, message });
        setTimeout(() => setToast({ show: false, title: '', message: '' }), 3000);
    };

    const handleSaveChanges = () => {
        console.log("Saving data:", { name: userName, emails });
        showToast("Success!", "Changes saved successfully.");
    };
    
    const handleAddEmail = () => {
        if (newEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            setEmails(prev => ([...prev, { email: newEmail, primary: false }]));
            showToast("Email added", `${newEmail} has been added.`);
            setNewEmail('');
            setIsAddEmailOpen(false);
        } else {
            showToast("Invalid Email", "Please enter a valid email address.");
        }
    };
    
    const handleRemoveEmail = (emailToRemove) => {
        setEmails(prev => prev.filter(emailObj => emailObj.email !== emailToRemove));
        showToast("Email removed", `${emailToRemove} has been removed.`);
    };
    
    const handleChangePassword = () => {
        showToast("Password Updated", "Your password has been changed successfully.");
        setIsChangePasswordOpen(false);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in">
                <div className="flex flex-col md:flex-row w-full max-w-4xl h-full md:h-[600px] bg-[#1C1C1C] text-gray-200 rounded-none md:rounded-lg shadow-2xl overflow-hidden">
                    <aside className="w-full md:w-1/3 md:max-w-xs bg-[#161616] p-6 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col">
                        {/* ... (Sidebar JSX is unchanged) ... */}
                        <div>
                            <h2 className="text-lg font-semibold">Account</h2>
                            <p className="text-sm text-gray-400 mt-1">Manage your account info.</p>
                            <nav className="flex flex-row md:flex-col gap-1 mt-6">
                                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${activeTab === 'profile' ? 'bg-neutral-700/50 text-white' : 'text-gray-400 hover:bg-neutral-800'}`}><User size={18} /><span>Profile</span></button>
                                <button onClick={() => setActiveTab('security')} className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${activeTab === 'security' ? 'bg-neutral-700/50 text-white' : 'text-gray-400 hover:bg-neutral-800'}`}><Shield size={18} /><span>Security</span></button>
                            </nav>
                        </div>
                        <div className="mt-auto hidden md:block"><span className="text-xs px-2 py-1 bg-yellow-600/30 text-yellow-400 rounded">Development mode</span></div>
                    </aside>
                    <main className="flex-1 flex flex-col p-6 md:p-8 overflow-y-auto">
                        <header className="flex justify-between items-center mb-8">
                            <h1 className="text-lg font-semibold capitalize">{activeTab} details</h1>
                            <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-neutral-700 transition-colors"><X size={22} /></button>
                        </header>
                        
                        <div key={activeTab} className="animate-in fade-in duration-300">
                            {activeTab === 'profile' && 
                                <ProfilePanel 
                                    userName={userName}
                                    onUserNameChange={onUserNameChange}
                                    profileImage={profileImage}
                                    onProfileImageChange={onProfileImageChange}
                                    emails={emails}
                                    onSaveChanges={handleSaveChanges} 
                                    onAddEmail={() => setIsAddEmailOpen(true)} 
                                    onRemoveEmail={handleRemoveEmail} 
                                    onToast={showToast} 
                                />
                            }
                            {activeTab === 'security' && <SecurityPanel is2FAEnabled={is2FAEnabled} setIs2FAEnabled={setIs2FAEnabled} onChangePassword={() => setIsChangePasswordOpen(true)} onToast={showToast} />}
                        </div>
                    </main>
                </div>
            </div>
            {/* ... (Dialogs and Toast JSX are unchanged) ... */}
            <CustomDialog isOpen={isAddEmailOpen} onClose={() => setIsAddEmailOpen(false)}>
                <h3 className="text-lg font-semibold">Add a new email</h3>
                <div className="py-4">
                    <label htmlFor="new-email" className="text-sm font-medium text-gray-300">Email Address</label>
                    <input id="new-email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="you@example.com" className="w-full mt-2 bg-neutral-800 border-neutral-700 rounded-md p-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button onClick={() => setIsAddEmailOpen(false)} className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors">Cancel</button>
                    <button onClick={handleAddEmail} className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors">Add Email</button>
                </div>
            </CustomDialog>
            <CustomDialog isOpen={isChangePasswordOpen} onClose={() => setIsChangePasswordOpen(false)}>
                <h3 className="text-lg font-semibold">Change your password</h3>
                <div className="py-4 space-y-4">
                    <div>
                        <label htmlFor="current-password">Current Password</label>
                        <input id="current-password" type="password" placeholder="••••••••" className="w-full mt-2 bg-neutral-800 border-neutral-700 rounded-md p-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div>
                        <label htmlFor="new-password">New Password</label>
                        <input id="new-password" type="password" placeholder="••••••••" className="w-full mt-2 bg-neutral-800 border-neutral-700 rounded-md p-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button onClick={() => setIsChangePasswordOpen(false)} className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors">Cancel</button>
                    <button onClick={handleChangePassword} className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors">Save Changes</button>
                </div>
            </CustomDialog>
            <CustomToast show={toast.show} title={toast.title} message={toast.message} />
        </>
    );
};


// --- MODIFIED: Profile Panel ---
const ProfilePanel = ({ userName, onUserNameChange, profileImage, onProfileImageChange, emails, onSaveChanges, onAddEmail, onRemoveEmail, onToast }) => (
    <div className="space-y-8">
        <div className="flex items-center gap-6">
            <AvatarUploader name={userName} image={profileImage} onImageChange={onProfileImageChange} onToast={onToast} />
            <div>
                <label htmlFor="displayName" className="text-sm font-medium text-gray-300">Display Name</label>
                <input id="displayName" type="text" value={userName} onChange={(e) => onUserNameChange(e.target.value)} className="w-full mt-1 bg-neutral-800 border-neutral-700 rounded-md p-2 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
        </div>
        <div>
            <label className="text-sm text-gray-400">Email addresses</label>
            <div className="space-y-2 mt-2">
                {emails.map((emailObj) => (
                    <div key={emailObj.email} className="group flex items-center justify-between p-2 rounded-md hover:bg-neutral-800">
                        <div className="flex items-center gap-2"><Mail size={16} className="text-gray-500" /><span>{emailObj.email}</span></div>
                        <div className="flex items-center gap-3">
                            {emailObj.primary && <span className="px-2 py-0.5 text-xs bg-neutral-700 text-gray-300 rounded-full font-medium">Primary</span>}
                            {!emailObj.primary && <button onClick={() => onRemoveEmail(emailObj.email)} className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-opacity"><Trash2 size={16} /></button>}
                        </div>
                    </div>
                ))}
            </div>
            <button className="p-0 text-blue-500 text-sm mt-2 hover:underline" onClick={onAddEmail}>+ Add email address</button>
        </div>
        <button onClick={onSaveChanges} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Save Changes</button>
    </div>
);


// --- Other sub-components are mostly unchanged ---
const SecurityPanel = ({ is2FAEnabled, setIs2FAEnabled, onChangePassword, onToast }) => (
    <div className="space-y-6">
        <div className="flex items-center justify-between py-4 border-b border-neutral-800">
            <div><label className="font-medium">Change Password</label><p className="text-sm text-gray-400">Update your password regularly for security.</p></div>
            <button onClick={onChangePassword} className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors text-sm font-medium">Change</button>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-neutral-800">
             <div><label className="font-medium">Two-Factor Authentication</label><p className="text-sm text-gray-400">Add an extra layer of security to your account.</p></div>
            <CustomSwitch checked={is2FAEnabled} onCheckedChange={(checked) => { setIs2FAEnabled(checked); onToast(`2FA has been ${checked ? 'enabled' : 'disabled'}.`); }} />
        </div>
        <div className="py-4">
            <label className="text-sm text-gray-400">Connected accounts</label>
            <div className="flex items-center justify-between mt-2 p-3 bg-neutral-800/50 rounded-md">
                <div className="flex items-center gap-3"><GoogleIcon /><span className="font-medium">Google • bahugunaaman09@gmail.com</span></div>
                <button className="text-gray-400 hover:text-white"><MoreHorizontal size={20} /></button>
            </div>
        </div>
    </div>
);
const CustomDialog = ({ isOpen, onClose, children }) => { if (!isOpen) return null; return (<div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog"><div className="absolute inset-0 bg-black/60" onClick={onClose}></div><div className="relative w-full max-w-md p-6 bg-[#1C1C1C] text-white border border-neutral-700 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">{children}</div></div>); };
const CustomToast = ({ show, title, message }) => { if (!show) return null; return (<div className="fixed bottom-5 right-5 z-50 w-full max-w-xs p-4 bg-neutral-800 text-white border border-neutral-700 rounded-lg shadow-lg animate-in slide-in-from-bottom duration-300"><div className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-0.5" size={20} /><div><h4 className="font-semibold">{title}</h4><p className="text-sm text-gray-300">{message}</p></div></div></div>); };
const CustomSwitch = ({ checked, onCheckedChange }) => ( <button type="button" role="switch" aria-checked={checked} onClick={() => onCheckedChange(!checked)} className={`${checked ? 'bg-blue-600' : 'bg-neutral-700'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-800`}> <span aria-hidden="true" className={`${checked ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}/> </button> );

export default ProfileSettings;