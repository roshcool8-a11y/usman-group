export default function StatsSection() {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Equipment Units" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-[#0A0A0A] to-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.35em] font-semibold mb-4">
            Our Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Numbers That Speak
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Delivering excellence in heavy equipment rental,
            transportation, and logistics solutions across the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-gradient-to-b
                from-[#111111]
                to-black
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:border-[#CC9900]/50
                hover:-translate-y-3
                hover:shadow-[0_0_45px_rgba(204,153,0,0.25)]
                transition-all
                duration-500
              "
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#CC9900]/10 blur-3xl"></div>

              <h2
                className="
                  text-6xl
                  font-extrabold
                  text-[#CC9900]
                  mb-4
                  drop-shadow-[0_0_15px_rgba(204,153,0,0.35)]
                "
              >
                {stat.number}
              </h2>

              <p className="text-gray-300 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}