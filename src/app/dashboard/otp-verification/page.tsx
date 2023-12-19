"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  stepCountIncrease,
  sendOtpRequest,
} from "@/app/dashboard/reducer/index";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState<any>("");

  const countNo = useAppSelector((state) => state.dashboard.stepCount);
  const otpSentSuccess = useAppSelector(
    (state) => state.dashboard.otpSentSuccess
  );

  const back = () => {
    dispatch(stepCountIncrease(1));
    if (countNo === 1) {
      router.push("/dashboard/counsellor");
    }
    return;
  };

  // navigate to otp verification page
  useEffect(() => {
    if (otpSentSuccess) {
      dispatch(stepCountIncrease(3));
      router.push("/dashboard/otp-verification/verify");
    }
  }, [otpSentSuccess]);

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(3));
  }, []);

  // send otp
  const sendOtp = () => {
    dispatch(sendOtpRequest({ phone: phoneNumber }));
  };

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
          placeholder="+94   Phone number"
          className="w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button onClick={back}>Back</button>
            <button
              disabled={phoneNumber.length < 12}
              className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white disabled:bg-[#ECECEC] disabled:text-[#666]"
              onClick={sendOtp}
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
