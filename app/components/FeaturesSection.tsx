
import Image from "next/image";

export default function FeatureSection() {

  const features = [
    {
      number: "01.",
      title: (
        <>
          Buy crypto with INR. <br />
          Start your journey!
        </>
      ),
      desc: "Convert your local currency into digital assets at institutional rates. No individual sellers, no escrow waiting—just direct, secure bank-to-wallet delivery.",
      icon: "/images/icons/features-icon1.png",
    },
    {
      number: "02.",
      title: (
        <>
          Off-Ramp to INR in  <br />
          Seconds
        </>
      ),
      desc: "Cash out your digital assets directly into your bank account. Experience high-volume liquidity with zero slippage and immediate local settlement.",
      icon: "/images/icons/features-icon2.png",
    },
    {
      number: "03.",
      title: (
        <>
          Deep Liquidity <br />
          Aggregated Swaps
        </>
      ),
      desc: "Exchange one digital asset for another using our Smart Order Router. We find the most efficient path across global liquidity pools to ensure you get the maximum value.",
      icon: "/images/icons/features-icon3.png",
    },
  ];

  return (
    <section
      id="FeaturesSection"
      className="bg-black text-white py-14 overflow-hidden"
    >

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p
          style={{ fontFamily: "var(--font-chivo)" }}
          className="text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-4"
        >
          FEATURES
        </p>

        <h2
          style={{ fontFamily: "var(--font-space)" }}
          className="text-4xl md:text-6xl font-medium leading-tight bg-gradient-to-b from-[#FFFFFF] to-[#CBC7D3] bg-clip-text text-transparent"
        >
          EXPLORE OUR <br /> FEATURES
        </h2>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <div className="flex w-[300%]">

          {features.map((item, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center px-4"
            >
              <div className="relative min-h-[500px] lg:min-h-[430px] border border-white/10">

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
                  h-[250px] md:h-[320px] lg:h-[380px] 
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

                  {/* Dynamic Icon */}
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={60}
                    height={60}
                    className="absolute left-8 bottom-8"
                  />

                  <p
                    style={{ fontFamily: "var(--font-mona)" }}
                    className="text-sm text-gray-400 mb-6 text-right"
                  >
                    {item.number}
                  </p>

                  <h3
                    style={{ fontFamily: "var(--font-mona)" }}
                    className="text-[#FFFFFF] text-[20px] md:text-xl lg:text-2xl leading-tight text-right mt-18"
                  >
                    {item.title}
                  </h3>
                </div>

                {/* BOTTOM RIGHT CARD */}
                <div className="relative z-10 w-full md:w-1/2 md:h-1/2 
                  bg-white/[0.02] backdrop-blur-md border border-white/10 
                  p-6 md:p-8 mt-26 md:mt-0 
                  md:absolute md:bottom-0 md:right-0 text-left">

                  <p
                    style={{ fontFamily: "var(--font-space)" }}
                    className="text-[#FFFFFFB2] text-[18px] md:text-lg leading-relaxed mb-10 max-w-sm"
                  >
                    {item.desc}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2
        mt-10
        text-xs md:text-sm
        text-white tracking-widest
        border border-white/10
        bg-[#020202]
        rounded-lg
        px-4 py-2
        w-fit mx-auto">

        <span>01</span>
        <div className="text-white/70 tracking-[0.4em] hidden md:inline">::::::::::::::::::::</div>
        <div className="text-white/70 tracking-[0.4em] inline md:hidden">:::::::::</div>
        <span>02</span>
        <div className="text-white/70 tracking-[0.4em] hidden md:inline">::::::::::::::::::::</div>
        <div className="text-white/70 tracking-[0.4em] inline md:hidden">:::::::::</div>
        <span>03</span>

      </div>

    </section>
  );
}
	

