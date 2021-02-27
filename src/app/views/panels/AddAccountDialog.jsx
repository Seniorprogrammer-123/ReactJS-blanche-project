import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddDepositDialog from "./AddDepositDialog";

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 }
];

export default function AddAccountDialog(props) {
  
  const [open, setOpen] = React.useState(false);

  
  function handleClickOpen() {
    setOpen(true);
  } 

  function handleClose() {
    setOpen(false);
  }


  return (
    <div>
      <Button variant="outlined" size="large" variant="contained" color="primary" onClick={handleClickOpen}>
        {props.label}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="text-center">Add Your Account</DialogTitle>
        <DialogContent>
          <Autocomplete
            id="free-solo-demo"
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Account Type" margin="normal" variant="outlined" />
            )}
          />
          <TextField
            autoFocus
            margin="dense"
            id="api"
            label="API"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Secret Key"
            type="text"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <AddDepositDialog onClick={handleClose} className="display:inline-block" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
