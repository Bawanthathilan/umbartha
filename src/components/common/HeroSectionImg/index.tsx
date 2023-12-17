import React from "react";
import Image from "next/image";

interface HeroSectionImgProps {
  img?: any;
  title?: string;
}

const HeroSectionImg = ({
  img,

  title,
}: HeroSectionImgProps) => {
  return (
    <div className=" h-[520px] lg:h-[529px] w-full relative px-5 lg:px-0 rounded-b-[50px]">
      <Image
        src={img}
        alt="bg"
        fill
        className=" object-cover -z-10 rounded-b-[50px]"
      />
      <div className="bg-hero-gradient-2 w-full h-full absolute top-0" />

      <div className="container mx-auto max-w-7xl flex w-full h-full flex-col items-left lg:items-left lg:justify-end justify-end gap-4 z-50 pb-10">
        <h1 className=" text-[30px] lg:text-[52px] font-bold text-white max-w-2xl text-left lg:text-left leading-[1.2] lg:leading-[1.2]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSectionImg;
