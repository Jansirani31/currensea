"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SecureSection() {
  return (
    <section className="relative bg-black text-white py-12 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* ===== MAIN CONTAINER — fade + scale in ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-[22px] border border-white/5 bg-[#080808] px-3 py-6 pb-2 sm:p-10 sm:pb-4 lg:p-12 lg:pb-6 overflow-hidden"
        >

          {/* ===== PURPLE BOTTOM GLOW IMAGE ===== */}
          <Image
            src="/images/secure1-bg.png"
            alt="glow"
            width={1920}
            height={600}
            className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
          />

          {/* ===== HEADING ===== */}
          <div className="text-center mb-16 md:mb-20 relative z-10">

            {/* TOP DOTTED BG */}
            <Image
              src="/images/secure2-bg.png"
              alt="dots"
              fill
              className="absolute left-0 object-cover opacity-30 pointer-events-none"
            />

            {/* "SECURITY" label — color unchanged: text-[#0077FF] */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              style={{ fontFamily: "var(--font-chivo)" }}
              className="text-[12px] font-light text-[#0077FF] mb-6"
            >
              SECURITY
            </motion.p>

            {/* Heading — color unchanged: from-white to-[#CBC7D3] */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
              style={{ fontFamily: "var(--font-space)" }}
              className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-Space leading-tight tracking-[-0.02em] mb-8 bg-gradient-to-b from-white to-[#CBC7D3] bg-clip-text text-transparent"
            >
              SECURE AND <br /> TRANSPARENT.
            </motion.h2>

          </div>

          {/* ===== DIVIDER — width draw animation ===== */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="border-t border-white/5 relative top-2 md:top-5 mb-10 md:mb-16 z-10"
          />

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
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}
                className="rounded-[16px] min-h-[160px] border border-white/10 bg-white/[0.01] backdrop-blur-[40px] p-4 sm:px-7 sm:pt-5 sm:pb-2 sm:w-[95%] sm:min-h-[120px] flex flex-col justify-start relative overflow-hidden"
              >
                {/* CENTER TOP BORDER GLOW */}
                <div className="absolute top-0 left-0 w-full h-[1px] px-16">
                  <div className="w-full h-full bg-[linear-gradient(90deg,rgba(79,26,214,0)_0%,#4F1AD6_50%,rgba(79,26,214,0)_100%)]" />
                </div>

                <Image
                  src="/images/secure3-bg.png"
                  alt=""
                  fill
                  className="object-contain"
                />

                {/* ICON — fade in + hover bounce */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.12 }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="flex justify-center mb-3 mt-3"
                >
                  <Image
                    src={card.icon}
                    alt="icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>

                {/* TITLE — color unchanged: text-white */}
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.12 }}
                  style={{ fontFamily: "var(--font-mona)" }}
                  className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium min-h-[48px] sm:min-h-[64px] text-center text-white line-clamp-2 mb-4 whitespace-pre-line"
                >
                  {card.title}
                </motion.h1>

                {/* DIVIDER LINE — draw animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.12 }}
                  style={{ transformOrigin: "center" }}
                  className="w-[150px] h-[1px] sm:w-[180px] lg:w-[220px] bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto mb-4"
                />

                {/* DESC — color unchanged: text-white/60 */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                  style={{ fontFamily: "var(--font-mona)" }}
                  className="text-[14px] text-regular text-white/60 text-center mb-2 sm:mb-8 leading-relaxed px-2"
                >
                  {card.desc}
                </motion.p>

                {/* CARD IMAGE — fade up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease, delay: 0.5 + i * 0.12 }}
                  className="mt-auto flex justify-center h-[200px] sm:h-[220px] sm:pb-0 items-center"
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


