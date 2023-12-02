import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/data/index'

import TextField from '@mui/material/TextField';

const Footer = () => {
    return (
        <footer className='relative bg-[#082623] w-full py-10'>
            <div className=" container mx-auto max-w-7xl px-5 lg:px-0">
                <div className="flex flex-col  md:flex-row lg:flex-row justify-between">
                    <div className="logo flex flex-col gap-5">
                        <Image
                            src="/logo/umbartha_logo.svg"
                            width={183.195}
                            height={39.376}
                            alt={""}
                        />

                        <div className="social flex flex-row gap-3 ">
                            {data.social.map((social) => (<>
                                <a href={social.link} className='bg-white p-2 rounded-lg text-xl'>
                                    <social.icon />
                                </a>
                            </>))}
                        </div>


                    </div>

                    <div className="menu flex flex-row gap-6">
                        <div className="grid grid-cols-2 grid-flow-row sm:flex mt-10 md:mt-0 lg:mt-0 sm:justify-between px-0 sm:px-5 md:px-0 lg:px-0 gap-7 sm:gap-5 md:gap-0 lg:gap-10">
                            {data.footerLinks.map((item, index) => (
                                <div className="menu_links" key={index}>
                                    <h3

                                        className="mb-[9px] text-[14px] font-medium text-[#B5C1C8]"

                                    >
                                        {item.title}
                                    </h3>

                                    <ul className="list-none">
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

                    <div className='flex flex-col mt-10 md:mt-0 gap-5 lg:mt-0'>
                        <h1 className='text-white text-[24px] md:text-[18px] lg:text-[32px] font-bold'>Join Our newsletter<br />
                            to stay up to date.</h1>

                        <form className='flex flex-col gap-5  w-full justify-start'>
                            <TextField id="standard-basic" label="Enter your Email" variant='standard' />

                            <button className='bg-white text-black p-2 w-[200px] md:w-[150px] lg:w-[200px] text-sm'>
                                SUBSCRIBE
                            </button>
                        </form>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer