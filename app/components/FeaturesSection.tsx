"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureSection() {

  const sectionRef = useRef(null);

  const features = [
    {
      number: "01.",
      title: <>Buy crypto with INR.<br />Start your journey!</>,
      desc: "Convert your local currency into digital assets at institutional rates. No individual sellers, no escrow waiting—just direct, secure bank-to-wallet delivery.",
      icon: "/images/icons/features1.svg",
    },
    {
      number: "02.",
      title: <>Off-Ramp to INR in<br />Seconds</>,
      desc: "Cash out your digital assets directly into your bank account. Experience high-volume liquidity with zero slippage and immediate local settlement.",
      icon: "/images/icons/features2.svg",
    },
    {
      number: "03.",
      title: <>Deep Liquidity<br />Aggregated Swaps</>,
      desc: "Exchange one digital asset for another using our Smart Order Router. We find the most efficient path across global liquidity pools.",
      icon: "/images/icons/features3.svg",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(features.length - 1) * 100}%`]
  );

  return (
    <section
  id="FeaturesSection"
  ref={sectionRef}
  className="relative bg-black text-white scroll-mt-20"
  style={{ height: `${features.length * 100}vh` }}
>
      <div className="sticky top-0 min-h-screen md:h-screen overflow-hidden flex flex-col justify-start md:justify-center pt-10 md:pt-0">

        {/* TITLE */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <p className="text-sm text-[#0077FF] mb-4">FEATURES</p>

          <h2 className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-b from-[#FFFFFF] to-[#CBC7D3] bg-clip-text text-transparent">
            EXPLORE OUR <br /> FEATURES
          </h2>
        </div>

        {/* SLIDES */}
        <motion.div style={{ x }} className="flex">

          {features.map((item, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 px-4 flex items-center justify-center"
            >
              <div className="relative min-h-[500px] lg:min-h-[430px] border border-white/10 w-full">

                {/* CENTER IMAGE */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                    <Image
                      src="/images/features1-bg.png"
                      alt="globe"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* WAVE IMAGE */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[250px] md:h-[320px] lg:h-[380px] z-0 pointer-events-none">
                  <Image
                    src="/images/features2-bg.png"
                    alt="wave"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>

                {/* TOP LEFT CARD */}
                <div className="relative z-10 w-full md:w-1/2 md:h-1/2 bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-8 md:absolute md:top-0 md:left-0">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="absolute left-8 bottom-8"
                  />

                  <p className="text-sm text-gray-400 mb-6 text-right">
                    {item.number}
                  </p>

                  <h3 className="text-white text-[20px] md:text-xl lg:text-2xl leading-tight text-right mt-18">
                    {item.title}
                  </h3>
                </div>

                {/* BOTTOM RIGHT CARD */}
                <div className="relative z-10 w-full md:w-1/2 md:h-1/2 bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-8 mt-26 md:mt-0 md:absolute md:bottom-0 md:right-0 text-left">
                  <p className="text-[#FFFFFFB2] text-[18px] md:text-lg leading-relaxed mb-10 max-w-sm">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
