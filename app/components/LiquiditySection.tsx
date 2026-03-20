"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Floating particle ───
function Particle({ x, delay, duration, size }: { x: number; delay: number; duration: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, bottom: 0, background: "rgba(255,255,255,0.1)" }}
      animate={{ y: [0, -200, 0], opacity: [0, 0.45, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function LiquiditySection() {
  const sectionRef = useRef(null);

  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: 3 + i * 7,
    delay: i * 0.55,
    duration: 5 + (i % 5),
    size: 1.5 + (i % 3),
  }));

  const words = ["Earn", "2%", "on", "Every", "Swap", "as", "a", "Liquidity", "Provider"];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black bg-[#000000] text-white pt-3 pb-20 overflow-hidden"
    >
      {/* ── Subtle particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      <div className="max-w-8xl mx-auto px-6 relative">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="black lg:hidden">

          {/* Image — unchanged, no animation */}
          <div className="relative w-full h-[280px] sm:h-[350px] mb-8 bg-black">
            <Image
              src="/images/liquidity-bg1.png"
              alt="Liquidity background"
              fill
              className="object-cover object-[20%_70%] scale-140 sm:scale-100"
              priority
            />
          </div>

          {/* Content Below Image */}
          <div className="text-center">

            {/* Heading — word-by-word */}
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="text-2xl sm:text-3xl font-space font-medium leading-tight mb-4"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 32 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.55 }}
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-[#D5D4D6] font-light text-sm sm:text-base leading-relaxed"
            >
              Become a Liquidity Provider and earn on transactions. Maximize your idle capital by providing liquidity to the CurrenSea OTC desk for seamless fiat-to-crypto swaps and earn a 2% yield on eligible trades.
            </motion.p>

          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:flex relative h-[600px] items-center">

          {/* Image — unchanged */}
          <Image
            src="/images/liquidity-bg1.png"
            alt="Liquidity background"
            width={900}
            height={900}
            priority
            className="object-cover object-right lg:object-[right_-140px] scale-110 md:scale-105 lg:scale-100 origin-right"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Over Image */}
          <div className="absolute inset-0 flex items-center justify-end px-12">
            <div className="max-w-xl text-left">

              {/* "2%" highlight pulse */}
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                }}
                style={{ fontFamily: "var(--font-space)" }}
                className="text-[42px] md:text-[36px] font-medium leading-tight mb-6"
              >
                {words.map((word, i) => (
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

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.75 }}
                style={{ fontFamily: "var(--font-mona)" }}
                className="font-regular mt-8 text-[16px] md:text-[24px] text-[#D5D4D6]"
              >
                Become a Liquidity Provider and earn on transactions. Maximize your idle capital by providing liquidity to the CurrenSea OTC desk for seamless fiat-to-crypto swaps and earn a 2% yield on eligible trades.
              </motion.p>

              {/* ── Animated divider line — stronger ── */}
              <div className="relative mt-10 h-[1px] w-full overflow-hidden">
                {/* base draw */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.9 }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-transparent"
                />
                {/* glow pulse */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)",
                  }}
                />
                {/* sweep */}
                <motion.div
                  className="absolute top-0 h-full w-[120px]"
                  animate={{ x: ["-120px", "110%"] }}
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut", delay: 1.5 }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

