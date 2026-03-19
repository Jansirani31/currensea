"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SwapSection() {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden">

      {/* ===== TOP TITLE ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">

        {/* "SWAP" — slide down fade */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ fontFamily: "var(--font-chivo)" }}
          className="text-[#0077FF] text-sm font-light tracking-widest mb-6"
        >
          SWAP
        </motion.p>

        {/* "RUPEE IN USDT OUT" — word-by-word slide up */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          style={{ fontFamily: "var(--font-space)" }}
          className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
        >
          {/* Line 1 */}
          {["RUPEE", "IN", "USDT"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
              }}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {/* Line 2 */}
          {["OUT"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
              }}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Horizontal Line — draw animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        style={{ transformOrigin: "left" }}
        className="w-full h-px bg-white/10"
      />

      {/* ===== BOTTOM AREA ===== */}
      <div className="relative min-h-[500px] lg:min-h-[300px]">

        {/* FULL Background Image — unchanged */}
        <div className="absolute inset-0 flex items-center justify-center lg:block">

          {/* Mobile */}
          <div className="w-full h-[500px] flex items-center justify-center lg:hidden">
            <Image
              src="/images/swap-bg2.png"
              alt="Swap Background"
              width={1200}
              height={1200}
              priority
              className="object-contain mt-56 -translate-x-18 scale-135"
            />
          </div>

          {/* Desktop */}
          <div className="hidden lg:block absolute inset-0">
            <Image
              src="/images/swap-bg2.png"
              alt="Swap Background"
              fill
              priority
              className="object-right scale-70 origin-right"
            />
          </div>
        </div>

        {/* WAVE IMAGE — unchanged */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/swap-bg1.png"
            alt="Wave"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 min-h-[300px]">

            {/* LEFT — description fade up */}
            <div className="pr-0 lg:pl-8 lg:pt-8 bg-white/4">
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease, delay: 0.3 }}
                style={{ fontFamily: "var(--font-mana)" }}
                className="text-[#FFFFFF] font-regular text-lg md:text-[20px] leading-relaxed max-w-xl px-6 pt-6 pb-6 md:pb-0 md:px-0 md:pt-0"
              >
                Move seamlessly between INR and USDT across multiple
                blockchains. Our direct onramp/offramp flow removes the
                complexity of peer-to-peer matching, offering a fast, secure,
                and automated way to manage your local fiat-to-crypto needs.
              </motion.p>
            </div>

            <div className="py-30" />
          </div>
        </div>

        {/* MIDDLE VERTICAL LINE — unchanged */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
      </div>

      {/* Bottom Line — unchanged */}
      <div className="w-full h-px bg-white/10" />

    </section>
  );
}




