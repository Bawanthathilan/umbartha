import React from "react";
import Image from "next/image";
import manisha from "@/assets/home/aboutus/people2.png";

import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

const Page = () => {
  return (
    <div className="bg-hero-gradient h-auto flex  flex-col justify-start pb-10">
      <div className=" container mx-auto bg-white max-w-6xl rounded-xl h-auto py-10 px-10 mt-40 ">
        <div className="py-10 max-w-4xl mx-auto flex flex-col items-center ">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="119"
              height="119"
              viewBox="0 0 119 119"
              fill="none"
            >
              <rect width="119" height="119" rx="59.5" fill="#F0FAF9" />
              <path
                d="M88.6171 36.291L43.1725 81.8655L29.5391 68.2068"
                stroke="#149F8E"
                stroke-width="6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className=" mt-[40px]">
            <h2 className=" text-4xl font-semibold text-center">
              Appointment Submitted
            </h2>
            <p className="text-[#6D6D6D] text-lg font-medium text-center mt-[20px]">
              The booking confirmation is sent to you <br /> via SMS and email
            </p>

            <hr className="mt-[50px]" />

            <div className="flex gap-5 items-center mt-[20px]">
              <Image
                src={manisha}
                alt="manisha"
                width={91}
                height={91}
                className="rounded-full"
              />

              <div className="rigth flex flex-col gap-0 ">
                <h4 className="text-[20px] font-semibold">
                  Manisha Billimoria
                </h4>
                <p className="text-sm font-medium">Counsellor & Therapist</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-[#6D6D6D] mt-[56px]">
              <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
                <FaRegClock />
                <p>30min | Online</p>
              </div>
              <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
                <IoCalendarOutline />
                <p>10:00 - 10:30, Wednesday, November 15, 2023</p>
              </div>
              <div className="item flex flex-row gap-3 items-center justify-start text-base font-medium ">
                <IoVideocamOutline />
                <p>Web conferencing details provided upon confirmation.</p>
              </div>
            </div>

            <hr className="mt-[48px]" />

            <div className="form flex flex-col gap-5 rounded-xl mt-[30px]">
              <div className="flex justify-between w-full text-[#6D6D6D] text-sm font-medium">
                <p>Appointment Fee</p>
                <p>LKR 2,500.00</p>
              </div>
              <div className="flex justify-between w-full text-[#6D6D6D] text-sm font-medium">
                <p>Tax</p>
                <p>LKR 500.00</p>
              </div>

              <div className="flex bg-[#F5F5F5] px-[15px] py-[24px] justify-between w-full text-black text-base font-semibold">
                <p>Total</p>
                <p>LKR 500.00</p>
              </div>

              <div className="flex bg-[#F5F5F5] px-[15px] py-[24px] justify-between w-full text-[#6D6D6D] text-sm font-medium  rounded-xl ">
                <p>Payment Method</p>
                <p>Bank Deposit</p>
              </div>
            </div>

            <hr className="mt-[15px]" />

            <div className="flex flex-col gap-5 mt-[30px]">
              <p className="text-black font-bold text-base">
                Appointment Details
              </p>

              <div className="flex flex-col gap-[10px] text-[#6D6D6D]">
                <p className=" text-[20px] font-semibold">
                  Gustavo Vaccaro, 29
                </p>
                <p className=" text-base font-medium">
                  Vaccaro@gmail.com | +94 71 122 5659
                </p>
              </div>
            </div>

            <hr className="mt-[35px]" />

            <div className="flex items-center justify-center mt-[28px]">
              <button className=" bg-[#149F8E] px-[45px] rounded-xl py-[17px] text-base font-semibold text-white">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
