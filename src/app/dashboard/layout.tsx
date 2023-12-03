import React, { ReactNode } from "react";
import StepperSection from "@/components/dashboard/stepper";



interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Assume this function checks the user's login status
  return (
    <div className="bg-hero-gradient h-screen flex flex-col justify-start">
      <div className=" container mx-auto bg-white max-w-6xl rounded-xl h-auto py-10 px-10 mt-40 ">
        <div className="header flex justify-between mb-10">
          <h3 className=" text-green-theme text-[20px] font-bold">Make An Appointment</h3>

          <StepperSection />
        </div>

        {children}
      </div>

    </div>
  );
};

export default Layout;
