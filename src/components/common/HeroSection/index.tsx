import React from 'react'

interface HeroSectionProps {
    subtitle: string,
    title: string
}

const HeroSection = ({
    subtitle,
    title
}: HeroSectionProps) => {
    return (
        <div className=' h-[520px] lg:h-[529px] w-full bg-hero-gradient px-5'>
            <div className="cont flex w-full h-full flex-col items-left lg:items-center justify-center gap-4">
                <h4 className=' uppercase text-xl font-bold text-[#014840]'>{subtitle}</h4>
                <h1 className='text-[52px] font-bold text-black max-w-2xl text-left lg:text-center'>{title}</h1>
            </div>
        </div>
    )
}

export default HeroSection