import React, { Component } from "react";
import AddAccountDialog from "../AddAccountDialog";
import {
  Card,
  InputLabel
} from "@material-ui/core";

let content = {
  height: '60px'
};

class UpgradeCard extends Component
{
  constructor(props){
    super(props);
    console.log(props.content);
    this.state = {
      contentname : props.content,
      buttonLabel : props.buttonlabel,
      step : props.step
    }
  }
  render(){
    return (
      <Card className="p-sm-24 mb-24">
        <InputLabel className="text-green">Step{this.state.step}</InputLabel>
        <Card elevation={0} className="upgrade-card bg-white p-sm-24">
          <img src="/assets/images/illustrations/designer.svg" alt="upgrade" />
          <div>
          <p className="text-muted m-0 py-24" className={content}>
            {this.state.contentname}
          </p>
          </div>
          <AddAccountDialog className="display:inline-block" label={this.state.buttonLabel} />
        </Card>
      </Card>
    );
  }
};

export default UpgradeCard;
