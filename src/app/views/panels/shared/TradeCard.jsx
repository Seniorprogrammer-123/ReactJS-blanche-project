import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  InputLabel
} from "@material-ui/core";

const content = {
  height: '60px',
  color: 'red'
};

class TradeCard extends Component
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
          <p className="text-muted m-0 py-24" style={content}>
            {this.state.contentname}
          </p>
          </div>
          <Link to="/trades/listview" variant="outlined" color="primary" className="abtn inline-block" >Select a Trade</Link>
        </Card>
      </Card>
    );
  }
};

export default TradeCard;
