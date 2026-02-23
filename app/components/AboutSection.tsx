import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="AboutSection"
      className="relative bg-black text-white overflow-hidden -mt-10"
    >
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-12 pb-16 lg:pt-20 lg:pb-24">
        
        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[40%]">
            <p style={{ fontFamily: "var(--font-inter)" }} className="text-blue-500 font-regular text-xs tracking-[0.2em] mb-6">
              [ ABOUT ]
            </p>

            <h1  style={{ fontFamily: "var(--font-space)" }} className="text-2xl font-regular md:text-5xl lg:text-6xl font-medium font-[var(--font-space-grotesk0)] leading-tight">
              Why <br />
              <span  style={{ fontFamily: "var(--font-space)" }} className="text-[#613FE7]">
                CurrenSea?
              </span>
            </h1>

            <p style={{ fontFamily: "var(--font-mona)"}} 
                className=" font-light mt-8 text-gray-300  text-[24px]">
              CurrenSea is built for institutions, professional traders,
              and high-volume participants who demand precision,
              reliability, and control in every transaction.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-[60%] h-[280px] md:h-[380px] lg:h-[500px]">
            <Image
              src="/images/about-bg.png"
              alt="About illustration"
              fill
              className="object-cover rounded-2xl
              [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
             [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
