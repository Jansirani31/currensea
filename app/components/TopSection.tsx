"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "./Header";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TopSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves up slowly as you scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Content fades + moves up as you scroll
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">

      {/* BOTTOM GRADIENT FADE */}
      <div className="absolute bottom-0 left-0 w-full h-[278px]
                      bg-gradient-to-b from-transparent to-black z-[-5]" />

      {/* BACKGROUND — parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-20 scale-110"
      >
        <Image
          src="/images/top-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dot Texture Overlay */}
      <Image
        src="/images/topsection-bg2.png"
        alt="texture"
        fill
        className="object-cover -z-10"
      />

      {/* DARK OVERLAY — fades in on mount */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black/10 z-0"
      />

      {/* HERO CONTENT */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 flex items-center min-h-[100svh]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">

            {/* TAG — slides down + fades in */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <motion.span
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex font-urbanist items-center gap-2
                           px-4 py-1 rounded-full
                           bg-gradient-to-b from-white/20 to-white/50
                           border border-white/20
                           text-[16px] sm:text-sm text-white cursor-default"
                style={{ fontFamily: "var(--font-urbanist)" }}
              >
                <motion.div
                  animate={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Image
                    src="/images/icons/topsection-icon1.png"
                    alt="icon"
                    width={22}
                    height={16}
                    className="object-contain"
                  />
                </motion.div>
                Next-Gen OTC Aggregation
              </motion.span>
            </motion.div>

            {/* TITLE — word by word stagger */}
            <motion.h1
              style={{ fontFamily: "var(--font-space)" }}
              className="font-medium text-5xl sm:text-7xl md:text-4xl lg:text-[70px]
                         leading-[110%] tracking-[-0.04em] text-white
                         [text-shadow:0px_8px_40px_rgba(0,0,0,0.7)]
                         max-w-[1000px] mx-auto"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.25 },
                },
              }}
            >
              {["Buy", "Crypto", "Instantly"].map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 52, rotateX: -15 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {["with", "INR.", "No", "Middlemen."].map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 52, rotateX: -15 },
                    show: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* DESCRIPTION — fades up after title */}
            <motion.p
              style={{ fontFamily: "var(--font-mona)" }}
              className="mt-4 font-medium text-[16px] sm:text-[18px] lg:text-[20px]
                         leading-[28px] tracking-[-0.4px] text-white/70
                         text-[#FFFFFFB2] max-w-xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease, delay: 0.9 }}
            >
              CurrenSea allows you to execute large-volume crypto trades
              effortlessly with zero slippage and competitive market pricing.{" "}
              <span className="text-white/90">
                Enjoy direct settlement without any middlemen involved.
              </span>
            </motion.p>

            {/* BUTTON — slides up + shimmer + hover glow */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.1 }}
              className="mt-10 inline-block"
            >
              <motion.a
                href="https://app.currensea.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 32px rgba(255,255,255,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="px-4 py-3 bg-white text-black inline-flex items-center
                           rounded-full text-sm font-medium relative overflow-hidden"
              >
                {/* Shimmer sweep on hover */}
                <motion.span
                  initial={{ x: "-120%", opacity: 0 }}
                  whileHover={{ x: "120%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(0,0,0,0.07) 50%, transparent 70%)",
                  }}
                />
                <span>GET STARTED NOW</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-flex ml-2"
                >
                  <Image
                    src="/images/icons/common-blackarrow-icon.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="inline-block"
                  />
                </motion.span>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </motion.div>
       {/* TRUSTED SECTION 
      <div className="absolute bottom-8 sm:bottom-12 left-0 w-full z-20 mt-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            Trusted by some of the biggest companies
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 
                          text-white/60 text-xs sm:text-sm">
            <Image src="/images/icons/topsection-icon2.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon3.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon4.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon5.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon6.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon7.png" alt="logo" width={120} height={40} />
          </div>
        </div>
      </div>*/}
    {/*border  
    <div className="absolute bottom-0 left-0 w-full z-[-5] flex flex-col gap-[2px]">
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  
</div>*/}

    </section>
  );
}

