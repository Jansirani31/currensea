"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SecureSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white py-12 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* ===== MAIN CONTAINER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-[22px] border border-white/5 bg-[#080808] px-3 py-6 pb-2 sm:p-10 sm:pb-4 lg:p-12 lg:pb-6 overflow-hidden"
        >

          <Image
            src="/images/secure1-bg.png"
            alt="glow"
            width={1920}
            height={600}
            className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
          />

          {/* ===== HEADING ===== */}
          <div className="text-center mb-16 md:mb-20 relative z-10">
            <Image
              src="/images/secure2-bg.png"
              alt="dots"
              fill
              className="absolute left-0 object-cover opacity-30 pointer-events-none"
            />

            {/* SECURITY label + shimmer */}
            <div className="relative inline-block mb-6 overflow-hidden rounded px-2 py-0.5">
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.1 }}
                style={{ fontFamily: "var(--font-chivo)" }}
                className="text-[12px] font-light text-[#0077FF] relative z-10"
              >
                SECURITY
              </motion.p>
              <motion.span
                className="absolute inset-0 pointer-events-none"
                animate={{ x: ["-120%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)",
                }}
              />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
              style={{ fontFamily: "var(--font-space)" }}
              className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-Space leading-tight tracking-[-0.02em] mb-6 bg-gradient-to-b from-white to-[#CBC7D3] bg-clip-text text-transparent"
            >
              SECURE AND <br /> TRANSPARENT.
            </motion.h2>

            {/* ===== HEADING UNDERLINE ANIMATION ===== */}
            <motion.div
              className="relative mx-auto overflow-hidden"
              style={{ width: "200px", height: "1px" }}
            >
              {/* Base line — draws left to right on view */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: 0.4 }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
              {/* Blue glow sweep — loops continuously */}
              <motion.div
                className="absolute top-0 h-full w-[70px]"
                animate={{ x: ["-70px", "270px"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2.0,
                  ease: "easeInOut",
                  delay: 1.4,
                }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,119,255,0.95), rgba(140,190,255,1), rgba(0,119,255,0.95), transparent)",
                }}
              />
              {/* Static glow pulse */}
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,119,255,0.45) 35%, rgba(80,160,255,0.65) 50%, rgba(0,119,255,0.45) 65%, transparent)",
                }}
              />
            </motion.div>
          </div>

          

          {/* ===== CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-y-3 gap-x-3 md:gap-5 relative z-10">
            {[
              {
                title: "Architectural\nIntegrity",
                desc: "Multi-layered security protocols protect assets and data across the entire platform.",
                img: "/images/sec3.png",
                icon: "/images/icons/secure1.svg",
              },
              {
                title: "Real-Time\nMonitoring",
                desc: "Execution tracking offers visibility into pricing, routing, and settlement.",
                img: "/images/sec1.png",
                icon: "/images/icons/secure2.svg",
              },
              {
                title: "Full Auditability\nsystem",
                desc: "Transactions are on-chain, traceable, and ensure regulatory confidence.",
                img: "/images/sec2.png",
                icon: "/images/icons/secure3.svg",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.12 }}
                whileHover={{ y: -6 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className="rounded-[16px] min-h-[160px] border border-white/10 bg-white/[0.01] backdrop-blur-[40px] p-4 sm:px-7 sm:pt-5 sm:pb-2 sm:w-[95%] sm:min-h-[120px] flex flex-col justify-start relative overflow-hidden"
                style={{
                  boxShadow:
                    hoveredCard === i
                      ? "0 16px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(79,26,214,0.3), 0 0 20px rgba(79,26,214,0.1)"
                      : "none",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* TOP BORDER GLOW — pulse on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[1px]"
                  animate={hoveredCard === i ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                  transition={{ duration: 1.2, repeat: hoveredCard === i ? Infinity : 0 }}
                >
                  <div className="w-full h-full bg-[linear-gradient(90deg,rgba(79,26,214,0)_0%,#4F1AD6_50%,rgba(79,26,214,0)_100%)]" />
                </motion.div>

                <Image
                  src="/images/secure3-bg.png"
                  alt=""
                  fill
                  className="object-contain"
                />

                {/* ICON + pulse ring */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.12 }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="flex justify-center mb-3 mt-3 relative z-10"
                >
                  <div className="relative">
                    <motion.span
                      className="absolute inset-0 rounded-full pointer-events-none"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      style={{ border: "1px solid rgba(79,26,214,0.5)" }}
                    />
                    <Image
                      src={card.icon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* TITLE */}
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.12 }}
                  style={{ fontFamily: "var(--font-mona)" }}
                  className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium min-h-[48px] sm:min-h-[64px] text-center text-white line-clamp-2 mb-4 whitespace-pre-line relative z-10"
                >
                  {card.title}
                </motion.h1>

                {/* DIVIDER — draw + hover sweep */}
                <div className="relative w-[150px] sm:w-[180px] lg:w-[220px] h-[1px] mx-auto mb-4 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.12 }}
                    style={{ transformOrigin: "center" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  />
                  {hoveredCard === i && (
                    <motion.div
                      className="absolute top-0 h-full w-[40px]"
                      animate={{ x: ["-40px", "130%"] }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(79,26,214,0.8), transparent)",
                      }}
                    />
                  )}
                </div>

                {/* DESC */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                  style={{ fontFamily: "var(--font-mona)" }}
                  className="text-[14px] text-regular text-white/60 text-center mb-2 sm:mb-8 leading-relaxed px-2 relative z-10"
                >
                  {card.desc}
                </motion.p>

                {/* CARD IMAGE — float + hover scale + tilt */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.12 }}
                  animate={{ y: [0, -6, 0] }}
                  whileHover={{
                    scale: 1.09,
                    rotate: 2,
                    y: -12,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="mt-auto flex justify-center h-[200px] sm:h-[220px] sm:pb-0 items-center relative z-10"
                  style={{
                    filter:
                      hoveredCard === i
                        ? "drop-shadow(0 14px 28px rgba(79,26,214,0.35)) drop-shadow(0 4px 10px rgba(0,0,0,0.45))"
                        : "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
                    transition: "filter 0.35s ease",
                  }}
                >
                  <Image
                    src={card.img}
                    alt=""
                    width={300}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </motion.div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}


