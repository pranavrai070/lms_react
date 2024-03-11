import React ,{useState} from "react";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import MarkDone from "../../components/ui/MarkDone";


function ActivityDialog({ open, onClose, activity }) {

  const [openDialog, setOpenDialog] = useState(false);
  const [markDoneConfirmation,setMarkDoneConfirmation]=useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        
      {/* <DialogTitle>{lesson && lesson.title}</DialogTitle> */}
      <h1 style={{ fontSize: "25px", textAlign: "center", fontWeight: "bold" }}>
        {activity && activity.title}
      </h1>
      <DialogContent>{activity && <p>{activity.description}</p>}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={()=>{setOpenDialog(true)}}>Makr Done</Button>
      </DialogActions>
    </Dialog>
    <MarkDone
      open={openDialog}
      onClose={handleCloseDialog}
      setMakrDoneConfirmation={setMarkDoneConfirmation}
    />
    </>
  );
}

export default ActivityDialog;
