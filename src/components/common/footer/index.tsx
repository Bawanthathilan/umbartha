"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/index";

import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { subscribeRequest, resetSubscribe } from "@/app/reducer/index";

const Footer = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>("");
  const [emailValidation, setEmailValidation] = React.useState<boolean>(false);

  const subscribeSuccess = useAppSelector(
    (state) => state.home.subscribeSuccess
  );

  const validateEmail = (email: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailValidation(true);
      return;
    }
    setEmailValidation(false);
  };

  const handleSubscribe = () => {
    dispatch(subscribeRequest({ email }));
  };

  useEffect(() => {
    if (subscribeSuccess) {
      setTimeout(() => {
        setEmail("");
        dispatch(resetSubscribe());
      }, 3000);
    }
  }, [subscribeSuccess]);

  return (
    <footer className="relative bg-[#082623] w-full py-10">
      <div className=" container mx-auto max-w-7xl px-5 lg:px-0">
        <div className="flex flex-col  md:flex-row lg:flex-row justify-between">
          <div className="logo flex flex-col gap-5">
            <Image
              src="/logo/umbartha_logo.svg"
              width={253}
              height={75}
              alt={""}
            />

            <div className="social flex flex-row gap-3 ">
              {data.social.map((social) => (
                <>
                  <a
                    href={social.link}
                    className="bg-white p-2 rounded-lg text-xl"
                  >
                    <social.icon />
                  </a>
                </>
              ))}
            </div>
          </div>

          <div className="menu flex flex-row gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2  grid-flow-row sm:flex mt-10 md:mt-0 lg:mt-0 sm:justify-between px-0 sm:px-5 md:px-0 lg:px-0 gap-7 sm:gap-5 md:gap-0 lg:gap-x-[78px] ">
              {data.footerLinks.map((item, index) => (
                <div className="menu_links" key={index}>
                  <h3 className="mb-[9px] text-[14px] font-medium text-[#B5C1C8]">
                    {item.title}
                  </h3>

                  <ul className="list-none grid grid-rows-4 grid-flow-col gap-x-[40px] gap-y-2 lg:gap-y-2">
                    {item.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.link}
                          className="text-white text-sm font-medium leading-5"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-10 md:mt-0 gap-5 lg:mt-0">
            <h1 className="text-white text-[24px] md:text-[18px] lg:text-[32px] font-bold">
              Join Our newsletter
              <br />
              to stay up to date.
            </h1>

            <div className="flex flex-col gap-5  w-full justify-start">
              <TextField
                id="standard-basic"
                label="Enter your Email"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                InputProps={{
                  style: {
                    borderColor: "red",
                    color: "white",
                  },
                }}
                sx={{
                  "& .MuiInput-underline::before": {
                    borderBottomColor: "white", // Set a fixed color for the underline
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "#B5C1C8", // Change placeholder color
                    fontSize: "14px",
                  },
                }}
              />
              {emailValidation && (
                <p className="text-[#b00707] text-sm font-semibold">
                  Invalid email
                </p>
              )}
              {subscribeSuccess && (
                <p className="text-[#26AF9F] text-sm font-semibold">
                  Subscribed successfully!
                </p>
              )}

              <button
                disabled={email.length < 1 || emailValidation}
                onClick={handleSubscribe}
                className="bg-white py-[14px] px-[35px] w-[200px] md:w-[150px] lg:w-[200px] text-[#082623] text-sm disabled:bg-[#ECECEC] disabled:text-[#666] disabled:cursor-not-allowed"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
