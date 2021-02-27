import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormLabel from '@material-ui/core/FormLabel';

export default function AddDepositDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" className="abtn" onClick={handleClickOpen}>
        Deposit to Get Started
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="text-center">Add Credits to Your Account</DialogTitle>
        <DialogContent>
          <FormLabel>Deposit 5%</FormLabel>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Min Deposit for Your Account is: 0.005"
            type="email"
            variant="outlined"
            fullWidth
          />
          <div className="py-12" />
          <FormLabel>Send the value to this Wallet</FormLabel>
          <TextField            
            margin="dense"
            id="walletaddr"
            label="Wallet Address"
            type="text"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Add Deposit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
