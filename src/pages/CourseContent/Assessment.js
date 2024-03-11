import React, { useState, useEffect } from "react";
import coursesImg from "../../assets/images/courses/courseimage.jpeg";
import { useParams } from "react-router-dom";
import * as api from "../../apis/index";
import LessonContent from "./LessonContent";
import AssessmentDialog from "./AssessmentDialog";
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
            <div className="max-w-sm rounded overflow-hidden shadow-lg"
            onClick={() => handleOpenDialog(assessments)}
            style={{ cursor: "pointer" }}>
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div
                  className="font-bold text-xl mb-2"
                >
                  {assessments.title}
                </div>
               <div className="text-center">
               <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                 onClick={() => handleOpenDialog(assessments)} 
                 >
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Open Assessment
                  </span>
                </button>
               </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openDialog && <AssessmentDialog
        open={openDialog}
        onClose={handleCloseDialog}
        assessment={selectedAssessment}
      />}
      
    </>
  );
}

export default Assessment;