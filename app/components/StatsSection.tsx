"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function animCounter(el: HTMLElement, target: number, dur: number) {
  let start: number | null = null;
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const step = (ts: number) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / dur, 1);
    el.textContent = String(Math.floor(easeOut(progress) * target));
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = String(target);
  };
  requestAnimationFrame(step);
}

// ── Reusable animated card wrapper ──────────────────────────────────────────
function AnimCard({
  children,
  className,
  delay = 0,
  glowColor = "rgba(12,162,255,0.35)",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      whileHover={{
        scale: 1.012,
        boxShadow: `0 0 0 1.5px ${glowColor}, 0 0 24px ${glowColor}`,
        transition: { duration: 0.22, ease },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const c1 = useRef<HTMLSpanElement>(null);
  const c2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          if (c1.current) animCounter(c1.current, 99, 1500);
          if (c2.current) animCounter(c2.current, 1200, 2000);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-black px-4 sm:px-6 lg:px-10 py-12 lg:py-16 pt-18 lg:pt-24"
    >


      <div className="
        relative
        max-w-7xl mx-auto grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        auto-rows-auto
        md:auto-rows-[220px]
        gap-2
      ">

        {/* ── 99% CARD ── */}
        <AnimCard
          delay={0}
          glowColor="rgba(12,162,255,0.4)"
          className="
            md:row-span-2
            lg:col-span-1 lg:row-span-2
            flex flex-col justify-between
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(208,89,247,0.1)] to-[rgba(234,89,247,0.2)]
            border border-[#0CA2FF1A]
          "
        >
          <div>
            {/* animated top bar — grows from left */}
            <motion.div
              style={{ fontFamily: "var(--font-space)" }}
              className="h-[5px] bg-[#0CA2FF] rounded-2xl mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
            />
            <h2 className="text-7xl font-medium text-[#0CA2FF] text-right">
              <span ref={c1}>0</span>%
            </h2>
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-[16px] text-sm text-[#0CA2FF] text-right mt-2"
            >
              Settlement accuracy
            </p>
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="mt-12 text-xs sm:text-sm text-[#0CA2FF] leading-6 w-[160px] sm:w-[200px] lg:w-[220px]"
            >
              Across high-value OTC transactions with institutional
              counterparties
            </p>
          </div>

          <div className="mt-6">
            {/* animated bottom bar */}
            <motion.div
              className="h-[4px] bg-[#0CA2FF] mb-3"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
            />
            <div
              style={{ fontFamily: "var(--font-mona)" }}
              className="flex items-center justify-between gap-2 text-xs sm:text-sm text-[#0CA2FF]"
            >
              <p>Globally trusted liquidity execution</p>
              {/* icon gentle pulse */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/icons/Stats-99.svg"
                  alt="globe icon"
                  width={18}
                  height={18}
                  className="opacity-80"
                />
              </motion.div>
            </div>
          </div>
        </AnimCard>

        {/* ── 1200+ CARD ── */}
        <AnimCard
          delay={0.1}
          glowColor="rgba(162,182,221,0.4)"
          className="
            md:row-span-2
            lg:col-span-1 lg:row-span-2
            flex flex-col justify-between
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(0,53,255,0.1)] to-[rgba(0,53,255,0.2)]
            border border-[#FC6A801A]
          "
        >
          <div className="relative">
            {/* icon gentle pulse */}
            <motion.div
              className="absolute top-0 right-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Image
                src="/images/icons/Stats-1200.svg"
                alt="icon"
                width={18}
                height={18}
              />
            </motion.div>

            <p
              style={{ fontFamily: "var(--font-space)" }}
              className="text-xs md:text-sm text-[#A2B6DD] mb-3"
            >
              Institutional & Enterprise Clients
            </p>
            {/* animated line */}
            <motion.div
              className="h-[2px] bg-[#A2B6DD] mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
            />
          </div>

          <div>
            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="text-5xl md:text-[100px] lg:text-[80px] font-bold text-[#A2B6DD]"
            >
              <span ref={c2}>0</span>+
            </h2>
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-[14px] text-medium md:text-sm text-[#A2B6DD] mt-3"
            >
              OTC Trades Executed
            </p>
          </div>
        </AnimCard>

        {/* ── HERO CARD ── */}
        <AnimCard
          delay={0.2}
          glowColor="rgba(129,75,254,0.45)"
          className="
            relative
            md:col-span-2 md:row-span-2
            lg:col-span-2 lg:row-span-2
            rounded-2xl overflow-hidden
            bg-gradient-to-b from-[#0E2865] to-transparent
            border border-[#0E286533]
          "
        >
          {/* Background */}
          <Image
            src="/images/hero-bg-card3.png"
            alt="Hero background"
            fill
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E2865]/70 via-[#061029]/70 to-black/80" />

          {/* Big Logo — slow float */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/statsSection-herocard.png"
              alt="Logo"
              width={380}
              height={380}
              className="object-contain opacity-60 scale-75 md:scale-90 lg:scale-100 -translate-y-10"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-6 md:p-8 lg:p-10 pt-[60%]">
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-center text-[#D3D8E9] p-4 rounded-lg max-w-[320px] mx-auto"
            >
              Experience OTC trading the way it should be transparent,
              efficient, and built for scale.
            </p>

            {/* Button — pulse ring + shimmer on hover */}
            <div className="relative inline-block">
              {/* Pulse ring */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none"
                animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ border: "1.5px solid rgba(129,75,254,0.6)" }}
              />
              <motion.a
                href="https://app.currensea.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(129,75,254,0.45)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="font-chivo inline-flex items-center bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9]
                           px-8 py-3 rounded-full text-sm font-medium relative overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
                  }}
                />
                <span>GET STARTED</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-flex ml-2"
                >
                  <Image
                    src="/images/icons/common-whitearrow-icon.png"
                    alt="arrow"
                    width={14}
                    height={14}
                  />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </AnimCard>

        {/* ── BOTTOM LEFT ── */}
        <AnimCard
          delay={0.3}
          glowColor="rgba(116,200,252,0.4)"
          className="
            md:col-span-2
            lg:col-span-2
            p-8 rounded-2xl
            bg-gradient-to-b from-[rgba(116,200,252,0.1)] to-[rgba(116,200,252,0.2)]
            border border-[#74C8FC1A]
            flex items-center
          "
        >
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[#74C8FC] font-medium">Backed by</p>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
              >
                <Image
                  src="/images/icons/Stats-bottomleft.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  className="opacity-80"
                />
              </motion.div>
            </div>

            <motion.div
              className="h-[2px] w-full bg-[#74C8FC] mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
            />

            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="text-4xl md:text-5xl lg:text-6xl font-space font-medium text-[#74C8FC] leading-tight"
            >
              Fintech & crypto
            </h2>
            <p className="text-sm text-[#74C8FC] mt-4">product builders</p>
          </div>
        </AnimCard>

        {/* ── BOTTOM RIGHT ── */}
        <AnimCard
          delay={0.4}
          glowColor="rgba(12,162,255,0.4)"
          className="
            md:col-span-2
            lg:col-span-2
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(4,95,197,0.2)] to-[rgba(4,95,197,0.4)]
            border border-emerald-500/20
            flex items-center
          "
        >
          <div>
            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#0CA2FF]"
            >
              Multi-liquidity
            </h2>
            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#0CA2FF]"
            >
              source aggregation
            </h2>

            <motion.div
              className="h-[3px] bg-[#0CA2FF] mt-6 md:mt-8"
              initial={{ width: 0 }}
              whileInView={{ width: "14rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
            />

            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-xs sm:text-sm md:text-base font-semibold text-[#0CA2FF] mt-4 md:mt-5"
            >
              Enterprise-Grade OTC Infrastructure
            </p>
          </div>
        </AnimCard>

      </div>
    </section>
  );
}

