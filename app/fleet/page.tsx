import Image from "next/image";

const equipment = [
  {
    name: "Excavators",
    image: "/images/categories/excavator.jpg",
    description:
      "Powerful excavators for construction, excavation and earthmoving projects.",
  },
  {
    name: "Cranes",
    image: "/images/categories/crane.jpg",
    description:
      "Heavy lifting solutions for industrial and infrastructure projects.",
  },
  {
    name: "Backhoe Loaders",
    image: "/images/categories/backhoe-loader.jpg",
    description:
      "Versatile machines for digging, loading and material handling.",
  },
  {
    name: "Forklifts",
    image: "/images/categories/forklift.jpg",
    description:
      "Reliable forklifts for warehouse and industrial operations.",
  },
  {
    name: "Lowbed Trailers",
    image: "/images/categories/lowbed-trailer.jpg",
    description:
      "Safe transportation of heavy machinery and oversized equipment.",
  },
  {
    name: "Wheel Loaders",
    image: "/images/categories/wheel-loader.jpg",
    description:
      "Efficient loaders designed for earthmoving and material handling.",
  },
];

export default function FleetPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/categories/excavator.jpg"
          alt="Fleet"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Fleet
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Modern Equipment
            <br />
            <span className="text-[#CC9900]">
              For Every Project
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A modern fleet of heavy equipment maintained to the highest
            standards of safety, reliability and performance.
          </p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              Equipment Collection
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Explore Our Fleet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {equipment.map((item, index) => (
              <div
                key={item.name}
                className="
                  group
                  bg-white
                  rounded-[30px]
                  overflow-hidden
                  border
                  border-gray-200
                  shadow-lg
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-500
                    "
                  />

                  <div className="absolute top-5 left-5 bg-[#CC9900] text-black px-4 py-2 rounded-xl font-bold">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.name}
                  </h2>

                  <p className="text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFFDF8] py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              Fleet Statistics
            </p>

            <h2 className="text-5xl font-bold text-gray-900">
              Trusted Across UAE
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                100+
              </h3>

              <p className="text-gray-700 text-lg">
                Machines Available
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                500+
              </h3>

              <p className="text-gray-700 text-lg">
                Projects Completed
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg text-center">
              <h3 className="text-6xl font-bold text-[#CC9900] mb-4">
                24/7
              </h3>

              <p className="text-gray-700 text-lg">
                Support & Assistance
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
              Need Equipment For Your Project?
            </h2>

            <p className="text-black/80 text-lg max-w-3xl mx-auto mb-10">
              Contact our team today and find the right equipment
              solution for your construction, industrial or
              infrastructure project.
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