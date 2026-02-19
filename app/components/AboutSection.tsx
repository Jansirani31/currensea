import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="AboutSection" className="relative bg-black text-white overflow-hidden -mt-10">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-0 pb-12 lg:pt-12 lg:pb-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* ================= LEFT SIDE (TEXT) ================= */}
          <div className="z-10">

            <p className="text-blue-500 font-Space text-xs tracking-[0.3em] mb-6">
              [ ABOUT ]
            </p>

            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight">
              Why <br />
              <span className="text-[#613FE7]">
                CurrenSea?
              </span>
            </h1>

            <p className="font-medium mt-8 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              CurrenSea is built for institutions,professional traders,
              and high-volume participants who demand precision,reliability,
              and control in every transaction.
            </p>
            

          </div>

          {/* ================= RIGHT SIDE IMAGE================= */}
          <div className="relative w-full h-[600px] sm:h-[380px] md:h-[450px] lg:h-[520px]">

            <Image
              src="/images/about-bg.png"
              alt="About illustration"
              fill
              className="object-contain"
              priority
            />

          </div>

        </div>
      </div>

    </section>
  );
}
