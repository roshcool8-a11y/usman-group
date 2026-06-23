import Image from "next/image";

export default function AboutPage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/categories/excavator.jpg"
          alt="Heavy Equipment"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <p className="text-[#CC9900] uppercase tracking-[0.35em] font-semibold mb-6">
            About Us
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
            Trusted Heavy Equipment
            <br />
            <span className="text-[#CC9900]">
              & Logistics Solutions
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-8">
            Delivering reliable machinery, transportation and logistics
            services across the UAE for construction, industrial and
            infrastructure projects.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* IMAGE */}
            <div className="relative">
              <Image
                src="/images/categories/excavator.jpg"
                alt="Company"
                width={800}
                height={600}
                className="rounded-[32px] shadow-2xl object-cover"
              />

              <div className="
                absolute
                bottom-8
                left-8
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                px-8
                py-5
                text-white
              ">
                <h3 className="text-5xl font-bold text-[#CC9900]">
                  15+
                </h3>

                <p className="uppercase tracking-[0.2em] text-sm">
                  Years Experience
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
                Who We Are
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Your Reliable Partner
                <br />
                For Every Project
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-6">
                USMAN GROUP OF COMPANIES is a trusted provider of heavy
                equipment rental, transportation and logistics solutions
                across the UAE.
              </p>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                We support construction, industrial and infrastructure
                projects with modern machinery, experienced operators
                and a strong commitment to safety, efficiency and
                customer satisfaction.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                <div className="
                  bg-gradient-to-br
                  from-[#FFF8E6]
                  to-white
                  border
                  border-[#CC9900]/20
                  rounded-3xl
                  p-6
                  text-center
                  shadow-lg
                ">
                  <h3 className="text-5xl font-bold text-[#CC9900]">
                    15+
                  </h3>

                  <p className="text-gray-700 mt-2">
                    Years Experience
                  </p>
                </div>

                <div className="
                  bg-gradient-to-br
                  from-[#FFF8E6]
                  to-white
                  border
                  border-[#CC9900]/20
                  rounded-3xl
                  p-6
                  text-center
                  shadow-lg
                ">
                  <h3 className="text-5xl font-bold text-[#CC9900]">
                    500+
                  </h3>

                  <p className="text-gray-700 mt-2">
                    Projects Completed
                  </p>
                </div>

                <div className="
                  bg-gradient-to-br
                  from-[#FFF8E6]
                  to-white
                  border
                  border-[#CC9900]/20
                  rounded-3xl
                  p-6
                  text-center
                  shadow-lg
                ">
                  <h3 className="text-5xl font-bold text-[#CC9900]">
                    100+
                  </h3>

                  <p className="text-gray-700 mt-2">
                    Machines Available
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-[#FFFDF8]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Mission
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Delivering Excellence Through
            Quality & Reliability
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Our mission is to provide dependable heavy equipment,
            transportation and logistics solutions that help clients
            complete projects safely, efficiently and on time while
            maintaining the highest standards of professionalism.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">

            <span className="bg-white px-6 py-3 rounded-full shadow-md">
              ✓ Safety First
            </span>

            <span className="bg-white px-6 py-3 rounded-full shadow-md">
              ✓ Modern Equipment
            </span>

            <span className="bg-white px-6 py-3 rounded-full shadow-md">
              ✓ Experienced Team
            </span>

            <span className="bg-white px-6 py-3 rounded-full shadow-md">
              ✓ UAE Wide Service
            </span>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="
            rounded-[40px]
            bg-gradient-to-r
            from-[#CC9900]
            to-yellow-500
            p-16
            text-center
            shadow-[0_20px_60px_rgba(204,153,0,0.25)]
          ">

            <h2 className="text-5xl font-bold text-black mb-6">
              Ready To Start Your Project?
            </h2>

            <p className="text-black/80 text-lg max-w-3xl mx-auto mb-10">
              Contact our team today to discuss your equipment rental,
              transportation and logistics requirements.
            </p>

            <div className="flex justify-center gap-5 flex-wrap">

              <button className="
                bg-black
                text-white
                px-10
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              ">
                Request Quote
              </button>

              <button className="
                bg-white
                text-black
                px-10
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              ">
                Contact Us
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}