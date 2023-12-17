"use client";
import React from "react";
import Image from "next/image";
import Card1 from "../home-section/Card1";

import Icon1 from "@/assets/home/what-we-offer/Icon3.png";
import Icon2 from "@/assets/home/what-we-offer/Icon2.png";
import Icon3 from "@/assets/home/what-we-offer/Icon1.png";
import Icon4 from "@/assets/home/what-we-offer/Icon4.png";

import BgVector from "@/assets/home/ourservices/image-section.png";

import Img1 from "@/assets/home/ourservices/1.png";
import Img2 from "@/assets/home/ourservices/2.png";
import Img3 from "@/assets/home/ourservices/3.png";
import Img4 from "@/assets/home/ourservices/4.png";
import Img5 from "@/assets/home/ourservices/5.png";

import { useParallax } from "react-scroll-parallax";

import ParalaxImg from "@/assets/home/paralax/2.png";
import ParalaxImg2 from "@/assets/home/paralax/3.png";

function Paralaxtwo() {
  const { ref }: any = useParallax({ speed: 40 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={150}
        height={300}
        className="object-contain"
      />
    </div>
  );
}

const OurServicesSection = () => {
  return (
    <div className="bg-bg-white-varient pt-[20px] lg:pt-[10px] pb-[0px] lg:pb-[0px] ">
      <div className=" absolute left-0 z-0 top-[50%]">
        <Paralaxtwo />
      </div>
      <div className="container mx-auto max-w-7xl py-[60px] px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <Card1
            responsive={true}
            img={Icon1}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon2}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon3}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon1}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon4}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon1}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon1}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
          <Card1
            responsive={true}
            img={Icon1}
            title="Individual Session"
            description="Here we create a safe and secure space for clients to openly talk about struggles they face."
          />
        </div>
      </div>

      <div className="section-two bg-ourservice-gradient pt-[60px] pb-[0px] lg:pt-[60px] lg:pb-[120px] relative">
        <div className="container mx-auto max-w-7xl ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0">
            <div className="left flex flex-col gap-10 px-5 lg:px-0">
              <div className="sec1 text-black">
                <h3 className=" text-5xl lg:text-[64px] font-bold">25+</h3>
                <h4 className=" text-base lg:text-2xl font-bold">
                  Years Of Experience
                </h4>
              </div>

              <div className="sec2 flex flex-col gap-4 items-start">
                <h3 className=" text-[32px] lg:text-5xl font-bold leading-normal lg:leading-[60px]">
                  Lorem Ipsum is simply dummy text of{" "}
                </h3>
                <p className=" text-[12px] lg:text-xl font-normal leading-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard.
                </p>

                <button className="bg-[#26AF9F] py-[14px] px-6 text-white">
                  Make an Appointment
                </button>
              </div>
            </div>

            <div className=" flex lg:absolute right-0 bottom-0">
              <Image
                src={BgVector}
                className="object-contain h-full lg:h-[550px] w-full"
                alt="bgvector"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="container mx-auto max-w-7xl py-[60px]">
          <div className="title w-full flex flex-col justify-center items-center gap-5 px-5 lg:px-0">
            <h4 className=" text-[20px] lg:text-[32px] font-medium">
              Umbartha Makes You
            </h4>
            <h1 className=" font-bold text-[28px] lg:text-5xl max-w-3xl text-center">
              Better and Better Every Day, in Every Way
            </h1>
          </div>
        </div>

        <div className=" grid grid-cols-4 w-full h-auto lg:h-[500px] justify-between">
          <Image src={Img1} alt="img1" className="w-full h-full object-cover" />
          <Image src={Img2} alt="img1" className="w-full h-full object-cover" />
          <Image
            src={Img3}
            alt="img1"
            className="w-full h-full object-cover "
          />
          <Image
            src={Img4}
            alt="img1"
            className="w-full  h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
