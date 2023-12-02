import React from 'react'
import HeroSectionImg from '@/components/common/HeroSectionImg'

import Bgimg from '@/assets/home/healing/bg.png'

import Image from 'next/image'

import manisha from '@/assets/home/aboutus/manisha.png'
import Sig from '@/assets/home/aboutus/manishasig.png'

import CustomButton from '@/components/common/button'

const page = () => {
    return (
        <div>
            <HeroSectionImg
                title='Trauma Healing'
                img={Bgimg}
            />

            <div className='bg-bg-white-varient py-[60px] px-5 lg:px-0'>
                <div className="container mx-auto max-w-7xl">
                    <p className='text-[#303030] text-base lg:text-2xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
                </div>

                <div className="section-3 container mx-auto max-w-7xl mt-10 lg:mt-[80px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-5 lg:gap-10 text-center lg:text-left">
                        <div className="right flex flex-col gap-5 order-2 lg:order-1">
                            <div className="title flex flex-col gap-5">
                                <h4 className=' text-2xl lg:text-[40px] text-[#26AF9F] font-semibold'>Manisha Billimoria</h4>
                                <p className='uppercase font-normal text-lg'>Counselor & Therapist at Umbartha Beyond Thresholds</p>
                            </div>
                            <p className='text-[#4E4E4E] font-normal text-base lg:text-lg text-center lg:text-left'>A renowned speaker, and bestselling author, Dr. Gabor Maté is highly sought after for his expertise on a range of topics including addiction, stress and childhood development.</p>

                            <div className="btn-group flex flex-col lg:flex-row gap-10 items-center">
                                <CustomButton text="Make an Appointment" />
                                <Image src={Sig} alt='signature' width={228} height={141} />
                            </div>

                        </div>

                        <div className="manisha relative w-auto  h-[400px] lg:h-full flex items-end order-1 lg:order-2">
                            <Image src={manisha} alt='manisha' fill className='object-contain lg:object-right object-center' />
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default page