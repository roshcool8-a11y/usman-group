import Image from "next/image";

export default function ContactPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/categories/crane.jpg"
          alt="Contact Us"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <p className="text-[#CC9900] uppercase tracking-[0.35em] font-semibold mb-4">
            Contact Us
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Let's Build
            <span className="text-[#CC9900]"> Something Great</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Heavy Equipment Rental, Transportation & Logistics Solutions
            Across The UAE.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+971 XX XXX XXXX</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">info@usmangroup.com</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">Dubai, UAE</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🕒</div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat</p>
              <p className="text-gray-600">08:00 AM - 06:00 PM</p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <div>
              <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
                Get In Touch
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Discuss Your
                <span className="text-[#CC9900]"> Project Requirements</span>
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Whether you need heavy equipment rental,
                transportation services, logistics support or
                project consultation, our experienced team is
                ready to assist you.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CC9900] flex items-center justify-center text-black font-bold">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700">
                    Fast Response & Support
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CC9900] flex items-center justify-center text-black font-bold">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700">
                    UAE Wide Equipment Availability
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CC9900] flex items-center justify-center text-black font-bold">
                    ✓
                  </div>

                  <p className="text-lg text-gray-700">
                    Reliable Logistics Solutions
                  </p>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#CC9900]/10 p-10">

              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Send Us A Message
              </h3>

              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you shortly.
              </p>

              <form className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-[#CC9900]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-[#CC9900]"
                  />

                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-[#CC9900]"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-[#CC9900]"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-[#CC9900]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#CC9900] hover:bg-yellow-500 text-black font-bold py-5 rounded-2xl transition-all duration-300"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-6xl font-bold text-[#CC9900]">15+</h3>
              <p className="text-gray-600 mt-3">Years Experience</p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-[#CC9900]">500+</h3>
              <p className="text-gray-600 mt-3">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-[#CC9900]">100+</h3>
              <p className="text-gray-600 mt-3">Equipment Units</p>
            </div>

            <div>
              <h3 className="text-6xl font-bold text-[#CC9900]">24/7</h3>
              <p className="text-gray-600 mt-3">Customer Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-gradient-to-r from-[#CC9900] to-yellow-500 rounded-[40px] p-16 text-center shadow-[0_20px_60px_rgba(204,153,0,0.25)]">

            <h2 className="text-5xl font-bold text-black mb-6">
              Ready To Start Your Project?
            </h2>

            <p className="text-black/80 text-lg max-w-3xl mx-auto mb-10">
              Contact our team today and discover reliable heavy equipment,
              transportation and logistics solutions tailored to your needs.
            </p>

            <button className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Request A Quote
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}