import React, { useState, useEffect } from 'react';
import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import {
  GraduationCap, ArrowRight, BookOpen, BarChart2, Calendar, ListChecks,
  Zap, Mail, Twitter, Instagram, Facebook, Linkedin, Github
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactPage from './ContactPage';

// Fade animations
const fadeDown = { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } } };
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } } };

const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const handleContactClick = () => setShowContact(true);

  return (
    <div className="bg-[#111111] text-white min-h-screen relative overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        style={{ x: cursorPos.x - 10, y: cursorPos.y - 10 }}
        className="w-5 h-5 rounded-full bg-blue-400 pointer-events-none fixed z-50 mix-blend-difference"
      />

      {/* Scroll Progress Bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 h-1 bg-blue-500 origin-left z-50" />

      {/* Navbar */}
      <motion.div variants={fadeDown} initial="hidden" animate="visible">
        <Navbar />
      </motion.div>

      <main className="space-y-24">
        {/* Hero Section */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <HeroSection />
        </motion.div>


        {/* About & Features */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <AboutSection />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <FeaturesSection />
        </motion.div>
      </main>

      {/* Footer */}
      <motion.div variants={fadeDown} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
        <Footer onContactClick={handleContactClick} />
      </motion.div>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-zinc-900 rounded-xl p-8 w-[90%] max-w-3xl relative">
            <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl">✕</button>
            <ContactPage />
          </div>
        </div>
      )}
    </div>
  );
};

