"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxY = useSpring(rawY, { stiffness: 60, damping: 20 });

  const rawScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.06, 1.02, 1.02, 1.06]);
  const imageScale = useSpring(rawScale, { stiffness: 60, damping: 20 });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      id="AboutSection"
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden -mt-10"
    >
      {/* Ambient bg glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: "45%",
          top: "15%",
          width: 700,
          height: 500,
          background: "radial-gradient(ellipse, rgba(97,63,231,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%]">

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

          {/* RIGHT SIDE — smooth image animations */}
          <div className="relative w-full lg:w-[60%] h-[280px] md:h-[380px] lg:h-[500px] -mt-6 md:mt-0">

            {/* Halo glow behind image */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 60%, rgba(97,63,231,0.18) 0%, transparent 65%)",
                filter: "blur(32px)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />

            {/* Image with parallax + scale */}
            <motion.div
              className="absolute inset-0"
              style={{ y: parallaxY, scale: imageScale, opacity: imageOpacity }}
            >
              {/* Wipe reveal mask */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none bg-black"
                style={{ transformOrigin: "bottom" }}
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              />

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

            {/* Vignette */}
            <div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
              }}
            />

            {/* Breathing purple glow on image */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 40%, rgba(97,63,231,0.1) 0%, transparent 60%)",
              }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}