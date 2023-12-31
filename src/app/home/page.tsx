"use client";
import React from "react";
import "./style.css";

import WhatWeOffer from "@/components/home-section/What-we-offer";
import Events from "@/components/home-section/Events";
import VideoSection from "@/components/home-section/VideoSection";
import Testimonial from "@/components/home-section/Testimonial";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className=" relative bg-bg-image bg-cover bg-bottom h-[745px]">
        <div className="absolute inset-0 flex flex-col w-full h-full items-center justify-center text-white">
          <div className="hero-text max-w-sm lg:max-w-4xl flex flex-col items-start lg:items-center px-3 md:px-0 lg:px-0">
            <h1 className="text-[40px] lg:text-[64px] text-left lg:text-center font-bold leading-[1.2]">
              A Dedicated Team committed to supporting with a listening ear{" "}
            </h1>
            <button className="bg-white mt-8 py-[14px] px-[51px] border-none text-[#082623] text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[150px] slider-container" />
      </div>
      <div className="h-[400px] lg:h-[400px] flex flex-col items-center text-center justify-center gap-[37px] px-6 lg:px-0 slider-containertwo  ">
        <h2 className=" text-3xl lg:text-5xl text-[#082623] font-bold leading-[1.2] lg:leading-[1.2]">
          Access medical specialists <br /> anywhere, anytime
        </h2>
        <p className=" text-base lg:text-2xl text-[#082623] font-normal  ">
          Umbartha connects patients to high quality and affordable
          psychiatrists and other mental health <br /> professionals via secure
          telehealth video consultations anywhere across Australia.
        </p>
      </div>
      <WhatWeOffer />
      <Events />
      <VideoSection />
      <Testimonial />
    </React.Fragment>
  );
};
export default HomePage;
