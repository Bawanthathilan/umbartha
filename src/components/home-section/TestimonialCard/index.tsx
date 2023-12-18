import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  title: string;
  img: any;
  name: string;
  desc: string;
}

const TestimonialCard = ({ title, img, name, desc }: TestimonialCardProps) => {
  return (
    <div className=" testimonial_card py-[50px] px-5 h-[353px] relative">
      <span className=" absolute top-0  text-[64px] text-[#00000033] font-bold">
        “
      </span>
      <div className="flex flex-col justify-between h-full w-full">
        <h3 className="text-[22px] font-bold text-black">{title}</h3>

        <div className="bottom flex flex-row gap-5 items-center">
          <div className="img">
            <Image
              src={img}
              alt={title}
              width={50}
              height={50}
              className="rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className=" text-lg font-bold">{name}</h4>
            <p className=" text-xs font-medium">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
