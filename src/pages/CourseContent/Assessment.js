import React, { useState, useEffect } from "react";
import coursesImg from "../../assets/images/courses/courseimage.jpeg";
import { useParams } from "react-router-dom";
import * as api from "../../apis/index";
import LessonContent from "./LessonContent";
// import { Assessment } from "@mui/icons-material";

function Assessment({ course_id }) {
  const { courseId } = useParams();
  const [assessments, setAssessment] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.assessments(courseId);
        console.log("courses", response.data.assessments);
        setAssessment(response.data.assessments);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, [course_id]);

  const handleOpenDialog = (assessment) => {
    setSelectedAssessment(assessment);
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
        {assessments.map((assessments) => (
          <div
            key={assessments.id}
            className="p-10 flex gap-5 flex-row"
            style={{ flexBasis: "30%" }}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div
                  className="font-bold text-xl mb-2"
                  onClick={() => handleOpenDialog(assessments)}
                  style={{ cursor: "pointer" }}
                >
                  {assessments.title}
                </div>
                {/* <p className="text-gray-700 text-sm">{assessments.content}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <LessonContent
        open={openDialog}
        onClose={handleCloseDialog}
        lesson={selectedAssessment}
      />
    </>
  );
}

export default Assessment;