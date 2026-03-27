"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

// ── Animated decimal counter ───────────────────────────────────────
function useAnimatedNumber(target: number, duration = 1.2) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(4));
  useEffect(() => {
    const ctrl = animate(mv, target, { duration, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [target]);
  return rounded;
}

// ── Floating particle ──────────────────────────────────────────────
function Particle({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none z-30"
      style={{ left: x, top: y, background: color }}
      initial={{ opacity: 1, scale: 1, y: 0 }}
      animate={{ opacity: 0, scale: 0.3, y: -64 }}
      transition={{ duration: 0.9 + Math.random() * 0.5, ease: "easeOut" }}
    />
  );
}

// ── Flying bill ────────────────────────────────────────────────────
function FlyingBill({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none z-20 font-bold"
      style={{
        left: "28%",
        top: "48%",
        fontSize: 16,
        color: "#22c55e",
        filter: "drop-shadow(0 0 6px #22c55e)",
      }}
      initial={{ x: 0, y: 0, opacity: 0, rotate: -10, scale: 0.8 }}
      animate={{
        x: [0, 30 + index * 6, 140],
        y: [0, -(18 + index * 5), 4],
        opacity: [0, 1, 1, 0],
        rotate: [-10, 5, -5, 12],
        scale: [0.8, 1.1, 0.9, 0.5],
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.09,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1],
      }}
    >
      ₹
    </motion.div>
  );
}

// ── Mini Sparkline ─────────────────────────────────────────────────
function Sparkline({ up }: { up: boolean }) {
  const points = up
    ? "0,18 8,14 16,16 24,10 32,12 40,6 48,8 56,4 64,2"
    : "0,4 8,6 16,4 24,10 32,8 40,14 48,12 56,16 64,18";
  return (
    <svg width="64" height="20" viewBox="0 0 64 20" fill="none">
      <polyline
        points={points}
        stroke={up ? "#22c55e" : "#f87171"}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Recent swap row ────────────────────────────────────────────────
type SwapRecord = { id: number; inr: number; usdt: string; time: string; status: "done" | "pending" };

function RecentSwapRow({ swap, index }: { swap: SwapRecord; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20, height: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease }}
      className="flex items-center justify-between py-2"
      style={{ borderBottom: "0.5px solid rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-center gap-2">
        <div
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            background: swap.status === "done" ? "#22c55e" : "#facc15",
            boxShadow: swap.status === "done"
              ? "0 0 6px #22c55e"
              : "0 0 6px #facc15",
          }}
        />
        <div>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)" }}>
            ₹{swap.inr.toLocaleString("en-IN")}
            <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 4px" }}>→</span>
            <span style={{ color: "#4fadf7" }}>{swap.usdt} USDT</span>
          </p>
        </div>
      </div>
      <div className="text-right">
        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-chivo)", letterSpacing: "0.1em" }}>
          {swap.time}
        </p>
        <p style={{
          fontSize: 8,
          letterSpacing: "0.12em",
          color: swap.status === "done" ? "#22c55e" : "#facc15",
          fontFamily: "var(--font-chivo)",
        }}>
          {swap.status === "done" ? "COMPLETE" : "PENDING"}
        </p>
      </div>
    </motion.div>
  );
}

// ── Orbiting ring animation ────────────────────────────────────────
function OrbitRing({ radius, duration, color, clockwise = true }: {
  radius: number; duration: number; color: string; clockwise?: boolean;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        marginTop: -radius,
        marginLeft: -radius,
        border: `0.5px solid ${color}`,
      }}
      animate={{ rotate: clockwise ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div
        className="absolute w-1.5 h-1.5 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 6px ${color}`,
          top: -3,
          left: "50%",
          marginLeft: -3,
        }}
      />
    </motion.div>
  );
}

