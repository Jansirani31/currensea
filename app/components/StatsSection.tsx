import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="relative z-10 w-full bg-black px-4 sm:px-6 lg:px-10 py-12 lg:py-16 pt-18 lg:pt-24">
      <div className="
            max-w-7xl mx-auto grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            auto-rows-auto
            md:auto-rows-[220px]
            gap-2
          ">
        {/* 99% CARD */}
        <div className="
              
              md:row-span-2
              lg:col-span-1 lg:row-span-2
              flex flex-col justify-between
              p-6
              rounded-2xl
              bg-gradient-to-b from-purple-600/10 to-pink-600/20
              border border-purple-500/20
            ">
          {/* TOP SECTION */}
          <div>
            <div className="h-[5px] bg-[#0CA2FF] rounded-2xl mb-6 w-full" />

            <h2
              style={{ fontFamily: "var(--font-space)" }}
              className="
              text-7xl font-medium text-[#0CA2FF]
              text-right
              "
            >
              99%
            </h2>
            <p style={{ fontFamily: "var(--font-mona)" }}
              className="
  text-[16px]            
  text-sm
  text-[#0CA2FF] 
  text-right 
  mt-2
"
            >
              Settlement accuracy
            </p>

            <p  style={{ fontFamily: "var(--font-mona)" }} className="mt-12 text-xs sm:text-sm text-[#0CA2FF] 
            leading-6 w-[160px] sm:w-[200px] lg:w-[220px]">
              Across high-value OTC transactions with institutional
              counterparties
            </p>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-6">
            <div className="h-[4px] bg-[#0CA2FF] w-full mb-3" />

            <div
            style={{ fontFamily: "var(--font-mona)" }}
              className="

      flex 
      items-center 
      justify-between 
      gap-2 
      text-xs 
      sm:text-sm 
      text-[#0CA2FF]
    "
            >
              <p>Globally trusted liquidity execution</p>

              <Image
                src="/images/icons/Stats-99-icon.svg"
                alt="globe icon"
                width={18}
                height={18}
                className="opacity-80"
              />
            </div>
          </div>
        </div>

        {/* 1200+ CARD */}
        <div
          className="
          md:row-span-2
          lg:col-span-1 lg:row-span-2
          flex flex-col justify-between
          p-6 rounded-2xl
          bg-gradient-to-b from-[#6AFCFC1A] to-[#6AFCF033]
          border border-[#FC6A801A]
        "
        >
          <div className="relative">
            {/* SVG - top right */}
            <Image
              src="/images/icons/Stats-1200-icon-bg.svg"
              alt="icon"
              width={18}
              height={18}
              className="absolute top-0 right-0"
            />

            <p style={{ fontFamily: "var(--font-space)" }}  className="text-xs md:text-sm text-[#FF9CAA] mb-3">
              Institutional & Enterprise Clients
            </p>
            <div className="h-[2px]  bg-[#FF9CAA] mb-8" />
          </div>

          <div>
            <h2  style={{ fontFamily: "var(--font-space)" }} className="text-5xl md:text-[100px] lg:text-[80px] font-bold text-[#FF9CAA]">
              1200+
            </h2>

            <p  style={{ fontFamily: "var(--font-inter)" }} className="text-[14px] text-medium md:text-sm text-[#FF9CAA] mt-3">
              OTC Trades Executed
            </p>
            <span></span>
          </div>
        </div>

        {/*HERO CARD */}
        <div
          className="
          relative
          md:col-span-2 md:row-span-2
          lg:col-span-2 lg:row-span-2
          rounded-2xl overflow-hidden
          bg-[linear-gradient(180deg,#0E2865_0%,rgba(6,16,41,0)_100%)]
          border border-[#0E286533]
        "
        >
          {/* Background */}
          <Image
            src="/images/hero-bg-card3.png"
            alt="Hero background"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b
            from-[#0E2865]/70 via-[#061029]/70 to-black/80"
          />

          {/* Big Logo */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="/images/logo-s.png"
              alt="Logo"
              width={380}
              height={380}
              className="object-contain opacity-60 scale-75 md:scale-90 lg:scale-100"
            />
          </div>

          {/* Content Overlay */}
          <div className=" relative z-10 h-full flex flex-col justify-end items-center text-center p-6 md:p-8 lg:p-10 pt-[60%]">
            <p  style={{ fontFamily: "var(--font-mona)" }} className="leading-[32.22px] tracking-[-0.43px] text-center text-[#D3D8E9] p-4 rounded-lg max-w-[320px]     /* 👈 width kammi */
    mx-auto">
              Experience OTC trading the way it should be transparent,
              efficient, and built for scale.
            </p>
            {/* BUTTON 
          
           <button className="font-chivo bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9] px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              <span>GET STARTED</span>
              <Image
              src="/images/icons/common-whitearrow-icon.png"
              alt="arrow"
              width={14}
              height={14}
              className="inline-block ml-2  "
            />
          </button>  
        */}
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div
          className="
          md:col-span-2
          lg:col-span-2
          p-8
          rounded-2xl
          bg-gradient-to-b from-[#74C8FC]/10 to-[#74C8FC]/20
          border border-[#74C8FC1A]
          flex items-center
          "
        >
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[#74C8FC] font-medium">Backed by</p>
              <Image
                src="/images/icons/Stats-bottomleft-icon.svg"
                alt="icon"
                width={22}
                height={22}
                className="opacity-80"
              />
            </div>

            {/* Full width line */}
            <div className="h-[2px] w-full bg-[#74C8FC] mb-8" />

            <h2  style={{ fontFamily: "var(--font-space)" }} className="text-4xl md:text-5xl lg:text-6xl font-space font-medium text-[#74C8FC] leading-tight">
              Fintech & crypto
            </h2>

            <p className="text-sm text-[#74C8FC] mt-4">product builders</p>
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div
          className="
          md:col-span-2
          lg:col-span-2
          p-6 rounded-2xl
          bg-gradient-to-b 
          from-[#2FC2B8]/10 
          to-[#2FC2B8]/20
          border border-emerald-500/20
          flex items-center
        "
        >
          <div>
            <h2
    style={{ fontFamily: "var(--font-space)" }}
    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#FF9CAA]"
  >
    Multi-liquidity
  </h2>

  <h2
    style={{ fontFamily: "var(--font-space)" }}
    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#FF9CAA]"
  >
    source aggregation
  </h2>

  <div className="h-[3px] w-32 sm:w-40 md:w-48 lg:w-56 bg-[#76E3DC] mt-6 md:mt-8" />

  <p
    style={{ fontFamily: "var(--font-mona)" }}
    className="text-xs sm:text-sm md:text-base font-semibold text-[#76E3DC] mt-4 md:mt-5"
  >
    Enterprise-Grade OTC Infrastructure
  </p>
          </div>
        </div>
      </div>
    </section>
  );
}
