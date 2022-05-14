import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function EditDialog({open,handleClose,handleEdit,invcur,custpay,handleChangeEdit,handleChangeEdittwo}) {  
  return (
    <div>
    <Dialog 
      open={open} 
      onClose={handleClose}
      onChange={handleEdit}
      PaperProps={{
        style: {
          backgroundColor: '#39495E',
          boxShadow: 'none',
          minHeight: '27vh',
          maxHeight: '27vh',
          minWidth: '70vh',
          maxWidth: '80vh'
        },
      }}>
        <DialogTitle><span style={{color: 'white'}}>{"EDIT"}</span></DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '30ch', 
              backgroundColor: 'white', borderRadius:'10px'
               },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
                <TextField
                id="outlined-required"
                label="Invoice Currency"
                sx={{
                  input: { color: 'black'},
                  // "& .MuiInputLabel-root": {
                  //   color:'grey'
                  // },
                  "& .MuiOutlinedInput-root":{
                    borderColor:'white',
                    borderRadius:'10px'
                  },
                }}
                value={invcur}
                onChange={handleChangeEdit}
              />
              <TextField
                id="outlined-required"
                label="Customer Payment Terms"
                sx={{
                  input: { color: 'black'},
                  "& .MuiInputLabel-root": {
                    color:'grey'
                  },
                  "& .MuiOutlinedInput-root":{
                    borderColor:'white',
                    borderRadius:'10px'
                  },
                }}
                value={custpay}
                onChange={handleChangeEdittwo}
              />
              </div>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleEdit} style={{width:"50%",color:'white',border: "1px solid white"}}>EDIT</Button>
          <Button variant="outlined" onClick={handleClose} style={{width:"50%",color:'white',border: "1px solid white"}}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
