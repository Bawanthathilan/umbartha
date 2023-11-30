import React from 'react'
import Image from 'next/image'

interface Card1Pros {
    img: any,
    title: string,
    description: string

}

const Card1 = ({
    img,
    title,
    description
}: Card1Pros) => {
    return (
        <div className=' bg-white rounded-lg py-9 px-8 w-full max-w-full lg:max-w-[291px]'>

            <div className='flex flex-col justify-between gap-10'>
                <div className="img w-[95px] h-[95px] relative">
                    <Image src={img} alt={title} fill className=' object-contain' />
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className=' text-2xl text-black font-semibold'>{title}</h4>
                    <p className=' text-xs text-[#4B4B4B] font-normal'>{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Card1