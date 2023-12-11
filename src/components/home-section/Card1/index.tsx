import React from 'react'
import Image from 'next/image'

interface Card1Pros {
    img: any,
    title: string,
    description: string,
    responsive?: boolean

}

const Card1 = ({
    img,
    title,
    description,
    responsive = true
}: Card1Pros) => {
    return (
        <div className=' bg-white rounded-lg py-[23px] px-8 w-full max-w-full lg:max-w-[291px] h-[300px] max-h-[370px]'>

            <div className={`flex ${responsive ? "flex-row lg:flex-col" : "flex-col lg:flex-col"}  justify-between gap-10`}>
                <div className="img w-[95px] h-[95px] relative">
                    <Image src={img} alt={title} fill className=' object-contain' />
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className=' text-base lg:text-2xl text-black font-semibold'>{title}</h4>
                    <p className=' text-xs text-[#4B4B4B] font-normal'>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Card1