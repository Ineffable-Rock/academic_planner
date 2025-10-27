import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Mail, Linkedin, Twitter, Github, GraduationCap, ArrowRight, Send, CheckCircle
} from 'lucide-react';
import { db } from '../firebase'; // Import the firestore instance
import { collection, addDoc } from "firebase/firestore"; 

// --- Navbar Component ---
const Navbar = ({ onAuthClick, onBack }) => (
    <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 w-full z-50"
    >
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between border-b border-zinc-800 bg-[#111111]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
                <GraduationCap size={28} className="text-white" />
                <span className="text-xl font-bold text-white">AcaPlanner</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-zinc-400">
                <button onClick={onBack} className="hover:text-white transition-colors">Home</button>
                <a href="#" className="hover:text-white transition-colors">Features</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => onAuthClick('signin')}
                    className="px-5 py-2 text-white font-semibold rounded-md hover:bg-zinc-800 transition-colors"
                >
                    Sign In
                </button>
                <button
                    onClick={() => onAuthClick('signup')}
                    className="px-5 py-2 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors"
                >
                    Sign Up
                </button>
            </div>
        </nav>
    </motion.header>
);

// --- Footer Component ---
const Footer = ({ onAuthClick }) => (
  <motion.footer 
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={{ once: true }}
    className="w-full mt-12 md:mt-24"
  >
    <div className="container mx-auto px-6">
      <div className="relative group footer-container border border-[#A67C52] rounded-lg pt-16 pb-32 md:pb-40 overflow-hidden">
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
            <div className="flex items-center justify-between text-white mb-6 opacity-50 cursor-not-allowed">
              <div>
                <h5 className="text-lg font-bold">Contact Me</h5>
                <p className="text-base text-zinc-500">Say Hello!</p>
              </div>
              <ArrowRight size={22} />
            </div>
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
        <span className="flex items-center">
          <span className="dot-blink"></span>
          Dehradun, India
        </span>
      </div>
    </div>
  </motion.footer>
);

// --- Main Contact Page ---
const ContactPage = ({ onBack, onAuthClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        timestamp: new Date(),
        status: 'unresolved' // Default status
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-[#111111] min-h-screen text-white"
    >
      <Navbar onAuthClick={onAuthClick} onBack={onBack} />

      <main>
        <div className="container mx-auto px-6 pt-32 md:pt-40">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mb-16"
          >
            <h1 className="text-6xl font-bold">Let's Connect!</h1>
            <p className="mt-4 text-lg text-zinc-400">
              Whether you're looking to report a bug, suggest a feature, ask a question, or just want to talk tech — feel free to reach out. Together, we can turn ideas into reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {/* Left Side Form */}
            {isSubmitted ? (
              <motion.div
                className="md:col-span-2 space-y-8 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={64} className="text-green-500" />
                <h2 className="text-3xl font-bold">Thank you!</h2>
                <p className="text-zinc-400">Your message has been sent successfully. We'll get back to you soon.</p>
                <button
                  onClick={onBack}
                  className="px-8 py-3 text-lg border-2 border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Go Back
                </button>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="md:col-span-2 space-y-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.18 }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <FormInput number="01" label="What's your name?" name="name" placeholder="Dennis Hendry*" value={formData.name} onChange={handleChange} />
                <FormInput number="02" label="What's your email?" name="email" placeholder="dennis.hendry@gmail.com*" value={formData.email} onChange={handleChange} />
                <FormInput number="03" label="What's the name of your university/school?" name="university" placeholder="Hogwarts School of Witchcraft and Wizardry" value={formData.university} onChange={handleChange} />
                <FormInput number="04" label="What's your inquiry about?" name="inquiry" placeholder="Bug Report, Feature Suggestion, etc." value={formData.inquiry} onChange={handleChange} />
                <FormInput number="05" label="Your message" name="message" placeholder="Hello AcaPlanner team, can you help me with..*" isTextarea={true} value={formData.message} onChange={handleChange} />

                <motion.div variants={fadeUp} custom={6} className="pt-4">
                  <button type="submit" disabled={isSubmitting} className="px-8 py-3 text-lg border-2 border-zinc-700 rounded-full hover:bg-white hover:text-black transition-colors disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Send It'}
                  </button>
                </motion.div>
              </motion.form>
            )}

            {/* Right Side Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={7}
              className="space-y-10"
            >
              <div className="flex justify-start">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 80 }}
                  className="w-24 h-24 bg-violet-500 rounded-full flex items-center justify-center"
                >
                  <GraduationCap size={48} className="text-black" />
                </motion.div>
              </div>

              <div>
                <h3 className="font-bold mb-2">CONTACT DETAILS</h3>
                <a href="mailto:bahugunaaman09@gmail.com" className="text-zinc-400 hover:text-white transition-colors">bahugunaaman09@gmail.com</a>
              </div>

              <div>
                <h3 className="font-bold mb-2">SOCIALS</h3>
                <div className="flex flex-col space-y-2 text-zinc-400">
                  <a href="#" className="hover:text-white transition-colors">Twitter</a>
                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-white transition-colors">Github</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer onAuthClick={onAuthClick} />
    </motion.div>
  );
};

// --- Animated Input Component ---
const FormInput = ({ number, label, name, placeholder, isTextarea = false, value, onChange }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 25 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
    }}
    className="border-b border-zinc-800 pb-6"
  >
    <label className="flex items-center gap-4 text-zinc-400">
      <span className="text-sm">{number}</span>
      <span className="font-semibold">{label}</span>
    </label>
    {isTextarea ? (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-white text-lg mt-2 focus:outline-none resize-none"
        rows="3"
      />
    ) : (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-white text-lg mt-2 focus:outline-none"
      />
    )}
  </motion.div>
);

export default ContactPage;