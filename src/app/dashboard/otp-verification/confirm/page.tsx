"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CiCamera } from "react-icons/ci";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { stepCountIncrease } from "@/app/dashboard/reducer/index";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(4));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="title">
        <h3 className=" text-[28px] font-bold">Confirm & Pay Invoice</h3>
      </div>

      <div className="form flex flex-col gap-5 bg-[#F5F5F5] py-4 px-3 rounded-xl">
        <div className="flex justify-between w-full text-[#6D6D6D] text-base font-semibold">
          <p>Appointment Fee</p>
          <p>LKR 2,500.00</p>
        </div>
        <div className="flex justify-between w-full text-[#6D6D6D] text-base font-semibold">
          <p>Tax</p>
          <p>LKR 500.00</p>
        </div>

        <div className="flex justify-between w-full text-black text-base font-semibold border-t-2 pt-2">
          <p>Total</p>
          <p>LKR 500.00</p>
        </div>
      </div>

      <div className="flex flex-row gap-5 items-center ">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          className="w-full rounded-xl py-3 px-4 border border-[#BBB] text-base"
        />
        <button className=" bg-green-theme rounded-xl py-3 px-[40px] text-white">
          Apply
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="title">
          <h3 className=" text-base text-[#666] font-semibold uppercase">
            Payment Methods
          </h3>
        </div>

        <select
          name=""
          id=""
          className="w-full rounded-xl py-3 px-4 border border-[#BBB] text-[#5E5E5E] text-base"
        >
          <option value="">Bank Deposit</option>
        </select>

        <div className="extraOutline bg-[#F8F8F8]  bg-whtie m-auto rounded-lg w-full">
          <div className="file_upload p-5 relative border-2  border-[#E0E0E0] rounded-lg w-full">
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label className="flex gap-5 items-center text-[#9B9B9B]">
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  multiple
                />
                <CiCamera />
                <div className=" text-base text-[#9B9B9B]">
                  Upload Bank Slip
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end">
          <div className="flex flex-row gap-5 font-semibold text-base">
            <button>Back</button>
            <button className="bg-[#272727] rounded-xl py-[17px] px-[40px] text-white disabled:bg-[#ECECEC] disabled:text-[#666]">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
