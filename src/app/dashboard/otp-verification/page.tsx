import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="title">
                <h3 className=' text-[28px] font-bold'>OTP Verification</h3>
                <p className='text-[#666] text-lg font-normal'>We will send you verification code to your mobile number</p>
            </div>

            <div className="form flex flex-col gap-10">
                <input type="text" placeholder='Phone number' className='w-full rounded-xl py-3 px-4 border-2 border-[#ECECEC;]' />

                <div className="flex flex-row items-end justify-end">
                    <div className="flex flex-row gap-5 font-semibold text-base">
                        <button>Back</button>
                        <button className='bg-[#272727] rounded-xl py-[17px] px-[40px] text-white' >Get OTP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page