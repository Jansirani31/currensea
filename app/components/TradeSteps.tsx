import Image from "next/image";

const steps = [
  {
    title: "Select\nCurrency & Lock",
    desc: "Choose your Currency (INR/USDT) and get the best live price to Lock in your rate and proceed.",
    img: "/images/trade1.png",
  },
  {
    title: "Secure your\nPayment",
    desc: "Send funds via Bank Transfer directly to our secure account. Upload your receipt or UTR for automated tracking.",
    img: "/images/trade2.png",
  },
  {
    title: "Rapid\nVerification",
    desc: "Our engine performs a lightning-fast background audit of your payment to ensure security and compliance.",
    img: "/images/trade3.png",
  },
  {
    title: "Instant\nSettlement",
    desc: "Get currency in your wallet. The aggregator pays out immediately after verification.",
    img: "/images/trade4.png",
  },
];

export default function TradeSteps() {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 md:mb-20">
          <span style={{ fontFamily: "var(--font-inter)"}} className="text-sm text-blue-400 cursor-pointer hover:underline">
            [ How it works ]
          </span>
          <h2 style={{ fontFamily: "var(--font-mona)"}} className="text-3xl sm:text-4xl lg:text-5xl font-medium font-Space tracking-tight">
            TRADE IN 4 SIMPLE STEPS
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
  {steps.map((step, index) => (
    <div
      key={index}
      className="
        w-full max-w-[320px]
        min-h-[380px]
        rounded-[14px]
        border border-white/10
        backdrop-blur-xl
        bg-white/1 backdrop-blur-[40px]
        opacity-95
        pt-[20px]
        pb-[34px]
        px-[10px]
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
              <h3  style={{ fontFamily: "var(--font-space)"}} className="text-[32px] font-medium  whitespace-pre-line mb-5">
                {step.title}
              </h3>

              {/* Description */}
              <p style={{ fontFamily: "var(--font-mona)"}} className="text-[14] font-light text-gray-400 leading-6 max-w-[260px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


