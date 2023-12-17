"use client";
import React from "react";
import HeroSection from "@/components/common/HeroSection";
import CounsellorCard from "@/components/counsellor/counsellerCard";
import Image from "next/image";

import Img1 from "@/assets/home/counsellor/1.png";
import Img2 from "@/assets/home/counsellor/2.png";
import Img3 from "@/assets/home/counsellor/3.png";
import Img4 from "@/assets/home/counsellor/4.png";

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

function ParalaxOne() {
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

const Page = () => {
  return (
    <div>
      <div className=" h-auto pt-36  lg:pt-0 md:pt-36 md:h-auto lg:h-[400px] w-full bg-hero-gradient px-5 z-10 ">
        <div
          className={`container relative z-10 mx-auto max-w-6xl flex w-full h-full flex-col items-left lg:justify-center md:justify-end justify-end gap-4 lg:items-start`}
        >
          <h4 className=" uppercase text-xl mt-32 font-bold text-[#014840]">
            Counsellor
          </h4>
          <h1 className=" text-[40px] lg:text-[52px] font-bold text-black max-w-2xl text-left lg:text-center leading-[1.2] lg:leading-[1.2]">
            Meet our Counsellor
          </h1>
        </div>
      </div>
      <div className=" absolute right-0 top-[30%] lg:top-[40%] z-[1]">
        <ParalaxOne />
      </div>

      <div className=" absolute left-0 z-0 bottom-10">
        <Paralaxtwo />
      </div>

      <div className=" bg-bg-white-varient pb-14 pt-[44px] lg:pt-0 ">
        <div className="container mx-auto max-w-6xl px-5 lg:px-0 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8 ">
            <div className="item">
              <CounsellorCard
                img={Img1}
                name="Jaxson Donin"
                designation="Counsellor & Therapist"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>

            <div className="item -mt-0 lg:-mt-10">
              <CounsellorCard
                img={Img2}
                name="Jaxson Donin"
                designation="Counsellor & Therapist"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>

            <div className="item">
              <CounsellorCard
                img={Img3}
                name="Jaxson Donin"
                designation="Counsellor & Therapist"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>

            <div className="item -mt-0 lg:-mt-10">
              <CounsellorCard
                img={Img4}
                name="Jaxson Donin"
                designation="Counsellor & Therapist"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
