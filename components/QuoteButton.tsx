"use client";

import { useState } from "react";

export default function QuoteButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
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
      </button>

      {open && (
        <div className="absolute right-0 top-16 w-64 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200">
          <a
            href="https://wa.me/971XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-4 hover:bg-green-50 transition"
          >
            📱 WhatsApp
          </a>

          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-4 hover:bg-pink-50 transition"
          >
            📷 Instagram
          </a>

          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-4 hover:bg-blue-50 transition"
          >
            👍 Facebook
          </a>

          <a
            href="mailto:info@usmangroup.com"
            className="block px-5 py-4 hover:bg-gray-100 transition"
          >
            ✉️ Email
          </a>
        </div>
      )}
    </div>
  );
}