import React, { Component } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/styles";
import { SimpleCard } from 'matx';

class InviteForm extends Component {
  state = {};

  render() {
    
    return (
      <div className="m-sm-30">
      <SimpleCard title="Start Earning Money Today">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div>
                <p>
                  With our system, you can earn money just by inviting people.<br />
                  You will earn 10% of everything your invited pay to the trade free.
                </p>
              </div>
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <span className="pl-8 capitalize">Start Making Money By Inviting People</span>
          </Button>
        </ValidatorForm>
      </SimpleCard>
      </div>
    );
  }
}

export default  withStyles({}, { withTheme: true })(InviteForm);