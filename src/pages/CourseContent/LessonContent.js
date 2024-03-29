import React,{useState} from "react";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ReadConfirmation from "../../components/ui/ReadConfirmation";


function LessonContent({ open, onClose, lesson }) {

  const [openDialog, setOpenDialog] = useState(false);
  const [markReadConfirmation,setMarkReadConfirmation]=useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };



  return (
    <>
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        
      {/* <DialogTitle>{lesson && lesson.title}</DialogTitle> */}
      <h1 style={{ fontSize: "25px", textAlign: "center", fontWeight: "bold" }}>
        {lesson && lesson.title}
      </h1>
      <DialogContent>{lesson && <p>{lesson.content}</p>}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={()=>{setOpenDialog(true)}}>Mark Read</Button>
      </DialogActions>
    </Dialog>

    <ReadConfirmation
      open={openDialog}
      onClose={handleCloseDialog}
      setMakrReadConfirmation={setMarkReadConfirmation}
    />
    </>
  );
}

export default LessonContent;
