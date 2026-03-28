"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────────────────────────
export default function FooterSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes glowBreath {
          0%, 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.65; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes shimmerBtn {
          from { transform: translateX(-100%) skewX(-15deg); }
          to   { transform: translateX(320%) skewX(-15deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);    opacity: 0.55; }
          70%  { transform: scale(1.22); opacity: 0; }
          100% { transform: scale(1.22); opacity: 0; }
        }
        @keyframes labelFlicker {
          0%,100% { opacity: 1; }
          15%     { opacity: 0.15; }
          30%     { opacity: 1; }
          50%     { opacity: 0.5; }
          65%     { opacity: 1; }
        }
        @keyframes scanSweep {
          0%   { top: -10%; opacity: 0.3; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes glitch1 {
          0%,100% { clip-path: inset(0 0 95% 0); transform: translateX(0); }
          20%     { clip-path: inset(10% 0 80% 0); transform: translateX(-4px); }
          40%     { clip-path: inset(40% 0 50% 0); transform: translateX(4px); }
          60%     { clip-path: inset(60% 0 30% 0); transform: translateX(-2px); }
          80%     { clip-path: inset(80% 0 10% 0); transform: translateX(2px); }
        }
        @keyframes glitch2 {
          0%,100% { clip-path: inset(0 0 95% 0); transform: translateX(0); }
          20%     { clip-path: inset(15% 0 70% 0); transform: translateX(4px); color: #0ff; }
          50%     { clip-path: inset(50% 0 40% 0); transform: translateX(-3px); color: #f0f; }
          75%     { clip-path: inset(75% 0 15% 0); transform: translateX(3px); }
        }
        @keyframes borderDraw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes charReveal {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbitSpin    { from { transform: rotate(0deg); }  to { transform: rotate(360deg); } }
        @keyframes orbitSpinRev { from { transform: rotate(0deg); }  to { transform: rotate(-360deg); } }
        @keyframes haloPulse {
          0%,100% { opacity: 0.18; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: 0.35; transform: translate(-50%,-50%) scale(1.12); }
        }
        @keyframes particleDrift {
          0%   { transform: translateY(0px)    translateX(0px);   opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translateY(-60px)  translateX(12px);  opacity: 0.8; }
          90%  { opacity: 0.15; }
          100% { transform: translateY(-120px) translateX(-8px);  opacity: 0; }
        }

        .ft-label { opacity: 0; }
        .ft-label.on {
          animation: fadeUp 0.5s ease forwards, labelFlicker 0.4s ease 0.8s 1;
          animation-delay: 0.05s, 0.8s;
        }
        .ft-heading { opacity: 0; }
        .ft-heading.on { animation: fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.18s; }
        .ft-body { opacity: 0; }
        .ft-body.on { animation: fadeUp 0.6s ease forwards; animation-delay: 0.38s; }
        .ft-btn { opacity: 0; }
        .ft-btn.on { animation: fadeUp 0.6s ease forwards; animation-delay: 0.55s; }
        .ft-logo { opacity: 0; }
        .ft-logo.on { animation: fadeIn 1s ease forwards; animation-delay: 0.7s; }
        .ft-logo.on .logo-float { animation: floatLogo 5.5s ease-in-out infinite; animation-delay: 1.8s; }
        .ft-bar { opacity: 0; }
        .ft-bar.on { animation: fadeIn 0.6s ease forwards; animation-delay: 0.9s; }

        .glow-pulse { animation: glowBreath 5s ease-in-out infinite; }

        .btn-shimmer {
          position: absolute; top: 0; left: 0;
          width: 35%; height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          pointer-events: none;
        }
        .btn-wrap:hover .btn-shimmer { animation: shimmerBtn 0.6s ease forwards; }

        .btn-ring {
          position: absolute; inset: 0; border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.3);
          pointer-events: none;
          animation: pulseRing 2.4s ease-out infinite;
        }
        .btn-ring-2 {
          position: absolute; inset: 0; border-radius: 9999px;
          border: 1px solid rgba(129,75,254,0.4);
          pointer-events: none;
          animation: pulseRing 2.4s ease-out infinite 1.2s;
        }

        .glitch-wrap { position: relative; display: inline-block; }
        .glitch-layer-1 { position: absolute; inset: 0; color: #0ff; pointer-events: none; opacity: 0; }
        .glitch-layer-2 { position: absolute; inset: 0; color: #f0f; pointer-events: none; opacity: 0; }
        .ft-heading.on .glitch-layer-1 { animation: glitch1 0.35s steps(1) 1.1s 1 forwards; opacity: 1; }
        .ft-heading.on .glitch-layer-2 { animation: glitch2 0.35s steps(1) 1.1s 1 forwards; opacity: 1; }

        .scan-line {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0,119,255,0.45), transparent);
          pointer-events: none; top: -10%; opacity: 0;
        }
        .ft-heading.on .scan-line { animation: scanSweep 1.2s ease 0.3s 1 forwards; }

        .ft-bar-line { transform-origin: left; transform: scaleX(0); }
        .ft-bar-line.on { animation: borderDraw 1s cubic-bezier(0.22,1,0.36,1) 0.9s forwards; }

        .ft-copy-char { display: inline-block; opacity: 0; }
        .ft-bar.on .ft-copy-char { animation: charReveal 0.4s ease forwards; }

        .btn-arrow { transition: transform 0.25s ease; }
        a:hover .btn-arrow { transform: translateX(5px); }

        .orbit-ring { position: absolute; border-radius: 50%; border: 0.5px solid rgba(88,20,249,0.25); pointer-events: none; }
        .orbit-ring-1 { animation: orbitSpin    18s linear infinite; }
        .orbit-ring-2 { animation: orbitSpinRev 26s linear infinite; }

        .logo-halo {
          position: absolute; top: 50%; left: 50%;
          border-radius: 50%; pointer-events: none;
          animation: haloPulse 4s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} className="relative w-full bg-black text-white lg:overflow-hidden">

        {/* ── HERO ── */}
        <div className="relative flex flex-col items-center text-center pt-18 overflow-hidden">

          {/* 8 floating CSS particles */}
          {isVisible && [
            { left: "22%", top: "18%", delay: "0s",    dur: "2.0s",  color: "rgba(0,119,255,0.7)",    size: 4 },
            { left: "75%", top: "28%", delay: "0.3s",  dur: "2.4s",  color: "rgba(129,75,254,0.65)",  size: 3 },
            { left: "48%", top: "12%", delay: "0.6s",  dur: "1.8s",  color: "rgba(0,200,255,0.55)",   size: 3 },
            { left: "60%", top: "55%", delay: "0.1s",  dur: "2.6s",  color: "rgba(88,20,249,0.6)",    size: 5 },
            { left: "32%", top: "65%", delay: "0.8s",  dur: "2.1s",  color: "rgba(0,119,255,0.5)",    size: 3 },
            { left: "85%", top: "45%", delay: "0.4s",  dur: "2.3s",  color: "rgba(200,150,255,0.55)", size: 4 },
            { left: "15%", top: "50%", delay: "0.9s",  dur: "1.9s",  color: "rgba(0,180,255,0.45)",   size: 3 },
            { left: "55%", top: "75%", delay: "0.5s",  dur: "2.2s",  color: "rgba(129,75,254,0.7)",   size: 4 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute pointer-events-none rounded-full"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}`,
                animation: `particleDrift ${p.dur} ${p.delay} ease-in-out infinite`,
                zIndex: 2,
              }}
            />
          ))}

          

          {/* TEXT CONTENT */}
          <div className="relative z-10 max-w-3xl px-6">

            <p
              style={{ fontFamily: "var(--font-chivo)" }}
              className={`ft-label text-[12px] text-[#0077FF] uppercase tracking-widest ${isVisible ? "on" : ""}`}
            >
              GET STARTED
            </p>

            {/* Heading — glitch + scanline */}
            <div className={`ft-heading mt-6 relative overflow-hidden ${isVisible ? "on" : ""}`}>
              <div className="scan-line" />
              <div className="glitch-wrap">
                <h1
                  style={{ fontFamily: "var(--font-space)" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight"
                >
                  FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
                </h1>
                <div className="glitch-layer-1" aria-hidden>
                  <h1 style={{ fontFamily: "var(--font-space)" }} className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                    FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
                  </h1>
                </div>
                <div className="glitch-layer-2" aria-hidden>
                  <h1 style={{ fontFamily: "var(--font-space)" }} className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                    FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
                  </h1>
                </div>
              </div>
            </div>

            <p
              style={{ fontFamily: "var(--font-mona)" }}
              className={`ft-body mt-6 mb-6 text-[#FFFFFFB2] text-base md:text-base max-w-xl mx-auto ${isVisible ? "on" : ""}`}
            >
              Discover unparalleled security in your transactions and enjoy highly
              competitive spreads by partnering with the most trusted OTC provider
              in the industry. Our commitment to reliability ensures that your
              trading experience is both safe and profitable.
            </p>

           {/* CTA Button */}
<div className={`ft-btn inline-block relative mt-0 lg:-mt-10 ${isVisible ? "on" : ""}`}>
  <span className="btn-ring" />
  <span className="btn-ring-2" />
  <a
    href="https://app.currensea.in/"
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setBtnHovered(true)}
    onMouseLeave={() => setBtnHovered(false)}
    className="btn-wrap inline-flex items-center gap-2 bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9] px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden"
  >
    <span className="btn-shimmer" />
    START SWAP NOW
  </a>
</div>
            {/* LOGO SECTION */}
            <div className={`ft-logo relative w-full mt-10 sm:mt-16 -mb-40 sm:-mb-56 lg:-mb-80 ${isVisible ? "on" : ""}`}>

              {/* Orbit rings */}
              <div className="absolute left-1/2 top-1/2 pointer-events-none" style={{ zIndex: 2 }}>
                <div className="orbit-ring orbit-ring-1" style={{ width: 420, height: 420, marginLeft: -210, marginTop: -90 }} />
                <div className="orbit-ring orbit-ring-2" style={{ width: 560, height: 320, marginLeft: -280, marginTop: -60 }} />
              </div>

              {/* Logo halo */}
              <div
                className="logo-halo"
                style={{
                  width: 480, height: 280, marginLeft: -240, marginTop: -60,
                  background: "radial-gradient(ellipse at center, rgba(88,20,249,0.22), transparent 70%)",
                  zIndex: 2,
                }}
              />

              {/* BG image */}
              <div className="absolute left-1/2 -translate-x-1/2 w-screen -top-6 sm:-top-10 lg:-top-16 h-[180px] sm:h-[500px] lg:h-[530px]" style={{ zIndex: 3 }}>
                <Image src="/images/footer-bg1.png" alt="background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Logo float */}
              <div className="logo-float relative w-full h-[300px] sm:h-[420px] lg:h-[530px] -top-6 sm:-top-14 lg:-top-12 flex justify-center items-center" style={{ zIndex: 4 }}>
                <Image src="/images/footer-bg.png" alt="logo" fill className="object-contain lg:object-[center_-70px] object-[center_-30px]" priority />
              </div>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className={`ft-bar ${isVisible ? "on" : ""}`}>
          <div className={`ft-bar-line h-px bg-white/10 ${isVisible ? "on" : ""}`} />
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/60">
              <span className="cursor-default">
                {"@2026. CurrenSea. All right reserved.".split("").map((ch, i) => (
                  <span key={i} className="ft-copy-char" style={{ animationDelay: `${1.0 + i * 0.025}s` }}>
                    {ch}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}











