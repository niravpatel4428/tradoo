"use client"

import React from 'react'
import Button from '../components/Button'

const WantPart = () => {
    return (
        <>
            {/* Want Part */}
            <div className="block max-xs:py-16 py-24 bg-darkjunglegreen relative">
                <div className="container">
                    <div className="flex flex-wrap flex-col md:text-center max-xs:gap-6 gap-10 relative z-10">
                        <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                            <h2>Want to be part of this early on?</h2>
                        </div>

                        <div className="block">
                            <Button label='Join Waitlist' href='#' trailingIcon={true} variant='contrastdefault' size='L' className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Want Part */}
        </>
    )
}

export default WantPart
