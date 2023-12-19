"use client";
import React, { useEffect } from "react";
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

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { contactUsRequest, resetContactUs } from "@/app/reducer/index";

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

const Page = () => {
  const dispatch = useAppDispatch();

  const [expandedPanel, setExpandedPanel] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailValidation, setEmailValidation] = React.useState<boolean>(false);
  const [phone, setPhone] = React.useState("");
  const [phoneValidation, setPhoneValidation] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState("");
  const [userAgreement, setUserAgreement] = React.useState(false);

  const contactUsSuccess = useAppSelector(
    (state) => state.home.contactUsSuccess
  );

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

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

  // handle submit
  const onSubmit = () => {
    dispatch(
      contactUsRequest({
        name: name,
        email: email,
        phone: phone,
        message: message,
      })
    );
  };

  useEffect(() => {
    if (contactUsSuccess) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setUserAgreement(false);

        dispatch(resetContactUs());
      }, 3000);
    }
  }, [contactUsSuccess]);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
            <div className="left flex flex-col gap-5 order-2 lg:order-1">
              <div className="title">
                <h1 className=" text-xl lg:text-4xl font-bold">Drop a Line</h1>
              </div>

              <div className="flex flex-col gap-5">
                <input
                  className="px-5 py-3 rounded-3xl w-full border-[1.5] border-[#ECECEC] placeholder:text-black placeholder:text-sm"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />

                <div className="flex flex-col lg:flex-row gap-5">
                  <input
                    className="px-5 py-3 rounded-3xl w-full border-[1.5] border-[#ECECEC] placeholder:text-black placeholder:text-sm"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                    value={email}
                  />
                  <input
                    className="px-5 py-3 rounded-3xl w-full border-[1.5] border-[#ECECEC] placeholder:text-black placeholder:text-sm"
                    type="text"
                    name=""
                    id=""
                    placeholder="+94 Contact Number "
                    onChange={(e) => {
                      setPhone(e.target.value);
                      validatePhoneNumber(e.target.value);
                    }}
                    value={phone}
                  />
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    {emailValidation && (
                      <p className="text-[#b00707]  ml-3 text-sm font-semibold">
                        Invalid email
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    {phoneValidation && (
                      <p className="text-[#b00707]  ml-8 text-sm font-semibold">
                        Invalid phone number
                      </p>
                    )}
                  </div>
                </div>

                <textarea
                  className="px-5 py-3 rounded-3xl w-full border-[1.5] border-[#ECECEC] placeholder:text-black placeholder:text-sm"
                  name=""
                  placeholder="Your comment"
                  id=""
                  cols={30}
                  rows={10}
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <div className="text-[14px] font-normal flex flex-row gap-5">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={userAgreement}
                    onChange={(e) => {
                      setUserAgreement(e.target.checked);
                    }}
                  />
                  <p>
                    I agree that my submitted data is being collected and
                    stored.
                  </p>
                </div>
                {contactUsSuccess && (
                  <p className="text-[#26AF9F] text-sm font-semibold">
                    Message sent successfully!
                  </p>
                )}
                <button
                  disabled={
                    name.length < 1 ||
                    email.length < 1 ||
                    phone.length < 1 ||
                    emailValidation ||
                    !userAgreement
                  }
                  onClick={onSubmit}
                  className="bg-[#149F8E] py-2 text-white rounded-3xl disabled:bg-[#ECECEC] disabled:text-[#666]"
                >
                  SUBMIT
                </button>
              </div>
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
                <div className="flex flex-row items-center gap-5">
                  <div className="icon bg-white p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h4 className=" text-base font-medium">
                    No 37/1, Hotel Road, Mount Lavinia, Sri Lanka
                  </h4>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <div className="icon bg-white p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h4>manisha@umbartha.org</h4>
                </div>

                <div className="flex flex-row items-center gap-5">
                  <div className="icon bg-white p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <h4>+34 77 84 95 758</h4>
                </div>
              </div>

              <div className=" rounded-lg w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.49176203425!2d79.83062063234242!3d6.913131607518933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25960d359dbbf%3A0xd64947e9ab7a4c4f!2sColombo%2003%2C%20Colombo!5e0!3m2!1sen!2slk!4v1702829758977!5m2!1sen!2slk"
                  className="w-full h-[205px] rounded-lg"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="accordian mt-[80px]">
            <div className="title flex items-center justify-center">
              <h1 className=" text-4xl font-bold">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="items flex flex-col  mt-10">
              <Accordion
                expanded={expandedPanel === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  backgroundColor: "transparent !important",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    How much do you charge for the file processing?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#F1E8DF",
                    borderRadius: "12px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    paddingTop: "39px",
                    paddingBottom: "39px",
                  }}
                >
                  <Typography>
                    We do not charge any kind of application or visa processing
                    fees for the universities and colleges under our portal. Our
                    services for our students are completely free.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedPanel === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  backgroundColor: "transparent !important",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
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
                <AccordionDetails
                  sx={{
                    backgroundColor: "#F1E8DF",
                    borderRadius: "12px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    paddingTop: "39px",
                    paddingBottom: "39px",
                  }}
                >
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expandedPanel === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  backgroundColor: "transparent !important",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
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
                <AccordionDetails
                  sx={{
                    backgroundColor: "#F1E8DF",
                    borderRadius: "12px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    paddingTop: "39px",
                    paddingBottom: "39px",
                  }}
                >
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expandedPanel === "panel4"}
                onChange={handleChange("panel4")}
                sx={{
                  backgroundColor: "transparent !important",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What kind of migration services do you provide?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#F1E8DF",
                    borderRadius: "12px",
                    paddingLeft: "32px",
                    paddingRight: "32px",
                    paddingTop: "39px",
                    paddingBottom: "39px",
                  }}
                >
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

export default Page;
