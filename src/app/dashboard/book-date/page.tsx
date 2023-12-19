"use client";
import React from "react";
import PatientCard from "@/components/dashboard/common/patientCard";
import Image from "next/image";
import manisha from "@/assets/home/aboutus/people2.png";
import Calender from "@/components/dashboard/common/Calender";
import DateChip from "@/components/dashboard/common/DateChip";

const page = () => {
  return (
    <div className=" flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <div className="title">
          <h4 className="text-[#666] text-sm font-semibold uppercase">
            Choose type
          </h4>
        </div>
        <div className=" flex flex-col md:flex-row gap-5">
          <div className="flex group w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] hover:border-[#26AF9F] rounded-xl bg-white hover:bg-[#F0FFFD] text-black hover:text-green-theme ">
            <div className="flex">
              <div className="cont">
                <h4 className=" text-lg font-semibold">Online Meeting</h4>
                <p className=" text-[10px] font-medium text-[#AAA] group-hover:text-[#26AF9F]">
                  Via Zoom
                </p>
              </div>
            </div>
          </div>
          <div className="flex group w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] hover:border-[#26AF9F] rounded-xl bg-white hover:bg-[#F0FFFD] text-black hover:text-green-theme ">
            <div className="flex">
              <div className="cont">
                <h4 className=" text-lg font-semibold">Physical Meeting</h4>
                <p className=" text-[10px] font-medium text-[#AAA] group-hover:text-[#26AF9F]">
                  Umbartha, No 37/1, Hotel Road, Mount Lavinia, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <div className="calender">
          <div className="title">
            <h4 className="text-[#666] text-sm font-semibold uppercase">
              Select Date and Time
            </h4>
          </div>
          <Calender />
        </div>

        <div className="flex flex-col w-full gap-5">
          <div className="title">
            <h4 className="text-black text-sm font-semibold uppercase">
              Wednesday, November 1
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-[10px]">
            <DateChip date="09:00" />
            <DateChip date="09:00" />
            <DateChip date="09:00" />
            <DateChip date="09:00" />
            <DateChip date="09:00" />
            <DateChip date="09:00" />
          </div>
        </div>

        <div className="left flex w-full flex-col gap-5">
          <div className="title flex flex-col gap-3">
            <h4 className="text-black text-[22px] font-bold uppercase">
              Wednesday, November 1
            </h4>
            <h4 className="text-[#666] text-sm font-semibold uppercase">
              Available Counsellor{" "}
            </h4>
          </div>
          <PatientCard
            img={manisha}
            name="Manisha Billimoria"
            designation="Counsellor & Therapist"
            year={5}
          />
          <PatientCard
            img={manisha}
            name="Manisha Billimoria"
            designation="Counsellor & Therapist"
            year={5}
          />
          <PatientCard
            img={manisha}
            name="Manisha Billimoria"
            designation="Counsellor & Therapist"
            year={5}
          />

          <div className="flex flex-col justify-start items-start">
            <button className="bg-[#272727] px-[40px] py-[17px] text-white rounded-xl text-base font-bold">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
