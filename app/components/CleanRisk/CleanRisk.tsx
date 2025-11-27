"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
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


const CleanRisk: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null); // horizontal scroll wrapper (ul container)
  const sectionRef = useRef<HTMLDivElement | null>(null); // overall section to pin
  const tlRef = useRef<any>(null); // store the GSAP timeline/trigger so we can kill on unmount

  useEffect(() => {
    let ctx: any;
    let ScrollTrigger: any;
    let gsap: any;

    const setup = async () => {
      // dynamic import to avoid SSR import errors
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.gsap ?? gsapModule.default ?? gsapModule;
      ScrollTrigger = stModule.ScrollTrigger ?? stModule.default ?? stModule;
      gsap.registerPlugin(ScrollTrigger);

      const container = scrollRef.current;
      const pinSection = sectionRef.current;
      if (!container || !pinSection) return;

      // ensure ul is selected
      const list = container.querySelector("ul");
      if (!list) return;

      // set some helpful styles for smooth translation (no layout jumps)
      gsap.set(list, { willChange: "transform" });
      gsap.set(container, { willChange: "transform" });

      // create context so all ScrollTriggers are cleaned up on unmount
      ctx = gsap.context(() => {
        // Recalculate sizes on refresh/resize
        const totalScroll = () => container.scrollWidth - container.clientWidth;

        // kill existing timeline if any (hot-reload safety)
        if (tlRef.current) {
          try { tlRef.current.kill?.(); } catch (e) {}
        }

        // animate the <ul> x from 0 to -totalScroll as the page is scrolled vertically
        tlRef.current = gsap.to(list, {
          x: () => -totalScroll(),
          ease: "none",
          inertia: false,
          // ScrollTrigger controls it: pin the section and scrub horizontally
          scrollTrigger: {
            trigger: pinSection,
            start: "top top",
            // end distance should be equal to the scrollable width so the scrub maps 1:1
            end: () => `+=${container.scrollWidth}`,
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true, // <-- enable for debugging
          },
        });
      }, pinSection);
    };

    setup().catch((err) => {
      // helpful console error if dynamic import fails
      // eslint-disable-next-line no-console
      console.error("GSAP dynamic import failed:", err);
    });

    return () => {
      // cleanup
      try {
        // kill timeline and ScrollTrigger instances created by gsap.context
        if (tlRef.current) {
          tlRef.current.kill?.();
          tlRef.current = null;
        }
        // ScrollTrigger cleanup
        const st = (window as any).ScrollTrigger;
        if (st && st.getAll) st.getAll().forEach((t: any) => t.kill?.());
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <>
      <div ref={sectionRef} className="block overflow-hidden py-24 max-xs:py-16 relative z-20">
        <div className="flex flex-wrap flex-col gap-16 max-xs:gap-10">
          <div className="block w-full">
            <div className="container">
              <div className="block w-full font-semibold text-primary text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px]">
                <h2>
                  <span className="text-gray">You choose a clear risk profile</span> — system handles
                  allocation, continuous monitoring, and data-backed adjustments while you keep full
                  control of your assets.
                </h2>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="block features-list-block w-full overflow-hidden pl-3 lg:pl-[calc(50vw-496px)] xl:pl-[calc(50vw-593px)] xxl:pl-[calc(50vw-700px)]">
            {/* IMPORTANT: this wrapper will be pinned by ScrollTrigger */}
            <div ref={scrollRef} className="block w-full overflow-visible">
              <ul className="flex items-center gap-2 whitespace-nowrap text-primary text-lg max-xs:text-base leading-tight">
                {features.map((item, index) => (
                  <li key={index} className="features-list-item min-w-auto">
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 bg-white rounded-3xl max-xs:rounded-xl py-5 max-xs:py-3 px-8 max-xs:px-4 transition hover:bg-grayprimary"
                    >
                      {item.img && (
                        <span className="flex flex-none items-center justify-center w-8 h-8">
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
    </>
  );
};

export default CleanRisk;
