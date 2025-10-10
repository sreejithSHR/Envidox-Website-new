import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function Root() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* ===== Enhanced Symmetry Guides - Visible on Mobile ===== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main Vertical Center Line - Visible on all screens */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-blue-400/40 md:bg-blue-400/60 shadow-lg shadow-blue-400/20 md:shadow-blue-400/30"></div>

        {/* Spine Dots - Visible on all screens */}
        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-white border border-blue-500 md:border-2 shadow-[0_0_0_2px_rgba(59,130,246,0.2),0_1px_4px_rgba(0,0,0,0.1)] md:shadow-[0_0_0_4px_rgba(59,130,246,0.3),0_2px_8px_rgba(0,0,0,0.2)] z-10" style={{ top: '20%' }}>
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border border-blue-500 md:border-2 shadow-[0_0_0_3px_rgba(59,130,246,0.3),0_2px_6px_rgba(59,130,246,0.2)] md:shadow-[0_0_0_6px_rgba(59,130,246,0.4),0_4px_12px_rgba(59,130,246,0.3)] z-10 animate-pulse" style={{ top: '50%' }}>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-white border border-blue-500 md:border-2 shadow-[0_0_0_2px_rgba(59,130,246,0.2),0_1px_4px_rgba(0,0,0,0.1)] md:shadow-[0_0_0_4px_rgba(59,130,246,0.3),0_2px_8px_rgba(0,0,0,0.2)] z-10" style={{ top: '80%' }}>
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Container Boundaries - More visible and responsive */}
        <div className="absolute inset-0 flex items-stretch justify-center">
          <div className="relative w-full max-w-[1100px] h-full px-6 sm:px-8 lg:px-0">
            {/* Left Boundary Line - More visible */}
            <div className="absolute left-6 sm:left-8 lg:left-0 top-0 bottom-0 w-0.5 bg-gray-400/60 md:bg-gray-400/50 shadow-lg" />
            
            {/* Right Boundary Line - More visible */}
            <div className="absolute right-6 sm:right-8 lg:right-0 top-0 bottom-0 w-0.5 bg-gray-400/60 md:bg-gray-400/50 shadow-lg" />
          </div>
        </div>

        {/* Top Guide Line - More visible and responsive */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[1100px] border-t-2 border-gray-400/50 md:border-gray-400/40 shadow-md" />

        {/* Bottom Guide Line - Added for mobile symmetry */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[1100px] border-t-2 border-gray-400/50 md:border-gray-400/40 shadow-md" />

        {/* Center Glow - Adjusted for mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] h-[60vh] sm:w-[85vw] sm:h-[65vh] md:w-[1300px] md:h-[700px] opacity-25 md:opacity-30">
          <div className="absolute inset-0 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200" />
        </div>
      </div>

      {/* ===== Floating Header / Navbar - More padding on mobile ===== */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[1100px]">
        <nav className="flex justify-between items-center px-4 sm:px-6 md:px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border-2 border-gray-300/80 md:border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-black" />
            <span className="font-semibold text-gray-900 text-sm sm:text-base">Thinkbot</span>
          </div>

          {/* Nav Links - Hidden on mobile, visible on md+ */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 text-sm font-medium">
            <li className="hover:text-gray-900 transition-colors">About</li>
            <li className="hover:text-gray-900 transition-colors">Features</li>
            <li className="hover:text-gray-900 transition-colors">Testimonials</li>
            <li className="hover:text-gray-900 transition-colors">Pricing</li>
            <li className="hover:text-gray-900 transition-colors">FAQs</li>
          </ul>

          {/* Mobile Menu Button - Visible on mobile */}
          <button className="md:hidden bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700">
            Menu
          </button>

          {/* Desktop Button - Hidden on mobile, visible on md+ */}
          <button className="hidden md:block bg-black text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl border border-gray-700">
            Remix Template
          </button>
        </nav>
      </header>

      {/* ===== App Content - Extra padding on mobile ===== */}
      <main className="relative z-10">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-8 md:px-6 pt-32 sm:pt-36 pb-20 md:pb-0">
          <App />
        </div>
      </main>

      {/* ===== Mobile Bottom Navigation - Enhanced visibility ===== */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:hidden">
        <nav className="flex justify-around items-center px-4 py-3 bg-white/95 backdrop-blur-md rounded-full border-2 border-gray-300/80 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">About</button>
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">Features</button>
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">Pricing</button>
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">FAQs</button>
        </nav>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);