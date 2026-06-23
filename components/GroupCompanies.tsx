export default function GroupCompanies() {
  const companies = [
    {
      name: "USMAN TRANSPORT LLC",
      location: "UAE",
    },
    {
      name: "GLT TRANSPORT LLC",
      location: "UAE",
    },
    {
      name: "UIT TRANSPORT BR LLC",
      location: "UAE",
    },
    {
      name: "USMAN & IMTIAZ TRANSPORT LLC",
      location: "UAE",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Group Companies
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Group Companies
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Four trusted companies working together to provide transport,
            logistics and heavy equipment rental services across the UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="
                bg-black
                rounded-3xl
                p-8
                border
                border-white/10
                hover:-translate-y-3
                hover:border-[#CC9900]/50
                hover:shadow-[0_0_35px_rgba(204,153,0,0.25)]
                transition-all
                duration-300
              "
            >
              {/* Number */}
              <div className="w-14 h-14 rounded-2xl bg-[#CC9900]/10 border border-[#CC9900]/20 flex items-center justify-center mb-6">
                <span className="text-[#CC9900] text-xl font-bold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-white text-xl font-bold mb-3 leading-snug">
                {company.name}
              </h3>

              <p className="text-[#CC9900] font-medium mb-4">
                {company.location}
              </p>

              <p className="text-gray-400 leading-7">
                Professional transport, logistics and heavy equipment rental
                services with a commitment to quality and reliability.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}