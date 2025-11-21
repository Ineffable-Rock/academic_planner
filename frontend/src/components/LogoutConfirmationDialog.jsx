// import React from 'react';
// import { LogOut } from 'lucide-react';

// const LogoutConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
//             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
//             <div className="relative w-full max-w-md p-8 bg-[#1C1C1C] text-white border border-neutral-700 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
//                 <div className="flex flex-col items-center text-center">
//                     <div className="p-3 bg-red-500/20 rounded-full mb-4">
//                         <LogOut className="text-red-500" size={24} />
//                     </div>
//                     <h3 className="text-lg font-semibold mb-2">Are you sure you want to log out?</h3>
//                     <p className="text-sm text-gray-400 mb-6">You will need to sign in again to access your account.</p>
//                     <div className="flex justify-center gap-4 w-full">
//                         <button
//                             onClick={onClose}
//                             className="w-full px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 transition-colors font-medium"
//                         >
//                             Stay
//                         </button>
//                         <button
//                             onClick={onConfirm}
//                             className="w-full px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 transition-colors font-medium"
//                         >
//                             Continue
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogoutConfirmationDialog;