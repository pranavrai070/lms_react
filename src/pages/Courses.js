import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../apis/index";
import coursesImg from "../assets/images/courses/courseimage.jpeg";



const Courses = () => {
  const navigate=useNavigate();
  const [courses, setCourses] = useState([]);
  const [lessonOpen, setLessonOpen] = useState(false); 
  const [assessmentOpen, setAssessmentOpen] = useState(false); 
  const [activityOpen, setActivityOpen] = useState(false); 

  const [selectedCourseId, setSelectedCourseId] = useState(null); //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.courses();
        console.log("courses", response.data.courses);
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const handleLessonsClick = (courseId) => {
    setSelectedCourseId(courseId); 
    // setLessonOpen(true); 
    navigate(`/lessons/${courseId}`)
  };
  const handleAssessmentClick = (courseId) => {
    setSelectedCourseId(courseId); 
    setAssessmentOpen(true);
    navigate(`/assessments/${courseId}`)
  };
  const handleActivityClick = (courseId) => {
    setSelectedCourseId(courseId); 
    setActivityOpen(true); 
    navigate(`/activities/${courseId}`)
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-10 flex gap-5 flex-row"
            style={{ flexBasis: "30%" }}
          >
            {/* Adjusted flexBasis to 30% to allow three cards in a row */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft:"0.5rem"

                  // gap: "1rem",
                }}
              >
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                 onClick={() => handleLessonsClick(course.id)} 
                 >
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Lessons
                  </span>
                </button>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                  onClick={() => handleAssessmentClick(course.id)}
                >
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Assessments
                  </span>
                </button>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                  onClick={() => handleActivityClick(course.id)}
                >
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Activities
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </>
  );
};

export default Courses;


