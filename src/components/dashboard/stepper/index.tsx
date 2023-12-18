"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface StepperProps {
  activeStep: any;
  steps: Array<any>;
  handleNext: () => void;
  handleBack: () => void;
}

const StepperSection = ({
  activeStep,
  steps,
  handleNext,
  handleBack,
}: StepperProps) => {
  return (
    <div className=" w-full lg:w-[400px] ">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step
              key={label}
              {...stepProps}
              sx={{
                "& .MuiStepIcon-root": {
                  width: 39, // Change the width to your desired value
                  height: 39, // Change the height to your desired value
                },
                "& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-root ": {
                  fill: "#F1F1F1",
                  color: "#149F8E",
                  // Change the height to your desired value
                },
                "& .MuiStepLabel-root .Mui-disabled .MuiStepIcon-text ": {
                  fill: "#149F8E",
                  // Change the height to your desired value
                },
                "& .MuiStepLabel-root .Mui-disabled": {
                  color: "#149F8E", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#149F8E", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#149F8E", // circle color (ACTIVE)
                },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "white", // circle's number (ACTIVE)
                },
                "& .MuiStepConnector-root .MuiStepConnector-line .MuiStepConnector-lineHorizontal":
                  {
                    borderColor: "#149F8E",
                    borderTopWidth: "2px", // Change this to the desired color
                  },
              }}
            >
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};

export default StepperSection;
