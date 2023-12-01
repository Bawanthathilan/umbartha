import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import CounsellorCard from '@/components/counsellor/counsellerCard'

import Img1 from '@/assets/home/counsellor/1.png'
import Img2 from '@/assets/home/counsellor/2.png'
import Img3 from '@/assets/home/counsellor/3.png'
import Img4 from '@/assets/home/counsellor/4.png'

const page = () => {
    return (
        <div>
            <HeroSection
                subtitle='Counsellor'
                title='Meet our Counsellor'
                left={true}
            />

            <div className=' bg-[#F9F6F3] pb-14 '>
                <div className="container mx-auto max-w-6xl px-5 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">

                        <div className="item">
                            <CounsellorCard
                                img={Img1}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item -mt-0 lg:-mt-10">
                            <CounsellorCard
                                img={Img2}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item">
                            <CounsellorCard
                                img={Img3}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>

                        <div className="item -mt-0 lg:-mt-10">
                            <CounsellorCard
                                img={Img4}
                                name='Jaxson Donin'
                                designation='Counsellor & Therapist'
                                desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default page