"use client";
import React, { useEffect } from "react";
import EventCard from "../eventCard";
import Img1 from "@/assets/home/events/4.png";
import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

import ParalaxImg from "@/assets/home/paralax/2.png";
import ParalaxImg2 from "@/assets/home/paralax/3.png";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getEventsRequest } from "@/app/reducer/index";

function Paralaxtwo() {
  const { ref }: any = useParallax({ speed: 40 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={150}
        height={300}
        className="object-contain"
      />
    </div>
  );
}

function ParalaxOne() {
  const { ref }: any = useParallax({ speed: 40 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={150}
        height={300}
        className="object-contain"
      />
    </div>
  );
}

const EventSection = () => {
  const dispatch = useAppDispatch();

  const events = useAppSelector((state) => state.home.eventsList);

  // get events
  useEffect(() => {
    dispatch(getEventsRequest());
  }, []);

  return (
    <div className="bg-bg-white-varient py-[20px] lg:py-[68px]">
      <div className=" absolute right-0 top-[30%] lg:top-[40%] z-[1]">
        <ParalaxOne />
      </div>

      <div className=" absolute left-0 z-0 bottom-10">
        <Paralaxtwo />
      </div>
      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col  gap-10">
          {events &&
            events.length > 0 &&
            events.map((item: any, i: number) => (
              <>
                <EventCard
                  // img={Img1}
                  img={item.gallery[0]?.url}
                  title={item.title}
                  time={
                    item.timings[0]?.from.split(" ")[1] +
                    " " +
                    item.timings[0]?.from.split(" ")[2] +
                    " - " +
                    item.timings[0]?.to.split(" ")[1] +
                    " " +
                    item.timings[0]?.to.split(" ")[2]
                  }
                  date={item.dates[0]?.dateFrom}
                  platform="Online | Zoom"
                />
                <hr className="bg-[E6E6E6]" />
              </>
            ))}
          {/* <EventCard
            img={Img1}
            title="Psychological Society: Individual Factors of Stress in the Workplace"
            time="12:30 pm - 2:30pm"
            date="November 20, 2024"
            platform="Online | Zoom"
          />
          <hr className="bg-[E6E6E6]" /> */}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
