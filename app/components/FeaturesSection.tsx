
import Image from "next/image";

export default function FeatureSection() {
  return (
    <section id="FeaturesSection" className="bg-black text-white py-14">
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4">
          FEATURES
        </p>
        <h2 className="text-4xl md:text-6xl font-medium text-gradient-to-b from-[#FFFFFF] to-[#CBC7D3]leading-tight">
          EXPLORE OUR <br /> FEATURES
        </h2>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative min-h-[500px] lg:min-h-[430px] border border-white/10 overflow-hidden">

          {/* CENTER GLOBE */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/features1-bg.png"
                alt="globe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* PURPLE WAVE */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
              h-[250px] md:h-[320px] lg:h-[350px] 
              z-0 pointer-events-none">
            <Image
              src="/images/features2-bg.png"
              alt="wave"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>

          {/* TOP LEFT CARD */}
          <div className="relative z-10 w-full md:w-1/2 md:h-1/2 
              bg-white/[0.02] backdrop-blur-md border border-white/10 
              p-6 md:p-8 md:absolute md:top-0 md:left-0">

            {/* ICON */}
            <Image
              src="/images/icons/features-icon-bg.svg"
              alt="icon"
              width={40}
              height={40}
              className="absolute left-8 bottom-8"
            />

            <p className="text-sm font-mono text-gray-400 mb-6 text-right">
              01.
            </p>

            <h3 className="font-normal text-[#FFFFFF] md:text-xl lg:text-2xl leading-tight text-right mt-18">
              Institutional-Grade <br />
              Global Liquidity Access
            </h3>
          </div>

          {/* BOTTOM RIGHT CARD */}
          <div className="relative z-10 w-full md:w-1/2 md:h-1/2 
              bg-white/[0.02] backdrop-blur-md border border-white/10 
              p-6 md:p-8 mt-6 md:mt-0 
              md:absolute md:bottom-0 md:right-0 text-left ">

            <p className="text-[#FFFFFFB2] text-base md:text-lg leading-relaxed mb-8">
              Advanced routing algorithms scan multiple liquidity sources in
              real time to secure the best available price for every trade.
            </p>
            {/* BUTTON
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
                              transition">
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

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-2 mt-10 text-xs md:text-sm text-[#FFFFFF] tracking-widest">
          <span className="text-white">01</span>
          <div>::::::::::</div>
          <span className="text-white">02</span>
          <div>::::::::::</div>
          <span className="text-white">03</span>
        </div>
      </div>
    </section>
  );
}	


