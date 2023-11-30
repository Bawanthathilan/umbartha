import React from 'react'
import Card1 from '../Card1'

import Icon1 from '@/assets/home/what-we-offer/Icon3.png'
import Icon2 from '@/assets/home/what-we-offer/Icon2.png'
import Icon3 from '@/assets/home/what-we-offer/Icon1.png'
import Icon4 from '@/assets/home/what-we-offer/Icon4.png'

const WhatWeOffer = () => {
    return (
        <div className=' bg-white-bg-gradient py-5 lg:py-[79px]'>
            <div className='container max-w-7xl mx-auto'>
                <div className="title hidden lg:block">
                    <h4 className='text-[42px] font-bold'>What We Offer</h4>
                </div>

                <div className="card-grid mt-[33px] flex flex-row justify-between">
                    <Card1
                        img={Icon1}
                        title='Individual Session'
                        description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                    />

                    <Card1
                        img={Icon2}
                        title='Couples Session'
                        description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                    />

                    <Card1
                        img={Icon3}
                        title='Single Session Therapy'
                        description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                    />

                    <Card1
                        img={Icon4}
                        title='Family Session'
                        description='Here we create a safe and secure space for clients to openly talk about struggles they face.'
                    />
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer