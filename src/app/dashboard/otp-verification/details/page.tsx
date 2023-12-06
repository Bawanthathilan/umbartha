import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="title">
                <h3 className=' text-[28px] font-bold'>Appointment Details</h3>

            </div>

            <div className="form flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <input type="text" placeholder='Enter yor name' className=' w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />
                    <input type="text" placeholder='Enter yor age' className=' w-full md:w-1/2 rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />
                </div>
                <input type="text" placeholder='Enter yor email' className='w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />
                <input type="text" placeholder='Phone' className='w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />
                <textarea placeholder='Your comment' className='w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />


                <div className="flex flex-row items-end justify-end">
                    <div className="flex flex-row gap-5 font-semibold text-base">
                        <button>Back</button>
                        <button className='bg-[#272727] rounded-xl py-[17px] px-[40px] text-white' >Confirm Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page