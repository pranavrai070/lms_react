import React, { useState, useEffect } from "react";
import * as api from "../apis/index";
import coursesImg from "../assets/images/courses/courseimage.jpeg";

const Courses = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <>
    
    
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:'center' }}>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
