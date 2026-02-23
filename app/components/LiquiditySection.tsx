import Image from "next/image";

export default function LiquiditySection() {
  return (
    <section className="relative bg-black text-white pt-3 pb-20 overflow-hidden">
      
      <div className="max-w-8xl mx-auto px-6 relative">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="black lg:hidden">

          {/* Image */}
          <div className="relative w-full h-[280px] sm:h-[350px] mb-8 bg-black">
            <Image
              src="/images/liquidity-bg1.png"
              alt="Liquidity background"
              fill
              className="object-cover object-[20%_70%]"
              priority
            />
          </div>

          {/* Content Below Image */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-space font-medium leading-tight mb-4">
              Earn 2% on Every Swap as
              <br />
              a Liquidity Provider
            </h2>

            <p className="text-[#D5D4D6] font-mono font-light text-sm sm:text-base leading-relaxed">
              Provide USDC liquidity and process swaps through your bank
              account every transaction you enable strengthens the network,
              while you earn 2% on each trade.
            </p>
          </div>
        </div>


        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:block relative w-full h-[600px]">

          {/* Background Image */}
          <Image
            src="/images/liquidity-bg1.png"
            alt="Liquidity background"
            fill
            className="object-contain"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Over Image */}
          <div className="absolute inset-0 flex items-center justify-end px-12">
            <div className="max-w-xl text-left">
              <h2  style={{ fontFamily: "var(--font-space)" }} className="text-[36px] font-medium leading-tight mb-6">
                Earn 2% on Every Swap as
                a Liquidity Provider
              </h2>
              <p  style={{ fontFamily: "var(--font-mona)" }}  className=" text-[20px] font-light text-white/70 mt-6 text-lg leading-relaxed max-w-lg">
        Provide USDC liquidity and process swaps through your bank account
        every transaction you enable strengthens the network, while you earn
        2% on each trade.
      </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
} 

