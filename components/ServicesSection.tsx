export default function ServicesSection() {
  const services = [
    {
      title: "Heavy Equipment Rental",
      desc: "Modern machinery available for construction and industrial projects.",
    },
    {
      title: "Transportation Services",
      desc: "Safe and efficient transportation solutions across the UAE.",
    },
    {
      title: "Logistics Solutions",
      desc: "Professional logistics planning and project support services.",
    },
    {
      title: "Construction Support",
      desc: "Complete site support with skilled operators and equipment.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Complete Equipment Solutions
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Reliable heavy equipment rental, transportation and logistics
            services across the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                border border-gray-100
                hover:-translate-y-2
                hover:shadow-[0_0_35px_rgba(204,153,0,0.2)]
                hover:border-[#CC9900]/30
                transition-all
                duration-300
              "
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#CC9900]/10 flex items-center justify-center">
                <span className="text-3xl text-[#CC9900]">⚙</span>
              </div>

              <h3 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}