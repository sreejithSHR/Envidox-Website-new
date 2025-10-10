import React, { useRef } from 'react';
import { Play, Calendar, ArrowRight, ArrowLeft, GamepadIcon, Star } from 'lucide-react';

const GameInDevelopment = () => {
  const scrollContainerRef = useRef(null);

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

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280; // Match card width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* Header - Minimal for mobile */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-4">
            <GamepadIcon className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Game in Development</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
        </div>

        {/* Poster Card - Image focused */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden shadow-2xl mb-8 md:mb-12">
          {/* Game Art - Full width image */}
          <div className="aspect-[4/3] md:aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center relative">
            {/* Image placeholder */}
            <div className="text-center text-white">
              <GamepadIcon className="w-16 h-16 md:w-20 md:h-20 text-white/80 mx-auto mb-4" />
              <span className="text-white/60 text-sm">Game Cover Art</span>
            </div>
            
            {/* Title Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-2">
                {gameData.title}
              </h3>
              <p className="text-blue-200 text-center text-sm md:text-lg">
                {gameData.subtitle}
              </p>
              
              {/* Release Badge */}
              <div className="flex justify-center mt-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 rounded-full">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  <span className="text-white font-semibold text-xs md:text-sm">Coming 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Only on mobile, hidden on desktop in favor of gallery CTA */}
          <div className="p-4 md:hidden">
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              Wishlist on Steam
            </button>
          </div>
        </div>

        {/* Scrollable Image Gallery */}
        <div className="relative">
          {/* Section Header with Scroll Controls */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Development Gallery</h3>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Image Cards - Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {gameData.media.map((media, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 md:w-80 snap-center" // Snap for better mobile experience
              >
                {/* Image Card */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative group">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <GamepadIcon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mx-auto mb-2" />
                      <span className="text-xs md:text-sm text-gray-500">{media.title}</span>
                    </div>
                  </div>
                  
                  {/* Hover play button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                    </button>
                  </div>
                </div>
                
                {/* Image title - Only show on desktop */}
                <div className="hidden md:block mt-2">
                  <p className="text-sm text-gray-600 text-center">{media.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex justify-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2">
              <Star className="w-5 h-5" />
              Wishlist on Steam
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInDevelopment;