import React, { useRef, useEffect, useState } from 'react';
import { Play, Calendar, ArrowRight, ArrowLeft, GamepadIcon, Star, } from 'lucide-react';

const GameInDevelopment = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const gameData = {
    title: "Chrono Nexus",
    subtitle: "A Time-Bending Adventure RPG",
    media: [
      { type: "screenshot", src: "/game/screenshot1.jpg", title: "Ancient Ruins" },
      { type: "concept", src: "/game/concept1.jpg", title: "Character Art" },
      { type: "screenshot", src: "/game/screenshot2.jpg", title: "Combat System" },
      { type: "environment", src: "/game/environment1.jpg", title: "Futuristic City" },
      { type: "concept", src: "/game/concept2.jpg", title: "Creature Designs" },
      { type: "screenshot", src: "/game/screenshot3.jpg", title: "Time Mechanics" }
    ]
  };

  const scroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer to trigger dark theme
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cinematic-game-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Rain particles effect
  useEffect(() => {
    if (!isVisible) return;

    const container = document.getElementById('rain-container');
    if (!container) return;

    // Create rain particles
    for (let i = 0; i < 50; i++) {
      const rain = document.createElement('div');
      rain.className = 'rain-particle';
      rain.style.left = `${Math.random() * 100}%`;
      rain.style.animationDuration = `${0.5 + Math.random() * 1}s`;
      rain.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(rain);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [isVisible]);

  return (
    <>
      {/* Storm and Rain Effects */}
      <div 
        id="rain-container"
        className={`fixed inset-0 pointer-events-none z-40 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Realistic Moving Clouds */}
      <div className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000 ${
        isVisible ? 'opacity-40' : 'opacity-0'
      }`}>
        {/* Large Fluffy Cloud */}
        <div className="absolute top-20 left-0 cloud animate-cloud-slow">
          <div className="realistic-cloud large-fluffy">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
            <div className="cloud-part part-4"></div>
          </div>
        </div>
        
        {/* Medium Storm Cloud */}
        <div className="absolute top-40 right-10 cloud animate-cloud-medium">
          <div className="realistic-cloud medium-storm">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
            <div className="cloud-part part-4"></div>
            <div className="cloud-part part-5"></div>
          </div>
        </div>
        
        {/* Small Fluffy Cloud */}
        <div className="absolute top-60 left-20 cloud animate-cloud-fast">
          <div className="realistic-cloud small-fluffy">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
          </div>
        </div>
        
        {/* Dark Rain Cloud */}
        <div className="absolute top-32 right-32 cloud animate-cloud-slow">
          <div className="realistic-cloud dark-rain">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
            <div className="cloud-part part-3"></div>
            <div className="cloud-part part-4"></div>
            {/* Rain streaks */}
            <div className="rain-streaks">
              <div className="rain-streak"></div>
              <div className="rain-streak"></div>
              <div className="rain-streak"></div>
              <div className="rain-streak"></div>
              <div className="rain-streak"></div>
            </div>
          </div>
        </div>

        {/* Additional distant clouds */}
        <div className="absolute top-80 left-40 cloud animate-cloud-very-slow">
          <div className="realistic-cloud distant-cloud">
            <div className="cloud-part part-1"></div>
            <div className="cloud-part part-2"></div>
          </div>
        </div>
      </div>

      {/* Lightning Effects */}
      <div className={`fixed inset-0 bg-white pointer-events-none z-20 transition-opacity duration-75 ${
        isVisible ? 'opacity-0' : 'opacity-0'
      }`} id="lightning" />

      <section 
        id="cinematic-game-section"
        className={`w-full py-12 md:py-24 relative overflow-hidden transition-all duration-1000 ${
          isVisible 
            ? 'bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900' 
            : 'bg-gradient-to-b from-gray-50 to-white'
        }`}
      >
        {/* Storm Background Elements */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/80 to-transparent" />
          
          {/* Animated Storm Clouds */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-800/30 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-800/20 to-transparent" />
        </div>

        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative">
          {/* Header - Changes color based on theme */}
          <div className="text-center mb-8 md:mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm mb-4 transition-all duration-500 ${
              isVisible 
                ? 'bg-gray-800/80 backdrop-blur-sm border-gray-600' 
                : 'bg-white/80 backdrop-blur-sm border-gray-200'
            }`}>
              <GamepadIcon className={`w-4 h-4 transition-colors duration-500 ${
                isVisible ? 'text-green-400' : 'text-green-600'
              }`} />
              <span className={`text-sm font-medium transition-colors duration-500 ${
                isVisible ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Game in Development
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${
              isVisible ? 'text-white' : 'text-gray-900'
            }`}>
              Coming Soon
            </h2>
          </div>

          {/* Poster Card - Cinematic Dark Theme */}
          <div className={`rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12 transition-all duration-500 ${
            isVisible 
              ? 'bg-gradient-to-br from-gray-800/90 to-blue-900/90 border border-gray-700' 
              : 'bg-gradient-to-br from-gray-900 to-blue-900'
          }`}>
            {/* Game Art - Stormy Background */}
            <div className="aspect-[4/3] md:aspect-video relative overflow-hidden">
              {/* Animated Storm Background */}
              <div className={`absolute inset-0 transition-all duration-1000 ${
                isVisible 
                  ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900' 
                  : 'bg-gradient-to-br from-purple-900/50 to-blue-900/50'
              }`}>
                {/* Lightning effect overlay */}
                <div className={`absolute inset-0 bg-yellow-200 transition-opacity duration-100 ${
                  isVisible ? 'opacity-0' : 'opacity-0'
                }`} id="storm-lightning" />
              </div>
              
              {/* Storm particles */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${
                isVisible ? 'opacity-30' : 'opacity-0'
              }`}>
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full animate-storm-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>

              {/* Game Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 ${
                    isVisible 
                      ? 'bg-gradient-to-br from-gray-700/80 to-gray-900/80 backdrop-blur-sm border border-gray-600' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}>
                    <GamepadIcon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-500 ${
                      isVisible ? 'text-green-400' : 'text-white/80'
                    }`} />
                  </div>
                  <span className={`text-sm transition-colors duration-500 ${
                    isVisible ? 'text-gray-300' : 'text-white/60'
                  }`}>
                    Game Cover Art
                  </span>
                </div>
              </div>
              
              {/* Title Overlay - Enhanced for dark theme */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${
                isVisible 
                  ? 'bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-transparent' 
                  : 'bg-gradient-to-t from-black/80 to-transparent'
              }`}>
                <h3 className={`text-2xl md:text-4xl font-bold text-center mb-2 transition-colors duration-500 ${
                  isVisible ? 'text-white' : 'text-white'
                }`}>
                  {gameData.title}
                </h3>
                <p className={`text-center transition-colors duration-500 ${
                  isVisible ? 'text-blue-200' : 'text-blue-200'
                }`}>
                  {gameData.subtitle}
                </p>
                
                {/* Release Badge */}
                <div className="flex justify-center mt-3">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-500 ${
                    isVisible 
                      ? 'bg-yellow-500/90 backdrop-blur-sm border border-yellow-400' 
                      : 'bg-yellow-500'
                  }`}>
                    <Calendar className={`w-3 h-3 md:w-4 md:h-4 transition-colors duration-500 ${
                      isVisible ? 'text-yellow-100' : 'text-white'
                    }`} />
                    <span className={`font-semibold transition-colors duration-500 ${
                      isVisible ? 'text-yellow-100' : 'text-white'
                    }`}>
                      Coming 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-4 md:hidden">
              <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-2 ${
                isVisible
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}>
                <Star className="w-5 h-5" />
                Wishlist on Steam
              </button>
            </div>
          </div>

          {/* Scrollable Image Gallery - Dark Theme */}
          <div className="relative">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                isVisible ? 'text-white' : 'text-gray-900'
              }`}>
                Development Gallery
              </h3>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border shadow-sm flex items-center justify-center transition-all duration-500 ${
                    isVisible
                      ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 text-gray-200'
                      : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full border shadow-sm flex items-center justify-center transition-all duration-500 ${
                    isVisible
                      ? 'bg-gray-800/80 border-gray-600 hover:bg-gray-700/80 text-gray-200'
                      : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

            {/* Image Cards */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {gameData.media.map((media, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 snap-center"
                >
                  {/* Image Card */}
                  <div className={`aspect-video rounded-2xl overflow-hidden relative group transition-all duration-500 ${
                    isVisible 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200'
                  }`}>
                    {/* Image placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <GamepadIcon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-2 transition-colors duration-500 ${
                          isVisible ? 'text-gray-400' : 'text-gray-400'
                        }`} />
                        <span className={`text-xs md:text-sm transition-colors duration-500 ${
                          isVisible ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {media.title}
                        </span>
                      </div>
                    </div>
                    
                    {/* Hover play button */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <button className={`w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-sm border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                        isVisible
                          ? 'bg-white/20 border-white/30 text-white'
                          : 'bg-white/20 border-white/30 text-white'
                      }`}>
                        <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Image title */}
                  <div className="mt-2">
                    <p className={`text-sm text-center transition-colors duration-500 ${
                      isVisible ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {media.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex justify-center mt-8">
              <button className={`px-8 py-3 rounded-xl font-semibold transition-all duration-500 flex items-center gap-2 ${
                isVisible
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}>
                <Star className="w-5 h-5" />
                Wishlist on Steam
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Rain particles */
        .rain-particle {
          position: absolute;
          width: 2px;
          height: 15px;
          background: linear-gradient(to bottom, transparent, #93c5fd);
          animation: rainFall linear infinite;
          top: -20px;
        }

        @keyframes rainFall {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        /* Cloud animations */
        @keyframes cloud-slow {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }

        @keyframes cloud-medium {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(calc(100vw + 150px)); }
        }

        @keyframes cloud-fast {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }

        @keyframes cloud-very-slow {
          0% { transform: translateX(-50px); }
          100% { transform: translateX(calc(100vw + 50px)); }
        }

        .animate-cloud-slow {
          animation: cloud-slow 60s linear infinite;
        }

        .animate-cloud-medium {
          animation: cloud-medium 45s linear infinite;
        }

        .animate-cloud-fast {
          animation: cloud-fast 30s linear infinite;
        }

        .animate-cloud-very-slow {
          animation: cloud-very-slow 90s linear infinite;
        }

        /* Storm particles */
        @keyframes storm-particle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100px) translateX(20px);
            opacity: 0;
          }
        }

        .animate-storm-particle {
          animation: storm-particle 3s ease-in infinite;
        }

        /* Realistic Cloud Styles */
        .realistic-cloud {
          position: relative;
          display: inline-block;
        }

        .cloud-part {
          position: absolute;
          background: #f8fafc;
          border-radius: 50%;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        /* Large Fluffy Cloud */
        .large-fluffy .part-1 {
          width: 120px;
          height: 60px;
          top: 0;
          left: 0;
        }
        .large-fluffy .part-2 {
          width: 80px;
          height: 80px;
          top: -20px;
          left: 30px;
        }
        .large-fluffy .part-3 {
          width: 100px;
          height: 70px;
          top: -10px;
          left: 80px;
        }
        .large-fluffy .part-4 {
          width: 70px;
          height: 50px;
          top: 10px;
          left: 100px;
        }

        /* Medium Storm Cloud */
        .medium-storm {
          filter: brightness(0.7);
        }
        .medium-storm .cloud-part {
          background: #94a3b8;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }
        .medium-storm .part-1 {
          width: 140px;
          height: 70px;
          top: 0;
          left: 0;
        }
        .medium-storm .part-2 {
          width: 100px;
          height: 90px;
          top: -25px;
          left: 25px;
        }
        .medium-storm .part-3 {
          width: 110px;
          height: 80px;
          top: -15px;
          left: 85px;
        }
        .medium-storm .part-4 {
          width: 80px;
          height: 60px;
          top: 15px;
          left: 110px;
        }
        .medium-storm .part-5 {
          width: 60px;
          height: 50px;
          top: 20px;
          left: 130px;
        }

        /* Small Fluffy Cloud */
        .small-fluffy .part-1 {
          width: 80px;
          height: 40px;
          top: 0;
          left: 0;
        }
        .small-fluffy .part-2 {
          width: 50px;
          height: 50px;
          top: -15px;
          left: 20px;
        }
        .small-fluffy .part-3 {
          width: 60px;
          height: 45px;
          top: -10px;
          left: 50px;
        }

        /* Dark Rain Cloud */
        .dark-rain {
          filter: brightness(0.5);
        }
        .dark-rain .cloud-part {
          background: #64748b;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        .dark-rain .part-1 {
          width: 130px;
          height: 65px;
          top: 0;
          left: 0;
        }
        .dark-rain .part-2 {
          width: 90px;
          height: 85px;
          top: -20px;
          left: 20px;
        }
        .dark-rain .part-3 {
          width: 100px;
          height: 75px;
          top: -15px;
          left: 75px;
        }
        .dark-rain .part-4 {
          width: 70px;
          height: 55px;
          top: 10px;
          left: 95px;
        }

        /* Distant Cloud */
        .distant-cloud {
          opacity: 0.6;
        }
        .distant-cloud .part-1 {
          width: 60px;
          height: 30px;
          top: 0;
          left: 0;
        }
        .distant-cloud .part-2 {
          width: 40px;
          height: 25px;
          top: -5px;
          left: 25px;
        }

        /* Rain streaks for rain cloud */
        .rain-streaks {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 40px;
        }

        .rain-streak {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, #93c5fd, transparent);
          animation: rainStreak 1.5s linear infinite;
        }

        .rain-streak:nth-child(1) { left: 20%; animation-delay: 0s; }
        .rain-streak:nth-child(2) { left: 40%; animation-delay: 0.3s; }
        .rain-streak:nth-child(3) { left: 60%; animation-delay: 0.6s; }
        .rain-streak:nth-child(4) { left: 80%; animation-delay: 0.9s; }
        .rain-streak:nth-child(5) { left: 90%; animation-delay: 1.2s; }

        @keyframes rainStreak {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(40px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default GameInDevelopment;