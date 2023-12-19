"use client";
import React, { ChangeEvent, use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  stepCountIncrease,
  verifyOtpRequest,
} from "@/app/dashboard/reducer/index";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [otp, setOtp] = useState<string>("");

  const otpResponse = useAppSelector((state) => state.dashboard.otpResponse);
  const otpVerified = useAppSelector((state) => state.dashboard.otpVerified);

  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [input3, setInput3] = useState<string>("");
  const [input4, setInput4] = useState<string>("");

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRef4 = useRef<HTMLInputElement>(null);

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(3));
  }, []);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    setInput: React.Dispatch<React.SetStateAction<string>>,
    nextInputRef: React.RefObject<HTMLInputElement> | null
  ) => {
    const value = e.target.value;
    setInput(value);

    if (value && nextInputRef?.current) {
      nextInputRef.current.focus();
    }
  };

  const getOTP = (): string => {
    return input1 + input2 + input3 + input4;
  };

  // verify otp
  const verifyOtp = () => {
    const otp = getOTP();
    console.log("Submitted OTP:", otp);
    dispatch(
      verifyOtpRequest({
        code: otp,
        referenceId: otpResponse?.referenceId,
      })
    );
  };

  useEffect(() => {
    if (otpVerified) {
      router.push("/dashboard/otp-verification/details");
    }
  }, [otpVerified]);

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
            ref={inputRef1}
            type="text"
            maxLength={1}
            value={input1}
            onChange={(e) => handleInput(e, setInput1, inputRef2)}
            className="rounded-xl text-center border-2 border-[#ECECEC] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            ref={inputRef2}
            type="text"
            maxLength={1}
            value={input2}
            onChange={(e) => handleInput(e, setInput2, inputRef3)}
            className="rounded-xl text-center border-2 border-[#ECECEC] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            ref={inputRef3}
            type="text"
            maxLength={1}
            value={input3}
            onChange={(e) => handleInput(e, setInput3, inputRef4)}
            className="rounded-xl text-center border-2 border-[#ECECEC] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
          <input
            ref={inputRef4}
            type="text"
            maxLength={1}
            value={input4}
            onChange={(e) => handleInput(e, setInput4, null)}
            className="rounded-xl text-center border-2 border-[#ECECEC] w-[50px] lg:w-[77px] h-[50px] lg:h-[80px]"
          />
        </div>

        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button>Back</button>
            <button
              disabled={getOTP().length < 4}
              onClick={() => {
                verifyOtp();
              }}
              className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white disabled:bg-[#ECECEC] disabled:text-[#666]"
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
