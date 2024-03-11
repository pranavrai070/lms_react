import React from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from '@mui/material';



function ReadConfirmation({open,onClose, setMakrReadConfirmation }) {
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
                    Read Confirmation
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
                    <DialogContentText>Want to Mark Read</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            setMakrReadConfirmation((state) => !state);
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

export default ReadConfirmation;
