import Image from "next/image";

export default function SwapSection() {
  return (
    <section className="w-full bg-black text-white relative overflow-hidden">

      {/* ===== TOP TITLE ===== */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <p  style={{ fontFamily: "var(--font-chivo)"}} className="text-xs font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white mb-6">
          SWAP
        </p>

        <h2 style={{ fontFamily: "var(--font-space)"}} className="text-3xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight">
          USDT IN RUPEE <br />
          OUT
        </h2>
      </div>

      {/* Horizontal Line */}
      <div className="w-full h-px bg-white/10" />

      {/* ===== BOTTOM AREA ===== */}
      <div className="relative">

        {/* FULL Background Image*/}
        <div className="absolute inset-0">
          <Image
            src="/images/swap-bg-img.png"
            alt="Swap Background"
            fill
            priority
            className="object-cover object-right"
          />
        </div>
        {/* WAVE IMAGE */}
<div className="absolute inset-0 pointer-events-none">
  <Image
    src="/images/swap-bg1.png"   
    alt="Wave"
    fill
    className="object-cover"
  />
</div>
        {/* CONTENT */}
        <div className="relative">

          {/* GRID = TABLE STYLE */}
          <div className="grid lg:grid-cols-2 min-h-[300]">

            {/* LEFT */}
            <div className="pr-0 lg:pl-8 lg:pt-8 bg-white/4">
              <p style={{ fontFamily: "var(--font-mana)" }} className="text-[#FFFFFF]
 font-regular text-lg md:text-[24px] leading-relaxed max-w-xl px-6 pt-6 pb-6 md:pb-0 md:px-0 md:pt-0">
               Seamlessly buy or sell USDT across multiple chains using your local fiat currency. Whether you go from fiat to crypto or crypto to fiat, It's fast, secure and truly peer to peer with P2P.me.
              </p>
              {/* BUTTON }
               <button className=" ml-auto group 
                                            inline-flex 
                                            items-center 
                                            gap-2 
                                            bg-white 
                                            text-black 
                                            px-8 py-3 
                                            rounded-full
                                            font-medium 
                                            text-xs 
                                            tracking-widest 
                                            hover:bg-gray-200 
                                            transition
                                            mt-16">
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

            <div className="py-30"/>

          </div>

        </div>

        {/* MIDDLE VERTICAL LINE (Full Height like table) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />

      </div>

      {/* Bottom Line */}
      <div className="w-full h-px bg-white/10" />

    </section>
  );
}




