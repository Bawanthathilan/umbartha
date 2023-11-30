import React from 'react'
import '@/components/home-section/Testimonial/style.css';
import { Kaisei_Decol } from 'next/font/google';

const KaiseiDecol = Kaisei_Decol({ subsets: ['latin'], weight: ['400', '500', '700'] })

const Testimonial = () => {
    return (
        <div>
            <div className='container max-w-7xl mx-auto pt-[149px]'>
                <div className="title">
                    <h4 className='text-[48px] font-bold text-black'>Testimonials </h4>
                </div>


            </div>

            <div className='bg-testimonial-image bg-cover h-screen'>
                <div className="slider-container-testimonial  flex flex-col items-center justify-center gap-[37px] ">
                    <h1 className={`${KaiseiDecol.className} text-[64px] font-bold text-center`}>Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua.</h1>
                </div>
            </div>
        </div>
    )
}

export default Testimonial