import Image from "next/image";
import Header from "./Header";

export default function TopSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/images/top-bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      {/* Dot Texture Overlay */}
      <Image
      src="/images/topsection-bg2.png"  
      alt="texture"
      fill
      className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* HEADER */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

          <div className="max-w-3xl">

            {/* TAG */}
            <div className="mb-6">
              <span className="inline-flex font-urbanist items-center gap-2 
                               px-4 py-1.5 rounded-full
                               bg-gradient-to-r from-white/50 to-white/20
                               border border-white/20
                               text-xs sm:text-sm text-white">
    
                {/* Icon */}
                <Image
                  src="/images/icons/topsection-icon1.png" 
                  alt="icon"
                  width={16}
                  height={16}
                  className="object-contain"
                  />
                  Next-Gen OTC Aggregation
                </span>
            </div>

            {/* TITLE */}
            <h1
  className="
    font-space
    font-medium
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-[87px]
    leading-[106%]
    tracking-[-0.04em]
    bg-gradient-to-r
    from-[#EDEEF0]
    to-[rgba(237,238,240,0.8)]
    bg-clip-text
    text-transparent
    drop-shadow-[0px_2.7px_1.3px_rgba(0,0,0,0.06)]
  "
>
  Get the Best Price <br className="hidden sm:block" />
  Without Complexity.
</h1>


  {/* DESCRIPTION */}
  <p className="
  mt-4
  font-[var(--font-mona)]
  font-medium
  text-[#FFFFB2]

  text-[18px] sm:text-[20px] lg:text-[22px]
  leading-[28px]
  tracking-[-0.4px]
  text-white/70
  max-w-xl
">
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

    </section>
  );
}

