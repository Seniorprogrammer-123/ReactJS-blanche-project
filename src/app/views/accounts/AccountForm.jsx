import React, { Component } from "react";
import SimpleForm from "./SimpleForm";
import { SimpleCard } from "matx";

class AccountForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <SimpleCard title="Create Account">
          <SimpleForm />
        </SimpleCard>
        <div className="py-12" />
      </div>
    );
  }
}

export default AccountForm;
