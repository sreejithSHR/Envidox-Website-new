import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Pause, Sparkles, Zap, Shield, Users, Star, ArrowLeft, ArrowRight as RightIcon } from 'lucide-react';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const products = [
    {
      id: 1,
      name: "SparkFlow",
      tagline: "AI-Powered Workflow Automation",
      description: "Transform your business processes with intelligent automation that learns and adapts to your team's needs.",
      price: "$89/month",
      features: [
        "Unlimited workflows",
        "AI task optimization",
        "Real-time analytics",
        "100+ integrations",
        "Priority support",
        "Custom triggers"
      ],
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      stats: "Saves 15+ hours weekly",
      highlight: "Most Popular"
    },
    {
      id: 2,
      name: "SecureStack",
      tagline: "Enterprise-Grade Security Suite",
      description: "Protect your digital assets with military-grade encryption and real-time threat detection.",
      price: "$149/month",
      features: [
        "End-to-end encryption",
        "Real-time monitoring",
        "Compliance automation",
        "Team management",
        "Advanced analytics",
        "24/7 SOC support"
      ],
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "99.9% uptime guarantee",
      highlight: "Enterprise Ready"
    },
    {
      id: 3,
      name: "TeamSync",
      tagline: "Collaboration Platform",
      description: "Bring your team together with seamless collaboration tools designed for modern remote work.",
      price: "$67/month",
      features: [
        "Unlimited team members",
        "HD video conferencing",
        "File sharing & storage",
        "Project management",
        "Time tracking",
        "Custom workspaces"
      ],
      icon: Users,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "Boosts productivity by 40%",
      highlight: "Team Favorite"
    }
  ];

  // Auto-rotate products
  React.useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, products.length]);

  const nextProduct = () => {
    setActiveProduct((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setActiveProduct((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[activeProduct];

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

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          {/* Product Card */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
            <div className={`p-8 bg-gradient-to-br ${currentProduct.bgGradient}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-lg`}>
                  <currentProduct.icon className="w-8 h-8 text-white" />
                </div>
                {currentProduct.highlight && (
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                    <span className="text-xs font-semibold text-gray-700">{currentProduct.highlight}</span>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentProduct.name}</h3>
              <p className="text-gray-700 font-medium mb-1">{currentProduct.tagline}</p>
              <p className="text-gray-600 text-sm mb-4">{currentProduct.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">{currentProduct.price}</div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{currentProduct.stats}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
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
              <ArrowLeft className="w-5 h-5 text-gray-700" />
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
              <RightIcon className="w-5 h-5 text-gray-700" />
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

        {/* Desktop Layout - Creative Side-by-Side */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Product Selector - Left Side */}
            <div className="col-span-4 space-y-4">
              {products.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                    index === activeProduct
                      ? `bg-gradient-to-r ${product.bgGradient} border-2 border-gray-300 shadow-lg transform scale-105`
                      : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-md`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{product.tagline}</p>
                    </div>
                    {index === activeProduct && (
                      <ArrowRight className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Product Showcase - Right Side */}
            <div className="col-span-8">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                <div className={`p-10 bg-gradient-to-br ${currentProduct.bgGradient}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center shadow-xl`}>
                          <currentProduct.icon className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{currentProduct.name}</h3>
                          <p className="text-gray-700 font-medium text-lg">{currentProduct.tagline}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg max-w-2xl">{currentProduct.description}</p>
                    </div>
                    
                    {currentProduct.highlight && (
                      <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                        <span className="text-sm font-semibold text-gray-700">{currentProduct.highlight}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-gray-900">{currentProduct.price}</div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium">{currentProduct.stats}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {currentProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

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