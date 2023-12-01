import React from 'react'

import EventCard from '../eventCard'

import Img1 from '@/assets/home/events/4.png'

const EventSection = () => {
    return (
        <div className='bg-[#F9F6F3] py-[20px] lg:py-[68px]'>
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