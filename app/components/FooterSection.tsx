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
          <p   style={{ fontFamily: "var(--font-chivo)" }} className="text-[12px] tracking-[0.20em] bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent uppercase">
            GET STARTED
          </p>

          <h1  style={{ fontFamily: "var(--font-space)" }} className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight">
            FUTURE OF FIAT-CRYPTO <br />INTEROPERABILITY.
          </h1>

          <p  style={{ fontFamily: "var(--font-mona)" }} className="mt-6 mb-6 text-[#FFFFFFB2] text-sm md:text-base max-w-xl mx-auto">
          Discover unparalleled security in your transactions and enjoy highly competitive spreads by partnering with the most trusted OTC provider in the industry. Our commitment to reliability ensures that your trading experience is both safe and profitable.
          </p>
        </div>
      {/* LOGO SECTION */}
<div className="relative w-full -mt-1 sm:mt-16 overflow-hidden">

  {/* BLUE BACKGROUND */}
  <div className="absolute 
    inset-x-0 top-0 
    h-[280px] sm:h-auto
    sm:bottom-[300px]">
    <Image
      src="/images/footer-bg1.png"
      alt="background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none" />
  </div>

  {/*LOGO */}
  <div className="relative w-full 
      h-[280px] sm:h-[550px]   
      flex justify-center items-start">

    <Image
      src="/images/footer-bg.png"
      alt="logo"
      fill
      className="object-cover object-center lg:object-contain lg:object-[center_-40px]"
      priority
    />

    {/* BLUR STRIP */}
    <div className="absolute hidden sm:block top-[200px] sm:top-[240px] left-0 w-full h-[120px] sm:h-[140px]
      bg-black/50 backdrop-blur-md pointer-events-none"
    />
  </div>

  {/* WATERMARK */}
  <div className="hidden sm:block absolute 
  bottom-[20px] sm:bottom-0
  left-1/2 -translate-x-1/2
  w-full max-w-[1400px]
  h-[120px] sm:h-[250px]
  z-10
  backdrop-blur-[48px]
  bg-[linear-gradient(180deg,rgba(2,2,2,0)_0%,#000000_8.26%)]">

    <Image
      src="/images/footer-bg2.png"
      alt="CurrenSea"
      fill
      className="object-contain object-center 
                 md:w-[70%] lg:w-[60%] xl:w-[50%] z-0 pb-8
                 "
      priority
    />
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










