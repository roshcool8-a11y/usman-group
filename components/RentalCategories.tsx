import Image from "next/image";

export default function RentalCategories() {
  const categories = [
    {
      title: "Excavators",
      image: "/images/categories/excavator.jpg",
    },
    {
      title: "Wheel Loaders",
      image: "/images/categories/wheel-loader.jpg",
    },
    {
      title: "Backhoe Loaders",
      image: "/images/categories/backhoe-loader.jpg",
    },
    {
      title: "Cranes",
      image: "/images/categories/crane.jpg",
    },
    {
      title: "Forklifts",
      image: "/images/categories/forklift.jpg",
    },
    {
      title: "Low Bed Trailers",
      image: "/images/categories/lowbed-trailer.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Rental Categories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore our heavy equipment rental fleet.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  Available for short-term and long-term rental projects.
                </p>

                <button className="text-[#CC9900] font-semibold hover:underline">
                  View Equipment →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}