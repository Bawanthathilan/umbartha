"use client"
import React from 'react'
import PatientCard from '@/components/dashboard/common/patientCard';
import Image from 'next/image'
import manisha from '@/assets/home/aboutus/manisha.png'
import Calender from '@/components/dashboard/common/Calender';
import DateChip from '@/components/dashboard/common/DateChip';


const page = () => {
    return (
        <div className='flex flex-row gap-6 w-full'>
            <div className="left flex w-1/2 flex-col gap-5">
                <div className="search">
                    <input type="text" placeholder='Search' className='w-full rounded-[40px] py-3 px-4 border-2 border-[#ECECEC;]' />
                </div>
                <PatientCard
                    img={manisha}
                    name='Manisha Billimoria'
                    designation='Counsellor & Therapist'
                    year={5}
                />
                <PatientCard
                    img={manisha}
                    name='Manisha Billimoria'
                    designation='Counsellor & Therapist'
                    year={5}
                />
                <PatientCard
                    img={manisha}
                    name='Manisha Billimoria'
                    designation='Counsellor & Therapist'
                    year={5}
                />
                <PatientCard
                    img={manisha}
                    name='Manisha Billimoria'
                    designation='Counsellor & Therapist'
                    year={5}
                />
                <PatientCard
                    img={manisha}
                    name='Manisha Billimoria'
                    designation='Counsellor & Therapist'
                    year={5}
                />
            </div>

            <div className="right w-full flex flex-col gap-10">
                <div className='flex group flex-row  gap-5 items-center justify-between  text-black ' >

                    <div className='flex gap-5 items-center'>
                        <Image src={manisha} alt='manisha' width={60} height={60} className='rounded-full' />

                        <div className="rigth flex flex-col gap-0 ">
                            <h4 className='text-[20px] font-semibold'>Manisha Billimoria</h4>
                            <p className='text-sm font-medium'>Counsellor & Therapist</p>
                        </div>
                    </div>


                    <button className='bg-black py-[17px] px-10  text-white text-sm font-medium rounded-xl'>Proceed</button>
                </div>

                <div className="flex flex-col gap-5">

                    <div className="title">
                        <h4 className='text-[#666] text-sm font-semibold uppercase'>Choose type</h4>
                    </div>
                    <div className=' flex flex-row gap-5'>
                        <div className="flex w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] hover:border-[#26AF9F] rounded-xl bg-white hover:bg-[#F0FFFD] text-black hover:text-green-theme ">
                            <div className="flex">
                                <div className="cont">
                                    <h4 className=' text-lg font-semibold'>Online Meeting</h4>
                                    <p className=' text-[10px] font-medium'>Via Zoom</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full cursor-pointer flex-row gap-5 px-7 py-7 border-2 border-[#ECECEC] hover:border-[#26AF9F] rounded-xl bg-white hover:bg-[#F0FFFD] text-black hover:text-green-theme ">
                            <div className="flex">
                                <div className="cont">
                                    <h4 className=' text-lg font-semibold'>Online Meeting</h4>
                                    <p className=' text-[10px] font-medium'>Via Zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="div flex flex-row gap-5">

                    <div className="calender">
                        <div className="title">
                            <h4 className='text-[#666] text-sm font-semibold uppercase'>Select Date and Time</h4>
                        </div>
                        <Calender />
                    </div>


                    <div className="flex flex-col w-full gap-5">
                        <div className="title">
                            <h4 className='text-black text-sm font-semibold uppercase'>Wednesday, November 1</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <DateChip
                                date='09:00'
                            />
                            <DateChip
                                date='09:00'
                            />
                            <DateChip
                                date='09:00'
                            />
                            <DateChip
                                date='09:00'
                            />
                            <DateChip
                                date='09:00'
                            />
                            <DateChip
                                date='09:00'
                            />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page