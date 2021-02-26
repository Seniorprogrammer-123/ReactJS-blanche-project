import React, { Component } from "react";
import BeaTradeForm from "./BeaTradeForm";
import { SimpleCard } from "matx";

class BeaTrade extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <SimpleCard title="Start Earning Money Today">
          <BeaTradeForm />
        </SimpleCard>
        <div className="py-12" />
      </div>
    );
  }
}

export default BeaTrade;
