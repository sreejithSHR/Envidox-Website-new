import React, { useState } from 'react';
import { ArrowRight,  Play, Pause, Sparkles, Zap, Shield, Users, Star, Monitor, Smartphone, Globe } from 'lucide-react';

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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
        title: "Dashboard Preview",
        description: "Interactive analytics and workflow management",
        gradient: "from-purple-400 to-pink-400"
      },
      security: {
        icon: Shield,
        title: "Security Dashboard",
        description: "Real-time monitoring and threat detection",
        gradient: "from-blue-400 to-cyan-400"
      },
      collaboration: {
        icon: Users,
        title: "Team Workspace",
        description: "Collaborative environment with video calls",
        gradient: "from-green-400 to-emerald-400"
      }
    };

    const preview = previews[type as keyof typeof previews] || previews.dashboard;
    const PreviewIcon = preview.icon;

    return (
      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${preview.gradient} flex flex-col items-center justify-center text-white p-4 md:p-8 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        </div>
        
        {/* Preview Content */}
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 md:mb-4 backdrop-blur-sm">
            <PreviewIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">{preview.title}</h3>
          <p className="text-white/80 text-xs md:text-sm">{preview.description}</p>
        </div>

        {/* Mock Browser/Device Frame */}
        <div className="absolute top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-white/60">app.thinkbot.com/{type}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br ${currentProduct.bgGradient} opacity-30 blur-3xl transition-all duration-1000`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br ${currentProduct.bgGradient} opacity-20 blur-3xl transition-all duration-1000`} />
      </div>

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Our Products</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Build Amazing Things
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Powerful tools designed to help you work smarter, move faster, and achieve more.
          </p>
        </div>

        {/* Mobile Carousel - Updated with Preview Area */}
        <div className="lg:hidden">
          {/* Product Card with Preview */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Preview Area - Top */}
            <div className="h-48 bg-gray-100 relative">
              <ProductPreview type={currentProduct.previewType} />
            </div>

            {/* Product Details */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{currentProduct.name}</h3>
                  <p className="text-gray-700 font-medium text-sm mb-2">{currentProduct.tagline}</p>
                </div>
                
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{currentProduct.description}</p>

              <div className="flex items-center justify-between mb-6">
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{currentProduct.stats}</span>
                </div>
              </div>

              {/* Features List - No Icons */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <div key={index} className="text-gray-700 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={prevProduct}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeProduct 
                      ? 'bg-gray-900 w-6' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextProduct}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button 
              onClick={() => setAutoPlay(!autoPlay)}
              className="w-12 h-12 rounded-full bg-white border border-gray-300 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              {autoPlay ? (
                <Pause className="w-5 h-5 text-gray-700" />
              ) : (
                <Play className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Layout - Horizontal Selector on Top */}
        <div className="hidden lg:block">
          {/* Horizontal Product Selector - Top */}
          <div className="flex justify-center gap-6 mb-12">
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
                <div className="text-left flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.tagline}</p>
                </div>
                {index === activeProduct && (
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Main Product Showcase - Large Preview Area */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              {/* Left Side - Preview/Logo Area */}
              <div className="p-8 bg-gray-50 border-r border-gray-200">
                <div className="h-full flex flex-col">
                  <div className="h-80">
                    <ProductPreview type={currentProduct.previewType} />
                  </div>
                  
                  {/* Additional Preview Info */}
                  <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Monitor className="w-4 h-4" />
                      <span>Web App</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4" />
                      <span>Mobile Ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>Cloud Hosted</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Details */}
              <div className="p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">{currentProduct.name}</h3>
                      
                    </div>
                    <p className="text-gray-700 font-medium text-xl mb-3">{currentProduct.tagline}</p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentProduct.description}</p>
                  </div>
                </div>

                {/* Stats and Price */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="font-medium text-lg">{currentProduct.stats}</span>
                  </div>
                </div>

                {/* Features List - No Icons */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentProduct.features.map((feature, index) => (
                      <div key={index} className="text-gray-700 text-sm bg-gray-50 px-4 py-3 rounded-lg">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 text-lg">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls - Below Main Content */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button 
              onClick={prevProduct}
              className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeProduct 
                      ? 'bg-gray-900 w-8' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextProduct}
              className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button 
              onClick={() => setAutoPlay(!autoPlay)}
              className="w-14 h-14 rounded-full bg-white border border-gray-300 shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              {autoPlay ? (
                <Pause className="w-6 h-6 text-gray-700" />
              ) : (
                <Play className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['TechCorp', 'InnovateCo', 'StartupXYZ', 'GlobalTech', 'FutureLabs'].map((company, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;