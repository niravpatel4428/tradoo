"use client";

import Image from "next/image"; 
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import CleanRiskImg1 from "@/public/image/svg/clean-risk-icon1.svg";
import CleanRiskImg2 from "@/public/image/svg/clean-risk-icon2.svg";
import CleanRiskImg3 from "@/public/image/svg/clean-risk-icon3.svg";
import CleanRiskImg4 from "@/public/image/svg/clean-risk-icon4.svg";
import CleanRiskImg5 from "@/public/image/svg/clean-risk-icon5.svg";
import CleanRiskImg6 from "@/public/image/svg/clean-risk-icon6.svg";
import CleanRiskImg7 from "@/public/image/svg/clean-risk-icon7.svg";

const features = [
  { title: "Tradoo AI", img: CleanRiskImg1, href: "/" },
  { title: "Market Regimes", img: CleanRiskImg2, href: "/" },
  { title: "Risk Factors", img: CleanRiskImg3, href: "/" },
  { title: "Rebalancing Discipline", img: CleanRiskImg4, href: "/" },
  { title: "Structured Allocation", img: CleanRiskImg5, href: "/" },
  { title: "Continuous Monitoring", img: CleanRiskImg6, href: "/" },
  { title: "Smart Contract Vaults", img: CleanRiskImg7, href: "/" },
  { title: "Tradoo AI", img: CleanRiskImg1, href: "/" },
  { title: "Market Regimes", img: CleanRiskImg2, href: "/" },
  { title: "Risk Factors", img: CleanRiskImg3, href: "/" },
  { title: "Rebalancing Discipline", img: CleanRiskImg4, href: "/" },
  { title: "Structured Allocation", img: CleanRiskImg5, href: "/" },
  { title: "Continuous Monitoring", img: CleanRiskImg6, href: "/" },
  { title: "Smart Contract Vaults", img: CleanRiskImg7, href: "/" },
];

export default function CleanRisk() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate items for seamless infinite loop
    track.innerHTML += track.innerHTML;

    let pos = 0;
    let speed = 1.2; // moving speed
    let isDragging = false;
    let startX = 0;
    let lastX = 0;

    const update = () => {
      if (!isDragging) pos -= speed; // move left continuously
      
      const width = track.scrollWidth / 2;
      if (pos <= -width) pos = 0; // loop reset invisible

      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(update);
    };

    update();

    // Drag events
    const onDown = (e: any) => {
      isDragging = true;
      startX = e.clientX || e.touches?.[0].clientX;
      lastX = startX;
    };

    const onMove = (e: any) => {
      if (!isDragging) return;
      const x = e.clientX || e.touches?.[0].clientX;
      const delta = x - lastX;
      lastX = x;
      pos += delta; // drag direction
    };

    const onUp = () => {
      isDragging = false;
    };

    track.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    track.addEventListener("touchstart", onDown);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);

    return () => {
      track.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);

      track.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div className="py-24 max-xs:py-16 relative z-20">
      <div className="container mb-12">
        <h2 className="font-semibold text-primary text-40 max-xs:text-[32px] leading-[46px] xl:text-56 xl:leading-16 tracking-[-1.68px]">
          <span className="text-gray">You choose a clear risk profile — </span>system handles allocation, continuous monitoring, and data-backed adjustments while you keep full control of your assets.
        </h2>
      </div>

      {/* Infinite Ticker */}
      <div ref={wrapperRef} className="overflow-hidden w-full">
        <div ref={trackRef} className="ticker-track">
          {features.map((item, i) => (
            <div key={i} className="ticker-item">
              <Link
                href={item.href}
                className="pointer-events-none flex items-center gap-3 bg-white rounded-3xl py-5 px-8 hover:bg-grayprimary"
              >
                <Image src={item.img} alt={item.title} className="w-8 h-8" />
                <span className="font-medium text-primary text-lg leading-5">{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
