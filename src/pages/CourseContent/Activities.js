import React, { useState, useEffect } from "react";
import coursesImg from "../../assets/images/courses/courseimage.jpeg";
import { useParams } from "react-router-dom";
import * as api from "../../apis/index";
import LessonContent from "./LessonContent";
import ActivityDialog from "./ActivityDialog";

function Activities({ course_id }) {
  const { courseId } = useParams();
  const [activities, setActivities] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.activities(courseId);
        console.log("activities", response.data.activities);
        setActivities(response.data.activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchData();
  }, [course_id]);

  const handleOpenDialog = (lesson) => {
    setSelectedActivity(lesson);
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
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-10 flex gap-5 flex-row"
            style={{ flexBasis: "30%" }}
          >
            <div className="max-w-sm rounded overflow-hidden shadow-lg"
            onClick={() => handleOpenDialog(activity)}
            style={{ cursor: "pointer" }}>
              <img className="w-full" src={coursesImg} alt="Mountain" />
              <div className="px-6 py-4">
                <div
                  className="font-bold text-xl mb-2"
                  
                  style={{ cursor: "pointer" }}
                >
                  {activity.title}
                </div>
                <p className="text-gray-700 text-sm">{activity.title.substring(0, 70)}{'...'}</p>
              </div>
              <div className="text-center">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                 onClick={() => handleOpenDialog(activity)} 
                 >
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Read More
                  </span>
                </button>
                </div>
            </div>
           
          </div>
        ))}
      </div>
      <ActivityDialog
        open={openDialog}
        onClose={handleCloseDialog}
        activity={selectedActivity}
      />
    </>
  );
}

export default Activities;
