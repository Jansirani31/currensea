"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);
  const [heights, setHeights] = useState<Record<number, number>>({});
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const answerRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const sectionRef = useRef<HTMLElement | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  useEffect(() => {
    const measured: Record<number, number> = {};
    Object.entries(answerRefs.current).forEach(([key, el]) => {
      if (el) measured[Number(key)] = el.scrollHeight;
    });
    setHeights(measured);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is CurrenSea?",
      answer:
        "CurrenSea is a professional OTC swap platform that enables secure and efficient conversion from INR to USDT. It is designed for individuals and businesses executing meaningful transaction volumes who require pricing stability, discretion, and structured settlement.",
    },
    {
      question: "How does the INR to USDT swap process work?",
      answer:
        "Users initiate a swap request, receive a confirmed exchange rate, and proceed with INR transfer. Once funds are verified, USDT is released at the locked rate. Pricing is confirmed before execution to reduce slippage and ensure predictability.",
    },
    {
      question: "How is CurrenSea different from a crypto exchange?",
      answer:
        "CurrenSea operates as an OTC desk rather than a public exchange. Transactions are executed privately without exposure to open order books, minimizing market impact and reducing volatility risks during larger conversions.",
    },
    {
      question: "Who is CurrenSea built for?",
      answer:
        "The platform is intended for high-net-worth individuals, corporate treasury teams, brokers, and institutional participants seeking reliable INR to USDT liquidity without speculative trading complexity.",
    },
    {
      question: "Is KYC mandatory?",
      answer:
        "Yes. All users must complete identity verification before initiating swaps. This ensures regulatory compliance, secure counterparties, and operational transparency.",
    },
    {
      question: "How is pricing determined?",
      answer:
        "Exchange rates are derived from aggregated market liquidity and real-time pricing sources. The quoted rate is clearly communicated and locked upon confirmation, ensuring clarity before settlement.",
    },
    {
      question: "How secure is the platform?",
      answer:
        "CurrenSea follows structured settlement procedures with verified accounts and encrypted communication protocols. Each transaction is documented and processed with compliance and capital protection as core priorities.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(14px); filter: blur(3px); }
          to   { opacity: 1; transform: translateY(0);   filter: blur(0);   }
        }
        @keyframes answerWord {
          from { opacity: 0; transform: translateY(7px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── NEW: shimmer sweep on card hover ── */
        @keyframes shimmerSweep {
          from { transform: translateX(-100%) skewX(-15deg); }
          to   { transform: translateX(300%) skewX(-15deg); }
        }

        /* ── NEW: active card left border pulse ── */
        @keyframes borderPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        .txt-label { opacity: 0; }
        .txt-label.on { animation: fadeUp 0.5s ease forwards; animation-delay: 0s; }

        .txt-word { display: inline-block; opacity: 0; }
        .txt-word.on { animation: wordReveal 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }

        .txt-body { opacity: 0; }
        .txt-body.on { animation: fadeUp 0.6s ease forwards; animation-delay: 0.42s; }

        .faq-card { opacity: 0; }
        .faq-card.on { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }

        .ans-word {
          display: inline-block;
          opacity: 0;
          animation: answerWord 0.38s ease forwards;
        }

        .faq-answer-wrap {
          overflow: hidden;
          transition: height 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.32s ease;
        }
        .faq-answer-inner {
          transition: transform 0.42s cubic-bezier(0.22,1,0.36,1), opacity 0.32s ease;
        }

        .faq-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
          font-size: 1.25rem;
          line-height: 1;
        }
        .faq-icon.open { transform: rotate(45deg); }

        /* ── NEW: shimmer span ── */
        .faq-shimmer {
          position: absolute;
          top: 0; left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .faq-card-wrap:hover .faq-shimmer {
          opacity: 1;
          animation: shimmerSweep 0.6s ease forwards;
        }

        /* ── NEW: active left border ── */
        .faq-active-bar {
          position: absolute;
          left: 0; top: 12px; bottom: 12px;
          width: 2px;
          border-radius: 9999px;
          background: linear-gradient(to bottom, #0077FF, #613FE7);
          opacity: 0;
          transform: scaleY(0);
          transform-origin: top;
          transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .faq-active-bar.show {
          opacity: 1;
          transform: scaleY(1);
          animation: borderPulse 2.5s ease infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="FaqSection"
        className="w-full bg-black py-16 md:py-24 px-4 md:px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="
              rounded-3xl
              p-6 md:p-10 lg:p-16
              bg-[url('/images/faqsection1.svg'),url('/images/faqsection2.png')]
              bg-no-repeat
              bg-[position:center,top_center]
              bg-[size:cover,100%_55%]
            "
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* LEFT SIDE */}
              <div className="space-y-6 md:space-y-8">

                {/* Label */}
                <p
                  style={{ fontFamily: "var(--font-chivo)" }}
                  className={`txt-label text-[#0077FF] bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white tracking-widest text-xs md:text-sm font-light ${isVisible ? "on" : ""}`}
                >
                  FAQS
                </p>

                {/* Heading */}
                <h2
                  style={{ fontFamily: "var(--font-space)" }}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-[-1.5px] md:tracking-[-2px]"
                >
                  {[["FREQUENTLY"], ["ASKED"], ["QUESTIONS"]].map((line, li) => (
                    <span key={li} style={{ display: "block" }}>
                      {line.map((word, wi) => (
                        <span
                          key={wi}
                          className={`txt-word ${isVisible ? "on" : ""}`}
                          style={{ animationDelay: `${0.08 + li * 0.13}s` }}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  ))}
                </h2>

                {/* Body */}
                <p
                  style={{ fontFamily: "var(--font-mona)" }}
                  className={`txt-body text-white/70 max-w-md text-base md:text-base leading-relaxed ${isVisible ? "on" : ""}`}
                >
                  Have questions? Our FAQ section has you covered with quick answers
                  to the most common inquiries.
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-4 md:space-y-6">
                {faqs.map((item, index) => {
                  const isOpen = active === index;
                  const isHovered = hoveredIndex === index;
                  const words = item.answer.split(" ");

                  return (
                    <div
                      key={index}
                      className={`faq-card faq-card-wrap border rounded-2xl bg-[#080808] backdrop-blur-md overflow-hidden relative ${isVisible ? "on" : ""}`}
                      style={{
                        animationDelay: `${0.1 + index * 0.07}s`,
                        borderColor: isOpen
                          ? "rgba(97,63,231,0.45)"
                          : isHovered
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(255,255,255,0.08)",
                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                        boxShadow: isOpen
                          ? "0 0 20px rgba(97,63,231,0.12)"
                          : "none",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* shimmer on hover */}
                      <span className="faq-shimmer" />

                      {/* active left bar */}
                      <span className={`faq-active-bar ${isOpen ? "show" : ""}`} />

                      <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-5 text-left text-white"
                      >
                        <span
                          className="text-base md:text-lg pr-4"
                          style={{
                            color: isOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.85)",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {item.question}
                        </span>
                        <span className={`faq-icon text-xl md:text-2xl ${isOpen ? "open" : ""}`}
                          style={{
                            color: isOpen ? "#613FE7" : "rgba(255,255,255,0.6)",
                            transition: "color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                          }}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className="faq-answer-wrap"
                        style={{
                          height: isOpen ? (heights[index] ?? "auto") : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div
                          ref={(el) => { answerRefs.current[index] = el; }}
                          className="faq-answer-inner px-5 md:px-6 pb-5 md:pb-6 text-gray-300 text-sm md:text-base leading-relaxed"
                          style={{
                            transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                            opacity: isOpen ? 1 : 0,
                          }}
                        >
                          {isOpen
                            ? words.map((word, wi) => (
                                <span
                                  key={wi}
                                  className="ans-word"
                                  style={{ animationDelay: `${wi * 0.016}s` }}
                                >
                                  {word}{wi < words.length - 1 ? "\u00A0" : ""}
                                </span>
                              ))
                            : item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}