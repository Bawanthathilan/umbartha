
"use client"
import React, { ReactNode, useState } from "react";
import StepperSection from "@/components/dashboard/stepper";



interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['1', '2', '3', '4', '5'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep + 1;
      return newStep < steps.length ? newStep : prevActiveStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      const newStep = prevActiveStep - 1;
      return newStep >= 0 ? newStep : prevActiveStep;
    });
  };

  return (
    <div className="bg-hero-gradient h-auto flex flex-col justify-start pb-10">
      <div className=" container mx-auto bg-white max-w-6xl rounded-xl h-auto py-10 px-10 mt-40 ">
        <button
          onClick={handleNext}
        >next</button>
        <button
          onClick={handleBack}
        >back</button>
        <div className="header flex justify-between mb-10">
          <h3 className=" text-green-theme text-[20px] font-bold">Make An Appointment</h3>

          <StepperSection
            steps={steps}
            activeStep={activeStep}
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
