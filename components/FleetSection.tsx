import Image from "next/image";

export default function FleetSection() {
  const equipment = [
    {
      name: "Excavators",
      image: "/images/categories/excavator.jpg",
    },
    {
      name: "Cranes",
      image: "/images/categories/crane.jpg",
    },
    {
      name: "Backhoe Loaders",
      image: "/images/categories/backhoe-loader.jpg",
    },
    {
      name: "Forklifts",
      image: "/images/categories/forklift.jpg",
    },
    {
      name: "Lowbed Trailers",
      image: "/images/categories/lowbed-trailer.jpg",
    },
    {
      name: "Wheel Loaders",
      image: "/images/categories/wheel-loader.jpg",
    },
  ];

  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Fleet
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Heavy Equipment Fleet
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Modern and well-maintained equipment ready for construction,
            industrial, transportation, and infrastructure projects across UAE.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {equipment.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-[0_0_40px_rgba(204,153,0,0.25)]
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Title */}
                <h3 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
                  {item.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-7">
                  Reliable and professionally maintained equipment for demanding projects.
                </p>

                <button
                  className="
                    mt-6
                    bg-[#CC9900]
                    text-black
                    px-5
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-yellow-500
                    hover:shadow-[0_0_25px_rgba(204,153,0,0.4)]
                    transition-all
                    duration-300
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}