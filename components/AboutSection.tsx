export default function AboutSection() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "500+",
      title: "Projects Completed",
    },
    {
      number: "100+",
      title: "Equipment Units",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-5">
              About Us
            </span>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Trusted Heavy Equipment
              <br />
              <span className="text-[#CC9900]">
                Rental Partner
              </span>
            </h2>

            <div className="w-24 h-1 bg-[#CC9900] rounded-full mb-8"></div>

            <p className="text-gray-600 text-lg leading-9 mb-6">
              USMAN GROUP OF COMPANIES is a leading provider of
              heavy equipment rental, transportation, and logistics
              solutions across the UAE.
            </p>

            <p className="text-gray-600 text-lg leading-9 mb-10">
              With a modern fleet, highly experienced operators,
              and a commitment to excellence, we support
              construction, infrastructure, industrial, and
              logistics projects of every scale.
            </p>

            <div className="flex flex-wrap gap-4">

              <div className="px-5 py-3 rounded-xl bg-[#CC9900]/10 border border-[#CC9900]/20">
                <span className="font-semibold text-black">
                  Heavy Equipment Rental
                </span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-[#CC9900]/10 border border-[#CC9900]/20">
                <span className="font-semibold text-black">
                  Transportation
                </span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-[#CC9900]/10 border border-[#CC9900]/20">
                <span className="font-semibold text-black">
                  Logistics Solutions
                </span>
              </div>

            </div>

          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="
                  bg-black
                  rounded-3xl
                  p-7
                  border
                  border-white/10
                  hover:border-[#CC9900]/50
                  hover:-translate-y-2
                  hover:shadow-[0_0_35px_rgba(204,153,0,0.25)]
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-[#CC9900] text-5xl font-bold mb-4">
                  {item.number}
                </h3>

                <p className="text-white text-lg font-medium">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}