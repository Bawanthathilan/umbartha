import React from 'react'
import EventCard from '../EventCard'

import Img1 from '@/assets/home/events/1.png'
import Img2 from '@/assets/home/events/2.png'
import Img3 from '@/assets/home/events/3.png'
import Img4 from '@/assets/home/events/4.png'

const Events = () => {
    return (
        <div className=' bg-white py-[69px]'>
            <div className='container max-w-7xl mx-auto'>
                <div className="title">
                    <h4 className='text-[42px] font-bold text-[#014840]'>Events</h4>
                </div>

                <div className="card-grid mt-[33px] flex flex-row justify-between">
                    <EventCard
                        img={Img1}
                        tag='Health Awareness'
                        title='Memory loss can be managed Health Awareness Program'
                        date='November 20, 2024'
                        time='12:30 pm - 2:30pm'
                        link='#'
                    />
                    <EventCard
                        img={Img2}
                        tag='Health Awareness'
                        title='Memory loss can be managed Health Awareness Program'
                        date='November 20, 2024'
                        time='12:30 pm - 2:30pm'
                        link='#'
                    />
                    <EventCard
                        img={Img3}
                        tag='Health Awareness'
                        title='Memory loss can be managed Health Awareness Program'
                        date='November 20, 2024'
                        time='12:30 pm - 2:30pm'
                        link='#'
                    />
                    <EventCard
                        img={Img4}
                        tag='Health Awareness'
                        title='Memory loss can be managed Health Awareness Program'
                        date='November 20, 2024'
                        time='12:30 pm - 2:30pm'
                        link='#'
                    />
                </div>
            </div>
        </div>
    )
}

export default Events