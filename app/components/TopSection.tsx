import Image from "next/image";
import Header from "./Header";

export default function TopSection() {
  return (
    <section className="relative w-full min-h-screen
">
      {/* BOTTOM GRADIENT FADE */}
<div className="absolute bottom-0 left-0 w-full h-[278px] 
                bg-gradient-to-b 
                from-transparent 
                to-black 
                z-[-5]" />
      {/* BACKGROUND */}
      <Image
        src="/images/top-bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover -z-20"
      />

      {/* Dot Texture Overlay */}
      <Image
        src="/images/topsection-bg2.png"  
        alt="texture"
        fill
        className="object-cover -z-10"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* HEADER */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center min-h-[100svh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

          <div className="max-w-3xl">

            {/* TAG */}
            <div className="mb-6">
              <span className="inline-flex font-urbanist items-center gap-2 
                               px-4 py-1.5 rounded-full
                               bg-gradient-to-b from-white/20 to-white/50
                               border border-white/20
                               text-[16px] sm:text-sm text-white"
                    style={{ fontFamily: "var(--font-urbanist)" }}>
    
                {/* Icon */}
                <Image
                  src="/images/icons/topsection-icon1.png" 
                  alt="icon"
                  width={22}
                  height={16}
                  className="object-contain"
                />
                Next-Gen OTC Aggregation
              </span>
            </div>

            {/* TITLE */}
<h1
  style={{ fontFamily: "var(--font-space)" }}
  className="
    font-medium
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-[80px]
    leading-[106%]
    tracking-[-0.04em]

    bg-gradient-to-r
    from-[#EDEEF0]
    to-[rgba(237,238,240,0.8)]
    bg-clip-text
    text-transparent

    drop-shadow-[0px_2.73px_1.37px_rgba(0,0,0,0.06)]
  "
>
  Get the Best Price <br className="hidden sm:block" />
  Without Complexity.
</h1>

            {/* DESCRIPTION */}
            <p 
              style={{ fontFamily: "var(--font-mona)" }}
              className="
                mt-4
                font-medium
                text-[16px] sm:text-[20px] lg:text-[20px]
                leading-[28px]
                tracking-[-0.4px]
                text-white/70
                text-[#FFFFFF]
                max-w-xl
              "
            >
              CurrenSea intelligently aggregates liquidity from trusted OTC desks
              and providers to deliver best-price execution, reduced slippage,
              and complete trade visibility.
            </p>

           {/* BUTTON 
            <button className="mt-2 px-4 py-3 
                               bg-white text-black
                               inline-flex items-center
                               rounded-full 
                               text-sm font-medium
                               hover:bg-gray-200 
                               transition-all duration-300">
              <span>GET STARTED NOW</span>
                  <Image 
                    src="/images/icons/common-blackarrow-icon.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="inline-block ml-2 "
                  />
            </button>
          
         */}

          </div>

        </div>
      </div>

      {/* TRUSTED SECTION 
      <div className="absolute bottom-8 sm:bottom-12 left-0 w-full z-20 mt-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
            Trusted by some of the biggest companies
          </p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 
                          text-white/60 text-xs sm:text-sm">
            <Image src="/images/icons/topsection-icon2.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon3.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon4.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon5.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon6.png" alt="logo" width={120} height={40} />
            <Image src="/images/icons/topsection-icon7.png" alt="logo" width={120} height={40} />
          </div>
        </div>
      </div>*/}
    <div className="absolute bottom-0 left-0 w-full z-[-5] flex flex-col gap-[2px]">
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  <div className="h-[1px] w-full border-t border-dotted border-white/15"></div>
  
</div>

    </section>
  );
}

