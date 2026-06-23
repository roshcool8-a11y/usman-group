import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <p className="text-[#CC9900] uppercase tracking-[0.3em] font-semibold mb-4">
              Usman Group
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Heavy Equipment &
              <span className="text-[#CC9900]"> Logistics</span>
            </h2>

            <p className="text-gray-400 leading-8">
              Providing reliable heavy equipment rental,
              transportation and logistics solutions across
              the UAE with modern equipment and experienced operators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#CC9900] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-[#CC9900] transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="hover:text-[#CC9900] transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/fleet"
                  className="hover:text-[#CC9900] transition"
                >
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#CC9900] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">

              <div>
                <p className="text-[#CC9900] font-semibold mb-1">
                  Location
                </p>
                <p>Dubai, UAE</p>
              </div>

              <div>
                <p className="text-[#CC9900] font-semibold mb-1">
                  Phone
                </p>
                <p>+971 XX XXX XXXX</p>
              </div>

              <div>
                <p className="text-[#CC9900] font-semibold mb-1">
                  Email
                </p>
                <p>info@usmangroup.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 USMAN GROUP OF COMPANIES. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed for Heavy Equipment & Logistics Industry
          </p>

        </div>
      </div>

    </footer>
  );
}