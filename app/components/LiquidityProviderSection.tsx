
import Image from "next/image";

export default function LiquidityProviderSection() {
return (
<section className="relative w-full bg-black via-[#060B14] to-black text-white overflow-hidden">
    
    <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
    
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
        
        <p className="text-xs font-medium font-Chivo tracking-widest bg-gradient-to-b from-white to-[#CBC7D3] bg-clip-text text-transparent mb-4">
            HIGHLIGHTS
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">

            EARN MORE AS A <br className="hidden sm:block" />
            LIQUIDITY PROVIDER
        </h2>

        <p className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            
            Maximize the potential of your capital by actively providing liquidity,
            allowing you to earn attractive returns on each and every trade you make.
        </p>
        {/*BUTTON
        <button className="w-fit bg-gradient-to-r from-[#5814F9] via-[#814BFE] to-[#5814F9] hover:opacity-90 transition px-6 py-3 rounded-full text-sm mt-10">
            <span className="flex items-center gap-2 ">
            SWAP NOW
            <Image
            src="/images/icons/common-whitearrow-icon.png"
            alt="arrow"
            width={14}
            height={14}
            />
            </span>
        </button> 
        */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-6">
            
            <Image
            src="/images/liquidity-provider1.png"   
            alt="Liquidity Features"
            width={500}
            height={500}
            className="object-contain"
            />
            <Image
            src="/images/liquidity-provider2.png"   
            alt="Liquidity Features"
            width={500}
            height={500}
            className="object-contain"
            />
            <Image
            src="/images/liquidity-provider3.png"   
            alt="Liquidity Features"
            width={500}
            height={500}
            className="object-contain"
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
