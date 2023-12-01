import React from 'react'
import Image from 'next/image'


import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";

import CustomButton from '@/components/common/button';

interface EventCardProps {
    img: any,
    title: string,
    date: string,
    time: string,
    platform: string,
}

const EventCard = ({
    img,
    time,
    title,
    platform,
    date
}: EventCardProps) => {
    return (
        <div className='bg-white w-full pr-5 lg:pr-0 pl-5 '>
            <div className=" flex flex-col lg:flex-row justify-between">
                <div className="left flex flex-col gap-5 py-10 items-start">
                    <div className="date flex flex-row gap-5 text-[#4B4B4B] text-[11px]">
                        <div className="item flex flex-row gap-3 items-center justify-start">
                            <IoCalendarOutline />
                            <p>{date}</p>
                        </div>
                        <div className="item flex flex-row gap-3 items-center justify-start">
                            <FaRegClock />
                            <p>{time}</p>
                        </div>


                    </div>
                    <h1 className=' text-[32px] font-bold text-black'>{title}</h1>

                    <div className="bottom flex flex-row gap-5 items-center">
                        <CustomButton text="Health Awareness" />

                        <span className=' text-[13px] font-semibold'>{platform}</span>
                    </div>
                </div>

                <div className="right relative w-full lg:w-[350px] h-[300px] lg:h-auto">
                    <Image src={img} fill alt={title} className='object-cover' />
                </div>
            </div>
        </div>
    )
}

export default EventCard