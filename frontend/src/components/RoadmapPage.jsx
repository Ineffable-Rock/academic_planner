import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, CheckCircle, Wrench, Lightbulb, Share2 as GraphIcon } from 'lucide-react';

// ... (TopicItem and RoadmapPhase components remain unchanged) ...
const TopicItem = ({ topic }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ml-4 my-2">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center gap-3 py-2 text-left">
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

const RoadmapPhase = ({ phase, topics, tools, projects, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-zinc-200 rounded-lg mb-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center p-4 bg-zinc-50 hover:bg-zinc-100 transition-colors">
        <h3 className="text-lg font-semibold text-zinc-800">{phase}</h3>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white divide-y divide-zinc-100">
          <div>
            {topics.map((topic, index) => ( <TopicItem key={index} topic={topic} /> ))}
          </div>
          {tools && tools.length > 0 && (
            <div className="pt-4 mt-4">
              <h4 className="flex items-center gap-2 font-semibold text-zinc-700 mb-2">
                <Wrench size={18} className="text-blue-500" /> Tools
              </h4>
              <ul className="pl-10 list-disc space-y-1 text-zinc-600">
                {tools.map((tool, index) => <li key={index}>{tool}</li>)}
              </ul>
            </div>
          )}
          {projects && projects.length > 0 && (
            <div className="pt-4 mt-4">
              <h4 className="flex items-center gap-2 font-semibold text-zinc-700 mb-2">
                <Lightbulb size={18} className="text-yellow-500" /> Recommended Projects
              </h4>
              <ul className="pl-10 list-disc space-y-1 text-zinc-600">
                {projects.map((project, index) => <li key={index}>{project}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


// Main component for the roadmap page
const RoadmapPage = ({ careerPath, onBack, onViewGraph }) => { // 1. Accept onViewGraph prop
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!careerPath) return;
    setLoading(true);
    const fetchRoadmap = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/career-paths/${careerPath.id}/roadmap`);
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

      {/* 2. Add button to the header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800">{careerPath.name} Roadmap</h1>
          <p className="text-zinc-500 mt-2">Your step-by-step guide from beginner to advanced.</p>
        </div>
        <button 
          onClick={onViewGraph}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <GraphIcon size={18} />
          View on Graph
        </button>
      </div>
      
      {loading ? (
        <p className="text-zinc-500">Loading roadmap...</p>
      ) : (
        roadmap.map((item, index) => (
          <RoadmapPhase
            key={index}
            phase={item.phase}
            topics={item.topics}
            tools={item.tools}
            projects={item.projects}
            defaultOpen={index === 0}
          />
        ))
      )}
    </div>
  );
};

export default RoadmapPage;