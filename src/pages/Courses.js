import React, { useState, useEffect } from "react";
import * as api from "../apis/index";
import coursesImg from "../Assets/images/courses/courses.jpeg";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const response = api.courses();
    console.log("courses", response);
    setCourses(response.courses);
  }, []);

  return (
    <>
      {/* <div>courses:</div> */}
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        {courses.map((course) => (
          <div className="p-10 flex  gap-5 flex-row">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
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
