import React, { useState } from 'react';
import { ArrowRight, Play, Pause, Sparkles, Zap, Shield, Users, Star, Monitor, Smartphone, Globe } from 'lucide-react';

// Define types for better TypeScript support
interface ProductPreviewProps {
  type: string;
}

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  gradient: string;
  bgGradient: string;
  stats: string;
  previewType: string;
}

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const products: Product[] = [
    {
      id: 1,
      name: "Envichat",
      tagline: "No-Code Chatbot editor ",
      description: "Create Chatbots for youur everyday need in Few Clicks, your website, whatsapp everything manged in one No-Code Platform.",
      features: [
        "Create Chatbots In minutes",
        "No Code or Deployment needed",
        "AI API integration",
        "Whatsapp Integration",
      ],
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      stats: "Saves 15+ hours weekly",
      previewType: "dashboard"
    },
    {
      id: 2,
      name: "Production Crate",
      tagline: "All in one Preproduction Tool",
      description: "All In One Preproduction manger in Web helps to maintain entire preproduction for Movies, games and any creative project in one platform",
      features: [
        "One stop Tool For Your Movie and Game Production",
        "Inbuilt script writer and Storyboard Viewer",
        "Scheduling, Task Management and Team Management",
        "Fully Open Source ",
      ],
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "99.9% uptime guarantee",
      previewType: "security"
    },
    {
      id: 3,
      name: "NXL3D",
      tagline: "Generate 3d Model in seconds",
      description: "One Click AI based 3D generator. Converting Single Image to 3D model and Making Game ready asset",
      features: [
        "Faster generations",
        "High Quality Textures",
        "Game Ready Assets",
        "Advanced AI pipelines",
      ],
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "Boosts productivity by 40%",
      previewType: "collaboration"
    }
  ];

  // Auto-rotate products
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, products.length]);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[activeProduct];

  // Preview component with proper TypeScript typing
  const ProductPreview: React.FC<ProductPreviewProps> = ({ type }) => {
    const previews = {
      dashboard: {
        icon: Monitor,
        title: "Envichat",
        description: "Interactive analytics and workflow management",
        gradient: "from-purple-400 to-pink-400",
        url: "https://envichat.envidoxsolutions.com/",
        isImage: false
      },
      security: {
        icon: Shield,
        title: "Production Lobby",
        description: "Real-time monitoring and threat detection",
        gradient: "from-blue-400 to-cyan-400",
        url: "https://cdn.jsdelivr.net/gh/sreejithSHR/solanki-assets@main/Envidox%20Solutions%20Portfolio%20(1).png",
        isImage: true
      },
      collaboration: {
        icon: Users,
        title: "NXL 3D",
        description: "Collaborative environment with video calls",
        gradient: "from-green-400 to-emerald-400",
        url: "https://envision-frontend-one.vercel.app/",
        isImage: false
      }
    };

    const preview = previews[type as keyof typeof previews] || previews.dashboard;

    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-200">
        {/* Mock Browser/Device Frame */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2 z-10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white px-4 py-1 rounded-md text-xs text-gray-600 border border-gray-300">
              app.thinkbot.com/{type}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full h-full pt-10 bg-gray-50">
          {preview.isImage ? (
            <img 
              src={preview.url} 
              alt={preview.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <iframe 
              src={preview.url} 
              title={preview.title}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 mb-6">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Our Products</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Build <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Amazing Things</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Powerful tools designed to help you work smarter, move faster, and achieve more.
        </p>
      </div>

      {/* Mobile Carousel - Updated with Preview Area */}
      <div className="lg:hidden max-w-2xl mx-auto mb-12 relative z-10">
        {/* Product Card with Preview */}
        <div className={`bg-gradient-to-br ${currentProduct.bgGradient} rounded-3xl shadow-2xl overflow-hidden border border-gray-200`}>
          {/* Preview Area - Top */}
          <div className="p-6 bg-white">
            <div className="h-80 rounded-xl overflow-hidden">
              <ProductPreview type={currentProduct.previewType} />
            </div>
          </div>

          {/* Product Details */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-lg`}>
                <currentProduct.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentProduct.name}</h3>
                <p className="text-sm text-gray-600">{currentProduct.tagline}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {currentProduct.description}
            </p>

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-medium text-gray-700">{currentProduct.stats}</span>
            </div>

            {/* Features List - No Icons */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full bg-gradient-to-r ${currentProduct.gradient} text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={prevProduct}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          
          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeProduct ? 'bg-gray-900 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextProduct}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setAutoPlay(!autoPlay)}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {autoPlay ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Layout - Horizontal Selector on Top */}
      <div className="hidden lg:block max-w-7xl mx-auto relative z-10">
        {/* Horizontal Product Selector - Top */}
        <div className="flex gap-6 mb-12 overflow-x-auto pb-4 justify-center">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(index)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 border-2 min-w-[280px] ${
                index === activeProduct
                  ? `bg-gradient-to-r ${product.bgGradient} border-gray-300 shadow-lg transform scale-105`
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md flex-shrink-0`}>
                <product.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.tagline}</p>
              </div>
              {index === activeProduct && (
                <ArrowRight className="w-5 h-5 text-gray-600 ml-auto" />
              )}
            </button>
          ))}
        </div>

        {/* Main Product Showcase - Large Preview Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Preview/Logo Area */}
          <div className="space-y-6">
            <div className="h-[600px] rounded-2xl overflow-hidden">
              <ProductPreview type={currentProduct.previewType} />
            </div>

            {/* Additional Preview Info */}
            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <Monitor className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Web App</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <Smartphone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Mobile Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Cloud Hosted</span>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-lg`}>
                <currentProduct.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">{currentProduct.name}</h2>
                <p className="text-lg text-gray-600">{currentProduct.tagline}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              {currentProduct.description}
            </p>

            {/* Stats and Price */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 px-4 py-3 rounded-xl border border-yellow-200">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-gray-900">{currentProduct.stats}</span>
              </div>
            </div>

            {/* Features List - No Icons */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
              <ul className="space-y-3">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className={`flex-1 bg-gradient-to-r ${currentProduct.gradient} text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Controls - Below Main Content */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prevProduct}
            className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          
          <div className="flex gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProduct(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeProduct ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextProduct}
            className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <button 
            onClick={() => setAutoPlay(!autoPlay)}
            className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {autoPlay ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        <p className="text-center text-gray-500 text-sm mb-8">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {['TechCorp', 'InnovateCo', 'StartupXYZ', 'GlobalTech', 'FutureLabs'].map((company, index) => (
            <div key={index} className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;