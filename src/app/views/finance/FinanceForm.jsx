import React, { Component } from "react";
import FinanceManagerForm from "./FinanceManagerForm";

class FinanceForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <FinanceManagerForm />
        <div className="py-12" />
      </div>
    );
  }
}

export default FinanceForm;
