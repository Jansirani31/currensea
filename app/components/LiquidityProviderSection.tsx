"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const images = [
  { src: "/images/liquidityprovider1.png", alt: "Liquidity Features" },
  { src: "/images/liquidityprovider2.png", alt: "Liquidity Features" },
  { src: "/images/liquidityprovider3.png", alt: "Liquidity Features" },
];

export default function LiquidityProviderSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress for right column parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Each image moves at slightly different speed — parallax depth
  const y0 = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-18px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-8px"]);
  const yArr = [y0, y1, y2];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-black via-[#060B14] to-black text-white"
    >
      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col lg:flex-row gap-0 items-start">

          {/* ── LEFT CONTENT — sticky, stagger fade in ── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start lg:sticky lg:top-24 h-fit">

            {/* "HIGHLIGHTS" — color unchanged: text-[#0077FF] */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-xs font-medium text-[#0077FF] mb-4"
            >
              HIGHLIGHTS
            </motion.p>

            {/* Heading — word-by-word slide up, color unchanged */}
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.12 },
                },
              }}
              style={{ fontFamily: "var(--font-space)" }}
              className="text-3xl font-medium sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            >
              {["OTC", "DESK", "FOR"].map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {["LARGE", "TRADES"].map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  style={{ display: "inline-block", marginRight: "0.28em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Description — color unchanged: text-gray-400 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.25 }}
              style={{ fontFamily: "var(--font-mona)" }}
              className="mt-6 font-medium text-gray-400 text-base sm:text-base md:text-lg max-w-lg leading-relaxed pb-10"
            >
              Move capital seamlessly between INR and USDT with dedicated
              liquidity access, controlled pricing, and managed settlement.
              No public order books. No volatility shocks. Just direct
              execution.
            </motion.p>

          </div>

          {/* ── RIGHT IMAGES — stagger + parallax ── */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  style={{ y: yArr[i] }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease, delay: i * 0.15 }}
                  whileHover={{ scale: 1.015 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom soft blend glow — unchanged */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

    </section>
  );
}
