import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { ArrowLeft } from 'lucide-react';

const FullRoadmapGraph = ({ careerPath, onBack }) => {
  const visJsRef = useRef(null);

  useEffect(() => {
    if (!careerPath) return;

    const createGraph = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/career-paths/${careerPath.id}/full-roadmap-graph`);
        if (!response.ok) {
          throw new Error('Failed to fetch full roadmap graph data');
        }
        const data = await response.json();

        // Assign mass and styling for a better physics-based layout
        data.nodes.forEach(node => {
          delete node.level; // Remove 'level' as it's not needed for physics layout
          switch(node.group) {
            case 'career':
              node.mass = 6;
              node.color = { background: '#9333ea', border: '#7e22ce' };
              node.font = { color: 'white', size: 20, face: 'Helvetica', bold: true };
              break;
            case 'phase':
              node.mass = 4;
              node.color = { background: '#2563eb', border: '#1d4ed8' };
              node.font = { color: 'white', size: 16, face: 'Helvetica' };
              break;
            case 'topic':
              node.mass = 3;
              node.color = { background: '#db2777', border: '#be185d' };
              node.font = { color: 'white', size: 14, face: 'Helvetica' };
              break;
            case 'subtopic':
              node.mass = 1;
              node.shape = 'box'; // Change shape back to box to hold text
              node.color = { background: '#f1f5f9', border: '#cbd5e1' };
              node.font = { color: '#334155', size: 12 }; // Make text visible
              node.widthConstraint = { maximum: 150 }; // Allow nodes to wrap text
              break;
          }
        });

        const options = {
          layout: {
            hierarchical: false // Ensure hierarchical layout is disabled
          },
          nodes: {
            shape: 'box',
            margin: 10,
            borderWidth: 1.5,
            shadow: { enabled: true, size: 5, x: 2, y: 2 },
            shapeProperties: {
              borderRadius: 6
            }
          },
          edges: {
            width: 1.5,
            color: { color: '#94a3b8', highlight: '#ef4444' },
            arrows: { to: { enabled: true, scaleFactor: 0.5 } },
            smooth: {
              type: 'continuous'
            }
          },
          physics: {
            enabled: true,
            solver: 'barnesHut',
            barnesHut: {
              gravitationalConstant: -30000,
              centralGravity: 0.1,
              springLength: 120,
              springConstant: 0.05,
              damping: 0.3,
              avoidOverlap: 1 // Set to 1 for maximum overlap avoidance
            },
            stabilization: {
              iterations: 1000,
              fit: true,
            },
          },
          interaction: {
            hover: true,
            tooltipDelay: 200,
            dragNodes: true,
            dragView: true,
            zoomView: true
          },
        };

        if (visJsRef.current) {
          const network = new Network(visJsRef.current, data, options);
          network.on("stabilizationIterationsDone", function () {
            network.setOptions({ physics: { enabled: false } }); // Turn off physics after stabilization
          });
        }
      } catch (error) {
        console.error("Error creating roadmap graph:", error);
      }
    };

    createGraph();
  }, [careerPath]);

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-zinc-500 hover:text-blue-500 transition-colors mb-6">
        <ArrowLeft size={20} />
        Back to Roadmap
      </button>
      <h1 className="text-3xl font-bold text-zinc-800 mb-4">{careerPath.name} - Full Roadmap</h1>
      <div 
        ref={visJsRef} 
        style={{ 
          height: '80vh', 
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0', 
          borderRadius: '12px' 
        }} 
      />
    </div>
  );
};

export default FullRoadmapGraph;