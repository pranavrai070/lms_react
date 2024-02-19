import React from "react";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";


function LessonContent({ open, onClose, lesson }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        
      {/* <DialogTitle>{lesson && lesson.title}</DialogTitle> */}
      <h1 style={{ fontSize: "25px", textAlign: "center", fontWeight: "bold" }}>
        {lesson && lesson.title}
      </h1>
      <DialogContent>{lesson && <p>{lesson.content}</p>}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LessonContent;
