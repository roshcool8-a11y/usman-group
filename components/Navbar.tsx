import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2B2100] to-[#1A1A1A] backdrop-blur-md border-b border-[#CC9900]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-24 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt="Usman Group Logo"
                width={70}
                height={70}
                priority
                className="rounded-lg object-contain"
              />

              <div>
                <h2 className="text-white font-bold text-2xl leading-none">
                  USMAN GROUP
                </h2>

                <p className="text-[#CC9900] text-sm mt-1">
                  Heavy Equipment Rental
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Fleet", "/fleet"],
                ["Contact", "/contact"],
              ].map(([name, link]) => (
                <Link
                  key={name}
                  href={link}
                  className="
                    relative
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    hover:text-[#CC9900]
                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:w-0
                    after:h-[2px]
                    after:bg-[#CC9900]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {name}
                </Link>
              ))}
            </nav>

            {/* Button */}
            <Link
              href="/contact"
              className="
                bg-[#CC9900]
                text-black
                font-semibold
                px-7
                py-3
                rounded-xl
                shadow-lg
                hover:bg-yellow-500
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get Quote
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}