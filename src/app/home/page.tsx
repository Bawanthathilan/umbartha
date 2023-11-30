import React from "react";
import "./style.css";

import WhatWeOffer from "@/components/home-section/What-we-offer";
import Events from "@/components/home-section/Events";
import VideoSection from "@/components/home-section/VideoSection";
import Testimonial from "@/components/home-section/Testimonial";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="bg-bg-image bg-cover">
        <div className="relative bg-cover bg-center text-center text-white">
          <div className=" h-screen flex justify-center items-center">
            <div className="hero-text max-w-sm lg:max-w-7xl">
              <h1 className=" text-[40px] lg:text-[64px] text-left lg:text-center font-bold leading-normal">A Dedicated Team <br /> committed to supporting <br /> with a listening ear </h1>
              <button className="bg-white mt-8 py-[14px] px-[51px] border-none text-[#082623] text-base">Learn More</button>
            </div>
          </div>
          <div className="slider-container flex flex-col items-center justify-center gap-[37px] px-6 lg:px-0">
            <h2 className=" text-3xl lg:text-5xl text-[#082623] font-bold leading-normal">Access medical specialists <br /> anywhere, anytime</h2>
            <p className=" text-base lg:text-2xl text-[#082623] font-normal ">Umbartha connects patients to high quality and affordable psychiatrists and other mental health <br /> professionals via secure telehealth video consultations anywhere across Australia.</p>
          </div>


        </div>
      </div>
      <WhatWeOffer />
      <Events />
      <VideoSection />
      <Testimonial />

    </React.Fragment>
  );
};
export default HomePage;
