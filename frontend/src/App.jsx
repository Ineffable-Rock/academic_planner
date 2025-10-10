import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-800 p-8 font-sans text-white">
      
      {/* Centered Content Container */}
      <div className="max-w-3xl text-center">
        
        {/* Main Heading */}
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Tailwind is Working Perfectly
          </span>
        </h1>

        {/* Subheading/Paragraph */}
        <p className="mb-8 text-lg text-slate-300 md:text-xl">
          If you see a full-screen gradient, responsive text, and a button that changes color when you hover over it, your setup is successful.
        </p>

        {/* Call-to-Action Button */}
        <button
          type="button"
          className="transform rounded-full bg-teal-500 px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-teal-600"
        >
          Hover Me!
        </button>
      </div>

      {/* Footer Element */}
      <footer className="absolute bottom-5 text-sm text-slate-500">
        Powered by Vite, React & Tailwind CSS
      </footer>
      
    </main>
  );
}

export default App
