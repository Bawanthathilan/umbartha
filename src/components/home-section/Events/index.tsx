"use client";
import React, { useEffect } from "react";
import EventCard from "../EventCard";

import Img1 from "@/assets/home/events/1.png";
import Img2 from "@/assets/home/events/2.png";
import Img3 from "@/assets/home/events/3.png";
import Img4 from "@/assets/home/events/4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getEventsRequest } from "@/app/reducer/index";

const Events = () => {
  const dispatch = useAppDispatch();

  const events = useAppSelector((state) => state.home.eventsList);

  // get events
  useEffect(() => {
    dispatch(getEventsRequest());
  }, []);

  return (
    <div className=" bg-white py-[69px]" id="ourevents">
      <div className="container max-w-7xl mx-auto">
        <div className="title">
          <h4 className=" text-center lg:text-left text-[32px] lg:text-[42px] font-bold text-[#014840]">
            Events
          </h4>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          modules={[Pagination]}
          className="eventSwiper mt-[18px]"
        >
          {events &&
            events.length > 0 &&
            events.map((item: any, i: number) => (
              <SwiperSlide key={i}>
                <EventCard
                  img={item.gallery[0]?.url}
                  tag="Health Awareness"
                  title={item.title}
                  date={item.dates[0]?.dateFrom}
                  time={
                    item.timings[0]?.from.split(" ")[1] +
                    " " +
                    item.timings[0]?.from.split(" ")[2]
                  }
                  link={"#"}
                />
              </SwiperSlide>
            ))}
          {/* <SwiperSlide>
            <EventCard
              img={Img1}
              tag="Health Awareness"
              title="Memory loss can be managed Health Awareness Program"
              date="November 20, 2024"
              time="12:30 pm - 2:30pm"
              link="#"
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
