"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  return (
    <section
      id="AboutSection"
      className="relative bg-black text-white overflow-hidden -mt-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%]">

            {/* [ ABOUT ] */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-blue-500 font-regular text-xs tracking-[0.2em] mb-6"
            >
              [ ABOUT ]
            </motion.p>

            {/* Heading*/}
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              style={{ fontFamily: "var(--font-space)" }}
              className="text-3xl font-regular md:text-4xl lg:text-5xl font-medium leading-tight"
            >
              {/* "Why Choose Our" */}
              {["Why", "Choose", "Our"].map((word, i) => (
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

              {/* "CurrenSea"*/}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
                }}
                style={{ fontFamily: "var(--font-space)", display: "inline-block", marginRight: "0.28em" }}
                className="text-[#613FE7] mr-2"
              >
                CurrenSea
              </motion.span>

              {/* "OTC?" */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
                }}
                style={{ display: "inline-block" }}
              >
                OTC?
              </motion.span>
            </motion.h1>

            {/* Description*/}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.6 }}
              style={{ fontFamily: "var(--font-mona)" }}
              className="font-light mt-8 text-[14px] md:text-[20px] leading-relaxed text-[#FFFFFF]"
            >
              CurrenSea is built for institutions and professional traders who
              demand precision. We eliminate the volatility and uncertainty of
              retail exchanges, providing a reliable, high-volume gateway for
              participants who require total control over their execution.
            </motion.p>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04, x: 24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="relative w-full lg:w-[60%] h-[280px] md:h-[380px] lg:h-[500px] -mt-6 md:mt-0"
          >
            <Image
              src="/images/about-bg.png"
              alt="About illustration"
              fill
              className="object-cover object-[center_-20px]
                [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
