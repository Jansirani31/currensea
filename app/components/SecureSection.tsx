import { img } from "framer-motion/client";
import Image from "next/image";

export default function SecureSection() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
       
        {/* ===== MAIN CONTAINER ===== */}
        <div className="relative rounded-[22px] border border-white/10 bg-[#080808]
 p-6 sm:p-10 lg:p-12 overflow-hidden">

          {/* ===== PURPLE BOTTOM GLOW IMAGE ===== */}
          <Image
            src="/images/secure1-bg.png"
            alt="glow"
            width={1920}
            height={600}
            className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
          />

          {/* ===== HEADING ===== */}
          <div className="text-center mb-16 md:mb-20 relative z-10">
            {/* TOP DOTTED BG */}
          <Image
            src="/images/secure2-bg.png"
            alt="dots"
            fill
            className="absolute  left-0 object-cover opacity-30 pointer-events-none"
          />
            <p style={{ fontFamily: "var(--font-chivo)" }} className=" text-[12px] font-light tracking-[0.20em] text-white/80 mb-6">
              SECURITY
            </p>

            <h2 style={{ fontFamily: "var(--font-chivo)" }}
              className="
                font-medium
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-[56px]
                font-Space
                font-medium
                leading-tight
                tracking-[-0.02em]
                mb-8
                bg-gradient-to-b
                from-white
                to-[#CBC7D3]
                bg-clip-text
                text-transparent
              "
            >
              SECURE AND <br /> TRANSPARENT.
            </h2>

            {/*BUTTON*
            <button className="inline-flex items-center gap-2 
                               bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9]
                               px-8 py-3 rounded-full text-sm font-medium 
                               hover:opacity-90 transition">

              GET STARTED

              <Image
                src="/images/icons/common-whitearrow-icon.png"
                alt="arrow"
                width={14}
                height={14}
              />
            </button>
          */}  

          </div>

          {/* ===== DIVIDER ===== */}
          <div className="border-t border-white/10 mb-12 md:mb-16 relative z-10"/>
          {/* ===== CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 md:gap-8 relative z-10">
            {[
              {
                title: "Institutional-grade security architecture",
                desc: "Enterprise-level security protects assets, data, and transactions across the platform.",
                img: "/images/sec1.png",
                icon: "/images/icons/secure-icon1.png",
              },
              {
                title: "Institutional Security",
                desc: "Transactions are recorded and traceable, ensuring auditability and confidence.",
                img: "/images/sec2.png",
                icon: "/images/icons/secure-icon2.png",
              },
              {
                title: "Real-Time Execution Monitoring",
                desc: "Monitor trade execution in real time with visibility into pricing and routing.",
                img: "/images/sec3.png",
                icon: "/images/icons/secure-icon3.png",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-[16px] 
                           border border-white/10 
                           bg-[url('/images/secure3-bg.png')
                           bg-white/[0.01] 
                           backdrop-blur-[40px] 
                           p-5 sm:p-6
                           flex flex-col
                           h-full"
              >
                 {/* 🔥 CENTER TOP BORDER GLOW */}
      <div className="absolute top-0 left-0 w-full h-[1px] px-16">
        <div className="w-full h-full 
          bg-[linear-gradient(90deg,rgba(79,26,214,0)_0%,#4F1AD6_50%,rgba(79,26,214,0)_100%)]" />
      </div>
                <Image
    src="/images/secure3-bg.png"
    alt=""
    fill
    className="object-contain"
  />
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full 
                                  bg-gradient-to-br from-[#4F1AD6] to-[#8059E3]
                                  flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt="icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3  style={{ fontFamily: "var(--font-mona)" }} className="text-[28px] sm:text-[24px] font-medium min-h-[64px] sm:min-h-[72px] text-center text-[#FFFFFF]
mb-4">
                  {card.title}
                </h3>

                <div className="w-[150px] h-[1px] sm:w-[180px] lg:w-[220px]  bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto mb-4" />

                <p  style={{ fontFamily: "var(--font-mona)" }} className="text-[14px] text-white/60 text-center mb-8 leading-relaxed px-2">
                  {card.desc}
                </p>

                {/* FIXED IMAGE CONTAINER */}
                <div className="mt-auto flex justify-center h-[200px] sm:h-[220px] items-center">
                  <Image
                    src={card.img}
                    alt=""
                    width={300}
                    height={200}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}


