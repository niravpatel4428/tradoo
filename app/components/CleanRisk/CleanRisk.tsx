"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import CleanRiskImg1 from '@/public/image/svg/clean-risk-icon1.svg'
import CleanRiskImg2 from '@/public/image/svg/clean-risk-icon2.svg'
import CleanRiskImg3 from '@/public/image/svg/clean-risk-icon3.svg'
import CleanRiskImg4 from '@/public/image/svg/clean-risk-icon4.svg'
import CleanRiskImg5 from '@/public/image/svg/clean-risk-icon5.svg'
import CleanRiskImg6 from '@/public/image/svg/clean-risk-icon6.svg'
import CleanRiskImg7 from '@/public/image/svg/clean-risk-icon7.svg'

const features = [
  {
    title: "Tradoo AI",
    img: CleanRiskImg1,
    href: "/",
  },
  {
    title: "Market Regimes",
    img: CleanRiskImg2,
    href: "/",
  },
  {
    title: "Risk Factors",
    img: CleanRiskImg3,
    href: "/",
  },
  {
    title: "Rebalancing Discipline",
    img: CleanRiskImg4,
    href: "/",
  },
  {
    title: "Structured Allocation",
    img: CleanRiskImg5,
    href: "/",
  },
  {
    title: "Continuous Monitoring",
    img: CleanRiskImg6,
    href: "/",
  },
  {
    title: "Smart Contract Vaults",
    img: CleanRiskImg7,
    href: "/",
  },
  {
    title: "Tradoo AI",
    img: CleanRiskImg1,
    href: "/",
  },
  {
    title: "Market Regimes",
    img: CleanRiskImg2,
    href: "/",
  },
  {
    title: "Risk Factors",
    img: CleanRiskImg3,
    href: "/",
  },
  {
    title: "Rebalancing Discipline",
    img: CleanRiskImg4,
    href: "/",
  },
  {
    title: "Structured Allocation",
    img: CleanRiskImg5,
    href: "/",
  },
  {
    title: "Continuous Monitoring",
    img: CleanRiskImg6,
    href: "/",
  },
  {
    title: "Smart Contract Vaults",
    img: CleanRiskImg7,
    href: "/",
  },
];

const CleanRisk = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            el.scrollLeft += e.deltaY; // convert vertical → horizontal
        };

        el.addEventListener("wheel", onWheel, { passive: false });

        return () => el.removeEventListener("wheel", onWheel);
    }, []);
    return (
        <>
            {/* Clean Risk */}
            <div className="block overflow-hidden py-24 max-xs:py-16">
                <div className="flex flex-wrap flex-col gap-16 max-xs:gap-10">
                    {/* Section Main Title */}
                    <div className="block w-full">
                        <div className="container">
                            <div className="block w-full font-semibold text-primary text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                                <h2><span className='text-gray'>You choose a clear risk profile</span> — system handles allocation, continuous monitoring, and data-backed adjustments while you keep full control of your assets.</h2>
                            </div>
                        </div>
                    </div>
                    {/* Section Main Title */}

                    {/* Features List */}
                    <div className="block w-full overflow-hidden pl-3 lg:pl-[calc(50vw-496px)] xl:pl-[calc(50vw-593px)] xxl:pl-[calc(50vw-700px)]">
                        <div ref={scrollRef} className="block w-full overflow-auto scrollbar-hide scroll-smooth">
                            <ul className="flex items-center gap-2 whitespace-nowrap text-primary text-lg max-xs:text-base leading-tight">
                                {features.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="flex items-center gap-3 bg-white rounded-3xl max-xs:rounded-xl py-5 max-xs:py-3 px-8 max-xs:px-4 transition hover:bg-grayprimary">
                                            {/* Render only if image exists */}
                                            {item.img && (
                                            <span className="flex items-center justify-center w-8 h-8">
                                                <Image src={item.img} alt={item.title} className="max-w-full max-h-full" />
                                            </span>
                                            )}

                                            <span className="font-medium">{item.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Features List */}
                </div>
            </div>
            {/* Clean Risk */}
        </>
    )
}

export default CleanRisk