// Navbar
const Navbar = () => (
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
      <div className="flex items-center gap-4">
        <SignInButton mode="modal">
          <button className="px-5 py-2 text-white font-semibold rounded-md hover:bg-zinc-800 transition-colors">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </nav>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
    {/* Main Content */}
    <div>
      <div className="mb-6 flex justify-center">
        <div className="flex items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2">
          <div className="bg-blue-600 rounded-full p-1.5 flex items-center justify-center">
            <GraduationCap size={16} className="text-white" />
          </div>
          <span>Hello, I'm AcaPlanner</span>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="absolute -top-4 -right-4 md:-top-2 md:-right-8 text-sm md:text-base italic text-zinc-400"
          animate={{ y: [0, -3, 0], opacity: [1, 0.9, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Powered-by <span className="text-purple-400 font-semibold">AI</span>
        </motion.div>

        <motion.div
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter"
          animate={{ y: [0, -5, 0], opacity: [1, 0.98, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[#f9b575] block">Academic</span>
          <span className="text-white block">Planner</span>
        </motion.div>
      </div>

      <p className="max-w-xl mx-auto mt-6 text-lg text-zinc-400">
        Navigate your academic journey with a smart co-pilot. Visualize prerequisites, track progress,
        and get personalized course recommendations.
      </p>

      <div className="flex justify-center mt-10">
        <SignUpButton mode="modal">
          <button className="animated-button px-6 py-3 bg-blue-500 rounded-lg font-semibold flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
        </SignUpButton>
      </div>
    </div>

    {/* ✅ Baseline pinned to bottom of viewport */}
    <div className="absolute bottom-0 left-0 right-0">
      <Baseline />
    </div>
  </section>
);



// Baseline
const Baseline = ({ onContactClick }) => (
  <div className="absolute bottom-0 w-full">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between border-t border-zinc-800">
      <span className="text-zinc-500 text-sm hidden md:block">// Plan, Learn, Succeed.</span>
      <div className="flex items-center gap-4 border border-zinc-700 rounded-full p-2">
        <a href="#" aria-label="Twitter" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={20} /></a>
        <a href="#" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors"><Instagram size={20} /></a>
        <a href="#" aria-label="Facebook" className="text-zinc-400 hover:text-white transition-colors"><Facebook size={20} /></a>
      </div>
      {/* <a href="mailto:bahugunaaman09@gmail.com" className="flex items-center gap-2 text-sm bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2 hover:bg-zinc-800 transition-colors">
        <Mail size={16} />
        <span className="hidden md:inline">Contact Me</span>
      </a> */}
      <button onClick={onContactClick} className="flex items-center gap-2 text-sm bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-2 hover:bg-zinc-800 transition-colors">
                <Mail size={16} />
                <span className="hidden md:inline">Contact Us</span>
            </button>
    </div>
  </div>
);



// About Section
const AboutSection = () => (
  <section className="w-full py-24 md:py-32 bg-[#111111]">
    <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
      <div className="md:col-span-2">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          Empowering success in your academic journey. Together, we shape a clear path, delivering on your goals and pioneering innovation in learning.
        </h2>
        <div className="mb-8">
          <p className="text-xl font-semibold text-green-400">Planning for Success</p>
          <p className="text-xl font-semibold text-green-400">Architecting Your Future</p>
        </div>
        <div className="border-t border-zinc-700 pt-8">
          <p className="text-zinc-400 text-lg">
            We specialize in creating bespoke academic roadmaps, consistently pushing the limits of personalized planning with an unwavering dedication to student excellence.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end text-left md:text-right space-y-12">
        <p className="text-zinc-400 max-w-xs">
          Our blend of AI technology, data visualization, and user-centric design distinguishes AcaPlanner in the educational tech space.
        </p>
        <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center">
          <Zap size={24} className="text-white" />
        </div>
        <button className="flex items-center gap-2 text-lg text-white border border-zinc-700 rounded-full px-6 py-3 hover:bg-zinc-800 transition-colors">
          About Us <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

// Features Section
const FeaturesSection = () => (
  <section id="features" className="w-full py-12 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-5xl font-bold tracking-tighter text-center text-violet-400 mb-12 uppercase">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <FeatureCard icon={<BookOpen />} title="Prerequisite Visualizer" description="Effortlessly map your academic journey with a dynamic course dependency graph, empowering you to plan strategically and confidently." colorClass="text-cyan-400" hoverBorderClass="hover:border-cyan-400/50" />
        <FeatureCard icon={<BarChart2 />} title="Real-Time Progress Tracker" description="Track your completed courses and visualize your academic progress instantly, ensuring you stay motivated and informed every step of the way." colorClass="text-violet-400" hoverBorderClass="hover:border-violet-400/50" />
        <FeatureCard icon={<Calendar />} title="Intelligent AI Recommendations" description="Receive tailored course suggestions powered by AI, personalized for your unique profile and future aspirations to maximize results." colorClass="text-pink-400" hoverBorderClass="hover:border-pink-400/50" />
        <FeatureCard icon={<ListChecks />} title="Streamlined Academic Planning" description="Experience seamless academic planning driven by advanced AI, minimizing errors and delays while providing a clear roadmap to graduation." colorClass="text-orange-400" hoverBorderClass="hover:border-orange-400/50" />
      </div>
    </div>
  </section>
);

// Feature Card
const FeatureCard = ({ icon, title, description, colorClass, hoverBorderClass }) => {
  const coloredIcon = React.cloneElement(icon, { className: `w-7 h-7 mb-4 ${colorClass}` });
  return (
    <motion.div whileHover={{ scale: 1.03 }} className={`border border-zinc-800 rounded-xl p-6 flex flex-col justify-start items-start bg-[#1C1C1C] transition-colors duration-300 ${hoverBorderClass} aspect-square`}>
      {coloredIcon}
      <h3 className={`text-lg font-bold mb-2 ${colorClass}`}>{title}</h3>
      <p className="text-zinc-400 text-sm text-left">{description}</p>
    </motion.div>
  );
};

// Footer
const Footer = ({ onAuthClick, onContactClick }) => (
  <footer className="w-full mt-12 md:mt-24">
    <div className="container mx-auto px-6">
      <div className="relative group footer-container border border-[#c6b8ab71] rounded-lg pt-16 pb-32 md:pb-40 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xl font-semibold text-white">
              Where <span className="text-blue-400">clarity</span> &<br />
              <span className="text-blue-400">ambition</span> meet
            </h4>
          </div>
          <div>
            <h5 className="text-lg font-bold text-[#f9b575] mb-4">Explore</h5>
            <ul className="space-y-3 text-base text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-cyan-400 mb-4">Follow</h5>
            <ul className="space-y-3 text-base text-zinc-400">
              <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Github size={18} /> Github</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Twitter size={18} /> Twitter</a></li>
            </ul>
          </div>
          <div>
            {/* <a href="mailto:bahugunaaman09@gmail.com" className="flex items-center justify-between text-white mb-6 hover:text-blue-400">
              <div>
                <h5 className="text-lg font-bold">Contact Me</h5>
                <p className="text-base text-zinc-500">Say Hello!</p>
              </div>
              <ArrowRight size={22} />
            </a> */}
            <button onClick={() => onContactClick('signup')} className="w-full flex items-center justify-between text-white hover:text-blue-400 text-left">
              <div>
                <h5 className="text-lg font-bold">Contact Us</h5>
                <p className="text-base text-zinc-500">Say Hello!</p>
              </div>
              <ArrowRight size={22} />
            </button>
            <button onClick={() => onAuthClick('signup')} className="w-full flex items-center justify-between text-white hover:text-blue-400 text-left">
              <div>
                <h5 className="text-lg font-bold">My Dashboard</h5>
                <p className="text-base text-zinc-500">Explore Projects</p>
              </div>
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
        <div className="absolute bottom-7 left-0 right-0 transform translate-y-1/2 text-center pointer-events-none footer-brand-text">
          <h2 className="text-8xl md:text-9xl font-black text-white/80 select-none">AcaPlanner</h2>
        </div>
      </div>
    </div>
    <div className="bg-[#111111]">
      <div className="container mx-auto px-6 py-6 flex justify-between text-white font-bold text-base">
        <span>©{new Date().getFullYear()} AcaPlanner - Privacy Policy</span>
        <span className="flex items-center"><span className="dot-blink"></span>Dehradun, India</span>
      </div>
    </div>
  </footer>
);

export default LandingPage;
