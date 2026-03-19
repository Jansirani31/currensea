"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LiquiditySection() {
  return (
    <section className="relative bg-black bg-[#000000] text-white pt-3 pb-20 overflow-hidden">

      <div className="max-w-8xl mx-auto px-6 relative">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="black lg:hidden">

          {/* Image — unchanged */}
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

            {/* Heading — word-by-word animation */}
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
              {["Earn", "2%", "on", "Every", "Swap", "as", "a", "Liquidity", "Provider"].map((word, i) => (
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

            {/* Description — fade up */}
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

          {/* Overlay — unchanged */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Over Image */}
          <div className="absolute inset-0 flex items-center justify-end px-12">
            <div className="max-w-xl text-left">

              {/* Heading — word-by-word animation */}
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
                {["Earn", "2%", "on", "Every", "Swap", "as", "a", "Liquidity", "Provider"].map((word, i) => (
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

              {/* Description — fade up */}
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

            </div>
          </div>
        </div>

      </div>
    </section>
  );
} 

