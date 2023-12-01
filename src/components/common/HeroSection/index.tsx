import React from 'react'

interface HeroSectionProps {
    subtitle: string,
    title: string,
    desc?: string
}

const HeroSection = ({
    subtitle,
    title,
    desc
}: HeroSectionProps) => {
    return (
        <div className=' h-[520px] md:h-[400px] lg:h-[529px] w-full bg-hero-gradient px-5'>
            <div className="cont flex w-full h-full flex-col items-left lg:items-center lg:justify-center md:justify-end justify-end gap-4">
                <h4 className=' uppercase text-xl font-bold text-[#014840]'>{subtitle}</h4>
                <h1 className=' text-[40px] lg:text-[52px] font-bold text-black max-w-2xl text-left lg:text-center'>{title}</h1>
                <p className=' text-[20px] font-normal text-left lg:text-center max-w-6xl'>{desc}</p>
            </div>
        </div>
    )
}

export default HeroSection