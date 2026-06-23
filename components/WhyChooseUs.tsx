export default function WhyChooseUs() {
  const features = [
    {
      title: "24/7 Support",
      desc: "Dedicated customer support available around the clock.",
    },
    {
      title: "Modern Fleet",
      desc: "Well-maintained and latest heavy equipment fleet.",
    },
    {
      title: "Experienced Operators",
      desc: "Skilled professionals ensuring safety and efficiency.",
    },
    {
      title: "UAE Wide Service",
      desc: "Serving projects across all Emirates with reliability.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Equipment Partner
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Delivering reliable heavy equipment rental, transport and logistics
            solutions with professionalism and excellence across the UAE.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:-translate-y-3
                hover:border-[#CC9900]/50
                hover:shadow-[0_0_35px_rgba(204,153,0,0.25)]
                transition-all
                duration-300
              "
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#CC9900]/10 border border-[#CC9900]/20 flex items-center justify-center">
                <span className="text-[#CC9900] text-3xl">✓</span>
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}