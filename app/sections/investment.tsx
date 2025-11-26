"use client";
import React from "react";
import Image from "next/image";
import dashboard from "@/public/image/dashboard.png";
import key from "@/public/image/svg/key.svg";
import eye from "@/public/image/svg/eye.svg";
import turningicon from "@/public/image/svg/turningicon.svg"; 
import mobiledshboard from "@/public/image/mobiledshboard.png"; 

const Investment: React.FC = () => {
  const features = [
    {
      icon: key,
      alt: "key",
      title: "Simple Onboarding",
      desc: "Email or wallet. No seed phrase required.", 
    },
    {
      icon: eye,
      alt: "eye",
      title: "Transparent Decisions",
      desc: "Clear explanations for changes and market context.",
    },
    {
      icon: turningicon,
      alt: "turningicon",
      title: "Adaptive Weighting",
      desc: "Continuous monitoring and structured adjustments.",
    },
  ];

  return (
    <div className="max-xs:py-10 max-md:pb-2 py-42 bg-white">
      <div>
        <div className="container">
          <div>
            <div>
              <h4 className="max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-56 font-semibold tracking-[-1.68px] xxl:leading-16 text-primary">
                <span className="text-gray block">The Tradoo Dashboard —</span>{" "}
                a clear and structured view of your investments.
              </h4>
            </div>
            <div className="mt-12 w-full max-w-171">
              <p className="text-darkgray text-lg font-normal leading-[144%]">
                The Tradoo Dashboard brings together your portfolio allocation,
                risk profile, market context and historical performance into one
                transparent, easy-to-understand view.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:mt-14 flex justify-center relative dashboard-image">
        <Image src={dashboard} alt="dashboard" className="hidden md:block" />
        <Image src={mobiledshboard} alt="dashboard" className="block md:hidden" />
        {/* <div className="absolute left-0 right-0 bottom-[-1px] z-10">
          <svg
            className="w-full"
            width="1920"
            height="160"
            viewBox="0 0 1920 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1920"
              height="160"
              fill="url(#paint0_linear_133_5142)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_133_5142"
                x1="960"
                y1="0"
                x2="960"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
      </div>
      <div className="mt-8">
        <div className="container p-0">
          <div>
            <div className="grid grid-cols-12 gap-2">
              {features.map((item, index) => (
                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="h-full rounded-3xl bg-background p-5 xxl:p-8 flex gap-6 items-center">
                    <div className="rounded-xl w-16 h-16 min-w-16 flex justify-center items-center bg-white p-3">
                      <Image src={item.icon} alt={item.alt} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg font-semibold leading-6 text-primary">
                        {item.title}
                      </span>
                      <span className="text-lg font-normal leading-6 text-darkgray">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
