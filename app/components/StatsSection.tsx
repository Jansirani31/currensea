"use client";
import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Counter animation ────────────────────────────────────────────────────────
function animCounter(el: HTMLElement, target: number, dur: number, onDone?: () => void) {
  let start: number | null = null;
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
  const step = (ts: number) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / dur, 1);
    el.textContent = String(Math.floor(easeOut(progress) * target));
    if (progress < 1) requestAnimationFrame(step);
    else {
      el.textContent = String(target);
      onDone?.();
    }
  };
  requestAnimationFrame(step);
}

// ── 3D Tilt card wrapper ─────────────────────────────────────────────────────
function TiltCard({
  children,
  className,
  delay = 0,
  glowColor = "rgba(12,162,255,0.6)",
  maxTilt = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { stiffness: 180, damping: 22 });
  const sRotY = useSpring(rotY, { stiffness: 180, damping: 22 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const cx = (e.clientX - left) / width - 0.5;
    const cy = (e.clientY - top)  / height - 0.5;
    rotY.set(cx * maxTilt * 2);
    rotX.set(-cy * maxTilt * 2);
  }, [rotX, rotY, maxTilt]);

  const handleMouseLeave = useCallback(() => {
    rotX.set(0);
    rotY.set(0);
  }, [rotX, rotY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay }}
      style={{
        rotateX: sRotX,
        rotateY: sRotY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        boxShadow: `0 0 0 1px ${glowColor}`,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Shimmer bar ───────────────────────────────────────────────────────────────
function ShimmerBar({
  color,
  height = "5px",
  delay = 0.3,
}: {
  color: string;
  height?: string;
  delay?: number;
}) {
  return (
    <div style={{ height, borderRadius: 99, overflow: "hidden", position: "relative", marginBottom: "1.5rem" }}>
      <motion.div
        style={{ height: "100%", background: color, borderRadius: 99, position: "relative", overflow: "hidden" }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease, delay }}
      >
        <motion.div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          }}
          initial={{ x: "-120%" }}
          animate={{ x: ["120%", "120%", "-120%", "120%"] }}
          transition={{
            duration: 0.6,
            delay: delay + 0.95,
            repeat: Infinity,
            repeatDelay: 3.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}

// ── Hero card cursor parallax image ─────────────────────────────────────────
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 50, damping: 18 });
  const smy = useSpring(my, { stiffness: 50, damping: 18 });
  const px = useTransform(smx, [-0.5, 0.5], [-14, 14]);
  const py = useTransform(smy, [-0.5, 0.5], [-10, 10]);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    mx.set((e.clientX - left) / width - 0.5);
    my.set((e.clientY - top)  / height - 0.5);
  }, [mx, my]);

  const handleLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center z-0"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ x: px, y: py }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={src}
          alt={alt}
          width={380}
          height={380}
          className="object-contain opacity-60 scale-75 md:scale-90 lg:scale-100 -translate-y-10"
        />
      </motion.div>
    </div>
  );
}

// ── Stagger text reveal ───────────────────────────────────────────────────────
function StaggerText({
  lines,
  className,
  style,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.h2
            className={className}
            style={style}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {line}
          </motion.h2>
        </div>
      ))}
    </motion.div>
  );
}

