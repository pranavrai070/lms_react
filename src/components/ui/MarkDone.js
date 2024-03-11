import React from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';



function MarkDone({open,onClose, setMakrDoneConfirmation }) {
  return (
    <Dialog
                open={open}
                maxWidth="xs"
                fullWidth
                onClose={onClose}
            >
                <DialogTitle
                    sx={{
                        fontWeight: '900',
                        p: '5px',
                        backgroundColor: '#ECF2FF'
                    }}
                >
                    Mark Done
                </DialogTitle>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0'
                    }}
                >
                </Box>

                <DialogContent>
                    <DialogContentText>Want to Mark Done this Activity ?</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            setMakrDoneConfirmation((state) => !state);
                            onClose();
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
  );
}

export default MarkDone;