// ── Pulse ring ─────────────────────────────────────────────────────
function PulseRing({ delay = 0, color }: { delay?: number; color: string }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{ border: `1px solid ${color}` }}
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{ opacity: 0, scale: 1.8 }}
      transition={{ duration: 1.2, delay, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────
export default function SwapSection() {
  const [inrValue, setInrValue] = useState(10000);
  const [customInput, setCustomInput] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [converting, setConverting] = useState(false);
  const [done, setDone] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; color: string }[]
  >([]);
  const [bills, setBills] = useState<number[]>([]);
  const [billKey, setBillKey] = useState(0);

  const [convertProgress, setConvertProgress] = useState(0);
  const [rateUp] = useState(true);
  const convertRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const RATE = 83.5;
  const FEE = 0.005;
  const netUsdt = (inrValue / RATE) * (1 - FEE);
  const animatedUsdt = useAnimatedNumber(done ? netUsdt : 0);

  const presets = [5000, 10000, 25000, 50000];

  // Progress bar animation during converting
  useEffect(() => {
    if (converting) {
      setConvertProgress(0);
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const p = Math.min(elapsed / 1000, 1);
        setConvertProgress(p);
        if (p >= 1) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    } else {
      setConvertProgress(0);
    }
  }, [converting]);

  function spawnParticles() {
    const colors = ["#0077FF", "#4fadf7", "#22c55e", "#a78bfa", "#ffffff"];
    const newP = Array.from({ length: 28 }, (_, i) => ({
      id: Date.now() + i,
      x: 10 + Math.random() * 80,
      y: 5 + Math.random() * 80,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles((p) => [...p, ...newP]);
    setTimeout(() => setParticles([]), 1800);
  }

  async function handleConvert() {
    if (converting) return;
    setDone(false);
    setConverting(true);
    setBillKey((k) => k + 1);
    setBills([0, 1, 2, 3, 4, 5]);
    await new Promise((r) => setTimeout(r, 1050));
    setConverting(false);
    setDone(true);
    spawnParticles();
  }

  function handleCustomInput(val: string) {
    setCustomInput(val);
    const num = parseInt(val.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(num) && num > 0) {
      setInrValue(num);
      setDone(false);
    }
  }

  function selectPreset(amt: number) {
    setInrValue(amt);
    setCustomInput("");
    setDone(false);
  }

  return (
    <section className="w-full bg-black text-white relative overflow-hidden">

      {/* ===== TOP TITLE ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ fontFamily: "var(--font-chivo)" }}
          className="text-[#0077FF] text-sm font-light tracking-widest mb-6"
        >
          SWAP
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          style={{ fontFamily: "var(--font-space)" }}
          className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight"
        >
          {["RUPEE", "IN", "USDT"].map((word, i) => (
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
          {["OUT"].map((word, i) => (
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
      </div>

      {/* Horizontal Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        style={{ transformOrigin: "left" }}
        className="w-full h-px bg-white/10"
      />

      {/* ===== BOTTOM AREA ===== */}
      <div className="relative min-h-[500px] lg:min-h-[300px]">

        {/* WAVE BG */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/swap-bg1.png" alt="Wave" fill className="object-cover" />
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-2 min-h-[300px]">

            {/* LEFT — unchanged */}
            <div className="pr-0 lg:pl-8 lg:pt-8 bg-white/4">
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease, delay: 0.3 }}
                style={{ fontFamily: "var(--font-mana)" }}
                className="text-[#FFFFFF] font-regular text-lg md:text-[20px] leading-relaxed max-w-xl px-6 pt-6 pb-6 md:pb-0 md:px-0 md:pt-0"
              >
                Move seamlessly between INR and USDT across multiple blockchains.
                Our direct onramp/offramp flow removes the complexity of
                peer-to-peer matching, offering a fast, secure, and automated way
                to manage your local fiat-to-crypto needs.
              </motion.p>
            </div>

            {/* ── RIGHT — enhanced interactive widget ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="flex items-center justify-center py-10 px-6 lg:py-8"
            >
              <div
                ref={convertRef}
                className="relative w-full max-w-sm overflow-hidden"
                style={{
                  padding: "28px 24px 24px",
                }}
              >
                {/* Converting glow overlay */}
                <AnimatePresence>
                  {converting && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,119,255,0.12), transparent 70%)",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Success glow overlay */}
                <AnimatePresence>
                  {done && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(34,197,94,0.08), transparent 70%)",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Particles */}
                {particles.map((p) => (
                  <Particle key={p.id} x={p.x} y={p.y} color={p.color} />
                ))}

                {/* Flying bills */}
                {bills.map((i) => (
                  <FlyingBill key={`${billKey}-${i}`} index={i} />
                ))}

                {/* ── Top row: rate badge + sparkline ── */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <span style={{ fontSize: 9, letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-chivo)" }}>
                      LIVE RATE
                    </span>
                    <motion.span
                      key={RATE}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ fontSize: 10, color: "#22c55e", fontFamily: "var(--font-space)", fontWeight: 600 }}
                    >
                      ₹{RATE}
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkline up={rateUp} />
                    <span style={{ fontSize: 9, color: rateUp ? "#22c55e" : "#f87171", fontFamily: "var(--font-chivo)" }}>
                      {rateUp ? "▲" : "▼"} 0.12%
                    </span>
                  </div>
                </div>

                {/* ── Custom amount input ── */}
                <div className="mb-4">
                  <div
                    className="relative"
                    style={{
                      border: `0.5px solid ${inputFocused ? "rgba(0,119,255,0.5)" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 8,
                      padding: "10px 14px",
                      background: inputFocused ? "rgba(0,119,255,0.04)" : "rgba(255,255,255,0.02)",
                      transition: "border 0.2s, background 0.2s",
                    }}
                  >
                    <p style={{ fontSize: 8, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-chivo)", marginBottom: 4 }}>
                      ENTER AMOUNT
                    </p>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space)" }}>₹</span>
                      <input
                        ref={inputRef}
                        type="text"
                        inputMode="numeric"
                        placeholder={inrValue.toLocaleString("en-IN")}
                        value={customInput}
                        onChange={(e) => handleCustomInput(e.target.value)}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        className="flex-1 bg-transparent outline-none"
                        style={{
                          fontFamily: "var(--font-space)",
                          fontSize: 15,
                          fontWeight: 600,
                          color: "#ffffff",
                          caretColor: "#0077FF",
                        }}
                      />
                      {customInput && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          onClick={() => { setCustomInput(""); setInputFocused(false); inputRef.current?.blur(); }}
                          style={{ color: "rgba(255,255,255,0.2)", fontSize: 14, lineHeight: 1, cursor: "pointer", background: "none", border: "none" }}
                        >
                          ×
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Preset chips ── */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {presets.map((amt) => (
                    <motion.button
                      key={amt}
                      onClick={() => selectPreset(amt)}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        fontFamily: "var(--font-chivo)",
                        border: `0.5px solid ${inrValue === amt && !customInput ? "#0077FF" : "rgba(255,255,255,0.12)"}`,
                        color: inrValue === amt && !customInput ? "#0077FF" : "rgba(255,255,255,0.3)",
                        background: inrValue === amt && !customInput ? "rgba(0,119,255,0.08)" : "transparent",
                        borderRadius: 999,
                        padding: "3px 12px",
                        fontSize: 10,
                        letterSpacing: "0.15em",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </motion.button>
                  ))}
                </div>

                {/* ── Swap Row with enhanced orbs ── */}
                <div className="flex items-center justify-between gap-3 mb-6">

                  {/* INR coin */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-14 h-14">
                      {done && <PulseRing color="rgba(34,197,94,0.5)" />}
                      {done && <PulseRing delay={0.4} color="rgba(34,197,94,0.3)" />}
                      <motion.div
                        className="w-14 h-14 rounded-full flex items-center justify-center relative"
                        style={{
                          background: "radial-gradient(circle at 35% 35%, rgba(34,197,94,0.15), rgba(34,197,94,0.04))",
                          border: "1px solid rgba(34,197,94,0.3)",
                          boxShadow: "0 0 24px rgba(34,197,94,0.15)",
                        }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: "#22c55e" }}>₹</span>
                        <motion.div
                          className="absolute inset-1 rounded-full"
                          style={{ border: "0.5px solid rgba(34,197,94,0.2)" }}
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      {/* Orbit rings on converting */}
                      <AnimatePresence>
                        {converting && (
                          <>
                            <OrbitRing radius={34} duration={1.8} color="rgba(34,197,94,0.4)" clockwise />
                            <OrbitRing radius={42} duration={2.6} color="rgba(34,197,94,0.2)" clockwise={false} />
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="text-center">
                      <p style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-chivo)" }} className="mb-1">RUPEE IN</p>
                      <motion.p
                        key={inrValue}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontFamily: "var(--font-space)", fontSize: 15, fontWeight: 600, color: "#22c55e" }}
                      >
                        ₹{inrValue.toLocaleString("en-IN")}
                      </motion.p>
                    </div>
                  </div>

                  {/* Flow arrow — enhanced */}
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className="relative w-16 h-0.5 flex items-center">
                      <div className="w-full h-px bg-white/10" />
                      {/* Multiple travelling dots when converting */}
                      {converting ? (
                        [0, 0.3, 0.6].map((delay, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 rounded-full"
                            style={{ background: "#0077FF", boxShadow: "0 0 6px #0077FF" }}
                            animate={{ left: ["0%", "100%"] }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay }}
                          />
                        ))
                      ) : (
                        <motion.div
                          className="absolute w-2 h-2 rounded-full"
                          style={{ background: "#0077FF", boxShadow: "0 0 8px #0077FF, 0 0 16px #0077FF66" }}
                          animate={{ left: ["0%", "100%"] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.2 }}
                        />
                      )}
                      <svg className="absolute right-0" width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1 1L7 4L1 7" stroke="#0077FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Progress bar */}
                    <div className="w-16 h-px bg-white/5 rounded-full overflow-hidden" style={{ marginTop: 2 }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "#0077FF", width: `${convertProgress * 100}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                    <p style={{ fontSize: 8, letterSpacing: "0.2em", color: "rgba(255,255,255,0.15)", fontFamily: "var(--font-chivo)" }}>SWAP</p>
                  </div>

                  {/* USDT coin */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-14 h-14">
                      {done && <PulseRing color="rgba(0,119,255,0.5)" />}
                      {done && <PulseRing delay={0.4} color="rgba(0,119,255,0.3)" />}
                      <motion.div
                        className="w-14 h-14 rounded-full flex items-center justify-center relative"
                        style={{
                          background: "radial-gradient(circle at 35% 35%, rgba(0,119,255,0.15), rgba(0,119,255,0.04))",
                          border: `1px solid ${done ? "rgba(0,119,255,0.5)" : "rgba(0,119,255,0.15)"}`,
                          boxShadow: done ? "0 0 32px rgba(0,119,255,0.3)" : "0 0 8px rgba(0,119,255,0.08)",
                          transition: "border 0.4s, box-shadow 0.4s",
                        }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      >
                        <span style={{ fontFamily: "var(--font-space)", fontSize: 22, fontWeight: 700, color: done ? "#4fadf7" : "rgba(79,173,247,0.35)", transition: "color 0.4s" }}>$</span>
                        <motion.div
                          className="absolute inset-1 rounded-full"
                          style={{ border: "0.5px solid rgba(0,119,255,0.2)" }}
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <AnimatePresence>
                          {converting && (
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              style={{ border: "1.5px solid transparent", borderTopColor: "#0077FF" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1, rotate: 360 }}
                              exit={{ opacity: 0 }}
                              transition={{
                                rotate: { duration: 0.65, repeat: Infinity, ease: "linear" },
                                opacity: { duration: 0.2 },
                              }}
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                      {/* Orbit rings on converting */}
                      <AnimatePresence>
                        {converting && (
                          <>
                            <OrbitRing radius={34} duration={1.6} color="rgba(0,119,255,0.4)" clockwise={false} />
                            <OrbitRing radius={42} duration={2.4} color="rgba(0,119,255,0.2)" clockwise />
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="text-center">
                      <p style={{ fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-chivo)" }} className="mb-1">USDT OUT</p>
                      <motion.p
                        style={{ fontFamily: "var(--font-space)", fontSize: 15, fontWeight: 600, color: done ? "#4fadf7" : "rgba(79,173,247,0.3)", transition: "color 0.4s" }}
                      >
                        {done ? animatedUsdt : "—"}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* ── Rate info row ── */}
                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="flex justify-between mb-5 overflow-hidden"
                      style={{
                        background: "rgba(0,119,255,0.05)",
                        border: "0.5px solid rgba(0,119,255,0.15)",
                        borderRadius: 8,
                        padding: "8px 14px",
                      }}
                    >
                      {[
                        { label: "RATE", value: `₹${RATE}` },
                        { label: "FEE", value: `${(FEE * 100).toFixed(1)}%` },
                        { label: "ETA", value: "~30s" },
                      ].map(({ label, value }) => (
                        <div key={label} className="text-center">
                          <p style={{ fontSize: 8, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-chivo)" }}>{label}</p>
                          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)", marginTop: 2 }}>{value}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Convert button ── */}
                <motion.button
                  onClick={handleConvert}
                  disabled={converting}
                  whileHover={!converting ? { scale: 1.02 } : {}}
                  whileTap={!converting ? { scale: 0.97 } : {}}
                  className="relative w-full overflow-hidden"
                  style={{
                    background: converting ? "#0055bb" : done ? "linear-gradient(135deg, #0077FF, #22c55e44)" : "#0077FF",
                    color: "#fff",
                    border: "none",
                    borderRadius: 6,
                    padding: "11px 0",
                    fontFamily: "var(--font-chivo)",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                    cursor: converting ? "not-allowed" : "pointer",
                    transition: "background 0.5s",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)" }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {converting && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-block", fontSize: 12 }}
                      >
                        ◌
                      </motion.span>
                    )}
                    {converting ? "CONVERTING..." : done ? "SWAP AGAIN" : "CONVERT NOW"}
                  </span>
                </motion.button>

                {/* ── Success badge ── */}
                <AnimatePresence>
                  {done && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center mt-3"
                      style={{ fontSize: 10, letterSpacing: "0.2em", color: "#22c55e", fontFamily: "var(--font-chivo)" }}
                    >
                      ✓ SWAP COMPLETE
                    </motion.p>
                  )}
                </AnimatePresence>



              </div>
            </motion.div>

          </div>
        </div>

        {/* MIDDLE VERTICAL LINE */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
      </div>

      {/* Bottom Line */}
      <div className="w-full h-px bg-white/10" />

    </section>
  );
}







