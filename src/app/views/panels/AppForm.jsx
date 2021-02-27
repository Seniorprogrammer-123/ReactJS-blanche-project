import React from "react";
// import StepperForm from "./StepperForm";
// import { SimpleCard } from "matx";


import { Grid } from "@material-ui/core";

import UpgradeCard from "./shared/UpgradeCard";
import AddDepositCard from "./shared/AddDepositCard";
import TradeCard from "./shared/TradeCard";



function getButtonLabel(stepIndex) {
  switch (stepIndex) {
    case 0:
      return `Connect Your Account`;
    case 1:
      return `Deposit to get started`;
    case 2:
      return `Select a Trader`;
    default:
      return `Next`;
  }
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return `First of all, you need to connect your exchange account. Amaziex supports Bitmex and Binance for now`;
    case 1:
      return `You need to deposit credit in your account to start copying our traders.`;
    case 2:
      return `Select the trader and start profiting together with him`;
    default:
      return `register an api first to deposit`;
  }
}

const AppForm = () => {
  return (
    <div className="m-sm-30">
      <Grid container spacing={6}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <UpgradeCard content={getStepContent(0)} buttonlabel={getButtonLabel(0)} step={1}/>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <AddDepositCard content={getStepContent(1)} buttonlabel={getButtonLabel(1)} step={2}/>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <TradeCard content={getStepContent(2)} buttonlabel={getButtonLabel(2)} step={3}/>
        </Grid>
      </Grid>  
      <div className="py-12" />
      {/* <SimpleCard title="How to start copying trading">
        <StepperForm />            
      </SimpleCard> */}
      <div className="py-12" />        
    </div>
  );
};

export default AppForm;
