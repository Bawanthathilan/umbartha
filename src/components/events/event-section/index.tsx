"use client";
import React from 'react'
import EventCard from '../eventCard'
import Img1 from '@/assets/home/events/4.png'
import Image from 'next/image';
import { useParallax } from 'react-scroll-parallax';

import ParalaxImg from '@/assets/home/paralax/2.png'
import ParalaxImg2 from '@/assets/home/paralax/3.png'

function Paralaxtwo() {
    const { ref }: any = useParallax({ speed: 40 });

    return (
        <div ref={ref} className='paralax w-full'>
            <Image src={ParalaxImg2} alt='paralax' width={150} height={300} className='object-contain' />
        </div>
    )
}

function ParalaxOne() {
    const { ref }: any = useParallax({ speed: 40 });

    return (
        <div ref={ref} className='paralax w-full'>
            <Image src={ParalaxImg2} alt='paralax' width={150} height={300} className='object-contain' />
        </div>
    )
}

const EventSection = () => {
    return (
        <div className='bg-[#F9F6F3] py-[20px] lg:py-[68px]'>
            <div className=' absolute right-0 top-[30%] lg:top-[40%] z-[1]'>
                <ParalaxOne />
            </div>

            <div className=' absolute left-0 z-0 bottom-10'>
                <Paralaxtwo />
            </div>
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col gap-5">
                    <EventCard
                        img={Img1}
                        title='Psychological Society: Individual Factors of Stress in the Workplace'
                        time='12:30 pm - 2:30pm'
                        date='November 20, 2024'
                        platform='Online | Zoom'
                    />
                    <EventCard
                        img={Img1}
                        title='Psychological Society: Individual Factors of Stress in the Workplace'
                        time='12:30 pm - 2:30pm'
                        date='November 20, 2024'
                        platform='Online | Zoom'
                    />
                    <EventCard
                        img={Img1}
                        title='Psychological Society: Individual Factors of Stress in the Workplace'
                        time='12:30 pm - 2:30pm'
                        date='November 20, 2024'
                        platform='Online | Zoom'
                    />
                </div>
            </div>
        </div>
    )
}

export default EventSection