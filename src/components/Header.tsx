import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-md fixed top-0 z-20">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
            {/* Minimal Thinkbot-ish logo */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2L20 7v10l-8 5-8-5V7l8-5z" fill="currentColor" />
            </svg>
          </div>
          <span className="font-semibold">Thinkbot</span>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#feature" className="hover:text-gray-900">Feature</a>
          <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faqs" className="hover:text-gray-900">FAQs</a>
        </nav>

        {/* Right CTA */}
        <div>
          <button className="px-4 py-2 bg-[#111215] text-white rounded-full text-sm shadow-sm hover:opacity-95">
            Remix Template
          </button>
        </div>
      </div>
    </header>
  );
}
