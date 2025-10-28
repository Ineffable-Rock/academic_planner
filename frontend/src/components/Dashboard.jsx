import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();
  const [courses, setCourses] = useState([]);
  const [completedCourses, setCompletedCourses] = useState(new Set());
  const [recommendations, setRecommendations] = useState([]);

  // Fetch all courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/courses');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Fetch completed courses for the user
  useEffect(() => {
    if (user) {
      const fetchCompletedCourses = async () => {
        try {
          // Use user.id which is a string provided by Clerk
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

  // Handle marking a course as complete
  const handleToggleComplete = async (courseId, courseCode) => {
    const isCompleted = completedCourses.has(courseId);
    const newCompletedCourses = new Set(completedCourses);

    if (isCompleted) {
      // NOTE: The backend doesn't have a 'delete' endpoint for completed courses.
      // For now, we'll just update the UI.
      newCompletedCourses.delete(courseId);
    } else {
      newCompletedCourses.add(courseId);
      // API call to mark as complete
      try {
        await fetch(`http://127.0.0.1:5000/api/user/${user.id}/courses`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ course_code: courseCode }),
        });
      } catch (error) {
        console.error("Failed to mark course as complete:", error);
      }
    }
    setCompletedCourses(newCompletedCourses);
  };
  
    // Fetch recommendations when completed courses change
    useEffect(() => {
        if (completedCourses.size > 0 && courses.length > 0) {
            const fetchRecommendations = async () => {
                const completedCourseCodes = courses
                    .filter(course => completedCourses.has(course.id))
                    .map(course => course.course_code);

                try {
                    const response = await fetch('http://127.0.0.1:5000/api/recommend', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ completed_courses: completedCourseCodes }),
                    });
                    const data = await response.json();
                    setRecommendations(data.recommendations);
                } catch (error) {
                    console.error("Failed to fetch recommendations:", error);
                }
            };
            fetchRecommendations();
        }
    }, [completedCourses, courses, user]);


  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-800 mb-4">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className={`p-4 rounded-lg border ${completedCourses.has(course.id) ? 'bg-green-100 border-green-300' : 'bg-gray-100 border-gray-300'}`}>
            <h3 className="font-bold">{course.course_name} ({course.course_code})</h3>
            <p className="text-sm text-gray-600">{course.description || 'No description available.'}</p>
            <button
              onClick={() => handleToggleComplete(course.id, course.course_code)}
              className={`mt-4 px-4 py-2 text-sm rounded ${completedCourses.has(course.id) ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
            >
              {completedCourses.has(course.id) ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
          </div>
        ))}
      </div>
        {recommendations.length > 0 && (
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">Recommended Courses</h2>
                <div className="flex flex-wrap gap-4">
                    {recommendations.map(rec => (
                        <div key={rec} className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg">
                            <p className="font-semibold">{rec}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </div>
  );
};

export default Dashboard;