import React from "react";
import Image from "next/image";

import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

interface EventcardProps {
  img: any;
  tag: string;
  title: string;
  date: string;
  time: string;
  link: string;
}

const EventCard = ({ img, tag, title, date, time, link }: EventcardProps) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-full lg:max-w-full rounded-xl shadow hover:shadow-lg ">
      <div className="header relative w-full h-[250px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />

        <div className="tag rounded-tr-xl absolute bottom-0 left-0 bg-[#26AF9F] px-4 py-[5px] text-white">
          <p className="text-[11px] font-medium">{tag}</p>
        </div>
      </div>

      <div className=" flex flex-col gap-5 px-4 pt-4 md:px-10 lg:px-4">
        <h3 className=" text-lg font-semibold text-black leading-[1.5]">
          {title}
        </h3>

        <div className="date flex flex-col gap-3 text-[#4B4B4B] text-[14px] ">
          <div className="item flex flex-row gap-3 items-center justify-start">
            <IoCalendarOutline />
            <p>{date}</p>
          </div>
          <div className="item flex flex-row gap-3 items-center justify-start">
            <FaRegClock />
            <p>{time}</p>
          </div>
        </div>

        <div className="btn flex justify-center py-[19px] border-t-[1.5px]">
          <p className="text-[11px] text-[#4B4B4B] tracking-[1.045px]">
            LEARN MORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
