import React from 'react'
import Image from 'next/image'
import Thubnail from '@/assets/home/videoSection/video.png'

const VideoSection = () => {
  return (
    <div>
      <div className='top bg-white py-[37px] relative'>
        <div className="container mx-auto z-50 relative">
          <div className="title flex flex-col items-center text-center gap-3">
            <h4 className=' text-black text-[32px] font-medium'>Umbartha Makes You</h4>
            <h1 className='text-black font-bold text-[48px]'>Better and Better Every Day,<br />
              in Every Way</h1>
          </div>

          <div className="video relative max-w-7xl h-[500px] container mx-auto">
            <Image src={Thubnail} alt='thumbnail' fill className='mt-10 rounded-3xl' />
          </div>
        </div>

        <div className="bottom bg-[#004139] h-full absolute w-full top-[70%] -z-1">
          <div className="grid grid-cols-2 h-full max-w-7xl mx-auto">

            <div className="content flex flex-col h-auto justify-end pb-10  w-full max-w-5xl text-white gap-5">
              <h1 className=' text-5xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className=' text-xl font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default VideoSection