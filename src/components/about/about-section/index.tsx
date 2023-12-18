"use client";
import React from "react";
import Image from "next/image";

import manisha from "@/assets/home/aboutus/manisha.png";
import Sig from "@/assets/home/aboutus/manishasig.png";
import Yoga from "@/assets/home/aboutus/yoga.png";
import Write from "@/assets/home/aboutus/write.png";
import CustomButton from "@/components/common/button";

import { useParallax } from "react-scroll-parallax";

import ParalaxImg from "@/assets/home/paralax/2.png";
import ParalaxImg2 from "@/assets/home/paralax/3.png";

const AboutSection = () => {
  const { ref }: any = useParallax({ speed: 30 });
  return (
    <>
      <div ref={ref} className="paralax absolute right-0 z-0 top-[40%]">
        <Image
          src={ParalaxImg}
          alt="paralax"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div ref={ref} className="paralax absolute right-10 z-0 top-[20%]">
        <Image
          src={ParalaxImg2}
          alt="paralax"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div ref={ref} className="paralax absolute left-10 z-0 top-[30%]">
        <Image
          src={ParalaxImg2}
          alt="paralax"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="bg-bg-white-varient pt-[20px] lg:pt-[68px] z-10">
        <div className="container mx-auto max-w-7xl px-5 lg:px-0">
          <div className="section-1 flex flex-col gap-10">
            <h1 className=" text-xl lg:text-[42px] text-[#082623] font-semibold leading-normal lg:leading-[50px] z-10">
              Our solar panels are designed to be highly efficient,{" "}
              <br className="hidden lg:block" /> delivering maximum solar
              production year-round, even on roofs with complicated angles.
            </h1>
            <p className="text-[#4E4E4E] text-base lg:text-xl font-normal">
              Umbartha, a Marathi word meaning ‘threshold’ was originally chosen
              as the name for a business venture that Manisha Billimoria started
              in 2014 in a small way with exhibitions and sales of authentic
              Indian clothing such as sarees sourced directly from the looms of
              rural Bengal and Gujarat as well as Indian jewelry handicrafted by
              local Indian artisans as well as cottage industries in Sri Lanka.
              This was the crossing of a threshold for Manisha who had arrived
              as a young bride in Sri Lanka in 1996 having had her own fashion
              designing career in Pune.
            </p>
          </div>

          <div className="secton-2 my-10 ">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-[50%_50%] lg:grid-cols-[40%_60%] items-baseline gap-3 lg:gap-5">
                <div className="itemOne flex flex-col gap-10">
                  <div className="img relative h-[367px] lg:h-[587px] w-full">
                    <Image
                      src={Yoga}
                      alt="yoga"
                      fill
                      className=" object-cover rounded-xl"
                    />
                  </div>

                  <div className="details hidden md:flex flex-col gap-5">
                    <h4 className=" text-xl lg:text-[28px] font-semibold">
                      Vision
                    </h4>
                    <p className="text-[#4E4E4E] font-normal text-base lg:text-xl">
                      Our vision is to support with a listening ear and an
                      empathetic heart in an integrated and relational
                      counseling practise.
                    </p>
                  </div>
                </div>

                <div className="itemTwo flex flex-col gap-10">
                  <div className="img relative h-[281px] lg:h-[443px] w-full">
                    <Image
                      src={Write}
                      alt="yoga"
                      fill
                      className=" rounded-xl object-cover"
                    />
                  </div>
                  <div className="details hidden md:flex flex-col gap-5">
                    <h4 className=" text-xl lg:text-[28px] font-semibold">
                      Mission
                    </h4>
                    <p className="text-[#4E4E4E] font-normal text-base lg:text-xl">
                      Our mission is to serve the community by bringing healing
                      and hope to individuals, families, couples, and others
                      seeking emotional and relational wellbeing as well as
                      wholesome interpersonal relationships through professional
                      counselling care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="details mt-10 flex md:hidden flex-col ">
                <h4 className=" text-xl lg:text-[28px] font-semibold">
                  Vision
                </h4>
                <p className="text-[#4E4E4E] font-normal text-base lg:text-xl">
                  Our vision is to support with a listening ear and an
                  empathetic heart in an integrated and relational counseling
                  practise.
                </p>
              </div>
              <div className="details mt-[38px] flex md:hidden flex-col">
                <h4 className=" text-xl lg:text-[28px] font-semibold">
                  Mission
                </h4>
                <p className="text-[#4E4E4E] font-normal text-base lg:text-xl">
                  Our mission is to serve the community by bringing healing and
                  hope to individuals, families, couples, and others seeking
                  emotional and relational wellbeing as well as wholesome
                  interpersonal relationships through professional counselling
                  care.
                </p>
              </div>
            </div>
          </div>

          <div className="section-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5 lg:gap-0 text-center lg:text-left">
              <div className="manisha">
                <Image
                  src={manisha}
                  alt="manisha"
                  width={458}
                  height={574}
                  className="object-cover"
                />
              </div>

              <div className="right flex flex-col gap-10 lg:gap-5">
                <div className="title flex flex-col text-[#26AF9F] gap-5 order-2 md:order1">
                  <div className=" items-center justify-center flex md:hidden ">
                    <Image
                      src={Sig}
                      alt="signature"
                      width={228}
                      height={100}
                      className="block md:hidden"
                    />
                  </div>

                  <h4 className=" text-2xl lg:text-[40px] font-semibold">
                    Manisha Billimoria
                  </h4>
                  <p className="uppercase font-normal text-lg">
                    Counselor & Therapist at Umbartha Beyond Thresholds
                  </p>
                </div>

                <p className="text-[#4E4E4E] font-normal text-base lg:text-lg text-center lg:text-left order-1 md:order-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore e.
                </p>

                <div className="btn-group flex flex-col lg:flex-row gap-0 lg:gap-10  items-center order-3 md:order-3">
                  <CustomButton text="Make an Appointment" />

                  <Image
                    src={Sig}
                    alt="signature"
                    width={228}
                    height={141}
                    className="hidden md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="strip bg-[#F1EFEC] py-[45px] mt-10 lg:mt-0">
          <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-5 lg:gap-0 lg:flex lg:flex-row justify-between">
            <div className="number flex flex-col gap-3 items-center">
              <h1 className="text-[#595959] text-[40px] lg:text-7xl font-semibold">
                18
              </h1>
              <h4 className="text-blac text-sm md:text-lg font-medium">
                Award Winner
              </h4>
            </div>
            <div className="number flex flex-col gap-3 items-center">
              <h1 className="text-[#595959] text-[40px] lg:text-7xl font-semibold">
                290
              </h1>
              <h4 className="text-blac text-sm md:text-lg font-medium">
                Psychologist
              </h4>
            </div>
            <div className="number flex flex-col gap-3 items-center">
              <h1 className="text-[#595959] text-[40px] lg:text-7xl font-semibold">
                1k+
              </h1>
              <h4 className="text-blac text-sm md:text-lg font-medium">
                Happy Clients
              </h4>
            </div>
            <div className="number flex flex-col gap-3 items-center">
              <h1 className="text-[#595959] text-[40px] lg:text-7xl font-semibold">
                18
              </h1>
              <h4 className="text-blac text-sm md:text-lg font-medium">
                Award Winner
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
