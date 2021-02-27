import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Grid
} from "@material-ui/core";
import "date-fns";
import { SimpleCard } from "matx";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 }
];

class StrategyAddForm extends Component {
  state = {
    username: "",
    firstName: "",
    email: "",
    date: new Date(),
    creditCard: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: ""
  };

 

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule("isPasswordMatch");
  }

  handleSubmit = event => {
    console.log("submitted");
    console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);

    this.setState({ date });
  };

  render() {
    let {
      username,
      name,
      affiliate,
      password,
      email
    } = this.state;
    return (
      <div>
        <SimpleCard title="Add Your Strategy">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Strategy Name"
                onChange={this.handleChange}
                type="text"
                name="name"
                variant="outlined"
                value={name}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <Autocomplete
                id="free-solo-demo"
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField {...params} label="Exchage" margin="normal" variant="outlined" />
                )}
              />
              <br />
              <TextValidator
                className="mb-16 w-100"
                label="API"
                onChange={this.handleChange}
                type="text"
                name="username"
                variant="outlined"
                value={username}
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />              
              <TextValidator
                className="mb-16 w-100"
                label="Secret Key"
                onChange={this.handleChange}
                type="email"
                name="email"
                variant="outlined"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
              <Autocomplete
                id="free-solo-demo"
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField {...params} label="Trading Type" margin="normal" variant="outlined" />
                )}
              />
              <Autocomplete
                id="free-solo-demo"
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField {...params} label="Margin" margin="normal" variant="outlined" />
                )}
              />
              <br />
              <TextValidator
                className="mb-16 w-100"
                label="Minium Balance"
                onChange={this.handleChange}
                type="text"
                name="affiliate"
                variant="outlined"
                value={affiliate}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Wallet to Profits"
                onChange={this.handleChange}
                name="password"
                type="password"
                variant="outlined"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                id="outlined-multiline-static"
                label="Strategy Description"
                multiline
                rows={35}
                variant="outlined"
                fullwidth="true"
              /><br />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit" style={{width:"100%"}}>
          <span className="pl-8 capitalize">Add Your Strategy</span>
        </Button>
        </ValidatorForm>
        </SimpleCard>
      </div>
    );
  }
}

export default StrategyAddForm;
