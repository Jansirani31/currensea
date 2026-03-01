"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="relative w-full bg-black text-white lg:overflow-hidden">

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
          <p   style={{ fontFamily: "var(--font-chivo)" }} className="text-[12px] text-[#0077FF] uppercase">
            GET STARTED
          </p>

          <h1  style={{ fontFamily: "var(--font-space)" }} className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight">
            FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
          </h1>

          <p  style={{ fontFamily: "var(--font-mona)" }} className="mt-6 mb-6 text-[#FFFFFFB2] text-sm md:text-base max-w-xl mx-auto">
          Discover unparalleled security in your transactions and enjoy highly competitive spreads by partnering with the most trusted OTC provider in the industry. Our commitment to reliability ensures that your trading experience is both safe and profitable.
          </p>
          
            <button className="inline-flex items-center gap-2 
                               bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9]
                               px-8 py-3 rounded-full text-sm font-medium 
                               hover:opacity-90 transition">

               START SWAP NOW

              <Image
                src="/images/icons/common-whitearrow-icon.png"
                alt="arrow"
                width={14}
                height={14}
              />
            </button>
          
      {/* LOGO SECTION */}
<div className="relative w-full mt-6 sm:mt-10 -mb-32 sm:-mb-48 lg:-mb-76 ">

  {/* BLUE BACKGROUND */}
<div
  className="absolute left-1/2 -translate-x-1/2
             w-screen
             top-0
             h-[120px] sm:h-[420px] lg:h-[530px]">
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
  <div className="relative w-full 
                  h-[220px] sm:h-[420px] lg:h-[530px]
                  flex justify-center items-center">
    <Image
      src="/images/footer-bg.png"
      alt="logo"
      fill
      className="object-contain lg:object-[center_-70px]  object-[center_-30px]"
      priority
    />
  </div>

</div>
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










