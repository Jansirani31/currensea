import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="AboutSection" className="relative bg-black text-white overflow-hidden -mt-10">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto pt-0 pb-12 lg:pt-12 lg:pb-24">
        {/* Grid Layout */}
        <div className="flex">  

          {/* LEFT SIDE */}
          <div className="w-[35%]">
            <p className="text-blue-500 text-xs tracking-[0.3em] mb-6">
              [ ABOUT ]
            </p>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium font-[var(--font-space-grotesk0]) leading-tight">
              Why <br />
              <span className="text-[#613FE7]">
                CurrenSea?
              </span>
            </h1>

            <p className="mt-8 text-gray-300 text-base md:text-lg leading-relaxed">
              CurrenSea is built for institutions, professional traders,
              and high-volume participants who demand precision,
              reliability, and control in every transaction.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full">
            <Image
              src="/images/about-bg.png"
              alt="About illustration"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>

    </section>
  );
}
