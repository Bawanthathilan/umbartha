import React from 'react'
import Image from 'next/image'


interface CounsellorCardProps {
    img: any,
    name: string,
    designation: string
    desc: string
}

const CounsellorCard = ({
    img,
    name,
    designation,
    desc
}: CounsellorCardProps) => {
    return (
        <div className='bg-white p-5 rounded-2xl'>
            <div className="content flex flex-col gap-5  justify-between">
                <div className="header flex flex-row justify-start gap-10 w-full items-center">
                    <div className="img">
                        <Image src={img} alt={name} width={100} height={100} className=' rounded-[36px]' />
                    </div>
                    <div className="flex flex-col gap-0">
                        <h4 className='p-0 m-0 text-[20px] lg:text-[32px] font-semibold text-[#3D3D3D]'>{name}</h4>
                        <p className='p-0 m-0 text-[#AAA] text-sm lg:text-lg font-medium'>{designation}</p>
                    </div>
                </div>

                <p className='text-[#545454] text-xs lg:text-lg font-normal'>{desc}</p>
            </div>

        </div>
    )
}

export default CounsellorCard