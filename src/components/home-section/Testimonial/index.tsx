"use client";
import React from "react";
import "@/components/home-section/Testimonial/style.css";
import Image from "next/image";
import { Kaisei_Decol } from "next/font/google";

const KaiseiDecol = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

import TestimonialCard from "../TestimonialCard";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";

import Image1 from "@/assets/home/testimonial/1.png";
import ParalaxImg2 from "@/assets/home/paralax/3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Paralaxtwo() {
  const { ref }: any = useParallax({ speed: 40 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={153}
        height={153}
        className="object-contain"
      />
    </div>
  );
}

function Paralax3() {
  const { ref }: any = useParallax({ speed: 40 });

  return (
    <div ref={ref} className="paralax w-full">
      <Image
        src={ParalaxImg2}
        alt="paralax"
        width={90}
        height={90}
        className="object-contain"
      />
    </div>
  );
}

const Testimonial = () => {
  return (
    <div>
      <div className="slider-container-testimonial1">
        <div className="container max-w-7xl mx-auto pt-[60px] px-10 lg:px-0 lg:pt-[149px]">
          <div className="title">
            <h4 className=" text-[32px] lg:text-[48px] text-center lg:text-left font-bold text-black">
              Testimonials{" "}
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
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            modules={[Pagination]}
            className="testimonialSwiper mt-[18px]"
          >
            <SwiperSlide>
              <TestimonialCard
                img={Image1}
                title="I was able to resolve the pain and the anger that I had towards the person who had hurt me.”"
                name="Lois Whittaker"
                desc="Sr Content Marketing and Comm Mgr Munich Re America Services, Inc."
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                img={Image1}
                title="I was able to resolve the pain and the anger that I had towards the person who had hurt me.”"
                name="Lois Whittaker"
                desc="Sr Content Marketing and Comm Mgr Munich Re America Services, Inc."
              />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialCard
                img={Image1}
                title="I was able to resolve the pain and the anger that I had towards the person who had hurt me.”"
                name="Lois Whittaker"
                desc="Sr Content Marketing and Comm Mgr Munich Re America Services, Inc."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                img={Image1}
                title="I was able to resolve the pain and the anger that I had towards the person who had hurt me.”"
                name="Lois Whittaker"
                desc="Sr Content Marketing and Comm Mgr Munich Re America Services, Inc."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                img={Image1}
                title="I was able to resolve the pain and the anger that I had towards the person who had hurt me.”"
                name="Lois Whittaker"
                desc="Sr Content Marketing and Comm Mgr Munich Re America Services, Inc."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-testimonial-image bg-cover bg-no-repeat bg-[0%_65%] h-[700px] md:h-full relative">
        <div className="slider-container-testimonial h-[500px] lg:h-[924px]  flex flex-col items-center justify-start gap-[37px] px-5 lg:px-0">
          <h1
            className={`${KaiseiDecol.className} text-[28px] max-w-6xl mt-[80px] lg:text-[64px] font-bold text-center`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>

        <div className=" absolute top-[40%] left-0 z-[1] hidden lg:block">
          <Paralaxtwo />
        </div>
        <div className=" absolute bottom-10 right-10 z-[1] hidden lg:block">
          <Paralax3 />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
