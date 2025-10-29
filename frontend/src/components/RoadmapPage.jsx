import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, CheckCircle } from 'lucide-react';

// This is the dropdown component for each phase
const RoadmapPhase = ({ phase, topics, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
      >
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{phase}</h3>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-[#1C1C1C]">
          <ul>
            {topics.map((topic, index) => (
              <li key={index} className="flex items-center gap-3 py-2 border-b border-zinc-100 dark:border-zinc-700 last:border-b-0">
                <CheckCircle size={20} className="text-green-500" />
                <span className="text-zinc-700 dark:text-zinc-300">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Main component for the roadmap page
const RoadmapPage = ({ careerPath, onBack }) => {
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!careerPath) return;
    setLoading(true);
    const fetchRoadmap = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/career-paths/${careerPath.id}/roadmap`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRoadmap(data);
      } catch (error) {
        console.error("Failed to fetch roadmap:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [careerPath]);

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-6">
        <ArrowLeft size={20} />
        Back to Career Paths
      </button>

      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">{careerPath.name} Roadmap</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mt-2 mb-8">Your step-by-step guide from beginner to advanced.</p>
      
      {loading ? (
        <p className="text-zinc-500 dark:text-zinc-400">Loading roadmap...</p>
      ) : (
        roadmap.map((item, index) => (
          <RoadmapPhase
            key={index}
            phase={item.phase}
            topics={item.topics}
            defaultOpen={index === 0} // Open the first phase by default
          />
        ))
      )}
    </div>
  );
};

export default RoadmapPage;