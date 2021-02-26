import React, { Component } from "react";
import DepositCreditForm from "./DepositCreditForm";

class DepositForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <DepositCreditForm />
        <div className="py-12" />
      </div>
    );
  }
}

export default DepositForm;
