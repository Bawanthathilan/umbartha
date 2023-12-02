'use client'
import React from 'react'
import EventCard from '../EventCard'

import Img1 from '@/assets/home/events/1.png'
import Img2 from '@/assets/home/events/2.png'
import Img3 from '@/assets/home/events/3.png'
import Img4 from '@/assets/home/events/4.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Events = () => {
    return (
        <div className=' bg-white py-[69px]'>
            <div className='container max-w-7xl mx-auto'>
                <div className="title">
                    <h4 className=' text-center lg:text-left text-[32px] lg:text-[42px] font-bold text-[#014840]'>Events</h4>
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
                    className="eventSwiper mt-[35px]"
                >
                    <SwiperSlide>
                        <EventCard
                            img={Img1}
                            tag='Health Awareness'
                            title='Memory loss can be managed Health Awareness Program'
                            date='November 20, 2024'
                            time='12:30 pm - 2:30pm'
                            link='#'
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <EventCard
                            img={Img2}
                            tag='Health Awareness'
                            title='Memory loss can be managed Health Awareness Program'
                            date='November 20, 2024'
                            time='12:30 pm - 2:30pm'
                            link='#'
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <EventCard
                            img={Img3}
                            tag='Health Awareness'
                            title='Memory loss can be managed Health Awareness Program'
                            date='November 20, 2024'
                            time='12:30 pm - 2:30pm'
                            link='#'
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <EventCard
                            img={Img4}
                            tag='Health Awareness'
                            title='Memory loss can be managed Health Awareness Program'
                            date='November 20, 2024'
                            time='12:30 pm - 2:30pm'
                            link='#'
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Events