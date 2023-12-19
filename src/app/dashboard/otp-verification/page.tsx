"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { stepCountIncrease } from "@/app/dashboard/reducer/index";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const countNo = useAppSelector((state) => state.dashboard.stepCount);

  const getOtp = () => {
    dispatch(stepCountIncrease(3));
    router.push("/dashboard/otp-verification/verify");
  };

  const back = () => {
    dispatch(stepCountIncrease(1));
    if (countNo === 1) {
      router.push("/dashboard/counsellor");
    }
    return;
  };

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(3));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="title">
        <h3 className=" text-[28px] font-bold">OTP Verification</h3>
        <p className="text-[#666] text-lg font-normal">
          We will send you verification code to your mobile number
        </p>
      </div>

      <div className="form flex flex-col gap-10">
        <input
          type="text"
          placeholder="+94     Phone number"
          className="w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
        />

        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button onClick={back}>Back</button>
            <button
              className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white"
              onClick={getOtp}
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
