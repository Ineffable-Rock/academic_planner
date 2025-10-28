import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { useUser } from '@clerk/clerk-react';

const CourseGraph = () => {
  // Ref for the DOM element where the graph will be mounted
  const visJsRef = useRef(null);
  const { user } = useUser();
  const [completedCourses, setCompletedCourses] = useState(new Set());

  // Fetch completed courses for the user to highlight them
  useEffect(() => {
    if (user && user.id) {
      const fetchCompletedCourses = async () => {
        try {
          const response = await fetch(`http://127.0.0.1:5000/api/user/${user.id}/courses`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
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
        // Fetch courses (nodes) and prerequisites (edges) from your Flask API
        const [coursesRes, prereqsRes] = await Promise.all([
          fetch('http://127.0.0.1:5000/api/courses'),
          fetch('http://127.0.0.1:5000/api/prerequisites')
        ]);

        if (!coursesRes.ok || !prereqsRes.ok) {
            throw new Error('Failed to fetch graph data');
        }

        const coursesData = await coursesRes.json();
        const prereqsData = await prereqsRes.json();

        // Format data for Vis.js
        const nodes = coursesData.map(course => ({
          id: course.id,
          label: course.course_code,
          title: course.course_name,
          color: completedCourses.has(course.id) ? '#79f592' : '#97C2FC', // Highlight completed courses
        }));

        const edges = prereqsData.map(prereq => ({
          from: prereq.from,
          to: prereq.to,
          arrows: 'to',
        }));

        const data = { nodes, edges };

        // Vis.js network options
        const options = {
          layout: {
            hierarchical: {
              direction: 'UD', // Up-Down direction
              sortMethod: 'directed',
            },
          },
          edges: {
            color: '#FFFFFF'
          },
          nodes: {
              shape: 'box',
              color: {
                  border: '#222222',
                  background: '#666666'
              },
              font: { color: '#FFFFFF'}
          },
          physics: {
              enabled: false // Disable physics for a static hierarchical layout
          }
        };

        // Initialize the network
        if (visJsRef.current) {
          new Network(visJsRef.current, data, options);
        }

      } catch (error) {
        console.error("Error creating course graph:", error);
      }
    };

    if (user) {
        createGraph();
    }
  }, [visJsRef, user, completedCourses]); // Rerun when completedCourses are fetched

  return (
    <div>
        <h1 className="text-2xl font-bold text-zinc-800 mb-4">Course Prerequisite Graph</h1>
        <div ref={visJsRef} style={{ height: '600px', border: '1px solid #d1d5db', borderRadius: '8px', backgroundColor: '#2D2D2D' }} />
    </div>
  );
};

export default CourseGraph;