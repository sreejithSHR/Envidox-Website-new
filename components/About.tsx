'use client';

import React, { useState, useEffect } from 'react';

function AboutUsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: "🧠",
      title: "Neural Intelligence",
      description: "Advanced AI models trained on billions of parameters"
    },
    {
      icon: "🎯",
      title: "Precision Accuracy",
      description: "99.9% accuracy in real-world applications"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Process millions of requests per second"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance"
    }
  ];

  return (
    <div className="relative w-full min-h-screen  overflow-hidden py-16 lg:py-24 px-4 sm:px-8">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-semibold backdrop-blur-sm">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            The Future of AI
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re pioneering the next generation of artificial intelligence, 
            combining cutting-edge 3D visualization with neural networks to create 
            experiences that were once impossible.
          </p>
        </div>

        {/* Main Content - 3D Card with Parallax */}
        <div className="relative mb-16 lg:mb-24">
          <div 
            className="relative perspective-1000"
            style={{
              transform: `rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`
            }}
          >
            {/* 3D Floating Card */}
            <div className="relative bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.3)] p-8 lg:p-12">
              {/* Glossy Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
              
              {/* Content Grid */}
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Redefining Possibilities
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    Founded by visionaries in AI and computer graphics, we&apos;re pushing the boundaries 
                    of what&apos;s possible. Our team of world-class researchers and engineers work at 
                    the intersection of artificial intelligence and 3D technology.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    From autonomous systems to immersive experiences, we&apos;re building the 
                    building the infrastructure that will power tomorrow&apos;s
                    intelligent applications.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">500+</div>
                      <div className="text-xs text-gray-500 mt-1">AI Models</div>
                    </div>
                    <div className="text-center border-x border-violet-500/30">
                      <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">1M+</div>
                      <div className="text-xs text-gray-500 mt-1">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">50+</div>
                      <div className="text-xs text-gray-500 mt-1">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Right: 3D Cube Animation */}
                <div className="relative h-80 lg:h-96 flex items-center justify-center">
                  <div className="relative w-64 h-64 lg:w-72 lg:h-72" style={{ transformStyle: 'preserve-3d', animation: 'float 6s ease-in-out infinite' }}>
                    {/* Rotating 3D Cube */}
                    <div className="absolute inset-0" style={{ 
                      transformStyle: 'preserve-3d',
                      animation: 'rotateCube 20s linear infinite'
                    }}>
                      {/* Front */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-fuchsia-600/40 backdrop-blur-sm border border-violet-400/50 rounded-2xl shadow-[0_0_60px_rgba(139,92,246,0.4)]" style={{ transform: 'translateZ(100px)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">🤖</div>
                      </div>
                      {/* Back */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 to-violet-600/40 backdrop-blur-sm border border-fuchsia-400/50 rounded-2xl" style={{ transform: 'translateZ(-100px) rotateY(180deg)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">✨</div>
                      </div>
                      {/* Right */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-violet-600/40 backdrop-blur-sm border border-purple-400/50 rounded-2xl" style={{ transform: 'rotateY(90deg) translateZ(100px)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">🚀</div>
                      </div>
                      {/* Left */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-purple-600/40 backdrop-blur-sm border border-violet-400/50 rounded-2xl" style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">💎</div>
                      </div>
                      {/* Top */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 to-purple-600/40 backdrop-blur-sm border border-fuchsia-400/50 rounded-2xl" style={{ transform: 'rotateX(90deg) translateZ(100px)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">⚡</div>
                      </div>
                      {/* Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-fuchsia-600/40 backdrop-blur-sm border border-purple-400/50 rounded-2xl" style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}>
                        <div className="absolute inset-0 flex items-center justify-center text-6xl">🎯</div>
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-2xl border border-violet-500/20 p-6 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default AboutUsSection;