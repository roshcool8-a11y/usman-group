export default function ProjectsSection() {
  const projects = [
    {
      title: "Construction Projects",
      number: "250+",
      desc: "Large-scale residential, commercial and industrial developments.",
    },
    {
      title: "Road Infrastructure",
      number: "120+",
      desc: "Highway construction, road expansion and civil engineering projects.",
    },
    {
      title: "Industrial Sites",
      number: "80+",
      desc: "Factories, plants and heavy industrial facility support services.",
    },
    {
      title: "Logistics Operations",
      number: "300+",
      desc: "Heavy transport, logistics and equipment mobilization projects.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
            Our Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projects We Support
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Delivering reliable heavy equipment solutions for construction,
            infrastructure, industrial and logistics projects across the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-[#CC9900]/50 hover:shadow-[0_0_35px_rgba(204,153,0,0.25)] transition-all duration-300"
            >
              <div className="text-[#CC9900] text-5xl font-bold mb-4">
                {project.number}
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}