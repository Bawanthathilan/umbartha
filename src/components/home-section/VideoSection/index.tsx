import React from 'react'
import Image from 'next/image'
import Thubnail from '@/assets/home/videoSection/video.png'

const VideoSection = () => {
  return (
    <>
      <div className='top bg-white pt-[37px] h-full relative'>
        <div className="container mx-auto z-10 ">
          <div className="title flex flex-col items-center text-center gap-3">
            <h4 className=' text-black text-[20px] lg:text-[32px] font-medium'>Umbartha Makes You</h4>
            <h1 className='text-black font-bold text-[32px] lg:text-[48px]'>Better and Better Every Day,<br />
              in Every Way</h1>
          </div>

          <div className="video relative max-w-7xl h-[250px] lg:h-[500px] container mx-auto">
            <Image src={Thubnail} alt='thumbnail' fill className='mt-10 rounded-3xl' />
          </div>
        </div>

        <div className="bottom bg-[#004139] h-[550px] lg:h-[600px] w-full inset-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto">
            <div className="content flex flex-col h-auto justify-end pb-10 lg:pb-[145px] px-10 lg:px-0 w-full max-w-5xl text-white gap-5">
              <h1 className=' text-[32px] lg:text-5xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className=' text-[16px] lg:text-xl font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoSection