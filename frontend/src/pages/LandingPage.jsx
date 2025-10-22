import React from 'react';
import { GraduationCap, ArrowRight, BookOpen, BarChart2, Calendar, ListChecks, Home, Star, User, Linkedin, Github, Mail, Twitter, Instagram, Facebook } from 'lucide-react';

// Main Landing Page Component
const LandingPage = ({ onLogin }) => {
    return (
        <div className="bg-[#111111] min-h-screen text-white animate-fade-in">
            <Navbar onLogin={onLogin} />
            <main>
                <HeroSection onLogin={onLogin} />
                <FeaturesSection />
            </main>
            {/* The final copyright footer at the very end of the page */}
            <CopyrightFooter />
        </div>
    );
};

// Navbar Component
const Navbar = ({ onLogin }) => (
    <header className="fixed top-0 w-full z-50">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between border-b border-zinc-800 bg-[#111111]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <GraduationCap size={28} className="text-white" />
                <span className="text-xl font-bold text-white">AcaPlanner</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
            </div>
            <div>
                <button
                    onClick={onLogin}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors"
                >
                    Login
                </button>
            </div>
        </nav>
    </header>
);

// Hero Section Component
const HeroSection = ({ onLogin }) => (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2">
                <div className="bg-blue-600 rounded-full p-1.5 flex items-center justify-center">
                    <GraduationCap size={16} className="text-white" />
                </div>
                <span>Hello, I'm AcaPlanner</span>
            </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            <span className="text-[#c084fc] animate-float-slow block">AI-Powered</span>
            <span className="text-[#f9b575] animate-float-medium block">Academic</span>
            <span className="text-white animate-float-fast block">Planner</span>
        </h1>
        <p className="max-w-xl mx-auto mt-6 text-lg text-zinc-400">
            Navigate your academic journey with a smart co-pilot. Visualize prerequisites, track progress, and get personalized course recommendations.
        </p>
        <div className="flex justify-center mt-10">
            <button onClick={onLogin} className="animated-button">
                Get Started <ArrowRight className="h-4 w-4" />
            </button>
        </div>
        {/* The social bar is now inside and positioned at the bottom of the hero section */}
        <Baseline />
    </section>
);

// Baseline Component (The social media bar)
const Baseline = () => (
    <div className="absolute bottom-0 w-full">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between border-t border-zinc-800">
            <span className="text-zinc-500 text-sm hidden md:block">
                // Plan, Learn, Succeed.
            </span>
            <div className="flex items-center gap-4 border border-zinc-700 rounded-full p-2">
                <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" aria-label="Facebook" className="text-zinc-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
            <a href="mailto:bahugunaaman09@gmail.com" className="flex items-center gap-2 text-sm bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2 hover:bg-zinc-800 transition-colors">
                <Mail size={16} />
                <span className="hidden md:inline">Contact Me</span>
            </a>
        </div>
    </div>
);


// Features Section
const FeaturesSection = () => (
    <section id="features" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-white mb-12">
                Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <FeatureCard
                    icon={<BookOpen className="w-8 h-8 text-blue-500" />}
                    title="Prerequisite Visualizer"
                    description="Visualize course dependencies as an interactive graph to plan your path effectively."
                />
                <FeatureCard
                    icon={<BarChart2 className="w-8 h-8 text-blue-500" />}
                    title="Progress Tracker"
                    description="Log your completed courses and see your academic progress in real-time."
                />
                <FeatureCard
                    icon={<Calendar className="w-8 h-8 text-blue-500" />}
                    title="AI Recommendations"
                    description="Get smart, personalized course suggestions based on your profile and goals."
                />
                <FeatureCard
                    icon={<ListChecks className="w-8 h-8 text-blue-500" />}
                    title="Efficient Planning"
                    description="Avoid planning errors and delays with a clear, AI-driven academic roadmap."
                />
            </div>
        </div>
    </section>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className="border border-zinc-800 rounded-xl p-8 flex flex-col items-start bg-[#1C1C1C] hover:border-blue-500/50 transition-colors duration-300">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-zinc-400 text-left">{description}</p>
    </div>
);

// Final Footer Component
const CopyrightFooter = () => (
    <footer className="w-full py-6 mt-12 md:mt-24 border-t border-zinc-800">
        <div className="container mx-auto text-center text-zinc-500">
            <p>&copy; {new Date().getFullYear()} AcaPlanner. All Rights Reserved.</p>
        </div>
    </footer>
);

export default LandingPage;