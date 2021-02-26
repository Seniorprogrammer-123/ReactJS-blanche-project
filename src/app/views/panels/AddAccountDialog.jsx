import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AddAccountDialog() {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Your Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="text-center">Add Your Account</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel htmlFor="age-native-required">Account Type</InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange}
              name="age"
              inputProps={{
                id: 'age-native-required',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Exchange</option>
              <option value={20}>Credit</option>
              <option value={30}>Strategy</option>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="api"
            label="API"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Secret Key"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className="bg-green text-white">
            Add Your Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
