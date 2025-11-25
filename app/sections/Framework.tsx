"use client";

import React from "react";
import Badge from "../components/Badge/Badge";
import Image from "next/image";
import Button from "../components/Button/Button";
import graph from "@/public/image/svg/graph.svg";

const Framework: React.FC = () => {
  return (
    <div className="py-42">
      <div className="container">
        <div>
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-6">
              <div className="flex flex-col h-full gap-y-6 justify-center w-full max-w-161">
                <div>
                  <Badge label="The Tradoo Framework" />
                </div>
                <div>
                  <h3 className="text-56 font-semibold text-primary tracking-[-1.68px] leading-16">
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
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="w-full max-w-171 ml-auto">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-6">
                    <div className="bg-white rounded-3xl p-8">
                        <div className="w-16 h-16 rounded-xl p-3 bg-background flex justify-center items-center">
                            <Image src={graph} alt="icon" />
                        </div>
                    </div>
                  </div>
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
