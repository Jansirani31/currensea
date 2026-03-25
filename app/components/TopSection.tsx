"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Header from "./Header";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Single Floating Particle ─────────────────────────────────────────────────
function Particle({
  startX,
  delay,
  duration,
  size,
  driftX,
}: {
  startX: number;
  delay: number;
  duration: number;
  size: number;
  driftX: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        bottom: -10,
        background: "rgba(255,255,255,0.18)",
      }}
      animate={{
        y: [0, -900],
        x: [0, driftX, -driftX * 0.5, driftX * 0.3, 0],
        opacity: [0, 0.5, 0.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.1, 0.8, 1],
      }}
    />
  );
}

// ── Scroll Indicator ─────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8 }}
    >
      <span
        className="text-white/30 text-[10px] tracking-[0.2em] uppercase"
        style={{ fontFamily: "var(--font-mona)" }}
      >
        Scroll
      </span>
      <div className="relative w-[1px] h-8 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "100%",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
          animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 3, height: 3, background: "rgba(255,255,255,0.8)" }}
          animate={{ top: ["-10%", "110%"], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", repeatDelay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

// ── Magnetic Button wrapper ───────────────────────────────────────────────────
// Wraps any children — button pulls toward cursor (max ~10px)
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY, display: "inline-block" }}>
      {children}
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function TopSection() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      delay: Math.random() * 14,
      duration: 10 + Math.random() * 12,
      size: 1.5 + Math.random() * 2.5,
      driftX: (Math.random() - 0.5) * 60,
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // ── Mouse-tracking spotlight ──────────────────────────────────────────────
  // Normalised mouse position (0–1) → smooth spring → content shifts ±12px / ±8px
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const contentShiftX = useTransform(smoothX, [0, 1], [-12, 12]);
  const contentShiftY = useTransform(smoothY, [0, 1], [-8, 8]);

  const handleSectionMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width);
      mouseY.set((e.clientY - top) / height);
    },
    [mouseX, mouseY]
  );

  // ── Scroll parallax ───────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.18]);
  const contentY       = useTransform(scrollYProgress, [0, 0.6], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Description words
  const descLine1 = "CurrenSea allows you to execute large-volume crypto trades effortlessly with zero slippage and competitive market pricing.".split(" ");
  const descLine2 = "Enjoy direct settlement without any middlemen involved.".split(" ");

  return (
    <>
      <section
        ref={ref}
        className="relative w-full min-h-screen overflow-hidden"
        onMouseMove={handleSectionMouseMove}
      >

        {/* ── Floating particles ── */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {mounted && particles.map((p) => (
            <Particle key={p.id} {...p} />
          ))}
        </div>

        {/* BOTTOM GRADIENT FADE */}
        <div className="absolute bottom-0 left-0 w-full h-[278px] bg-gradient-to-b from-transparent to-black z-[-5]" />

        {/* BACKGROUND — parallax + breathing zoom */}
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-20">
          <Image src="/images/top-bg.jpg" alt="Background" fill priority className="object-cover" />
        </motion.div>

        {/* Dot Texture Overlay */}
        <Image src="/images/topsection-bg2.png" alt="texture" fill className="object-cover -z-10" />

        {/* DARK OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-black/10 z-0"
        />

        {/* ── Breathing vignette ── */}
        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none"
          animate={{ opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 18% 52%, transparent 35%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* HERO CONTENT — horizontal mouse shift */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity, x: contentShiftX }}
          className="relative z-20 flex items-center min-h-[100svh]"
        >
          {/* Vertical mouse shift separate so springs are independent */}
          <motion.div style={{ y: contentShiftY }} className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-3xl">

              {/* TAG */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
              >
                <motion.span
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex font-urbanist items-center gap-2 px-4 py-1 rounded-full
                             bg-gradient-to-b from-white/20 to-white/50 border border-white/20
                             text-[16px] sm:text-sm text-white cursor-default relative overflow-hidden"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                    }}
                  />
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

              {/* TITLE */}
              <motion.h1
                style={{ fontFamily: "var(--font-space)" }}
                className="font-medium text-5xl sm:text-7xl md:text-4xl lg:text-[70px]
                           leading-[110%] tracking-[-0.04em] text-white
                           [text-shadow:0px_8px_40px_rgba(0,0,0,0.7)]"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
                }}
              >
                <span className="block whitespace-nowrap">
                  {["Buy", "Crypto", "Instantly"].map((word) => (
                    <motion.span
                      key={word}
                      variants={{
                        hidden: { opacity: 0, y: 52, rotateX: -15 },
                        show: {
                          opacity: 1, y: 0, rotateX: 0,
                          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      style={{ display: "inline-block", marginRight: "0.28em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
                <span className="block whitespace-nowrap">
                  {["with", "INR.", "No", "Middlemen."].map((word) => (
                    <motion.span
                      key={word}
                      variants={{
                        hidden: { opacity: 0, y: 52, rotateX: -15 },
                        show: {
                          opacity: 1, y: 0, rotateX: 0,
                          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      style={{ display: "inline-block", marginRight: "0.28em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              {/* DESCRIPTION — word stagger */}
              <motion.p
                style={{ fontFamily: "var(--font-mona)" }}
                className="mt-4 font-medium text-[16px] sm:text-[18px] lg:text-[20px]
                           leading-[28px] tracking-[-0.4px] text-white/70 text-[#FFFFFFB2] max-w-xl"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.03, delayChildren: 0.95 } },
                }}
              >
                {descLine1.map((word, i) => (
                  <motion.span
                    key={`d1-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1, y: 0,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                  >
                    {word}
                  </motion.span>
                ))}{" "}
                <span className="text-white/90">
                  {descLine2.map((word, i) => (
                    <motion.span
                      key={`d2-${i}`}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1, y: 0,
                          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                      style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.p>

              {/* BUTTON — MagneticButton wrapper சேர்த்தது */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 1.1 }}
                className="mt-10 inline-block relative"
              >
                <MagneticButton>
                  <motion.span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ border: "1.5px solid rgba(255,255,255,0.35)" }}
                  />
                  <motion.a
                    href="https://app.currensea.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.96 }}
                    animate="rest"
                    variants={{
                      rest:  { scale: 1,    boxShadow: "0 0 0px rgba(255,255,255,0)" },
                      hover: { scale: 1.05, boxShadow: "0 0 32px rgba(255,255,255,0.35)" },
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="px-4 py-3 bg-white text-black inline-flex items-center
                               rounded-full text-sm font-medium relative overflow-hidden"
                  >
                    <motion.span
                      variants={{
                        rest:  { x: "-120%", opacity: 0 },
                        hover: { x:  "120%", opacity: 1 },
                      }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 30%, rgba(0,0,0,0.07) 50%, transparent 70%)",
                      }}
                    />
                    <span>GET STARTED NOW</span>
                    <motion.span
                      variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        x: { duration: 1.5, repeat: Infinity, repeatDelay: 2 },
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
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
                </MagneticButton>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <ScrollIndicator />

      </section>
    </>
  );
}

