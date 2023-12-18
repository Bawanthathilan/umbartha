import React from "react";
import Image from "next/image";
import manisha from "@/assets/home/aboutus/people3.png";

import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

const SideProfile = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex gap-5 items-center">
        <Image
          src={manisha}
          alt="manisha"
          width={100}
          height={100}
          className="rounded-[40px]"
        />

        <div className="rigth flex flex-col gap-0 ">
          <h4 className="text-[20px] font-semibold">Manisha Billimoria</h4>
          <p className="text-sm font-medium">Counsellor & Therapist</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 text-[#6D6D6D]">
        <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
          <FaRegClock />
          <p>30min</p>
        </div>
        <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
          <IoCalendarOutline />
          <p>10:00 - 10:30, Wednesday, November 15, 2023</p>
        </div>
        <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
          <FiMapPin />
          <p>Online</p>
        </div>
        <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
          <IoVideocamOutline />
          <p>Web conferencing details provided upon confirmation.</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-black font-bold text-base">Appointment Details</p>

        <div className="flex flex-col gap-[10px] text-[#6D6D6D]">
          <p className=" text-[20px] font-semibold">Gustavo Vaccaro, 29</p>
          <p className=" text-base font-medium">
            Vaccaro@gmail.com | +94 71 122 5659
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
