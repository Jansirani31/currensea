"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative flex flex-col items-center text-center pt-18">
        {/* BLUE RADIAL GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2
                          w-[1400px] h-[900px]
                          bg-[radial-gradient(circle_at_center,
                          rgba(37,99,235,0.35),transparent_70%)]" />
        </div>
        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-[10px] tracking-[0.20em] bg-gradient-to-r from-white via-purple-300 to-white bg-clip-text text-transparent uppercase">
            GET STARTED
          </p>

          <h1 className="mt-6 text-4xl tracking-[-0.02em] md:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#CBC7D3] leading-tight">
            EARN MORE AS A <br /> LIQUIDITY PROVIDER
          </h1>

          <p className="mt-6 font-Mono text-[#FFFFFFB2] text-sm md:text-base max-w-xl mx-auto">
           Enhance your trading experience by providing liquidity to active over-the-counter
           (OTC) trades. By doing so, you can earn competitive spreads while maintaining
           complete control over your transactions and ensuring secure execution.
          </p>

        {/*button
         <button
  className="mt-8 px-8 py-3 text-sm rounded-full
             bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9]
             hover:opacity-90 transition
             inline-flex items-center gap-2"
>
  <span>START SWAP NOW</span>

  <Image
    src="/images/icons/common-whitearrow-icon.png"
    alt="arrow"
    width={14}
    height={14}
    className="object-contain"
  />
</button>*/}

        </div>
        
        {/* LOGO */}
        <div className="relative mt-16 w-full flex justify-center">
          {/* BACKGROUND IMAGE */}
  <Image
    src="/images/footer-bg1.png"
    alt="background"
    fill
    className="object-cover"
    priority
  />
          <div className="relative w-[900px] h-[500px]">
            <Image
              src="/images/footer-bg.png"
              alt="logo"
              fill
              className="object-contain object-top"
              priority
            />
          </div>

        
    
 {/* ================= OVERLAP SOCIAL BAR ================= 
 
  <div className="relative -mt-50 z-30">*/}
  {/* ================= SOCIAL BAR (OVERLAP) ================= 
    <div className="max-w-10xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4
                      bg-black/60 backdrop-blur-2xl
                      border-b border-white/20">

        {["Facebook", "Twitter", "Youtube", "Instagram"].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center
                       px-8 py-6
                       text-sm text-gray-300
                       border-r border-white/10
                       last:border-r-0"
          >
            <span>{item}</span>
            <span className="text-gray-500">→</span>
          </div>
        ))}

      </div>
    </div>

  </div>*/}


  {/* ================= FOOTER ================= 
  <footer className="relative z-20 bg-black/80 backdrop-blur-2xl">

    <div className="max-w-7xl mx-auto border-t border-white/10">

      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* COLUMN 1 
        <div className="px-10 py-14 border-r border-white/10">
          <h4 className="text-xs tracking-[0.3em] text-gray-500 mb-8">
            ABOUT US
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Pricing</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>*/}

        {/* COLUMN 2 
        <div className="px-10 py-14 border-r border-white/10">
          <h4 className="text-xs tracking-[0.3em] text-gray-500 mb-8">
            SUPPORT
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Help Center</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>*/}

        {/* COLUMN 3 
        <div className="px-10 py-14 border-r border-white/10">
          <h4 className="text-xs tracking-[0.3em] text-gray-500 mb-8">
            COMMUNITY
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Forum</li>
            <li>Events</li>
            <li>Partners</li>
            <li>Affiliates</li>
            <li>Career</li>
          </ul>
        </div>*/}

        {/* COLUMN 4
        <div className="px-10 py-14">
          <h4 className="text-xs tracking-[0.3em] text-gray-500 mb-8">
            PRESS
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li>Investors</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Legal</li>
          </ul>
        </div>

      </div>
    </div> */}


    {/* BIG BACKGROUND TEXT 
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                    text-[14vw] font-bold
                    text-white/5
                    whitespace-nowrap
                    pointer-events-none select-none">
      CURRENSEA
    </div>

  </footer>*/}

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
               select-none pointer-events-none">
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










