"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { data } from '@/data/index'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"



import "./style.css";
import CustomButton from "../button";

const DesktopNavVariants = {
  open: { opacity: 1, x: 0, y: 10 },
  closed: { opacity: 0, x: 0, y: 0 },
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter()


  const handleClick = () => {
    router.push('/dashboard');
  };



  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setScrolling(window.scrollY > scrollThreshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`z-50 fixed top-0 ${scrolling ? 'bg-white' : ''} w-full`}>
      <div className="max-w-6xl mx-auto bg-transparent px-5 lg:px-1 ">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link href="/">
                <h4 className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Image
                    src={!isOpen && !scrolling ? "/logo/umbartha_logo.svg" : "/logo/green.svg"}
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

      <div className={isOpen ? " hidden lg:flex absolute top-0  -z-10 bg-white h-auto pb-10 right-0 w-full" : "hidden"}>
        <motion.div
          variants={DesktopNavVariants}
          animate={isOpen ? "open" : "closed"}
          className="container mx-auto max-w-6xl w-full flex flex-col gap-5 mt-[8%]">
          <div className="flex flex-row justify-between " >
            <div className="div flex flex-row gap-20 ">
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
                <Link href='/inquery' onClick={() => setIsOpen(!isOpen)}>
                  Inquery
                </Link>
                <Link href='/healing' onClick={() => setIsOpen(!isOpen)}>
                  Healing
                </Link>
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

          <div className="div flex flex-col justify-end items-end w-full mt-10">
            <div className="flex flex-row gap-5 text-green-theme items-center">
              <p>A Dedicated Team committed to supporting with a listening ear </p>
              <span>|</span>
              <Image
                src="/logo/green.svg"
                width={91.597}
                height={19.688}
                alt={""}
              />
            </div>
          </div>


        </motion.div>


      </div>
      {/* mobile menu */}
      <div className={isOpen ? " md:hidden flex bg-white" : "hidden"}>
        <motion.div
          variants={DesktopNavVariants}
          animate={isOpen ? "open" : "closed"}
          className="div flex flex-row justify-start w-full px-10 py-10 gap-10">
          <div className="menu flex flex-col gap-5 uppercase text-[#014840] text-lg font-bold">
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

          <div className="menu flex flex-col gap-5 uppercase text-[#014840] text-lg font-bold">
            <Link href='/inquery' onClick={() => setIsOpen(!isOpen)}>
              Inquery
            </Link>
            <Link href='/healing' onClick={() => setIsOpen(!isOpen)}>
              Healing
            </Link>
            <Link href='' onClick={() => setIsOpen(!isOpen)}>
              gallery
            </Link>
            <Link href='/contact' onClick={() => setIsOpen(!isOpen)}>
              contact
            </Link>

          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
