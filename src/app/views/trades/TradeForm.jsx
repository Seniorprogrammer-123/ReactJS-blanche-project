import React, { Component } from "react";
import PaginationTable from "./PaginationTable";
import { SimpleCard } from "matx";

class TradeForm extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <SimpleCard title="Choose a trader">
          <PaginationTable />
        </SimpleCard>
        <div className="py-12" />
      </div>
    );
  }
}

export default TradeForm;
