import React from "react";
import Stepper from "@material-ui/core/Stepper";
import { Link } from 'react-router-dom'
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


function getSteps() {
  return [
    "Connect Your Exchange Account",
    "Add Credit to your Account",
    "Find a strategy and Start Copying it"
  ];
}

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

const subscriber = [
  {
    tname: "Bono Costa",
    sname: "SuperBot 2.0",
    exchange: "Bitmex",
    totalprofit: "+688",
    dayprofit: "+10",
    hourprofit: "-0.55",
    risklevel: "10",
    peformancefee: "50",
    totalusers: "bluegraph",
    peformance: "500"
  }
];


export default function StepperForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button
              className="mt-16"
              variant="contained"
              color="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div className="pt-16">
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                className="ml-16"
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Select a Trader" : getButtonLabel(activeStep)}
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="py-12" />
      <Link className="bg-green text-white btn"
        to={{ pathname: '/panels/dashboard', state: { 
          tname         : subscriber.tname,
          sname         : subscriber.sname,
          exchange      : subscriber.exchange,
          totalprofit   : subscriber.totalprofit,
          dayprofit     : subscriber.dayprofit,
          hourprofit    : subscriber.hourprofit,
          risklevel     : subscriber.risklevel,
          peformancefee : subscriber.peformancefee,
          totalusers    : subscriber.totalusers,
          peformance    : subscriber.peformance
        } }}>
        Go Strategy Page</Link>
        <div className="py-12" />
    </div>
  );
}
