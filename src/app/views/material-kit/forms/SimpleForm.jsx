import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Grid,  
  InputLabel
} from "@material-ui/core";
import { SimpleCard } from "matx";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class SimpleForm extends Component {
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
      confirmPassword,
      email
    } = this.state;
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                label="Name"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Username (Min length 4, Max length 9)"
                onChange={this.handleChange}
                type="text"
                name="username"
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
                label="Email"
                onChange={this.handleChange}
                type="email"
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Affiliate"
                onChange={this.handleChange}
                type="text"
                name="affiliate"
                value={affiliate}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Password"
                onChange={this.handleChange}
                name="password"
                type="password"
                value={password}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Reentry Password"
                onChange={this.handleChange}
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "this field is required",
                  "password didn't match"
                ]}
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <span className="pl-8 capitalize">Create Your Account</span>
          </Button>
        </ValidatorForm>
        <div>
        <Grid container spacing={6}>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                sdf
              </SimpleCard>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
              <SimpleCard>
                <InputLabel>Start Earning</InputLabel>
                <Button color="primary" variant="contained" type="submit">START COPY</Button>
              </SimpleCard>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                sdf
              </SimpleCard>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
              <SimpleCard>
                dfgdfg
              </SimpleCard>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                sdf
              </SimpleCard>
          </Grid>
        </Grid>
        </div>
      </div>
    );
  }
}

export default SimpleForm;
