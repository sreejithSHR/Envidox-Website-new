'use client';

import React, { useState } from 'react';

function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions powered by cutting-edge machine learning algorithms",
      icon: "🤖",
      gradient: "from-violet-600 to-purple-600",
      glowColor: "rgba(139, 92, 246, 0.6)",
      side: "left"
    },
    {
      title: "3D Visualization",
      description: "Immersive 3D experiences that bring your ideas to life",
      icon: "🎨",
      gradient: "from-fuchsia-600 to-pink-600",
      glowColor: "rgba(232, 121, 249, 0.6)",
      side: "right"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable infrastructure built for the future of computing",
      icon: "☁️",
      gradient: "from-cyan-600 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.6)",
      side: "left"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable business intelligence",
      icon: "📊",
      gradient: "from-emerald-600 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.6)",
      side: "right"
    },
    {
      title: "Blockchain",
      description: "Decentralized solutions for secure and transparent operations",
      icon: "⛓️",
      gradient: "from-orange-600 to-amber-600",
      glowColor: "rgba(249, 115, 22, 0.6)",
      side: "left"
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security to protect your digital assets",
      icon: "🔒",
      gradient: "from-red-600 to-rose-600",
      glowColor: "rgba(239, 68, 68, 0.6)",
      side: "right"
    }
  ];

  return (
    <div className="relative w-full min-h-screen  overflow-hidden py-16 lg:py-24 px-4 sm:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold backdrop-blur-sm">
              WHAT WE OFFER
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge solutions designed to transform your business and accelerate growth
          </p>
        </div>

        {/* Circuit Board Layout */}
        <div className="relative">
          {/* Central Circuit Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            {/* Vertical Line with animated pulse */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/0 via-violet-500/80 to-violet-500/0 animate-pulse"></div>
            
            {/* Circuit nodes at connection points */}
            {services.map((_, index) => (
              <div key={index} className="absolute left-1/2 -translate-x-1/2" style={{ top: `${(index * 16.66) + 8.33}%` }}>
                {/* Outer glow ring */}
                <div className={`w-6 h-6 rounded-full bg-violet-500/30 blur-sm animate-pulse`} style={{ animationDelay: `${index * 0.2}s` }}></div>
                {/* Inner node */}
                <div className={`absolute inset-0 w-6 h-6 rounded-full border-2 border-violet-400 bg-slate-900 transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-150 bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]' : ''
                }`}>
                  <div className="absolute inset-1 rounded-full bg-violet-500/50"></div>
                </div>
                
                {/* Horizontal connecting lines */}
                <div className={`absolute top-1/2 ${services[index].side === 'left' ? 'right-3' : 'left-3'} w-16 h-0.5 bg-gradient-to-${services[index].side === 'left' ? 'l' : 'r'} from-violet-500/50 to-transparent`}>
                  <div className={`absolute inset-0 bg-gradient-to-${services[index].side === 'left' ? 'l' : 'r'} from-violet-500 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <div className="space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-center lg:justify-${service.side === 'left' ? 'start' : 'end'}`}
                style={{
                  animation: `fadeInSlide${service.side === 'left' ? 'Left' : 'Right'} 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className={`w-full lg:w-5/12 ${service.side === 'right' ? 'lg:ml-auto' : ''}`}>
                  <ServiceCard
                    service={service}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Animated data packets flowing through circuit */}
          {hoveredIndex !== null && (
            <>
              <div className="hidden lg:block absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-violet-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-flowDown"></div>
              <div className="hidden lg:block absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 bg-fuchsia-400 rounded-full shadow-[0_0_10px_rgba(232,121,249,0.8)] animate-flowUp"></div>
            </>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-24">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-semibold shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      
    </div>
  );
}

function ServiceCard({ service, index, hoveredIndex, setHoveredIndex }) {
  const isHovered = hoveredIndex === index;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="relative">
        {/* Glow Effect */}
        <div 
          className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'}`}
          style={{
            background: service.glowColor,
          }}
        ></div>

        {/* Main Card */}
        <div className={`relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border transition-all duration-500 ${
          isHovered ? 'border-violet-400/60 shadow-[0_0_60px_rgba(139,92,246,0.4)] scale-[1.03]' : 'border-violet-500/20'
        } p-6 lg:p-8 overflow-hidden`}>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`circuit-${index}`} x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10 10 L30 10 L30 30 M70 10 L90 10 L90 30 M10 70 L30 70 L30 90 M70 70 L90 70 L90 90" 
                    stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="30" cy="30" r="2" fill="currentColor"/>
                  <circle cx="90" cy="30" r="2" fill="currentColor"/>
                  <circle cx="30" cy="90" r="2" fill="currentColor"/>
                  <circle cx="90" cy="90" r="2" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#circuit-${index})`}/>
            </svg>
          </div>

          {/* Glossy overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Animated gradient border */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-20' : ''
          }`}></div>

          {/* Content */}
          <div className="relative z-10 flex items-start gap-6">
            {/* Icon */}
            <div className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl lg:text-4xl transform transition-all duration-500 shadow-lg ${
              isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
            }`}>
              {service.icon}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className={`text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Connection indicator */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} transition-all duration-500 ${
                  isHovered ? 'animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]' : ''
                }`}></div>
                <div className={`h-px flex-1 max-w-20 bg-gradient-to-r ${service.gradient} transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-30'
                }`}></div>
                <span className="text-xs text-gray-500 uppercase tracking-wide">Connected</span>
              </div>
            </div>

            {/* Arrow */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center transition-all duration-500 ${
              isHovered ? 'translate-x-0 opacity-100 scale-110' : 'translate-x-4 opacity-0'
            } shadow-lg`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Circuit connection points */}
          <div className="absolute top-4 right-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full bg-violet-500/50 transition-all duration-300 ${
                  isHovered ? 'bg-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.8)]' : ''
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;