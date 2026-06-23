export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Talk About
              <span className="text-[#CC9900]"> Your Project</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Whether you need heavy equipment rental, transportation,
              or logistics solutions, our team is ready to support
              your project anywhere in the UAE.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  📍 Location
                </h3>
                <p className="text-gray-600">
                  United Arab Emirates
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  📞 Phone
                </h3>
                <p className="text-gray-600">
                  +971 XX XXX XXXX
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">
                  ✉️ Email
                </h3>
                <p className="text-gray-600">
                  info@usmangroup.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-gradient-to-br from-[#CC9900] to-yellow-500 rounded-[40px] p-12 shadow-[0_15px_40px_rgba(204,153,0,0.25)]">

            <h3 className="text-4xl font-bold text-black mb-4">
              Need Equipment Today?
            </h3>

            <p className="text-black/80 text-lg mb-8">
              Get a quick quotation for your rental,
              transport or logistics requirements.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Request a Quote
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}