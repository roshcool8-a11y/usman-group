import Image from "next/image";

const services = [
  {
    title: "Excavator Rental",
    image: "/images/categories/excavator.jpg",
    description:
      "High-performance excavators for construction, excavation and infrastructure projects.",
  },
  {
    title: "Crane Services",
    image: "/images/categories/crane.jpg",
    description:
      "Reliable crane solutions for lifting, installation and heavy-duty operations.",
  },
  {
    title: "Backhoe Loader Rental",
    image: "/images/categories/backhoe-loader.jpg",
    description:
      "Versatile backhoe loaders for digging, loading and site preparation tasks.",
  },
  {
    title: "Wheel Loader Rental",
    image: "/images/categories/wheel-loader.jpg",
    description:
      "Efficient wheel loaders designed for material handling and construction work.",
  },
  {
    title: "Forklift Rental",
    image: "/images/categories/forklift.jpg",
    description:
      "Safe and dependable forklift solutions for warehouses and industrial operations.",
  },
  {
    title: "Transportation Services",
    image: "/images/categories/lowbed-trailer.jpg",
    description:
      "Heavy equipment transportation and logistics services across the UAE.",
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/categories/excavator.jpg"
          alt="Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Heavy Equipment
            <span className="text-[#CC9900]"> Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Professional equipment rental, transportation and logistics
            solutions for construction, infrastructure and industrial
            projects throughout the UAE.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              What We Offer
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Premium Rental Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  bg-white
                  border
                  border-gray-200
                  shadow-lg
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-500
                    "
                  />

                  <div className="absolute top-5 left-5 bg-[#CC9900] text-black font-bold px-4 py-2 rounded-xl">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#FFFDF8] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Trusted Across The UAE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                15+
              </h3>

              <p className="text-gray-700 text-lg">
                Years Industry Experience
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                500+
              </h3>

              <p className="text-gray-700 text-lg">
                Successful Projects
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                24/7
              </h3>

              <p className="text-gray-700 text-lg">
                Customer Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-[#CC9900]
              to-yellow-500
              p-16
              text-center
              shadow-[0_20px_60px_rgba(204,153,0,0.25)]
            "
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Need Equipment For Your Next Project?
            </h2>

            <p className="text-black/80 text-lg max-w-3xl mx-auto mb-10">
              Contact our team today for reliable equipment rental,
              transportation and logistics services tailored to your
              project requirements.
            </p>

            <button
              className="
                bg-black
                text-white
                px-10
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              Request A Quote
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}