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

      {/* ===== COSMIC SPACE: Floating Particles, Asteroids, Planets & Stars ===== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Enhanced Star Field - More Visible Background Stars - SIDES ONLY */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const leftPos = Math.random() * 100;
            // Only show stars on the sides (first 25% and last 25%)
            if (leftPos > 25 && leftPos < 75) return null;
            
            return (
              <div
                key={`star-${i}`}
                className="absolute bg-white rounded-full animate-pulse hidden lg:block"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${leftPos}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.5,
                  boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Enhanced Shooting Stars - SIDES ONLY - Desktop Only */}
        {[...Array(12)].map((_, i) => {
          const leftPos = Math.random() * 100;
          // Only show shooting stars on the sides
          if (leftPos > 25 && leftPos < 75) return null;
          
          return (
            <div
              key={`shooting-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full hidden lg:block"
              style={{
                left: `${leftPos}%`,
                top: `${Math.random() * 100}%`,
                animation: `shooting-star ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 4}s`,
                boxShadow: '0 0 20px 4px rgba(255, 255, 255, 1), 0 0 40px 8px rgba(147, 197, 253, 0.8)',
              }}
            >
              {/* Enhanced shooting star trail */}
              <div className="absolute top-0 right-0 w-32 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent" 
                   style={{ boxShadow: '0 0 10px 2px rgba(147, 197, 253, 0.6)' }}></div>
            </div>
          );
        })}

        {/* Floating Particles - Super Slow Motion - SIDES ONLY - Visible on Mobile */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const baseX = Math.random() * 100;
            const baseY = Math.random() * 100;
            // Only show particles on the sides
            if (baseX > 30 && baseX < 70) return null;
            
            const size = 3 + Math.random() * 4;
            const color = i % 3 === 0 ? 'rgba(59, 130, 246, 0.9)' : i % 3 === 1 ? 'rgba(168, 85, 247, 0.9)' : 'rgba(236, 72, 153, 0.9)';
            const duration = 15 + Math.random() * 25; // 15-40 seconds for super slow motion
            
            return (
              <div
                key={`particle-${i}`}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  boxShadow: `0 0 ${size * 2}px ${size * 0.5}px ${color}`,
                  animation: `float-particle ${duration}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Floating Asteroids - Super Slow Motion - SIDES ONLY */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const baseX = Math.random() * 100;
            const baseY = Math.random() * 100;
            // Only show on sides
            if (baseX > 30 && baseX < 70) return null;
            
            const size = 2 + Math.random() * 4;
            const duration = 20 + Math.random() * 30; // 20-50 seconds
            
            return (
              <div
                key={`asteroid-${i}`}
                className="absolute bg-gray-400 rounded-sm opacity-60"
                style={{
                  left: `${baseX}%`,
                  top: `${baseY}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `float-asteroid ${duration}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              ></div>
            );
          })}
        </div>

        {/* Planet 1 - Left Side - Blue Gas Giant - Enhanced Sharpness */}
        <div className="absolute left-16 top-1/4 w-36 h-36 hidden lg:block">
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 shadow-2xl overflow-hidden" 
               style={{ 
                 filter: 'contrast(1.2) saturate(1.3)',
                 border: '1px solid rgba(59, 130, 246, 0.3)'
               }}>
            {/* Planet rings - More visible */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-14 border-[3px] border-blue-300/60 rounded-[50%] transform -rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 border-[2px] border-blue-200/50 rounded-[50%] transform -rotate-12"></div>
            {/* Atmospheric bands - More defined */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute top-[30%] left-0 right-0 h-2 bg-blue-700/40"></div>
              <div className="absolute top-[50%] left-0 right-0 h-3 bg-blue-800/50"></div>
              <div className="absolute top-[70%] left-0 right-0 h-2 bg-blue-700/40"></div>
            </div>
            {/* Atmospheric glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-blue-400/20 to-transparent"></div>
            {/* Planet shadow - Stronger */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
          </div>
          {/* Planet glow - More visible */}
          <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/40 scale-150"></div>
        </div>

        {/* Planet 2 - Right Side - Purple Rocky Planet - Enhanced */}
        <div className="absolute right-20 top-1/3 w-32 h-32 hidden lg:block">
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 shadow-2xl overflow-hidden"
               style={{ 
                 filter: 'contrast(1.2) saturate(1.3)',
                 border: '1px solid rgba(168, 85, 247, 0.3)'
               }}>
            {/* Craters - More visible */}
            <div className="absolute top-[20%] left-[25%] w-5 h-5 rounded-full bg-purple-950/80 border border-purple-800/50"></div>
            <div className="absolute bottom-[30%] right-[25%] w-4 h-4 rounded-full bg-purple-950/70 border border-purple-800/50"></div>
            <div className="absolute top-[65%] left-[35%] w-3 h-3 rounded-full bg-purple-950/80 border border-purple-800/50"></div>
            <div className="absolute top-[40%] right-[35%] w-3 h-3 rounded-full bg-purple-950/70"></div>
            {/* Surface texture */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-transparent to-transparent"></div>
            {/* Planet shadow - Stronger */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/60"></div>
          </div>
          {/* Planet glow */}
          <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/40 scale-150"></div>
        </div>

        {/* Planet 3 - Bottom Left - Pink Moon - Enhanced */}
        <div className="absolute left-32 bottom-1/4 w-24 h-24 hidden lg:block">
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 shadow-2xl overflow-hidden"
               style={{ 
                 filter: 'contrast(1.2) saturate(1.3)',
                 border: '1px solid rgba(236, 72, 153, 0.3)'
               }}>
            {/* Moon craters */}
            <div className="absolute top-[35%] left-[30%] w-3 h-3 rounded-full bg-pink-800/60"></div>
            <div className="absolute top-[55%] right-[35%] w-2 h-2 rounded-full bg-pink-800/50"></div>
            {/* Moon texture */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-pink-300/30 to-transparent"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
          </div>
          <div className="absolute inset-0 rounded-full blur-lg bg-pink-500/40 scale-150"></div>
        </div>

        {/* Planet 4 - Bottom Right - Cyan Ice Planet - Enhanced */}
        <div className="absolute right-24 bottom-1/5 w-28 h-28 hidden lg:block">
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-300 via-cyan-600 to-cyan-800 shadow-2xl overflow-hidden"
               style={{ 
                 filter: 'contrast(1.2) saturate(1.3)',
                 border: '1px solid rgba(34, 211, 238, 0.3)'
               }}>
            {/* Ice caps - More defined */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-7 rounded-full bg-white/60 border border-cyan-200/50"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-6 rounded-full bg-white/50 border border-cyan-200/50"></div>
            {/* Ice texture lines */}
            <div className="absolute top-[30%] left-0 right-0 h-px bg-cyan-400/40"></div>
            <div className="absolute top-[50%] left-0 right-0 h-px bg-cyan-400/30"></div>
            <div className="absolute top-[70%] left-0 right-0 h-px bg-cyan-400/40"></div>
            {/* Planet shadow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/50"></div>
          </div>
          <div className="absolute inset-0 rounded-full blur-lg bg-cyan-500/40 scale-150"></div>
        </div>

        {/* Cosmic Dust Clouds - SIDES ONLY */}
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/5 via-purple-400/10 to-transparent blur-3xl rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '15s' }}></div>
        <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-gradient-to-tl from-pink-400/5 via-purple-400/10 to-transparent blur-3xl rounded-full animate-pulse hidden lg:block" style={{ animationDuration: '18s', animationDelay: '4s' }}></div>
      </div>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-400px) translateY(400px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -30px);
          }
          50% {
            transform: translate(-15px, -50px);
          }
          75% {
            transform: translate(25px, -20px);
          }
        }

        @keyframes float-asteroid {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -40px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, -60px) rotate(180deg);
          }
          75% {
            transform: translate(35px, -25px) rotate(270deg);
          }
        }
      `}</style>

      {/* ===== Floating Header / Navbar - More padding on mobile ===== */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[1100px]">
        <nav className="flex justify-between items-center px-4 sm:px-6 md:px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border-2 border-gray-300/80 md:border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-black" />
            <span className="font-semibold text-gray-900 text-sm sm:text-base">Envidox Solutions</span>
          </div>

          {/* Nav Links - Hidden on mobile, visible on md+ */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 text-sm font-medium">
            <li className="hover:text-gray-900 transition-colors cursor-pointer">About</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Services</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Products</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">World Of 3D</li>
            <li className="hover:text-gray-900 transition-colors cursor-pointer">Games</li>
          </ul>

          {/* Mobile Menu Button - Visible on mobile */}
          <button className="md:hidden bg-black text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700">
            Menu
          </button>

          {/* Desktop Button - Hidden on mobile, visible on md+ */}
          <button className="hidden md:block bg-black text-white text-sm px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl border border-gray-700">
            Contact Now
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
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">Services</button>
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">Products</button>
          <button className="text-xs text-gray-700 font-medium hover:text-gray-900 transition-colors px-2 py-1">World Of 3D</button>
        </nav>
      </div>
    </div>
  );
}

export default Root;


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);