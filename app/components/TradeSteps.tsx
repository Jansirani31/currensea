"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    title: "Select\nCurrency & Lock",
    desc: "Choose your Currency (INR/USDT) and get the best live price to Lock in your rate and proceed.",
    img: "/images/trade1.svg",
  },
  {
    title: "Secure your\nPayment",
    desc: "Send funds via Bank Transfer directly to our secure account. Upload your receipt or UTR for automated tracking.",
    img: "/images/trade2.svg",
  },
  {
    title: "Rapid\nVerification",
    desc: "Our engine performs a lightning-fast background audit of your payment to ensure security and compliance.",
    img: "/images/trade3.svg",
  },
  {
    title: "Instant\nSettlement",
    desc: "Get currency in your wallet. The aggregator pays out immediately after verification.",
    img: "/images/trade4.svg",
  },
];

export default function TradeSteps() {
  return (
    <section id="TradeSteps" className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 md:mb-20">

          {/* [ How it works ] — slide down fade */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            style={{ fontFamily: "var(--font-inter)" }}
            className="text-sm text-blue-400 cursor-pointer hover:underline"
          >
            [ How it works ]
          </motion.span>

          {/* "TRADE IN 4 SIMPLE STEPS" — word-by-word slide up */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
            }}
            style={{ fontFamily: "var(--font-mona)" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-Space tracking-tight"
          >
            {["TRADE", "IN", "4", "SIMPLE", "STEPS"].map((word, i) => (
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: index * 0.12 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px rgba(59,130,246,0.15)",
                borderColor: "rgba(59,130,246,0.4)",
              }}
              className="
                w-full max-w-[320px]
                min-h-[380px]
                rounded-[14px]
                border border-white/10
                backdrop-blur-xl
                bg-white/1 backdrop-blur-[40px]
                opacity-95
                pt-[20px]
                pb-[34px]
                px-[10px]
                flex flex-col items-center text-center
                transition-colors duration-300
              "
            >
              {/* Image — unchanged */}
              <div className="relative w-[220px] h-[220px] mb-8">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              {/* Title — fade up, color unchanged */}
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.2 + index * 0.12 }}
                style={{ fontFamily: "var(--font-space)" }}
                className="text-[32px] font-medium whitespace-pre-line mb-5"
              >
                {step.title}
              </motion.h3>

              {/* Description — fade up, color unchanged: text-gray-400 */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.32 + index * 0.12 }}
                style={{ fontFamily: "var(--font-mona)" }}
                className="text-[14] font-light text-gray-400 leading-6 max-w-[260px]"
              >
                {step.desc}
              </motion.p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


