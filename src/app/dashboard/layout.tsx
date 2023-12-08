
"use client"
import React, { ReactNode, useState } from "react";
import StepperSection from "@/components/dashboard/stepper";
import { useAppSelector } from "@/hooks/reduxHooks";



interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const countNo = useAppSelector((state) => state.dashboard.stepCount);
  const steps = ['1', '2', '3', '4', '5'];

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => {
    //   const newStep = prevActiveStep + 1;
    //   return newStep < steps.length ? newStep : prevActiveStep;
    // });
  };

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => {
    //   const newStep = prevActiveStep - 1;
    //   return newStep >= 0 ? newStep : prevActiveStep;
    // });
  };

  return (
    <div className="bg-hero-gradient h-auto flex  flex-col justify-start pb-10">
      <div className=" container mx-auto bg-white max-w-6xl rounded-xl h-auto py-10 px-10 mt-40 ">
        <div className="header flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-10">
          <h3 className=" text-green-theme text-xl  font-bold">Make An Appointment</h3>

          <StepperSection
            steps={steps}
            activeStep={countNo}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </div>

        {children}
      </div>

    </div>
  );
};

export default Layout;
