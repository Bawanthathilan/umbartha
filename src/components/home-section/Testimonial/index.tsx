"use client"
import React from 'react'
import '@/components/home-section/Testimonial/style.css';
import { Kaisei_Decol } from 'next/font/google';

const KaiseiDecol = Kaisei_Decol({ subsets: ['latin'], weight: ['400', '500', '700'] })

import TestimonialCard from '../TestimonialCard';

import Image1 from '@/assets/home/testimonial/1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <div>
            <div className='container max-w-7xl mx-auto pt-[60px] px-10 lg:px-0 lg:pt-[149px]'>
                <div className="title">
                    <h4 className=' text-[32px] lg:text-[48px] text-center lg:text-left font-bold text-black'>Testimonials </h4>
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
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mt-[35px]"
                >

                    <SwiperSlide>
                        <TestimonialCard
                            img={Image1}
                            title='I was able to resolve the pain and the anger that I had towards the person who had hurt me.”'
                            name='Lois Whittaker'
                            desc='Sr Content Marketing and Comm Mgr Munich Re America Services, Inc.'
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonialCard
                            img={Image1}
                            title='I was able to resolve the pain and the anger that I had towards the person who had hurt me.”'
                            name='Lois Whittaker'
                            desc='Sr Content Marketing and Comm Mgr Munich Re America Services, Inc.'
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <TestimonialCard
                            img={Image1}
                            title='I was able to resolve the pain and the anger that I had towards the person who had hurt me.”'
                            name='Lois Whittaker'
                            desc='Sr Content Marketing and Comm Mgr Munich Re America Services, Inc.'
                        />
                    </SwiperSlide>

                </Swiper>

            </div>

            <div className='bg-testimonial-image bg-cover bg-no-repeat bg-center h-[700px] md:h-full'>
                <div className="slider-container-testimonial h-[500px] lg:h-[924px]  flex flex-col items-center justify-center gap-[37px] px-5 lg:px-0">
                    <h1 className={`${KaiseiDecol.className} text-[28px] max-w-6xl lg:text-[64px] font-bold text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                </div>
            </div>
        </div>
    )
}

export default Testimonial