// ── Counter with glow flash on complete ──────────────────────────────────────
function GlowCounter({
  counterRef,
  color,
  className,
  style,
}: {
  counterRef: React.RefObject<HTMLSpanElement | null>;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const glowMv = useMotionValue(0);
  const glowSpring = useSpring(glowMv, { stiffness: 120, damping: 14 });
  const textShadow = useTransform(
    glowSpring,
    [0, 1],
    [`0 0 0px ${color}`, `0 0 28px ${color}, 0 0 60px ${color}`]
  );

  useEffect(() => {
    if (!counterRef.current) return;
    const el = counterRef.current;
    (el as any).__onDone = () => {
      glowMv.set(1);
      setTimeout(() => glowMv.set(0), 700);
    };
  }, [glowMv, counterRef]);

  return (
    <motion.span ref={counterRef} className={className} style={{ ...style, textShadow }}>
      0
    </motion.span>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
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
          if (c1.current) animCounter(c1.current, 99, 1500, () => (c1.current as any)?.__onDone?.());
          if (c2.current) animCounter(c2.current, 1200, 2000, () => (c2.current as any)?.__onDone?.());
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
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

        {/* ── 99% CARD ── */}
        <TiltCard
          delay={0}
          glowColor="rgba(12,162,255,0.6)"
          className="
            sm:col-span-1 lg:col-span-1 lg:row-span-2
            min-h-[200px] sm:min-h-[220px]
            flex flex-col justify-between
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(208,89,247,0.1)] to-[rgba(234,89,247,0.2)]
            border border-[#0CA2FF1A]
          "
        >
          <div>
            <ShimmerBar color="#0CA2FF" height="5px" delay={0.3} />
            <h2 className="text-7xl font-medium text-[#0CA2FF] text-right">
              <GlowCounter counterRef={c1} color="#0CA2FF" />%
            </h2>
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-sm text-[#0CA2FF] text-right mt-2"
            >
              Settlement accuracy
            </p>
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="mt-8 text-xs sm:text-sm text-[#0CA2FF] leading-6"
            >
              Across high-value OTC transactions with institutional counterparties
            </p>
          </div>

          <div className="mt-6">
            <ShimmerBar color="#0CA2FF" height="4px" delay={0.5} />
            <div
              style={{ fontFamily: "var(--font-mona)" }}
              className="flex items-center justify-between gap-2 text-xs sm:text-sm text-[#0CA2FF]"
            >
              <p>Globally trusted liquidity execution</p>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src="/images/icons/Stats-99.svg" alt="globe icon" width={18} height={18} className="opacity-80" />
              </motion.div>
            </div>
          </div>
        </TiltCard>

        {/* ── 1200+ CARD ── */}
        <TiltCard
          delay={0.1}
          glowColor="rgba(162,182,221,0.6)"
          className="
            sm:col-span-1 lg:col-span-1 lg:row-span-2
            min-h-[200px] sm:min-h-[220px]
            flex flex-col justify-between
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(0,53,255,0.1)] to-[rgba(0,53,255,0.2)]
            border border-[#FC6A801A]
          "
        >
          <div className="relative">
            <motion.div
              className="absolute top-0 right-0"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Image src="/images/icons/Stats-1200.svg" alt="icon" width={18} height={18} />
            </motion.div>
            <p
              style={{ fontFamily: "var(--font-space)" }}
              className="text-xs md:text-sm text-[#A2B6DD] mb-3"
            >
              Institutional & Enterprise Clients
            </p>
            <ShimmerBar color="#A2B6DD" height="2px" delay={0.4} />
          </div>

          <div>
            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="text-5xl md:text-[80px] font-bold text-[#A2B6DD]"
            >
              <GlowCounter counterRef={c2} color="#A2B6DD" />+
            </h2>
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-sm text-[#A2B6DD] mt-3"
            >
              OTC Trades Executed
            </p>
          </div>
        </TiltCard>

        {/* ── HERO CARD ── */}
        <TiltCard
          delay={0.2}
          maxTilt={4}
          glowColor="rgba(129,75,254,0.65)"
          className="
            sm:col-span-2 lg:col-span-2 lg:row-span-2
            min-h-[320px] sm:min-h-[440px]
            relative rounded-2xl overflow-hidden
            bg-gradient-to-b from-[#0E2865] to-transparent
            border border-[#0E286533]
          "
        >
          <Image src="/images/hero-bg-card3.png" alt="Hero background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E2865]/70 via-[#061029]/70 to-black/80" />

          <ParallaxImage src="/images/statsSection-herocard.png" alt="Logo" />

          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-6 md:p-8 lg:p-10 pt-[55%]">
            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-center text-[#D3D8E9] p-4 rounded-lg max-w-[320px] mx-auto text-sm sm:text-base"
            >
              Experience OTC trading the way it should be transparent, efficient, and built for scale.
            </p>

            <div className="relative inline-block">
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
                  <Image src="/images/icons/common-whitearrow-icon.png" alt="arrow" width={14} height={14} />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </TiltCard>

        {/* ── BOTTOM LEFT ── */}
        <TiltCard
          delay={0.3}
          glowColor="rgba(116,200,252,0.6)"
          className="
            sm:col-span-1 lg:col-span-2
            min-h-[200px] sm:min-h-[220px]
            p-6 sm:p-8 rounded-2xl
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
                <Image src="/images/icons/Stats-bottomleft.svg" alt="icon" width={22} height={22} className="opacity-80" />
              </motion.div>
            </div>
            <ShimmerBar color="#74C8FC" height="2px" delay={0.4} />
            <StaggerText
              lines={["Fintech & crypto"]}
              className="text-3xl sm:text-4xl lg:text-6xl font-medium text-[#74C8FC] leading-tight"
              style={{ fontFamily: "var(--font-space)" }}
              delay={0.5}
            />
            <motion.p
              className="text-sm text-[#74C8FC] mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              product builders
            </motion.p>
          </div>
        </TiltCard>

        {/* ── BOTTOM RIGHT ── */}
        <TiltCard
          delay={0.4}
          glowColor="rgba(12,162,255,0.6)"
          className="
            sm:col-span-1 lg:col-span-2
            min-h-[200px] sm:min-h-[220px]
            p-6 rounded-2xl
            bg-gradient-to-b from-[rgba(4,95,197,0.2)] to-[rgba(4,95,197,0.4)]
            border border-emerald-500/20
            flex items-center
          "
        >
          <div>
            <StaggerText
              lines={["Multi-liquidity", "source aggregation"]}
              className="font-bold text-2xl sm:text-3xl lg:text-[46px] text-[#0CA2FF]"
              style={{ fontFamily: "var(--font-space)" }}
              delay={0.5}
            />
            <ShimmerBar color="#0CA2FF" height="3px" delay={0.7} />
            <motion.p
              style={{ fontFamily: "var(--font-mona)" }}
              className="text-xs sm:text-sm font-semibold text-[#0CA2FF] mt-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: 0.9 }}
            >
              Enterprise-Grade OTC Infrastructure
            </motion.p>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
