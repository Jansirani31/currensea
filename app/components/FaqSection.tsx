"use client";

import { useState } from "react";
import Image from "next/image";

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

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
    <section id="FaqSection" className="w-full bg-black py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div
          className="rounded-3xl p-6 md:p-10 lg:p-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/faqsection-bg.png')",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT SIDE */}
            <div className="space-y-6 md:space-y-8">
              <p style={{ fontFamily: "var(--font-chivo)" }} className="  text-[#0077FF]
 bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white tracking-widest text-xs md:text-sm font-light">
                FAQS
              </p>

              <h2  style={{ fontFamily: "var(--font-space)" }} className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-[-1.5px] md:tracking-[-2px]">
                FREQUENTLY <br /> ASKED QUESTIONS
              </h2>

              <p style={{ fontFamily: "var(--font-mona)" }} className="text-white/70 max-w-md text-sm md:text-base leading-relaxed">
                Have questions? Our FAQ section has you covered with quick answers
                to the most common inquiries.
              </p>

              {/* BUTTON 
              <button
                className="group inline-flex items-center gap-2 
                px-8 py-3 rounded-full 
                bg-[linear-gradient(90deg,#5814F9_0%,#814BFE_52%,#5814F9_100%)]
                text-white font-medium 
                hover:opacity-90 transition"
              >
                <span>EXPLORE ALL SERVICES</span>

                <Image
                  src="/images/icons/common-whitearrow-icon.png"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              */}
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4 md:space-y-6">
              {faqs.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/8 rounded-2xl bg-[#080808]
                  backdrop-blur-md overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="
                   w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-5 text-left text-white"
                  >
                    <span className="text-base md:text-lg pr-4">
                      {item.question}
                    </span>

                    <span className="text-xl md:text-2xl flex-shrink-0">
                      {active === index ? "−" : "+"}
                    </span>
                  </button>

                  {active === index && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

