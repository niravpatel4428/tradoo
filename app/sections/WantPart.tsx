"use client"

import React from 'react'
import Button from '../components/Button/Button'

const WantPart = () => {
    return (
        <>
            {/* Want Part */}
            <div className="block max-[390px]:py-16 py-24 bg-darkjunglegreen relative">
                <div className="container">
                    <div className="flex flex-wrap flex-col md:text-center max-[390px]:gap-6 gap-10 relative z-10">
                        <div className="block font-semibold text-white text-[40px] leading-[46px] -tracking-[1.20px] max-[390px]:text-[32px] max-[390px]:leading-[40px] max-[390px]:-tracking-[0.7px] xl:text-[56px] xl:leading-16 xl:-tracking-[1.68px]">
                            <h2>Want to be part of this early on?</h2>
                        </div>

                        <div className="block">
                            <Button label='Join Waitlist' href='#' trailingIcon="true" variant='contrastdefault' size='L' className='mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Want Part */}
        </>
    )
}

export default WantPart
