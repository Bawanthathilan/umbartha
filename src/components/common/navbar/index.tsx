"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { data } from '@/data/index'


import "./style.css";
import CustomButton from "../button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <nav className=" bg-transparent z-50 absolute top-0 w-full ">
      <div className="max-w-6xl mx-auto bg-transparent px-5 lg:px-1">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link href="/">
                <h4 className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Image
                    src={!isOpen ? "/logo/umbartha_logo.svg" : "/logo/green.svg"}
                    width={183.195}
                    height={39.376}
                    alt={""}
                  />
                </h4>
              </Link>
            </div>
          </div>
          {/* Right side - Button and Menu Icon */}
          <div className="flex items-center space-x-4">
            {/* Make an Appointment Button */}
            <div className="hidden md:block">
              <CustomButton text="Make an Appointment" onClick={handleClick} />
            </div>

            {/* Menu Icon for smaller screens */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src={!isOpen ? "/icon/menu-icon.svg" : "/icon/close.svg"}
                width={62}
                height={62}
                alt={""}
              />
            </button>



          </div>
        </div>
      </div>

      <div className={isOpen ? " hidden lg:flex absolute top-0  -z-10 bg-white h-[500px] right-0 w-full" : "hidden"}>
        <div className="container mx-auto max-w-6xl w-full flex flex-row justify-between mt-[5%]">
          <div className="div flex flex-row gap-20">
            <div className="menu flex flex-col gap-10 uppercase text-[#014840] text-5xl font-bold">
              <Link href='/' onClick={() => setIsOpen(!isOpen)} >
                home
              </Link>
              <Link href='ourservices' onClick={() => setIsOpen(!isOpen)}>
                Service
              </Link>
              <Link href='aboutUs' onClick={() => setIsOpen(!isOpen)}>
                about
              </Link>
              <Link href='events' onClick={() => setIsOpen(!isOpen)}>
                event
              </Link>


            </div>

            <div className="menu flex flex-col gap-10 uppercase text-[#014840] text-5xl font-bold">
              <Link href='' onClick={() => setIsOpen(!isOpen)}>
                gallery
              </Link>
              <Link href='/contact' onClick={() => setIsOpen(!isOpen)}>
                contact
              </Link>
            </div>
          </div>


          <div className="socila flex flex-col gap-5 items-end">
            <div className="social-icons flex flex-row gap-3">
              {data.social.map((social) => (<>
                <a href={social.link} className='bg-white p-2 shadow rounded-lg text-xl  text-[#26AF9F]'>
                  <social.icon />
                </a>
              </>))}
            </div>

            <div className="details text-right text-lg font-medium text-[#26AF9F]">
              <p>hello@umbartha.com</p>
              <p>+94 74 1199170</p>
              <p>No 37/1, Hotel Road, Mount Lavinia</p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={isOpen ? " md:hidden flex " : "hidden"}>
        <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
          <Link href="/about">
            <h4 className="py-5 px-3 text-gray-700 hover:text-gray-900">
              About
            </h4>
          </Link>
          <Link href="/services">
            <h4 className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Services
            </h4>
          </Link>
          <Link href="/contact">
            <h4 className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Contact
            </h4>
          </Link>
          <Link href="/login">
            <h4 className="py-2 px-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 hover:text-white transition duration-300">
              Log In
            </h4>
          </Link>
          <Link href="/signup">
            <h4 className="py-2 px-3 text-gray-700 hover:text-gray-900">
              Sign Up
            </h4>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
