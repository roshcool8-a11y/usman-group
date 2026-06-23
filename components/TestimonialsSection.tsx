export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Construction Company",
      role: "Construction Partner",
      text: "Reliable equipment and excellent support throughout our project. Professional team and modern machinery.",
    },
    {
      name: "Logistics Client",
      role: "Transport Client",
      text: "Professional transport services delivered on time. Their logistics planning saved us significant downtime.",
    },
    {
      name: "Industrial Contractor",
      role: "Industrial Project",
      text: "Modern fleet and experienced operators. Highly recommended for large-scale industrial operations.",
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] border-t border-[#CC9900]/20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Trusted by construction companies, logistics providers and
            industrial contractors across the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-black/50
                backdrop-blur-sm
                border
                border-white/10
                rounded-3xl
                p-8
                hover:-translate-y-2
                hover:border-[#CC9900]/50
                hover:shadow-[0_0_40px_rgba(204,153,0,0.25)]
                transition-all
                duration-300
              "
            >
              {/* Quote */}
              <div className="text-[#CC9900] text-6xl leading-none mb-4">
                ❝
              </div>

              {/* Stars */}
              <div className="text-[#CC9900] text-lg mb-5">
                ★★★★★
              </div>

              {/* Text */}
              <p className="text-gray-300 leading-8 mb-8">
                {item.text}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#CC9900] rounded-full mb-5"></div>

              {/* Client */}
              <div>
                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-[#CC9900] text-sm mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}