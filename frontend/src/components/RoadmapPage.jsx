import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, CheckCircle } from 'lucide-react';

// New component for individual topics with their own dropdowns
const TopicItem = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-4 my-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 py-2 text-left"
      >
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <span className="font-semibold text-zinc-700">{topic.name}</span>
      </button>
      {isOpen && (
        <ul className="pl-10 mt-1">
          {topic.subtopics.map((subtopic, index) => (
            <li key={index} className="flex items-center gap-3 py-1 text-zinc-600">
              <CheckCircle size={16} className="text-gray-400" />
              <span>{subtopic}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Updated component for each phase
const RoadmapPhase = ({ phase, topics, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-zinc-200 rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-zinc-50 hover:bg-zinc-100 transition-colors"
      >
        <h3 className="text-lg font-semibold text-zinc-800">{phase}</h3>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          {topics.map((topic, index) => (
            <TopicItem key={index} topic={topic} />
          ))}
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
      <button onClick={onBack} className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors mb-6">
        <ArrowLeft size={20} />
        Back to Career Paths
      </button>

      <h1 className="text-4xl font-bold text-zinc-800">{careerPath.name} Roadmap</h1>
      <p className="text-zinc-500 mt-2 mb-8">Your step-by-step guide from beginner to advanced.</p>
      
      {loading ? (
        <p className="text-zinc-500">Loading roadmap...</p>
      ) : (
        roadmap.map((item, index) => (
          <RoadmapPhase
            key={index}
            phase={item.phase}
            topics={item.topics}
            defaultOpen={index === 0}
          />
        ))
      )}
    </div>
  );
};

export default RoadmapPage;