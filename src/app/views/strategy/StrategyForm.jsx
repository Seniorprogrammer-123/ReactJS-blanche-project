import React, { Component } from "react";
import StrategyManagerForm from "./StrategyManagerForm";
import { SimpleCard } from "matx";

class StrategyForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <StrategyManagerForm />
        <div className="py-12" />
      </div>
    );
  }
}

export default StrategyForm;
