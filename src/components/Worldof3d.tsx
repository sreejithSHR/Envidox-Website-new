import React from 'react';
import { ArrowRight, Play, Zap, Eye, Globe, Sparkles, Users, Smartphone } from 'lucide-react';

const WorldOf3D = () => {
  const bentoCards = [
    {
      type: 'large',
      title: "Augmented Reality",
      subtitle: "Bring digital magic to the real world",
      description: "Overlay interactive 3D content onto physical spaces using your smartphone or AR glasses.",
      image: "/showcase/ar-demo.jpg",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      features: ["Real-time tracking", "Interactive objects", "Multi-user experiences"],
      cta: "View AR Demo",
      stats: "87% higher engagement"
    },
    {
      type: 'medium',
      title: "Virtual Reality",
      subtitle: "Fully immersive digital worlds",
      description: "Step into completely virtual environments for training, entertainment, and collaboration.",
      image: "/showcase/vr-demo.jpg", 
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500",
      features: ["6DOF movement", "Spatial audio", "Cross-platform"],
      cta: "Explore VR",
      stats: "94% user satisfaction"
    },
    {
      type: 'medium', 
      title: "WebXR",
      subtitle: "Instant experiences in your browser",
      description: "Access immersive content directly through web browsers - no downloads required.",
      image: "/showcase/webxr-demo.jpg",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
      features: ["Zero installation", "Progressive enhancement", "Easy sharing"],
      cta: "Try WebXR",
      stats: "Instant access"
    },
    {
      type: 'small',
      title: "25+ Projects",
      subtitle: "Successfully delivered",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      background: "bg-gradient-to-br from-orange-50 to-red-50",
      cta: "View Portfolio"
    },
    {
      type: 'small',
      title: "10K+ Users",
      subtitle: "Active monthly",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500", 
      background: "bg-gradient-to-br from-indigo-50 to-purple-50",
      cta: "See Testimonials"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">World of 3D & Immersive Tech</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Step Into New Dimensions
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of digital interaction with our cutting-edge AR, VR, and WebXR solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {bentoCards.map((card, index) => (
            <BentoCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Start Your Immersive Project
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 text-sm mt-4">No credit card required • Free consultation</p>
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ card, index }) => {
  const getCardStyles = () => {
    switch (card.type) {
      case 'large':
        return "md:col-span-4 md:row-span-2";
      case 'medium':
        return "md:col-span-2 md:row-span-2";
      case 'small':
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-2";
    }
  };

  const getImageHeight = () => {
    switch (card.type) {
      case 'large':
        return "h-48 sm:h-64 md:h-full";
      case 'medium':
        return "h-48 sm:h-64 md:h-3/4";
      case 'small':
        return "h-32";
      default:
        return "h-48";
    }
  };

  return (
    <div className={`
      group relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500
      ${getCardStyles()}
      ${card.background || ''}
    `}>
      {/* Background Image for non-small cards */}
      {card.image && card.type !== 'small' && (
        <div className={`relative ${getImageHeight()} overflow-hidden`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            {/* Placeholder for actual image */}
            <div className="text-center text-gray-500">
              <card.icon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <span className="text-sm">{card.title} Image</span>
            </div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Play Button for large cards */}
          {card.type === 'large' && (
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-white">
              <Play className="w-6 h-6 text-gray-900 ml-1" />
            </button>
          )}
        </div>
      )}

      {/* Content */}
      <div className={`p-6 ${card.type === 'large' ? 'absolute bottom-0 left-0 right-0' : ''}`}>
        {/* Icon and Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
            <card.icon className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
              {card.title}
            </h3>
            <p className="text-gray-600 font-medium text-sm mb-2">
              {card.subtitle}
            </p>
            
            {/* Stats for large/medium cards */}
            {(card.type === 'large' || card.type === 'medium') && card.stats && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>{card.stats}</span>
              </div>
            )}
          </div>
        </div>

        {/* Description for large/medium cards */}
        {(card.type === 'large' || card.type === 'medium') && card.description && (
          <p className="text-gray-600 mb-4 leading-relaxed">
            {card.description}
          </p>
        )}

        {/* Features for large cards */}
        {card.type === 'large' && card.features && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {card.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* Small card content */}
        {card.type === 'small' && (
          <div className="text-center">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg mx-auto mb-4`}>
              <card.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.subtitle}</p>
          </div>
        )}

        {/* CTA Button */}
        <button className={`
          w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg
          ${card.type === 'small' 
            ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50' 
            : 'bg-gray-900 text-white hover:bg-gray-800'
          }
        `}>
          {card.cta}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      </div>
    </div>
  );
};

export default WorldOf3D;