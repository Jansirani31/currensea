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
    <section className="w-full bg-black text-white py-24">
      
      {/* Centered Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <h2 className="font-medium text-3xl sm:text-4xl lg:text-5xl font-medium font-Space tracking-tight">
            TRADE IN 4 SIMPLE STEPS
          </h2>

          <span className="text-sm text-blue-400 cursor-pointer hover:underline">
            [ How it works ]
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="backdrop-filter backdrop-blur-10xl border border-white/10 rounded-2xl 
                         p-8 flex flex-col items-center text-center 
                         min-h-[470px] 
                         transition-all duration-300 
                         hover:border-blue-500/40 
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]s"
            >
              {/* Image */}
              <div className="relative w-55 h-55 mb-10">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
                {/* Title */}
                <h3 className="text-xl font-medium font-family:Space whitespace-pre-line mb-5">
                {step.title}
                </h3>
              {/* Description */}
              <p className="text-sm text-gray-400 leading-6 max-w-[260px] );
">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


