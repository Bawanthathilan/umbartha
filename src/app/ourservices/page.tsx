import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import OurServicesSection from '@/components/ourservices'

const page = () => {
    return (
        <div>
            <HeroSection
                subtitle="Our Services"
                title="Your Path to Wellness"
                desc='Here we intentionally create a safe and secure place for clients to process and talk about the struggles they face at home or at work due to fluctuating extreme negative emotions like anger , depression'

            />

            <OurServicesSection />
        </div>
    )
}

export default page