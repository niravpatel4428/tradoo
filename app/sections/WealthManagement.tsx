"use client";

import React, { useRef } from "react";
import Badge from "../components/Badge";
import wave from "@/public/image/wave.png";
import Image from "next/image";
import Experience from "../components/Experience/Experience";

const WealthManagement = () => {
  const steps = [
    {
      number: 1,
      title: "Pick Your Risk Profile",
      detail:
        "Choose a disciplined, risk-based framework — from ultra-stable to adaptive. Your profile defines how assets are allocated.",
    },
    {
      number: 2,
      title: "Funds Go Into Smart-Contract Vaults",
      detail:
        "You keep full custody; rules execute transparently without intermediaries.",
    },
    {
      number: 3,
      title: "System Monitors and Adjusts",
      detail:
        "Market regimes, risk factors and disciplined rebalancing keep allocations aligned.",
    },
    {
      number: 4,
      title: "Structured Execution",
      detail:
        "The portfolio adjusts automatically based on data and logic, with every change visible.",
    },
  ];

  return (
    <>
      <div className="block relative -mt-100">
        {/* Wave Animation Code */}
        <div className="relative z-10">
          <Experience />
          {/* <Image src={wave} alt="wave" className='w-full h-full object-cover' /> */}
        </div>
        {/* Wave Animation Code */}

        <div className="block pb-2 md:pb-42 max-xs:pb-16 bg-darblue relative z-20 -mt-50">
          <div className="container max-sm:p-0">
            <div className="block">
              {/* Section Main Title */}
              <div className="max-sm:px-4 flex flex-wrap flex-col gap-6 mb-22 max-xs:mb-12 items-start">
                <Badge label="How Tradoo Works" variant="darkgreen" />

                <div className="block font-semibold text-white text-40 leading-[46px] -tracking-[1.20px] max-xs:text-[32px] max-xs:leading-[40px] max-xs:-tracking-[0.7px] xl:text-56 xl:leading-16 xl:-tracking-[1.68px] max-xs:mb-6 mb-10">
                  <h2>
                    Helping users invest with structured, risk-based wealth
                    management{" "}
                    <span className="text-gray500">
                      — transparent and disciplined. 
                    </span>
                  </h2>
                </div>
              </div>
              {/* Section Main Title */}

              {/* Section Main Content */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {steps.map((item) => (
                  <div key={item.number} className="block">
                    <div className="flex flex-col gap-14 max-xs:gap-6 bg-darkGunmetal rounded-xl md:rounded-3xl py-10 px-4 max-xs:py-6 md:p-6 xxl:p-10 h-full">
                      {/* Number */}
                      <div className="block font-semibold text-gray500 text-5xl max-xs:text-3xl leading-tight">
                        <span>{item.number}</span>
                      </div>

                      {/* Title + Detail */}
                      <div className="block">
                        {/* Title */}
                        <div className="block text-white text-2xl max-xs:text-lg leading-tight font-semibold capitalize mb-4">
                          <span>{item.title}</span>
                        </div>

                        {/* Detail */}
                        <div className="block text-gray400 text-lg max-xs:text-base leading-snug">
                          <p>{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Section Main Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WealthManagement;
