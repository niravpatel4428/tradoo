"use client"

import React from 'react'
import Badge from '../components/Badge/Badge'
import TestimonialQuoteIcon from "@/public/image/svg/testimonial-quote.svg";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "The framework gives me confidence. I can see exactly how the risk model is structured, and that clarity alone takes a lot of stress out of thinking about crypto investing.",
    name: "Early Internal Tester",
    location: "38, Switzerland",
  },
  {
    quote:
      "I know Jens and the team from Switzerland and was previously invested in WeSendit. What they are building here is on a completely different level. Honestly, I am tired of constantly trying to time the market myself. If this system can execute a structured profile the way they describe it, that would be a massive relief. Incredible that something like this has not been built in this space before.",
    name: "Angel Investor,",
    location: "Former WeSendit Backer",
  },
  {
    quote:
      "The clarity of the risk framework is what convinced me to invest. No guessing, no second guessing. The approach is disciplined and transparent from the ground up.",
    name: "Pre Seed Investor,",
    location: "41",
  },
  {
    quote:
      "The framework gives me confidence. I can see exactly how the risk model is structured, and that clarity alone takes a lot of stress out of thinking about crypto investing.",
    name: "Early Internal Tester",
    location: "38, Switzerland",
  },
  {
    quote:
      "I know Jens and the team from Switzerland and was previously invested in WeSendit. What they are building here is on a completely different level. Honestly, I am tired of constantly trying to time the market myself. If this system can execute a structured profile the way they describe it, that would be a massive relief. Incredible that something like this has not been built in this space before.",
    name: "Angel Investor,",
    location: "Former WeSendit Backer",
  },
  {
    quote:
      "The clarity of the risk framework is what convinced me to invest. No guessing, no second guessing. The approach is disciplined and transparent from the ground up.",
    name: "Pre Seed Investor,",
    location: "41",
  },
];

const Testimonials = () => {
    return (
        <>
            {/* Testimonials */}
            <div className="block pt-[168px] pb-[72px] bg-darkjunglegreen">
                {/* Section Main Title */}
                <div className="block max-[390px]:mb-6 mb-24">
                    <div className="container">
                        <div className="block">
                            <Badge label='Testimonials' variant='darkgreen' className='mb-6' />
                            
                            <div className="block font-semibold text-white text-[40px] leading-[46px] -tracking-[1.20px] max-[390px]:text-[32px] max-[390px]:leading-[40px] max-[390px]:-tracking-[0.7px] xl:text-[56px] xl:leading-16 xl:-tracking-[1.68px] max-[390px]:mb-6 mb-10">
                                <h2>Trusted by Early Supporters, <br className='hidden lg:block'/>Advisors and Pre-Seed Investors.</h2>
                            </div>
                            
                            <div className="block max-w-[566px] text-lg leading-tight text-gray400">
                                <p>Real feedback from people who know us personally. Pre-seed investors, advisors and early testers from our network sharing their genuine impressions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section Main Title */}

                {/* Testimonial Slider */}
                <div className="block lg:pl-[calc(50vw-496px)] xl:pl-[calc(50vw-593px)] xxl:pl-[calc(50vw-700px)]">
                    <Swiper
                        // modules={[Pagination]}
                        // pagination={{ clickable: true }}
                        spaceBetween={8}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1.25 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.50 },
                            1440: { slidesPerView: 2.85 },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex flex-col gap-8 bg-darkGunmetal p-10 text-lg leading-tight rounded-2xl">
                                    <div className="block mb-4">
                                      <Image src={TestimonialQuoteIcon} alt="Testimonial Quote Icon" />
                                    </div>

                                    <div className="block text-gray400">
                                        <p className="">{item.quote}</p>
                                    </div>

                                    <div className="flex flex-col gap-1 mt-6 text-white">
                                        <p>{item.name}</p>
                                        <p>{item.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Testimonial Slider */}
            </div>
            {/* Testimonials */}
        </>
    )
}

export default Testimonials
