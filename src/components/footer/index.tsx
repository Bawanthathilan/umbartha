import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/data/index'

const Footer = () => {
    return (
        <footer className='relative bg-[#082623] w-full py-10'>
            <div className=" container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="logo flex flex-col gap-5">
                        <Image
                            src="logo/umbartha_logo.svg"
                            width={183.195}
                            height={39.376}
                            alt={""}
                        />

                        <div className="social flex flex-row gap-3">
                            {data.social.map((social) => (<>
                                <a href={social.link} className='bg-white p-2 rounded-lg text-xl'>
                                    <social.icon />
                                </a>
                            </>))}
                        </div>


                    </div>

                    <div className="menu flex flex-row gap-6">
                        <div className="grid grid-cols-2 grid-flow-row sm:flex sm:justify-between px-5 sm:px-5 md:px-0 lg:px-0 gap-7 sm:gap-5 md:gap-0 lg:gap-10">
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

                    <div className='flex flex-col'>
                        <h1 className='text-white text-[32px] font-bold'>Join Our newsletter<br />
                            to stay up to date.</h1>


                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer