"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative flex flex-col items-center text-center pt-18 overflow-hidden">

        {/* BLUE RADIAL GLOW */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2
                          w-[1400px] h-[900px]
                          max-w-full
                          bg-[radial-gradient(circle_at_center,
                          rgba(37,99,235,0.35),transparent_70%)]" />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">
          <p   style={{ fontFamily: "var(--font-chivo)" }} className="text-[10px] tracking-[0.20em] bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent uppercase">
            GET STARTED
          </p>

          <h1  style={{ fontFamily: "var(--font-space)" }} className="mt-6 text-4xl tracking-[-0.02em] md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight">
            EARN MORE AS A <br /> LIQUIDITY PROVIDER
          </h1>

          <p  style={{ fontFamily: "var(--font-mona)" }} className="mt-6 font-regular text-[#FFFFFFB2] text-sm md:text-base max-w-xl mx-auto">
           Enhance your trading experience by providing liquidity to active over-the-counter
           (OTC) trades. By doing so, you can earn competitive spreads while maintaining
           complete control over your transactions and ensuring secure execution.
          </p>
        </div>
        
        {/* LOGO */}
        <div className="relative mt-16 w-full flex justify-center overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/images/footer-bg1.png"
              alt="background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative w-full h-[500px] max-w-full">
            <Image
              src="/images/footer-bg.png"
              alt="logo"              fill
              className="object-contain object-top"
              priority
            />
            <div className="absolute w-full inset-0 bg-gradient-to-b from-black/30 to-transparent">
            </div>
          </div>

          {/* TOP DARK FADE */}
          <div className="absolute bottom-0 left-0 w-full h-60
                bg-[linear-gradient(180deg,rgba(2,2,2,0)_0%,#000000_8.26%)]
                backdrop-blur-3xl">
          </div>

          {/* BIG BACKGROUND TEXT */}
          <h1 className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 
               text-[200px] font-bold 
               text-white/5 
               tracking-tight 
               select-none pointer-events-none
               whitespace-nowrap">
            CURRENSEA
          </h1>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/60">
            <span>@2026. CurrenSea. All right reserved.</span>
          </div>
        </div>
      </div>

    </section>
  );
}










