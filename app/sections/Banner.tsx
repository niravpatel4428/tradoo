"use client";

import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import Button from "../components/Button";
import dashboard from "@/public/image/dashboard.png";
import mobiledshboard from "@/public/image/mobiledshboard.png";

const Banner: React.FC = () => {
  const data = [
    {
      percentage: "100%",
      title: "User-controlled investment accounts",
      tag: "Non-Custodial",
    },
    {
      percentage: "250M+",
      title: "Market and risk factors monitored",
      tag: "Structured Analytics",
    },
    {
      percentage: "6+1",
      title: "Defined risk profiles",
      tag: "Clear Frameworks",
    },
    {
      percentage: "24/7",
      title: "Adaptive monitoring and weighting",
      tag: "Continuous Oversight",
    },
  ];

  return (
    <div className="max-xs:pt-10 pt-24">
      <div>
        <div className="container">
          <div className="text-left md:text-center">
            <Badge
              label="Adaptive Investment Framework"
              icon={
                <Image
                  src="/image/svg/badgedarkgreen.svg"
                  alt="icon"
                  width={15}
                  height={15}
                />
              }
            />
            <div className="w-full max-w-250 mx-auto mt-8">
              <h1 className="max-xs:tracking-[-1px] max-xs:text-3xl text-5xl xxl:text-80 font-semibold xxl:leading-22 tracking-[-2.40px] text-left md:text-center text-primary">
                Next Generation of Intelligent Wealth Management.
              </h1>
            </div>
            <div className="mt-8 w-full max-w-230 mx-auto">
              <p className="text-lg leading-[144%] font-normal">
                Tradoo provides a structured view of the market, applies a
                disciplined risk framework and adjusts portfolio weightings with
                precision while you retain full control of your capital.
              </p>
            </div>
            <div className="max-sm:flex-col max-sm:items-start flex gap-4 justify-center mt-12">
              <Button label="Join Waitlist" href="#" trailingIcon />
              <Button label="Learn More" href="#" variant="secondarydefault" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:mt-20 flex justify-center relative banner-dashboard-image">
        <Image src={dashboard} alt="dashboard" className="hidden md:block" />
        <Image
          src={mobiledshboard}
          alt="dashboard"
          className="block md:hidden" 
        />
      </div>
      <div className="mt-10">
        <div className="container">
          <div className="max-xs:pb-10 pb-24 border-b-2 border-solid border-b-grayprimary">
            <div className="grid grid-cols-12 gap-y-14 sm:gap-6">
              {data.map((item, index) => (
                <div
                  className="col-span-12 sm:col-span-6 lg:col-span-3"
                  key={index}
                >
                  <div className="flex flex-col gap-4 items-start">
                    <h2 className="text-40 xxl:text-5xl font-semibold leading-16 tracking-[-1.68px] text-primary">
                      {item.percentage}
                    </h2>

                    <p className="text-lg leading-[144%] font-normal">
                      {item.title}
                    </p>

                    <span className="inline-flex py-2 px-3 rounded-6 bg-grayprimary text-base font-medium leading-4.5">
                      {item.tag}
                    </span>
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

export default Banner;
