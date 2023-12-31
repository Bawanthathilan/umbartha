import React from "react";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";

import Img1 from "@/assets/home/ourservices/indi1.png";
import Img2 from "@/assets/home/ourservices/indi2.png";

import Img3 from "@/assets/home/ourservices/indi3.png";
import Img4 from "@/assets/home/ourservices/indi4.png";
import Img5 from "@/assets/home/ourservices/indi5.png";
import Img6 from "@/assets/home/ourservices/indi6.png";

import Icon1 from "@/assets/home/what-we-offer/Icon3.png";
import Icon2 from "@/assets/home/what-we-offer/Icon2.png";
import Icon3 from "@/assets/home/what-we-offer/Icon1.png";
import Icon4 from "@/assets/home/what-we-offer/Icon4.png";

import Card1 from "@/components/home-section/Card1";

const page = () => {
  return (
    <div>
      {/* <HeroSection
        left={true}
        title="Individual Session"
        desc="Find balance & well-being today!"
      /> */}
      <div className=" h-auto pt-36  lg:pt-0 md:pt-36 md:h-auto lg:h-[400px] w-full bg-hero-gradient px-5 z-10 ">
        <div
          className={`container relative z-10 mx-auto max-w-6xl flex w-full h-full flex-col pb-[60px] items-left lg:justify-end md:justify-end justify-end gap-4 lg:items-start`}
        >
          <h4 className=" uppercase text-xl mt-32 font-bold text-[#014840]">
            {/* Counsellor */}
          </h4>
          <h1 className=" text-[40px] lg:text-[52px] font-bold text-black max-w-2xl text-left lg:text-center leading-[1.2] lg:leading-[1.2]">
            Individual Session
          </h1>
          <p className=" text-[20px] text-lef font-medium lg:text-center max-w-6xl">
            Find balance & well-being today!
          </p>
        </div>
      </div>

      <div className="bg-bg-white-varient">
        <div className="container mx-auto max-w-6xl pb-10 px-5 lg:px-0">
          <div className="grid grid-cols-2 gap-10 mt-10 lg:mt-0">
            <div className="left relative w-full h-[200px] lg:h-[610px]">
              <Image src={Img1} alt="img1" fill className=" object-cover" />
            </div>

            <div className="rigth flex flex-col w-full gap-5 -m-0 lg:-mt-52">
              <div className="img relative w-full h-[275px] lg:h-[610px]">
                <Image src={Img2} alt="img1" fill className=" object-cover" />
              </div>

              <p className=" hidden lg:block text-lg font-normal">
                Aliquet nec ullamcorper sit amet risus nullam. Purus in mollis
                nunc sed id semper risus in. Purus sit amet volutpat consequat
                mauris nunc congue nisi. Pharetra et ultrices neque ornare
                aenean euismod. Enim diam vulputate ut pharetra sit amet aliquam
                id diam. Ut eu sem integer vitae justo.
              </p>
            </div>
          </div>

          <p className="block lg:hidden mt-10 lg:mt-0 text-lg font-normal">
            Aliquet nec ullamcorper sit amet risus nullam. Purus in mollis nunc
            sed id semper risus in. Purus sit amet volutpat consequat mauris
            nunc congue nisi. Pharetra et ultrices neque ornare aenean euismod.
            Enim diam vulputate ut pharetra sit amet aliquam id diam. Ut eu sem
            integer vitae justo.
          </p>

          <div className="sec2 mt-11 lg:mt-[190px]">
            <div className="title grid grid-cols-1 lg:grid-cols-2 gap-5">
              <h1 className=" text-4xl lg:text-5xl font-bold leading-[1.2] lg:leading-[1.2]">
                Transform with therapy, galleries showcasing healing images
              </h1>
              <h4 className=" text-[16px] lg:text-[20px] font-normal leading-[1.2] lg:leading-[1.2]">
                Aliquet nec ullamcorper sit amet risus nullam. Purus in mollis
                nunc sed id semper risus in. Purus sit amet volutpat consequat
                mauris nunc congue nisi. Pharetra et ultrices neque ornare
                aenean euismod.{" "}
              </h4>
            </div>

            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5  mt-14">
              <div className="left relative w-full h-[180px] lg:h-[290px]">
                <Image src={Img3} alt="img1" fill className=" object-cover" />
              </div>
              <div className="left relative w-full h-[180px] lg:h-[290px]">
                <Image src={Img4} alt="img1" fill className=" object-cover" />
              </div>
              <div className="left relative w-full h-[180px] lg:h-[290px]">
                <Image src={Img5} alt="img1" fill className=" object-cover" />
              </div>
              <div className="left relative w-full h-[180px] lg:h-[290px]">
                <Image src={Img6} alt="img1" fill className=" object-cover" />
              </div>
            </div>
          </div>

          <div className="sec3 mt-[82px] lg:mt-32">
            <div className="title fexx items-center text-center">
              <h1 className=" text-[28px] lg:text-5xl font-bold">
                More Services
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-11">
              <Card1
                img={Icon1}
                title="Individual Session"
                description="Here we create a safe and secure space for clients to openly talk about struggles they face."
              />
              <Card1
                img={Icon2}
                title="Couples Session"
                description="Here we create a safe and secure space for clients to openly talk about struggles they face."
              />
              <Card1
                img={Icon3}
                title="Single Session Therapy"
                description="Here we create a safe and secure space for clients to openly talk about struggles they face."
              />
              <Card1
                img={Icon4}
                title="Family Session"
                description="Here we create a safe and secure space for clients to openly talk about struggles they face."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
