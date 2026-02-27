import Image from "next/image";

export default function LiquidityProviderSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-[#060B14] to-black text-white">

      <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">

        <div className="flex flex-col lg:flex-row gap-0 items-start">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start
                  lg:sticky lg:top-24
                  h-fit">

            <p style={{ fontFamily: "var(--font-mona)"}} className="text-xs font-medium tracking-widest bg-gradient-to-b from-white to-[#CBC7D3] bg-clip-text text-transparent mb-4">
              HIGHLIGHTS
            </p>

            <h2 style={{ fontFamily: "var(--font-space)"}} className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl  leading-tight">
              OTC DESK FOR <br className="hidden sm:block" />
              LARGE TRADES
            </h2>

            <p style={{ fontFamily: "var(--font-mona)"}} className="mt-6 font-medium text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed pb-10">
              Move capital seamlessly between INR and USDT with dedicated liquidity access, controlled pricing, and managed settlement.
No public order books. No volatility shocks. Just direct execution.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">

              <Image
                src="/images/liquidity-provider1.png"
                alt="Liquidity Features"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />

              <Image
                src="/images/liquidity-provider2.png"
                alt="Liquidity Features"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />

              <Image
                src="/images/liquidity-provider3.png"
                alt="Liquidity Features"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />

            </div>
          </div>

        </div>
      </div>

      {/* Bottom soft blend glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

    </section>
  );
}
