"use client";
import React from "react";
import HeroSection from "@/components/common/HeroSection";
import { data } from "@/data/index";
import Image from "next/image";

import Map from "@/assets/home/events/map.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <HeroSection
        subtitle="Contacts"
        title="Lorem ipsum dolor sit amet, consectetur"
      />

      <div className=" absolute right-0 top-[30%] lg:top-[40%] z-[1]">
        <ParalaxOne />
      </div>

      <div className=" absolute left-0 z-0 bottom-10">
        <Paralaxtwo />
      </div>

      <div className="bg-bg-white-varient pb-14 ">
        <div className="container mx-auto max-w-6xl px-5 lg:px-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="left flex flex-col gap-5 order-2 lg:order-1">
              <div className="title">
                <h1 className=" text-xl lg:text-4xl font-bold">Drop a Line</h1>
              </div>

              <form action="" className="flex flex-col gap-5">
                <input
                  className="px-5 py-3 rounded-3xl w-full"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                />

                <div className="flex flex-col lg:flex-row gap-5">
                  <input
                    className="px-5 py-3 rounded-3xl w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email"
                  />
                  <input
                    className="px-5 py-3 rounded-3xl w-full"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Contact Number "
                  />
                </div>

                <textarea
                  className="px-5 py-3 rounded-3xl w-full"
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                ></textarea>
                <div className="text-[14px] font-normal flex flex-row gap-5">
                  <input type="checkbox" name="" id="" />
                  <p>
                    I agree that my submitted data is being collected and
                    stored.
                  </p>
                </div>

                <button className="bg-[#149F8E] py-2 text-white rounded-3xl">
                  SUBMIT
                </button>
              </form>
            </div>

            <div className="right flex flex-col gap-10 lg:gap-5 mt-20 lg:mt-0 justify-between order-1 lg:order-2">
              <div className="title flex flex-col gap-5">
                <h1 className=" text-xl  md:text-4xl font-bold">
                  Do You Have a Question?
                </h1>
                <div className="social flex flex-row gap-5">
                  {data.social.map((social) => (
                    <>
                      <a href={social.link} className="p-0 rounded-lg text-xl">
                        <social.icon />
                      </a>
                    </>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 text-base lg:text-[20px] font-semibold">
                <h4>No 37/1, Hotel Road, Mount Lavinia, Sri Lanka</h4>
                <h4>manisha@umbartha.org</h4>
                <h4>+34 77 84 95 758</h4>
              </div>

              <Image src={Map} alt="map" className="rounded-lg  object-cover" />
            </div>
          </div>

          <div className="accordian mt-[80px]">
            <div className="title flex items-center justify-center">
              <h1 className=" text-4xl font-bold">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="items flex flex-col  mt-10">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    How much do you charge for the file processing?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We do not charge any kind of application or visa processing
                    fees for the universities and colleges under our portal. Our
                    services for our students are completely free.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What are the top universities of Australia, Canada, USA, UK,
                    and Malaysia?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Can I apply to top destinations like Australia, Canada, USA,
                    UK, and Malaysia with a study gap?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What kind of migration services do you provide?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
