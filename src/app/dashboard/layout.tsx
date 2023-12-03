import React, { ReactNode } from "react";
import type { Metadata } from "next";
import NavBar from "@/components/common/navbar";
import Footer from "@/components/common/footer";



interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Assume this function checks the user's login status
  return (
    <div className="bg-hero-gradient h-screen flex flex-col justify-start">
      <div className=" container mx-auto bg-white max-w-6xl rounded-xl h-auto py-10 px-10 mt-40">
        <div className="header flex justify-between">
          <h3 className=" text-green-theme text-[20px] font-bold">Make An Appointment</h3>

          <div className="step-count">
            stepcount
          </div>
        </div>

        {children}
      </div>

    </div>
  );
};

export default Layout;
