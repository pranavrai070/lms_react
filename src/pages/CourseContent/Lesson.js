import React, { useState, useEffect } from "react";
import coursesImg from "../../assets/images/courses/courseimage.jpeg";
import { useParams } from "react-router-dom";
import * as api from "../../apis/index";
import LessonContent from "./LessonContent";

function Lesson({ course_id }) {
  const { courseId } = useParams();
  const [lessons, setLesson] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.lessons(courseId);
        console.log("courses", response.data.lessons);
        setLesson(response.data.lessons);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [course_id]);

  const handleOpenDialog = (lesson) => {
    setSelectedLesson(lesson);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
        {lessons.map((lessons) => (
          <div
            key={lessons.id}
            className="p-10 flex gap-5 flex-row"
            style={{ flexBasis: "30%" }}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div
                  className="font-bold text-xl mb-2"
                  onClick={() => handleOpenDialog(lessons)}
                  style={{ cursor: "pointer" }}
                >
                  {lessons.title}
                </div>
                <p className="text-gray-700 text-sm">{lessons.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <LessonContent
        open={openDialog}
        onClose={handleCloseDialog}
        lesson={selectedLesson}
      />
    </>
  );
}

export default Lesson;
