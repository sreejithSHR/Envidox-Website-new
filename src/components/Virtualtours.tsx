import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Expand, Maximize, ArrowRight, Users, MapPin, Clock, Star, Eye } from 'lucide-react';

const VirtualTourShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourData = {
    title: "Interactive Virtual Tour",
    subtitle: "Explore Our Digital Campus in 360°",
    description: "Step into our immersive virtual environment and experience our facilities like never before. Navigate through interactive spaces, discover hidden features, and get a true feel of our digital ecosystem.",
    stats: [
      { icon: Users, value: "50K+", label: "Virtual Visitors" },
      { icon: MapPin, value: "25+", label: "Interactive Locations" },
      { icon: Clock, value: "15min", label: "Average Tour Time" },
      { icon: Star, value: "4.9/5", label: "User Rating" }
    ],
    features: [
      "360° panoramic views",
      "Interactive hotspots",
      "Real-time navigation",
      "Multi-platform support",
      "Accessibility features",
      "Analytics dashboard"
    ],
    video: {
      poster: "/virtual-tour/poster.jpg",
      src: "/virtual-tour/demo.mp4"
    }
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-4 md:mb-6">
            <Eye className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Virtual Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Step Inside Virtually
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience our world through an immersive virtual tour that brings every detail to life.
          </p>
        </div>

        {/* Main Virtual Tour Card - Taller on mobile */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 min-h-[600px] md:min-h-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 h-full">
            {/* Video/Interactive Demo Section - Taller on mobile */}
            <div className="relative aspect-[4/3] md:aspect-video lg:aspect-auto bg-gray-900 flex-1">
              {/* Video Player Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Interactive Virtual Tour</h3>
                  <p className="text-blue-200 text-sm md:text-base">Click to explore in 360°</p>
                </div>
              </div>

              {/* Controls Overlay - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex absolute bottom-6 left-6 right-6 items-center justify-between">
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-black/50 text-white rounded-lg text-sm font-medium hover:bg-black/70 transition-colors backdrop-blur-sm">
                    Enter Fullscreen
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors backdrop-blur-sm">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Simple Mobile Controls */}
              <div className="md:hidden absolute bottom-4 left-4">
                <button className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Hotspots - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                <div className="absolute -top-8 -left-8 px-3 py-1 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm">
                  Reception
                </div>
              </div>
              
              <div className="hidden lg:block absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                <div className="absolute -top-8 -left-8 px-3 py-1 bg-black/80 text-white text-xs rounded-lg backdrop-blur-sm">
                  Gallery
                </div>
              </div>
            </div>

            {/* Content Section - Simplified on mobile */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between flex-1">
              <div>
                {/* Header - Simplified for mobile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{tourData.title}</h3>
                    <p className="text-gray-600 font-medium text-sm md:text-base">{tourData.subtitle}</p>
                  </div>
                </div>

                {/* Description - Always shown */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {tourData.description}
                </p>

                {/* Stats Grid - Hidden on mobile, shown on desktop */}
                <div className="hidden md:grid grid-cols-2 gap-4 mb-6">
                  {tourData.stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-xl">
                      <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="font-bold text-gray-900 text-lg">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features List - Hidden on mobile, shown on desktop */}
                <div className="hidden md:grid grid-cols-2 gap-2 mb-8">
                  {tourData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section - Always shown, stacked on mobile */}
              <div className="space-y-3 md:space-y-4">
                <button className="w-full bg-black text-white py-3 md:py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 text-sm md:text-base">
                  Start Virtual Tour
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                
                <div className="flex flex-col md:flex-row gap-3">
                  <button className="flex-1 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base">
                    View Gallery
                  </button>
                  <button className="flex-1 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base">
                    Download App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTourShowcase;