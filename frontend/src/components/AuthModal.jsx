// import React, { useState } from 'react';
// import { X, Mail, Lock, User, GraduationCap } from 'lucide-react';

// const AuthModal = ({ isOpen, onClose, initialMode = 'signin', onLoginSuccess }) => {
//     const [mode, setMode] = useState(initialMode);

//     if (!isOpen) return null;

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         // Here you would typically handle actual authentication
//         // For now, we'll just simulate a successful login
//         onLoginSuccess();
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
//             <div className="relative w-full max-w-md p-8 bg-[#1C1C1C] text-white border border-zinc-800 rounded-2xl shadow-2xl m-4">
//                 <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
//                     <X size={24} />
//                 </button>

//                 <div className="text-center mb-8">
//                     <GraduationCap size={40} className="mx-auto text-blue-500 mb-2" />
//                     <h2 className="text-3xl font-bold">Welcome</h2>
//                     <p className="text-zinc-400">
//                         {mode === 'signin' ? 'Sign in to continue to your dashboard' : 'Create an account to get started'}
//                     </p>
//                 </div>

//                 <div className="flex justify-center mb-6 bg-zinc-800/50 p-1 rounded-lg">
//                     <button
//                         onClick={() => setMode('signin')}
//                         className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${mode === 'signin' ? 'bg-blue-600' : 'hover:bg-zinc-700'}`}
//                     >
//                         Sign In
//                     </button>
//                     <button
//                         onClick={() => setMode('signup')}
//                         className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${mode === 'signup' ? 'bg-blue-600' : 'hover:bg-zinc-700'}`}
//                     >
//                         Sign Up
//                     </button>
//                 </div>

//                 <form onSubmit={handleFormSubmit} className="space-y-4">
//                     {mode === 'signup' && (
//                         <div className="relative">
//                             <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 required
//                                 className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     )}
//                     <div className="relative">
//                         <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             required
//                             className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div className="relative">
//                         <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             required
//                             className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                     >
//                         {mode === 'signin' ? 'Sign In' : 'Create Account'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AuthModal;