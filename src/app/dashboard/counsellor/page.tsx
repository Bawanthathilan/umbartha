"use client";
import React, { use, useEffect, useState } from "react";
import PatientCard from "@/components/dashboard/common/patientCard";
import Image from "next/image";
import manisha from "@/assets/home/aboutus/people2.png";
import Calender from "@/components/dashboard/common/Calender";
import DateChip from "@/components/dashboard/common/DateChip";
import { useRouter } from "next/navigation";

import {
  stepCountIncrease,
  getCounsellorListRequest,
  setSelectedCounsellorProfileData,
  getMeetingDataByCounsellorIdRequest,
} from "@/app/dashboard/reducer/index";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [selectedCounsellorData, setSelectedCounsellorData] =
    useState<any>(null); // selected counsellor data
  const [searchTerm, setSearchTerm] = useState<any>("");

  const countNo = useAppSelector((state) => state.dashboard.stepCount);
  const counsellorList = useAppSelector(
    (state) => state.dashboard.counsellorList
  );
  const selectedCounsellorId = useAppSelector(
    (state) => state.dashboard.selectedCounsellorId
  );
  const selectedCounsellorProfileData = useAppSelector(
    (state) => state.dashboard.selectedCounsellorProfileData
  );
  const selectedCounsellorMeetingData = useAppSelector(
    (state) => state.dashboard.selectedCounsellorMeetingData
  );

  const ProceedAction = () => {
    dispatch(stepCountIncrease(3));
    router.push("/dashboard/otp-verification");
  };

  // set active step
  useEffect(() => {
    dispatch(stepCountIncrease(2));
  }, []);

  // get the counsellor list
  useEffect(() => {
    dispatch(getCounsellorListRequest());
  }, []);

  // return years of experience
  const getYear = (staredOnDate: string) => {
    const startDate = new Date(staredOnDate);
    const endDate = new Date();

    let years = endDate.getFullYear() - startDate.getFullYear();
    const monthDifference = endDate.getMonth() - startDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && endDate.getDate() < startDate.getDate())
    ) {
      years--;
    }
    return years;
  };

  // set the selected counsellor id
  const setSelectedCounsellor = (data: any) => {
    dispatch(setSelectedCounsellorProfileData(data));
    dispatch(getMeetingDataByCounsellorIdRequest(data?._id)); // get the meeting data by counsellor id
  };

  useEffect(() => {
    if (selectedCounsellorMeetingData.length > 0) {
      setSelectedCounsellorData(selectedCounsellorMeetingData[0]);
    }
  }, [selectedCounsellorMeetingData]);

  // search function
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const filteredCounsellors = counsellorList.filter((counsellor: any) =>
    counsellor.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <h3 className=" text-[28px] font-bold text-left">
          Select Counsellor and Date
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full mt-[30px]">
        <div className="left flex w-full md:w-1/2 flex-col gap-5">
          <div className="flex flex-col">
            <h3 className=" text-base font-semibold text-[#666] uppercase">
              Select the Counsellor
            </h3>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Counsellor"
              className="w-full rounded-[40px] py-3 px-4 border-2 border-[#ECECEC;]"
              onChange={handleSearchChange}
            />
          </div>
          {filteredCounsellors.map((item: any, index: number) => (
            <PatientCard
              key={index}
              img={item.profilePictureURL}
              name={item.displayName}
              designation={item.specialization.join(" & ")}
              year={getYear(item.practiceStartedOn)}
              onClick={() => {
                console.log("item", item);
                setSelectedCounsellor(item);
              }}
              ifSelected={selectedCounsellorId === item._id}
            />
          ))}
        </div>
        {selectedCounsellorData != null &&
          selectedCounsellorProfileData != null && (
            <div className="right w-full flex flex-col gap-10">
              <div className="flex group flex-row  gap-5 items-center justify-between  text-black ">
                <div className="flex gap-5 items-center">
                  <Image
                    src={selectedCounsellorProfileData?.profilePictureURL}
                    alt={selectedCounsellorProfileData?.displayName}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />

                  <div className="rigth flex flex-col gap-0 ">
                    <h4 className="text-[20px] font-semibold">
                      {selectedCounsellorProfileData?.displayName}
                    </h4>
                    <p className="text-sm font-medium">
                      {selectedCounsellorProfileData?.specialization.join(
                        " & "
                      )}
                    </p>
                  </div>
                </div>

                <button
                  onClick={ProceedAction}
                  className="bg-black py-[17px] px-10  text-white text-sm font-medium rounded-xl"
                >
                  Proceed
                </button>
              </div>

              <div className="flex flex-col gap-5">
                <div className="title">
                  <h4 className="text-[#666] text-sm font-semibold uppercase">
                    Choose type
                  </h4>
                </div>
                <div className=" flex flex-col md:flex-row gap-3">
                  {selectedCounsellorData.meetingType === "ON-PREMISE" && (
                    <div className="flex group w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] border-[#26AF9F] rounded-xl bg-white bg-[#F0FFFD] text-black text-green-theme ">
                      <div className="flex">
                        <div className="cont">
                          <h4 className=" text-lg font-semibold">
                            Online Meeting
                          </h4>
                          <p className=" text-[10px] font-medium text-[#AAA] group-hover:text-[#26AF9F]">
                            Via Zoom
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedCounsellorData.meetingType === "ONLINE" && (
                    <div className="flex group w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] border-[#26AF9F] rounded-xl bg-white bg-[#F0FFFD] text-black text-green-theme ">
                      <div className="flex">
                        <div className="cont">
                          <h4 className=" text-lg font-semibold">
                            Physical Meeting
                          </h4>
                          <p className=" text-[10px] font-medium text-[#AAA] group-hover:text-[#26AF9F]">
                            Umbartha, No 37/1, Hotel Road, Mount Lavinia, Sri
                            Lanka
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="div flex flex-col md:flex-row gap-5">
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
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Page;
