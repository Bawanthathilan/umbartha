"use client"
import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import CounsellorCard from '@/components/counsellor/counsellerCard'
import Image from 'next/image'

import Img1 from '@/assets/home/counsellor/1.png'
import Img2 from '@/assets/home/counsellor/2.png'
import Img3 from '@/assets/home/counsellor/3.png'
import Img4 from '@/assets/home/counsellor/4.png'

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

const Page = () => {
    return (
        <div>
            <HeroSection
                subtitle='Counsellor'
                title='Meet our Counsellor'
                left={true}
            />
            <div className=' absolute right-0 top-[30%] lg:top-[40%] z-[1]'>
                <ParalaxOne />
            </div>

            <div className=' absolute left-0 z-0 bottom-10'>
                <Paralaxtwo />
            </div>

            <div className=' bg-[#F9F6F3] pb-14 '>
                <div className="container mx-auto max-w-6xl px-5 lg:px-0 z-10 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

                        <div className="item">
                            <CounsellorCard
                                img={Img1}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item -mt-0 lg:-mt-10">
                            <CounsellorCard
                                img={Img2}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item">
                            <CounsellorCard
                                img={Img3}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item -mt-0 lg:-mt-10">
                            <CounsellorCard
                                img={Img4}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page