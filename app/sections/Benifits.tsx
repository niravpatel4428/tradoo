import React from "react";
import Badge from "../components/Badge";
import Image, { StaticImageData } from "next/image";

import benifits from "@/public/image/benifits.jpg";
import clipboardcheck from "@/public/image/svg/clipboardcheck.svg";
import turning from "@/public/image/svg/turning.svg";
import city from "@/public/image/svg/city.svg";
import shieldcheck from "@/public/image/svg/shieldcheck.svg";

interface BenefitItem {
  icon: StaticImageData;
  title: string;
  desc: string;
}

interface BenefitBlock {
  type: "image" | "double"; 
  img?: StaticImageData;
  title?: string;
  desc?: string;
  items?: BenefitItem[];
}

const Benifits: React.FC = () => {
  const benefitsData: BenefitBlock[] = [
    {
      type: "image",
      img: benifits,
      title: "Non-Custodial Structure",
      desc: "Your assets stay in your dedicated smart-contract vault under your control at all times. No pooled funds, no custodial risk, no middlemen.",
    },
    {
      type: "double",
      items: [
        {
          icon: clipboardcheck,
          title: "Real-Time Auditability",
          desc: "Every action is verifiable on-chain in real time. Clear audit trails ensure trust, oversight and complete visibility into your portfolio.",
        },
        {
          icon: turning,
          title: "Adaptive Risk Framework",
          desc: "Your risk profile enforces structured limits on exposure, drawdown and volatility, with Tradoo adjusting only within those predefined boundaries.",
        },
      ],
    },
    {
      type: "double",
      items: [
        {
          icon: city,
          title: "Regulatory-Ready Architecture",
          desc: "Tradoo's vault-based setup is naturally compatible with MiCA principles and modern compliance requirements, supporting long-term, secure growth.",
        },
        {
          icon: shieldcheck,
          title: "System Integrity & Security",
          desc: "Isolated user vaults, immutable execution logic and continuous monitoring ensure your assets are protected with institutional-grade security practices.",
        },
      ],
    },
  ];

  return (
    <div className="max-xs:py-10 max-md:pb-2 py-42">
      <div className="container max-sm:p-0">
        <div className="max-sm:px-4">
          <Badge label="Benefits" />

          <h3 className="max-xs:tracking-[-1px] mt-6 max-xs:text-3xl max-xs:leading-10 text-40 leading-12 xxl:text-56 font-semibold xxl:leading-16 tracking-[-1.68px] text-primary">
            Purpose-Built Infrastructure for Digital Wealth.
          </h3>
        </div>

        <div className="mt-14 xxl:mt-20">
          <div className="grid grid-cols-12 gap-2">
            {benefitsData.map((block, index) => (
              <div className="col-span-12 lg:col-span-4" key={index}>
                {/* IMAGE CARD */}
                {block.type === "image" && block.img && (
                  <div className="h-full rounded-3xl bg-white overflow-hidden hover:bg-gray300 transition-all duration-300">
                    <div className="w-full h-117 xxl:h-123.5">
                      <Image
                        src={block.img}
                        alt="img"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="px-4 py-10 md:p-5 xxl:p-10 flex flex-col gap-y-5">
                      <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-primary">
                        {block.title}
                      </span>
                      <p className="text-lg text-darkgray font-normal leading-[144%]">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* DOUBLE BLOCK */}
                {block.type === "double" && (
                  <div className="flex flex-col gap-y-2 h-full justify-between">
                    {block.items?.map((item, i) => (
                      <div
                        key={i}
                        className="hover:bg-gray300 transition-all duration-300 flex flex-col justify-between gap-y-12 h-full px-4 py-10 md:p-5 xxl:p-10 rounded-3xl bg-white"
                      >
                        <div className="rounded-xl w-16 h-16 flex justify-center items-center bg-background p-3">
                          <Image src={item.icon} alt="img" />
                        </div>

                        <div className="flex flex-col gap-y-5">
                          <span className="text-2xl font-semibold leading-8 tracking-[-0.24px] text-primary">
                            {item.title}
                          </span>
                          <p className="text-lg text-darkgray font-normal leading-[144%]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
