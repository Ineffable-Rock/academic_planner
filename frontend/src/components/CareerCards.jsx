import React, { useState, useEffect } from 'react';
import { 
    Code2, BarChart3, ShieldCheck, Cloud, Smartphone, BrainCircuit, 
    Share2, Gamepad2, PenTool, GitMerge 
} from 'lucide-react';

const iconMap = {
  "Web Development": <Code2 size={28} className="text-zinc-500" />,
  "Data Science": <BarChart3 size={28} className="text-zinc-500" />,
  "Cybersecurity": <ShieldCheck size={28} className="text-zinc-500" />,
  "Cloud Computing": <Cloud size={28} className="text-zinc-500" />,
  "App Development": <Smartphone size={28} className="text-zinc-500" />,
  "AI & Machine Learning": <BrainCircuit size={28} className="text-zinc-500" />,
  "Blockchain": <Share2 size={28} className="text-zinc-500" />,
  "Game Development": <Gamepad2 size={28} className="text-zinc-500" />,
  "UI/UX Design": <PenTool size={28} className="text-zinc-500" />,
  "DevOps": <GitMerge size={28} className="text-zinc-500" />,
};

// 1. Accept onCareerSelect as a prop
const CareerCards = ({ onCareerSelect }) => {
  const [careerPaths, setCareerPaths] = useState([]);

  useEffect(() => {
    const fetchCareerPaths = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/career-paths');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCareerPaths(data);
      } catch (error) {
        console.error("Failed to fetch career paths:", error);
      }
    };

    fetchCareerPaths();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-800 mb-2">Choose Your Career Path</h1>
      <p className="text-zinc-500 mb-8">Select a field to see the detailed roadmap from basic to advanced skills.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {careerPaths.map(path => (
          <div 
            key={path.id} 
            // 2. Add the onClick handler to the card
            onClick={() => onCareerSelect(path)}
            className="group aspect-square p-5 rounded-2xl border border-zinc-200 bg-white flex flex-col justify-between hover:shadow-lg hover:border-blue-500 transition-all cursor-pointer"
          >
            {/* Top Section with Icon */}
            <div>
              {iconMap[path.name] || <Code2 size={28} className="text-zinc-500" />}
            </div>

            {/* Bottom Section with Text */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-blue-600 transition-colors">{path.name}</h3>
              <p className="text-sm text-zinc-500 mt-1">View the roadmap</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerCards;