"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
          50%       { transform: translateY(-10px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.55; }
        }

        /* ── NEW ── */
        @keyframes shimmerBtn {
          from { transform: translateX(-100%) skewX(-15deg); }
          to   { transform: translateX(300%) skewX(-15deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes labelFlicker {
          0%,100% { opacity: 1; }
          20%      { opacity: 0.2; }
          40%      { opacity: 1; }
          60%      { opacity: 0.6; }
        }
        @keyframes drawLine {
          from { scaleX: 0; }
          to   { scaleX: 1; }
        }
        @keyframes glowBreath {
          0%, 100% { opacity: 0.35; transform: translate(-50%, 0) scale(1); }
          50%       { opacity: 0.6;  transform: translate(-50%, 0) scale(1.08); }
        }

        .ft-label { opacity: 0; }
        .ft-label.on {
          animation: fadeUp 0.5s ease forwards, labelFlicker 0.25s ease 1.2s 1;
          animation-delay: 0.05s, 1.2s;
        }

        .ft-heading { opacity: 0; }
        .ft-heading.on { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards; animation-delay: 0.15s; }

        .ft-body { opacity: 0; }
        .ft-body.on { animation: fadeUp 0.6s ease forwards; animation-delay: 0.35s; }

        .ft-btn { opacity: 0; }
        .ft-btn.on { animation: fadeUp 0.6s ease forwards; animation-delay: 0.5s; }

        .ft-logo { opacity: 0; }
        .ft-logo.on { animation: fadeIn 0.9s ease forwards; animation-delay: 0.65s; }
        .ft-logo.on .logo-float { animation: floatLogo 5s ease-in-out infinite; animation-delay: 1.6s; }

        /* glow now breathes with scale */
        .glow-pulse {
          animation: glowBreath 5s ease-in-out infinite;
        }

        .ft-bar { opacity: 0; }
        .ft-bar.on { animation: fadeIn 0.6s ease forwards; animation-delay: 0.85s; }

        .btn-arrow { transition: transform 0.25s ease; }
        a:hover .btn-arrow { transform: translateX(4px); }

        /* ── Button shimmer ── */
        .btn-shimmer {
          position: absolute;
          top: 0; left: 0;
          width: 35%;
          height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%);
          pointer-events: none;
        }
        .btn-wrap:hover .btn-shimmer {
          animation: shimmerBtn 0.55s ease forwards;
        }

        /* ── Pulse ring on button ── */
        .btn-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.3);
          pointer-events: none;
          animation: pulseRing 2.2s ease-out infinite;
        }

        /* ── Bottom bar hover link ── */
        .ft-copy {
          transition: color 0.25s ease;
        }
        .ft-copy:hover { color: rgba(255,255,255,0.9); }

        /* ── Border draw on bottom bar ── */
        .ft-bar-line {
          transform-origin: left;
          animation: none;
          transform: scaleX(0);
          transition: transform 1s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-bar-line.on {
          transform: scaleX(1);
        }
      `}</style>

      <section ref={sectionRef} className="relative w-full bg-black text-white lg:overflow-hidden">

        {/* ================= HERO ================= */}
        <div className="relative flex flex-col items-center text-center pt-18 overflow-hidden">

          {/* BLUE RADIAL GLOW — now breathes with scale */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="glow-pulse absolute top-[45%] left-1/2 -translate-x-1/2
                            w-[1400px] h-[900px]
                            max-w-full
                            bg-[radial-gradient(circle_at_center,
                            rgba(37,99,235,0.35),transparent_70%)]" />
          </div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 max-w-3xl px-6">

            {/* Label — fadeUp + flicker */}
            <p style={{ fontFamily: "var(--font-chivo)" }} className={`ft-label text-[12px] text-[#0077FF] uppercase ${isVisible ? "on" : ""}`}>
              GET STARTED
            </p>

            {/* Heading */}
            <h1 style={{ fontFamily: "var(--font-space)" }} className={`ft-heading mt-6 text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight ${isVisible ? "on" : ""}`}>
              FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
            </h1>

            {/* Body */}
            <p style={{ fontFamily: "var(--font-mona)" }} className={`ft-body mt-6 mb-6 text-[#FFFFFFB2] text-base md:text-base max-w-xl mx-auto ${isVisible ? "on" : ""}`}>
              Discover unparalleled security in your transactions and enjoy highly competitive spreads by partnering with the most trusted OTC provider in the industry. Our commitment to reliability ensures that your trading experience is both safe and profitable.
            </p>

            {/* CTA Button — shimmer + pulse ring + scale */}
            <div className={`ft-btn inline-block relative ${isVisible ? "on" : ""}`}>
              {/* pulse ring */}
              <span className="btn-ring" />
              <a
                href="https://app.currensea.in/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="btn-wrap inline-flex items-center gap-2 bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9] px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden"
                style={{
                  transform: btnHovered ? "scale(1.05)" : "scale(1)",
                  boxShadow: btnHovered ? "0 0 28px rgba(129,75,254,0.45)" : "none",
                  opacity: btnHovered ? 0.95 : 1,
                }}
              >
                {/* shimmer sweep */}
                <span className="btn-shimmer" />
                START SWAP NOW
                <Image
                  src="/images/icons/common-whitearrow-icon.png"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="btn-arrow"
                />
              </a>
            </div>

            {/* LOGO SECTION */}
            <div className={`ft-logo relative w-full mt-10 sm:mt-16 -mb-40 sm:-mb-56 lg:-mb-80 ${isVisible ? "on" : ""}`}>

              {/* BLUE BACKGROUND */}
              <div className="absolute left-1/2 -translate-x-1/2
                               w-screen
                               -top-6 sm:-top-10 lg:-top-16
                               h-[180px] sm:h-[500px] lg:h-[530px]">
                <Image
                  src="/images/footer-bg1.png"
                  alt="background"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none" />
              </div>

              {/* LOGO */}
              <div className="logo-float relative w-full
                              h-[300px] sm:h-[420px] lg:h-[530px] -top-6 sm:-top-14 lg:-top-12
                              flex justify-center items-center">
                <Image
                  src="/images/footer-bg.png"
                  alt="logo"
                  fill
                  className="object-contain lg:object-[center_-70px] object-[center_-30px]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className={`ft-bar ${isVisible ? "on" : ""}`}>
          {/* animated border draw */}
          <div
            className={`ft-bar-line h-px bg-white/10 ${isVisible ? "on" : ""}`}
          />
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/60">
              <span className="ft-copy cursor-default">@2026. CurrenSea. All right reserved.</span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}









