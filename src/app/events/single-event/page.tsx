"use client";
import React from "react";
import HeroSection from "@/components/common/HeroSection";
import Image from "next/image";

import Map from "@/assets/home/events/map.png";

import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

import EventCard from "@/components/home-section/EventCard";

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

import { useParallax } from "react-scroll-parallax";

import ParalaxImg from "@/assets/home/paralax/2.png";
import ParalaxImg2 from "@/assets/home/paralax/3.png";

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

const page = () => {
  return (
    <div>
      {/* <HeroSection
        subtitle="events"
        title="Psychological Society: Individual Factors of Stress in the Workplace"
      /> */}
      <div className=" h-auto pt-36  lg:pt-0 md:pt-36 md:h-auto lg:h-[400px] w-full bg-hero-gradient px-5 z-10 ">
        <div
          className={`container relative z-10 mx-auto max-w-6xl flex w-full h-full flex-col items-left lg:justify-center md:justify-end justify-end gap-4 lg:items-center`}
        >
          <h4 className=" uppercase text-xl mt-32 font-bold text-[#014840]">
            events
          </h4>
          <h1 className=" text-[40px] lg:text-[52px] font-bold text-black max-w-7xl text-left lg:text-center leading-[1.2] lg:leading-[1.2]">
            Psychological Society: Individual <br className="hidden md:block" />{" "}
            Factors of Stress in the Workplace
          </h1>
        </div>
      </div>
      <div className=" absolute right-0 top-[30%] lg:top-[40%] z-[1]">
        <ParalaxOne />
      </div>

      <div className=" absolute left-0 z-0 bottom-10">
        <Paralaxtwo />
      </div>
      <div className="bg-bg-white-varient py-10">
        <div className="container mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
            <div className="w-auto order-2 lg:order-1">
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet, minim sanctus assueverit ad nam, in
                quo amet minimum voluptatibus. Ad quo tota deserunt, veniam
                melius eu sit. Ad eam tollit ignota animal, modus referrentur
                definitiones ad mel. Ornatus maiestatis intellegebat te duo,
                aeterno tincidunt adipiscing mei et, cu oratio vocent qui. Quem
                percipitur eu mel, temporibus disputando philosophia no cum,
                iriure offendit definitiones duo ei.
                <br />
                Eu nobis dolor quo, fugit aeterno eam ut, nam libris fuisset no.
                Ei etiam novum simul nec, inermis aliquando eu sea. Sit falli
                noster suscipiantur te, est ad delectus scribentur. Ea pri tale
                iisque, ne tation ancillae definitionem his, ne mei novum
                disputando. Cu nec ignota quodsi albucius, et tollit causae
                mandamus has, pri atqui consul ex. Ea usu amet accumsan, nobis
                tation aperiam id eos, nec id vidit altera nostro.
                <br />
                Ut vidisse delenit vim, unum iisque ius in. Epicuri mediocrem
                vis no. Id eos unum mundi facilis, eum ex facer tractatos. Te
                eruditi incorrupte sit. Vel et zril patrioque euripidis, vel
                porro albucius cu. Mutat primis has eu, laudem numquam pri ex,
                probo aliquam sea ut. At sed omnes graece adversarium, in iudico
                atomorum mei. Vix iriure veritus lobortis ad. His tation habemus
                similique id, an viderer sapientem adipiscing pro.
                <br />
                Mei cu omnis assum falli, est vero vidit ex. Qui ut hinc clita
                platonem, eu nobis dolor qui. Quando antiopam ius cu. Liber
                elitr causae ea vix, vix cu utamur adversarium.
              </p>
            </div>

            <div className="img relative w-auto h-[300px] order-1 lg:order-2">
              <Image
                src={Img1}
                alt="img"
                fill
                className=" object-cover object-right"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-20">
            <div className="details flex flex-wrap lg:flex-nowrap flex-row gap-20">
              <div className="item flex flex-col gap-5">
                <h2 className=" text-[20px] font-bold">Details</h2>

                <div className="item flex flex-row gap-3 items-center justify-start text-sm font-normal text-[#4B4B4B]">
                  <IoCalendarOutline />
                  <p>November 20, 2024</p>
                </div>
                <div className="item flex flex-row gap-3 items-center justify-start text-sm font-normal text-[#4B4B4B]">
                  <FaRegClock />
                  <p>12:30 pm - 2:30pm</p>
                </div>
              </div>

              <div className="item flex flex-col gap-5">
                <h2 className=" text-[20px] font-bold">Speech</h2>

                <div className="item flex flex-row gap-3 items-center justify-start text-sm font-normal text-[#4B4B4B]">
                  <p>Calle Britt</p>
                </div>
              </div>

              <div className="item flex flex-col gap-5">
                <h2 className=" text-[20px] font-bold">Venue/ Link</h2>

                <div className="item flex flex-row gap-3 items-center justify-start text-sm font-normal text-[#4B4B4B]">
                  <p>
                    Concert Hall “City Hall”350 5th Ave, New York, NY 10118, USA
                    +
                  </p>
                </div>
              </div>
            </div>

            <div className="map mt-10 lg:mt-0">
              <div className="rounded-lg w-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.49176203425!2d79.83062063234242!3d6.913131607518933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25960d359dbbf%3A0xd64947e9ab7a4c4f!2sColombo%2003%2C%20Colombo!5e0!3m2!1sen!2slk!4v1702829758977!5m2!1sen!2slk"
                  className="w-[400px] h-[205px] rounded-lg"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white py-[69px]">
        <div className="container max-w-7xl mx-auto">
          <div className="title">
            <h4 className=" text-center lg:text-left text-[32px] lg:text-[42px] font-bold text-[#014840]">
              Find More Events
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
            className="mySwiper mt-[35px]"
          >
            <SwiperSlide>
              <EventCard
                img={Img1}
                tag="Health Awareness"
                title="Memory loss can be managed Health Awareness Program"
                date="November 20, 2024"
                time="12:30 pm - 2:30pm"
                link="#"
              />
            </SwiperSlide>

            <SwiperSlide>
              <EventCard
                img={Img2}
                tag="Health Awareness"
                title="Memory loss can be managed Health Awareness Program"
                date="November 20, 2024"
                time="12:30 pm - 2:30pm"
                link="#"
              />
            </SwiperSlide>

            <SwiperSlide>
              <EventCard
                img={Img3}
                tag="Health Awareness"
                title="Memory loss can be managed Health Awareness Program"
                date="November 20, 2024"
                time="12:30 pm - 2:30pm"
                link="#"
              />
            </SwiperSlide>

            <SwiperSlide>
              <EventCard
                img={Img4}
                tag="Health Awareness"
                title="Memory loss can be managed Health Awareness Program"
                date="November 20, 2024"
                time="12:30 pm - 2:30pm"
                link="#"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default page;
