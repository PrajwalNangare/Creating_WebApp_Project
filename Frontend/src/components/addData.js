import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function AddDialog({isAdd,handleAddClose}) {
    const [usePosting, setPosting] = React.useState(null);
    const [useClear, setClear] = React.useState(null);
    const [useDoc, setDoc] = React.useState(null);
    const [useDue, setDue] = React.useState(null);
    const [useBase, setBase] = React.useState(null);

  return (
    <div>
      <Dialog
        open={isAdd}
        onClose={handleAddClose}
        PaperProps={{
          style: {
            backgroundColor: "#39495E",
            boxShadow: 'none',
            minHeight: '50vh',
            maxHeight: '65vh',
            minWidth: '80vh',
            maxWidth: '132vh'
          }
        }}
      >
        <DialogTitle>
          <span style={{ color: "white" }}>{"ADD"}</span>
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 2,
                width: "25ch",
                borderRadius: "10px",
                backgroundColor: "white"
              }
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-required"
                label="Business Code"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Customer Number"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Clear Date"
                  value={useClear}
                  onChange={(newValue) => {
                    setClear(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                id="outlined-required"
                label="Business Year"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Documnet ID"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Posting Date"
                  value={usePosting}
                  onChange={(newValue) => {
                    setPosting(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Document Create Date"
                  value={useDoc}
                  onChange={(newValue) => {
                    setDoc(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Due In Date"
                  value={useDue}
                  onChange={(newValue) => {
                    setDue(newValue);
                  }}
                  renderInput={(params) => <TextField  {...params} />}
                />
              </LocalizationProvider>
              <TextField
                id="outlined-required"
                label="Invoice Currency"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Document Type"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Posting ID"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Total Open Amount"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Baseline Create Date"
                  value={useBase}
                  onChange={(newValue) => {
                    setBase(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                id="outlined-required"
                label="Customer Payment Terms"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
              <TextField
                id="outlined-required"
                label="Invoice ID"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "white",
                    borderRadius: "10px"
                  }
                }}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            style={{ width: "48%", color: "white",right:'2%', border: "1px solid white" }}
            onClick={handleAddClose}
          >
            ADD
          </Button>
          <Button
            variant="outlined"
            style={{ width: "48%", color: "white", right:'2%', border: "1px solid white" }}
            onClick={handleAddClose}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
