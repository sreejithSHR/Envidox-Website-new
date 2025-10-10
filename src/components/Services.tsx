import React from 'react';
import { PartyPopper, Rocket, Palette, Code, Zap, Shield, Users, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient 
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-transparent">
      <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button className="w-full mt-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors group-hover:shadow-sm">
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Web Development",
      description: "Build blazing-fast, modern websites and web applications with cutting-edge technologies.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create beautiful, intuitive interfaces that users love and enjoy interacting with.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      icon: Code,
      title: "Mobile Development",
      description: "Develop cross-platform mobile applications that work seamlessly on iOS and Android.",
      features: ["React Native", "Flutter", "Native Performance", "App Store Ready"],
      gradient: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and improve user experience with expert optimization.",
      features: ["Lighthouse Audit", "Code Splitting", "Caching Strategies", "Bundle Optimization"],
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Keep your applications secure and up-to-date with ongoing maintenance and monitoring.",
      features: ["Security Audits", "Regular Updates", "Backup Solutions", "24/7 Monitoring"],
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Get expert advice on your digital strategy and technology stack decisions.",
      features: ["Tech Stack Selection", "Architecture Review", "Team Training", "Project Planning"],
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 rounded-full border border-gray-200 shadow-sm mb-6 md:mb-8">
          <PartyPopper className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-700 font-medium">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6">
          Endless Possibilities
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
          From concept to deployment, we provide comprehensive solutions that bring your ideas to life with cutting-edge technology.
        </p>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              gradient={service.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 rounded-full font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;