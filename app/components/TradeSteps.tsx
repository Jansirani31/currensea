import Image from "next/image";

const steps = [
  {
    title: "Submit\nYour Trade",
    desc: "Place your buy or sell request in seconds with a simple, guided flow.",
    img: "/images/trade1.png",
  },
  {
    title: "Intelligent\nRouting",
    desc: "Your trade is automatically routed to the best liquidity and pricing.",
    img: "/images/trade2.png",
  },
  {
    title: "Secure\nExecution",
    desc: "Trades execute with top security and compliance.",
    img: "/images/trade3.png",
  },
  {
    title: "Fast\nSettlements",
    desc: "Transactions settle quickly with minimal delays.",
    img: "/images/trade4.png",
  },
];

export default function TradeSteps() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 md:mb-20">
          <h2 style={{ fontFamily: "var(--font-mona)"}} className="text-3xl sm:text-4xl lg:text-5xl font-medium font-Space tracking-tight">
            TRADE IN 4 SIMPLE STEPS
          </h2>

          <span style={{ fontFamily: "var(--font-inter)"}} className="text-sm text-blue-400 cursor-pointer hover:underline">
            [ How it works ]
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
  {steps.map((step, index) => (
    <div
      key={index}
      className="
        w-full max-w-[400px]
        min-h-[450px]
        rounded-[14px]
        border border-white/10
        backdrop-blur-xl
        bg-white/5
        opacity-95
        pt-[30px]
        pb-[30px]
        px-[30px]
        flex flex-col items-center text-center
        transition-all duration-300
        hover:border-blue-500/40
        hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
      "
    >
              {/* Image */}
              <div className="relative w-[220px] h-[220px] mb-8 ">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3  style={{ fontFamily: "var(--font-space)"}} className="text-xl font-medium  whitespace-pre-line mb-5">
                {step.title}
              </h3>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-mona)"}} className="text-sm text-gray-400 leading-6 max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


