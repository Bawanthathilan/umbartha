"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { stepCountIncrease } from "@/app/dashboard/reducer/index";

const SelectType = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-10">
      <div className="title flex w-full justify-start">
        <h2 className=" font-bold text-xl md:text-[28px] text-black">
          Select Appointment Type
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          className=" group hover:bg-[#F0FFFD] border-2 border-[#E3E3E3] rounded-xl py-10 hover:border-green-theme cursor-pointer"
          onClick={() => {
            dispatch(stepCountIncrease(2));
            router.push("/dashboard/counsellor");
          }}
        >
          <div className="cont flex flex-col gap-10 justify-center items-center h-full ">
            <div className="title flex flex-col items-center justify-center w-full">
              <h4 className=" font-semibold text-[22px] text-[#484848] group-hover:text-green-theme">
                Book by a counsellor
              </h4>
              <p className=" uppercase text-xs font-medium text-[#C5C5C5] group-hover:text-green-theme">
                Online or Physical
              </p>
            </div>

            <Image src="/icon/people.png" alt="icon" width={189} height={49} />
          </div>
        </div>

        <div
          className=" group hover:bg-[#F0FFFD] border-2 border-[#E3E3E3] rounded-xl py-10 hover:border-green-theme cursor-pointer"
          onClick={() => {
            dispatch(stepCountIncrease(2));
            router.push("/dashboard/book-date");
          }}
        >
          <div className="cont flex flex-col gap-10 justify-center items-center h-full ">
            <div className="title flex flex-col items-center justify-center w-full">
              <h4 className=" font-semibold text-[22px] text-[#484848] group-hover:text-green-theme">
                Book by a date
              </h4>
              <p className=" uppercase text-xs font-medium text-[#C5C5C5] group-hover:text-green-theme">
                Online or Physical
              </p>
            </div>

            <Image src="/icon/calander.svg" alt="icon" width={80} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectType;
