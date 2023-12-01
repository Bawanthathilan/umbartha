import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import EventSection from '@/components/events/event-section'
const page = () => {
    return (
        <div>
            <HeroSection
                subtitle="events"
                title="Lorem ipsum dolor sit amet, consectetur"
            />
            <EventSection />
        </div>
    )
}

export default page