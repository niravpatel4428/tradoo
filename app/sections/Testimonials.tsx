"use client";

import React, { useEffect, useRef } from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import gsap from "gsap";

import TestimonialQuoteIcon from "@/public/image/svg/testimonial-quote.svg";

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

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate track for infinite loop
    track.innerHTML += track.innerHTML;

    let pos = 0;
    let speed = 1.2;
    let isDragging = false;
    let startX = 0;
    let lastX = 0;

    const animate = () => {
      if (!isDragging) pos -= speed;

      const width = track.scrollWidth / 2;
      if (pos <= -width) pos = 0;

      gsap.set(track, { x: pos });
      requestAnimationFrame(animate);
    };

    animate();

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
      pos += delta;
    };

    const onUp = () => (isDragging = false);

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
    <div className="block pt-[168px] pb-[72px] max-xs:py-16 bg-darkjunglegreen">
      {/* Title Section */}
      <div className="block max-xs:mb-16 mb-24">
        <div className="container">
          <Badge label="Testimonials" variant="darkgreen" className="mb-6" />

          <div className="block font-semibold text-white text-40 leading-[46px] xl:text-56 xl:leading-16 max-xs:text-[32px] max-xs:leading-[40px] max-xs:mb-6 mb-10 -tracking-[1.20px]">
            <h2>
              Trusted by Early Supporters, <br className="hidden lg:block" />
              Advisors and Pre-Seed Investors.
            </h2>
          </div>

          <div className="max-w-[566px] text-lg max-xs:text-base text-gray400 leading-[144%]">
            Real feedback from people who know us personally. Pre-seed investors,
            advisors and early testers from our network sharing their genuine
            impressions.
          </div>
        </div>
      </div>

      {/* Infinite Testimonials Marquee */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-2">
          {testimonials.map((item, i) => (
            <div key={i} className="select-none shrink-0 w-141.5 max-sm:w-[85%]">
              <div className="select-none flex flex-col gap-8 max-xs:gap-6 bg-darkGunmetal p-10 max-xs:p-6 text-lg max-xs:text-base leading-tight rounded-2xl">
                <Image src={TestimonialQuoteIcon} alt="Quote" className="mb-4 max-xs:mb-2" />

                <p className="select-none text-gray400 leading-[144%]">{item.quote}</p>

                <div className="flex flex-col gap-1 mt-6 max-xs:mt-3 text-white">
                  <p className="select-none">{item.name}</p>
                  <p className="select-none">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}