"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  stepCountIncrease,
  clientCreateRequest,
} from "@/app/dashboard/reducer/index";

const Page = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [phoneValidation, setPhoneValidation] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  const counsellor = useAppSelector(
    (state) => state.dashboard.selectedCounsellorProfileData
  );

  const clientCreateSuccess = useAppSelector(
    (state) => state.dashboard.clientCreateSuccess
  );

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(3));
  }, []);

  useEffect(() => {
    if (clientCreateSuccess) {
      dispatch(stepCountIncrease(4));
      router.push("/dashboard/otp-verification/confirm");
    }
  }, [clientCreateSuccess]);

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailValidation(true);
      return;
    }
    setEmailValidation(false);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneValidation(true);
      return;
    }
    setPhoneValidation(false);
  };

  // create client
  const onSubmit = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailValidation(true);
      return;
    }

    dispatch(
      clientCreateRequest({
        name,
        age,
        phone,
        // counsellor: counsellor?._id,
        counsellor: "64f828ff0caa679436efeb8d",
        email,
        comment,
      })
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="title">
        <h3 className=" text-[28px] font-bold">Appointment Details</h3>

        <h3 className=" text-[#666] text-base font-semibold mt-10 lg:mt-[52px]">
          ENTER DETAILS
        </h3>
      </div>

      <div className="form flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Enter yor name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className=" w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
          />
          <input
            type="text"
            placeholder="Enter yor age"
            onChange={(e) => {
              // check if number
              if (isNaN(Number(e.target.value))) {
                return;
              }
              setAge(e.target.value);
            }}
            value={age}
            className=" w-full md:w-1/2 rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
          />
        </div>
        <input
          type="text"
          placeholder="Enter yor email"
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          value={email}
          className="w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
        />
        {emailValidation && (
          <p className="text-[#b00707]  ml-3 text-sm font-semibold">
            Invalid email
          </p>
        )}
        <input
          type="text"
          placeholder="+94   Phone number"
          onChange={(e) => {
            validatePhoneNumber(e.target.value);
            setPhone(e.target.value);
          }}
          value={phone}
          className="w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
        />
        {phoneValidation && (
          <p className="text-[#b00707]  ml-3 text-sm font-semibold">
            Invalid phone number
          </p>
        )}
        <textarea
          placeholder="Your comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]"
        />

        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button>Back</button>
            <button
              disabled={
                name.length < 1 ||
                age.length < 1 ||
                email.length < 1 ||
                phone.length < 1 ||
                phoneValidation ||
                emailValidation
              }
              onClick={onSubmit}
              className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white disabled:bg-[#ECECEC] disabled:text-[#666]"
            >
              Confirm Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
