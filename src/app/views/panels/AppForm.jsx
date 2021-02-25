import React from "react";
import StepperForm from "./StepperForm";
import { SimpleCard } from "matx";

const AppForm = () => {
  return (
    <div className="m-sm-30">
      <div className="py-12" />
      <SimpleCard title="How to start copying trading">
        <StepperForm />
      </SimpleCard>
    </div>
  );
};

export default AppForm;
