import React, { Component } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import {
  Button,
  Grid,
} from "@material-ui/core";
import "date-fns";

class BeaTradeForm extends Component {
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
    
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          // onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div>
                <p>
                  A 50% peformance fee will be changed to users who initiate copies.<br />
                  The peformance fee is changed every 24 hours on top of the profit generated by your account.<br />
                  You get 20% of the net progit.<br />
                  The affiliate who brought the user to you earns 10%.<br />
                  Our system earns 20%.<br />
                </p>
              </div>
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <span className="pl-8 capitalize">Add Your Strategy and Start Earning</span>
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default BeaTradeForm;
