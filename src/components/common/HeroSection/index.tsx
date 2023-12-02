import React from 'react'

interface HeroSectionProps {
    subtitle?: string,
    title: string,
    desc?: string,
    left?: boolean
}

const HeroSection = ({
    subtitle,
    title,
    desc,
    left = false
}: HeroSectionProps) => {
    return (
        <div className=' h-auto pt-36  lg:pt-0 md:pt-36 md:h-auto lg:h-[520px] w-full bg-hero-gradient px-5 z-10 '>
            <div className={`container relative z-10 mx-auto max-w-6xl flex w-full h-full flex-col items-left ${left ? "lg:items-start" : "lg:items-center"}  lg:justify-center md:justify-end justify-end gap-4`}>
                <h4 className=' uppercase text-xl font-bold text-[#014840]'>{subtitle}</h4>
                <h1 className=' text-[40px] lg:text-[52px] font-bold text-black max-w-2xl text-left lg:text-center'>{title}</h1>
                <p className=' text-[20px] font-normal text-left lg:text-center max-w-6xl'>{desc}</p>
            </div>
        </div >
    )
}

export default HeroSection