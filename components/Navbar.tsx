"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2B2100] to-[#1A1A1A] border-b border-[#CC9900]/20">
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
                <h2 className="text-white font-bold text-2xl">
                  USMAN GROUP
                </h2>

                <p className="text-[#CC9900] text-sm">
                  Heavy Equipment Rental
                </p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-white hover:text-[#CC9900]">
                Home
              </Link>

              <Link href="/about" className="text-white hover:text-[#CC9900]">
                About
              </Link>

              <Link href="/services" className="text-white hover:text-[#CC9900]">
                Services
              </Link>

              <Link href="/fleet" className="text-white hover:text-[#CC9900]">
                Fleet
              </Link>

              <Link href="/contact" className="text-white hover:text-[#CC9900]">
                Contact
              </Link>
            </nav>

            {/* Get Quote Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-[#CC9900] text-black font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition"
              >
                Get Quote
              </button>

              {open && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl overflow-hidden">

                  <a
                    href="https://wa.me/971XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-green-50"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-blue-50"
                  >
                    <span className="text-xl">📘</span>
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-pink-50"
                  >
                    <span className="text-xl">📸</span>
                    <span>Instagram</span>
                  </a>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}