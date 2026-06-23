export default function CTA() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CC9900]/10 via-transparent to-[#CC9900]/10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm">
          <p className="text-[#CC9900] uppercase tracking-[0.25em] font-semibold mb-4">
            Get Started Today
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Need Heavy Equipment
            <br />
            For Your Project?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            From excavators and cranes to transportation and logistics
            solutions, we provide reliable equipment and professional
            support across the UAE.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#CC9900] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition duration-300">
              Request a Quote
            </button>

            <button className="border border-white/20 text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}