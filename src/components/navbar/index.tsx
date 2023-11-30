"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

import "./style.css";
import CustomButton from "../button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <nav>
      <div className="max-w-6xl mx-auto px-1 bg-transparent ">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link href="/">
                <h4 className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Image
                    src="logo/umbartha_logo.svg"
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
                src="/icon/menu-icon.svg"
                width={62}
                height={62}
                alt={""}
              />
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={isOpen ? "md:hidden flex" : "hidden"}>
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
