import React, { Component } from "react";
import StrategyAddForm from "./StrategyAddForm";

class StrategyCreateForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <StrategyAddForm />
        <div className="py-12" />
      </div>
    );
  }
}

export default StrategyCreateForm;
