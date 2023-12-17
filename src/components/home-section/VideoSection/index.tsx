import React from "react";
import Image from "next/image";
import Thubnail from "@/assets/home/videoSection/video.png";

import { useParallax, ParallaxProvider } from "react-scroll-parallax";

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

function Paralaxthree() {
  const { ref }: any = useParallax({ speed: 20 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
}

const VideoSection = () => {
  const { ref }: any = useParallax({ speed: 30 });
  return (
    <div>
      <div ref={ref} className="paralax absolute right-0 z-[1]">
        <Image
          src={ParalaxImg}
          alt="paralax"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="top bg-white pt-[37px] h-full relative">
        <div className="container mx-auto z-10 ">
          <div className="title flex flex-col items-center text-center gap-0 relative z-10">
            <h4 className=" text-black text-[20px] lg:text-[32px] font-medium">
              Umbartha Makes You
            </h4>
            <h1 className="text-black font-bold text-[32px] leading-[1.2] lg:leading-[1.2] lg:text-[48px]">
              Better and Better Every Day,
              <br className=" hidden md:block" />
              in Every Way
            </h1>
          </div>
        </div>
        <div className="relative w-full">
          <div className="video relative max-w-sm lg:max-w-7xl h-[200px] lg:h-[500px] w-auto container mx-auto z-10">
            <Image
              src={Thubnail}
              alt="thumbnail"
              fill
              className="mt-10 rounded-3xl"
            />
          </div>
          <div className="absolute h-[50%] bottom-0 z-0 bg-[#004139] w-full"></div>
        </div>

        <div className="bottom bg-[#004139] h-[550px] lg:h-[600px] w-full inset-0 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto z-10">
            <div className="content z-10 flex flex-col h-auto justify-end md:justify-center lg:justify-end pb-10 lg:pb-[145px] px-10 lg:px-0 w-full max-w-5xl text-white gap-5">
              <h1 className=" text-[32px] lg:text-5xl font-bold leading-[1.2] lg:leading-[1.2]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h1>
              <p className=" text-[16px] lg:text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore e.
              </p>
            </div>

            <div className=" absolute right-0 z-[1]">
              <Paralaxtwo />
            </div>

            <div className="z-0 absolute right-10 hidden lg:block">
              <Paralaxthree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
