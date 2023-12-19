"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { stepCountIncrease } from "@/app/dashboard/reducer/index";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(3));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="title">
        <h3 className=" text-[28px] font-bold">Verification Code</h3>
        <p className="text-[#666] text-lg font-normal">
          We will send you one-time password to your mobile number
        </p>
      </div>

      <div className="form flex flex-col gap-10">
        <div className="flex flex-row gap-[23px]">
          <input
            type="text"
            className=" rounded-xl text-center border-2 border-[#ECECEC;] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            type="text"
            className=" rounded-xl text-center border-2 border-[#ECECEC;] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            type="text"
            className=" rounded-xl text-center border-2 border-[#ECECEC;] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            type="text"
            className=" rounded-xl text-center border-2 border-[#ECECEC;] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
        </div>

        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button>Back</button>
            <button
              onClick={() => {
                router.push("/dashboard/otp-verification/details");
              }}
              className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
