"use client"
import React from 'react'
import Image from 'next/image'
import Card1 from '../Card1'

import Icon1 from '@/assets/home/what-we-offer/Icon3.png'
import Icon2 from '@/assets/home/what-we-offer/Icon2.png'
import Icon3 from '@/assets/home/what-we-offer/Icon1.png'
import Icon4 from '@/assets/home/what-we-offer/Icon4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { useParallax } from 'react-scroll-parallax';

import ParalaxImg from '@/assets/home/paralax/1.png'

const WhatWeOffer = () => {
    const { ref }: any = useParallax({ speed: 30 });
    return (
        <div>
            <div ref={ref} className='paralax absolute left-0'>
                <Image src={ParalaxImg} alt='paralax' width={80} height={80} className=' object-contain' />
            </div>
            <div className=' bg-white-bg-gradient py-5 lg:py-[79px]'>
                <div className='container max-w-7xl mx-auto px-10 lg:px-0'>
                    <div className="title hidden lg:block">
                        <h4 className='text-[42px] font-bold'>What We Offer</h4>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-[35px]"
                    >
                        <SwiperSlide>
                            <Card1
                                responsive={false}
                                img={Icon1}
                                title='Individual Session'
                                description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                            />
                        </SwiperSlide>


                        <SwiperSlide>
                            <Card1
                                responsive={false}
                                img={Icon2}
                                title='Couples Session'
                                description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                            />
                        </SwiperSlide>


                        <SwiperSlide>
                            <Card1
                                responsive={false}
                                img={Icon3}
                                title='Single Session Therapy'
                                description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card1
                                responsive={false}
                                img={Icon4}
                                title='Family Session'
                                description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                            />
                        </SwiperSlide>

                    </Swiper >
                </div>

            </div>
        </div>

    )
}

export default WhatWeOffer