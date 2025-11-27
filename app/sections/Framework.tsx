"use client";

import React from "react";
import Badge from "../components/Badge";
import Image from "next/image";
import Button from "../components/Button";
import graph from "@/public/image/svg/graph.svg";
import chart from "@/public/image/svg/chart.svg";
import globus from "@/public/image/svg/globus.svg";
import turning from "@/public/image/svg/turning.svg";

const Framework: React.FC = () => {
  const items = [
    {
      icon: graph,
      title: "Market Regimes",
      text: "Identifying whether markets are in trend, range or stress — establishing the context for rational decisions.",
    },
    {
      icon: chart,
      title: "Volatility & Liquidity",
      text: "Recognising shifts in risk conditions and evaluating how they affect stability.",
    },
    {
      icon: globus,
      title: "Macro & Behaviour",
      text: "Integrating broader narratives, sentiment and price behaviour to reduce noise.",
    },
    {
      icon: turning,
      title: "Structured Weighting",
      text: "Translating the full picture into disciplined portfolio adjustments within your risk boundaries.",
    },
  ];

  return (
    <div className="max-xs:py-10 max-xs:pb-2 max-sm:pb-2 py-42">
      <div className="max-sm:p-0 container">
        <div>
          <div className="grid grid-cols-12 gap-7">
            <div className="lg:col-span-6 col-span-12">
              <div className="max-sm:px-4 flex flex-col h-full gap-y-6 justify-center w-full max-w-161">
                <div>
                  <Badge label="The Tradoo Framework" />
                </div>
                <div>
                  <h3 className="max-xs:tracking-[-1px] max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xl:text-56 font-semibold text-primary tracking-[-1.68px] xl:leading-16">
                    Structured by Design.{" "}
                    <span className="block text-gray">
                      Adaptive by Discipline.
                    </span>
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-normal leading-[144%] text-darkgray">
                    Tradoo interprets market regimes, volatility shifts and
                    behavioural dynamics to form a clear view of the current
                    environment — guiding disciplined portfolio weighting within
                    your chosen risk profile.
                  </p>
                </div>
                <div className="mt-4">
                  <Button
                    label="Explore the Tradoo Aproach"
                    href="#"
                    trailingIcon
                    className="max-xs:text-sm max-xs:gap-5"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="max-xs:mt-8 max-sm:mt-17 w-full lg:max-w-171 ml-auto">
                <div className="grid grid-cols-12 gap-2">
                  {items.map((item, index) => (
                    <div key={index} className="col-span-12 sm:col-span-6">
                      <div className="bg-white rounded-3xl p-5 xxl:p-8 flex flex-col gap-y-12 xxl:gap-y-13 justify-between h-full">
                        <div className="w-16 h-16 rounded-xl p-3 bg-background flex justify-center items-center">
                          <Image
                            src={item.icon}
                            alt="icon"
                            className="max-h-full"
                          />
                        </div>

                        <div className="flex flex-col gap-4">
                          <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-primary">
                            {item.title}
                          </span>

                          <p className="font-normal text-lg leading-[144%] text-darkgray">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framework;
