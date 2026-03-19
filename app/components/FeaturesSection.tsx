"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

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

  // Smooth spring on horizontal scroll
  const rawX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(features.length - 1) * 100}%`]
  );
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.6 });

  return (
    <section
      id="FeaturesSection"
      ref={sectionRef}
      className="relative bg-black text-white scroll-mt-20"
      style={{ height: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 min-h-screen md:h-screen overflow-hidden flex flex-col justify-start md:justify-center pt-10 md:pt-0">

        {/* ── TITLE — exact copy, zero changes ── */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <p className="text-sm text-[#0077FF] mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-b from-[#FFFFFF] to-[#CBC7D3] bg-clip-text text-transparent">
            EXPLORE OUR <br /> FEATURES
          </h2>
        </div>

        {/* SLIDES */}
        <motion.div style={{ x }} className="flex will-change-transform">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 px-4 flex items-center justify-center"
            >
              <div className="relative min-h-[500px] lg:min-h-[430px] border border-white/10 w-full overflow-hidden">

                {/* CENTER IMAGE — float loop */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
                  >
                    <Image
                      src="/images/features1-bg.png"
                      alt="globe"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>

                {/* WAVE IMAGE — slow drift */}
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.7,
                  }}
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[250px] md:h-[320px] lg:h-[380px] z-0 pointer-events-none"
                >
                  <Image
                    src="/images/features2-bg.png"
                    alt="wave"
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </motion.div>

                {/* ── TOP LEFT CARD — slide in from left ── */}
                <motion.div
                  initial={{ opacity: 0, x: -36 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 + index * 0.08 }}
                  className="relative z-10 w-full md:w-1/2 md:h-1/2 bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-8 md:absolute md:top-0 md:left-0"
                >
                  {/* Icon — hover bounce, exact same position */}
                  <motion.div
                    className="absolute left-8 bottom-8"
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={60}
                      height={60}
                    />
                  </motion.div>

                  {/* Number — exact same className */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="text-sm text-gray-400 mb-6 text-right"
                  >
                    {item.number}
                  </motion.p>

                  {/* Title — exact same className: text-white */}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.42 + index * 0.08 }}
                    className="text-white text-[20px] md:text-xl lg:text-2xl leading-tight text-right mt-18"
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>

                {/* ── BOTTOM RIGHT CARD — slide in from right ── */}
                <motion.div
                  initial={{ opacity: 0, x: 36 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.2 + index * 0.08 }}
                  className="relative z-10 w-full md:w-1/2 md:h-1/2 bg-white/[0.02] backdrop-blur-md border border-white/10 p-6 md:p-8 mt-26 md:mt-0 md:absolute md:bottom-0 md:right-0 text-left"
                >
                  {/* Description — exact same className */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.5 + index * 0.08 }}
                    className="text-[#FFFFFFB2] text-[18px] md:text-lg leading-relaxed mb-10 max-w-sm"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>

              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}