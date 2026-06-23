"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero/slide1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      {/* Gold Glow */}
      <div className="absolute top-40 left-40 w-96 h-96 bg-[#CC9900]/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#CC9900]/40 bg-[#CC9900]/10 text-[#CC9900] text-sm font-semibold tracking-[0.2em] uppercase mb-8">
              UAE Heavy Equipment Specialists
            </span>

            <h1 className="text-white text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] mb-8">
              Heavy
              <br />
              Equipment
              <br />
              <span className="text-[#CC9900]">
                Rental &
              </span>
              <br />
              Logistics
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-9 max-w-2xl mb-10">
              Trusted heavy equipment rental, transportation,
              and logistics solutions across the UAE with a
              modern fleet, experienced operators, and
              exceptional service standards.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="
                bg-[#CC9900]
                text-black
                px-8
                py-4
                rounded-xl
                font-bold
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(204,153,0,0.5)]
                transition-all
                duration-300
                "
              >
                Request A Quote
              </Link>

              <Link
                href="/fleet"
                className="
                border
                border-white/20
                backdrop-blur-md
                bg-white/5
                text-white
                px-8
                py-4
                rounded-xl
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
                "
              >
                View Fleet
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:block">
            <div
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-10
              shadow-[0_0_60px_rgba(204,153,0,0.08)]
              "
            >
              <h3 className="text-white text-3xl font-bold mb-8">
                Why Choose Us
              </h3>

              <div className="space-y-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-300">
                    Equipment Available
                  </span>

                  <span className="text-[#CC9900] text-3xl font-bold">
                    100+
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-300">
                    Projects Completed
                  </span>

                  <span className="text-[#CC9900] text-3xl font-bold">
                    500+
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-300">
                    Years Experience
                  </span>

                  <span className="text-[#CC9900] text-3xl font-bold">
                    10+
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">
                    Support
                  </span>

                  <span className="text-[#CC9900] text-3xl font-bold">
                    24/7
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="text-white text-3xl animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
}