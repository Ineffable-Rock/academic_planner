// ineffable-rock/academic_planner/academic_planner-78b3aa83899e19731a8c1abb043654f5579c5dc8/frontend/src/components/CourseGraph.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { useUser } from '@clerk/clerk-react';

const CourseGraph = ({ careerPath }) => {
  const visJsRef = useRef(null);
  const { user } = useUser();
  const [completedCourses, setCompletedCourses] = useState(new Set());

  useEffect(() => {
    if (user && user.id) {
      const fetchCompletedCourses = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/api/user/${user.id}/courses`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          setCompletedCourses(new Set(data.completed_course_ids));
        } catch (error) {
          console.error("Failed to fetch completed courses:", error);
        }
      };
      fetchCompletedCourses();
    }
  }, [user]);

  useEffect(() => {
    const createGraph = async () => {
      try {
        let coursesData, prereqsData;

        if (careerPath) {
          const response = await fetch(`http://127.0.0.1:5000/api/career-paths/${careerPath.id}/graph`);
          if (!response.ok) {
            throw new Error('Failed to fetch graph data for career path');
          }
          const data = await response.json();
          coursesData = data.nodes;
          prereqsData = data.edges;
        } else {
          const [coursesRes, prereqsRes] = await Promise.all([
            fetch('http://127.0.0.1:5000/api/courses'),
            fetch('http://127.0.0.1:5000/api/prerequisites')
          ]);

          if (!coursesRes.ok || !prereqsRes.ok) {
            throw new Error('Failed to fetch graph data');
          }

          coursesData = await coursesRes.json();
          prereqsData = await prereqsRes.json();
        }

        const nodes = coursesData.map(course => ({
          id: course.id,
          label: course.course_code,
          title: course.course_name,
          color: completedCourses.has(course.id) ? '#2ECC71' : '#3498DB',
        }));

        const edges = prereqsData.map(prereq => ({
          from: prereq.from,
          to: prereq.to,
        }));

        const data = { nodes, edges };

        const options = {
          layout: {
            hierarchical: {
              enabled: true,
              direction: 'UD',
              sortMethod: 'directed',
              levelSeparation: 100,
              nodeSpacing: 150,
              treeSpacing: 200,
            },
          },
          nodes: {
            shape: 'box',
            margin: 10,
            widthConstraint: { minimum: 100 },
            font: {
              color: '#ffffff',
              size: 14,
              face: 'Nunito',
            },
            borderWidth: 1,
            color: {
              border: '#555',
              background: '#2C3E50',
              highlight: {
                border: '#E74C3C',
                background: '#C0392B',
              },
              hover: {
                border: '#ECF0F1',
                background: '#34495E',
              },
            },
          },
          edges: {
            smooth: {
              type: 'curvedCW',
              roundness: 0.2,
            },
            arrows: {
              to: { enabled: true, scaleFactor: 0.7 },
            },
            color: {
              color: '#7F8C8D',
              highlight: '#E74C3C',
              hover: '#95A5A6',
            },
            width: 2,
          },
          physics: {
            enabled: true,
            hierarchicalRepulsion: { nodeDistance: 150 },
          },
          interaction: {
            hover: true,
            tooltipDelay: 200,
          },
        };

        if (visJsRef.current) {
          new Network(visJsRef.current, data, options);
        }
      } catch (error) {
        console.error("Error creating course graph:", error);
      }
    };

    if (user) createGraph();
  }, [visJsRef, user, completedCourses, careerPath]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-800 mb-4">
        {careerPath ? `${careerPath.name} Course Graph` : 'Full Course Graph'}
      </h1>
      <div
        ref={visJsRef}
        style={{
          height: '600px',
          borderRadius: '8px',
          backgroundColor: '#1C1C1C',
        }}
      />
    </div>
  );
};

export default CourseGraph;