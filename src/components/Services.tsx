import React from 'react';
import { PartyPopper, Rocket, Cpu, Eye, Globe, Cuboid, MessageCircle, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}
const phoneNumber = "+916381810189";

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient 
}) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-all duration-300 hover:border-transparent">
      
      {/* Header Row with Icon + Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-lg ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-3 text-sm leading-relaxed text-left">
        {description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-1.5 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Button */}
      <button className="w-full mt-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-colors group-hover:shadow-sm">
        Learn More
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
   {
    icon: Rocket,
    title: "Web Design & Development",
    description:
      "We build responsive, lead-generating websites that look great and perform under pressure.",
    features: [
      "Custom Websites & Web Apps",
      "SEO & Performance Tuning",
      "Responsive & Mobile-First Design",
      "Modern Frameworks (React / Next)"
    ],
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    icon: Cuboid,  // or 3D icon
    title: "3D Design & Modelling",
    description:
      "Create realistic, interactive 3D models for visualization, WebXR, and immersive product demos.",
    features: [
      "High-poly & Low-poly Modeling",
      "Texture & Material Design",
      "WebXR Integration",
      "Interactive 3D Scenes"
    ],
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-400"
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot Development & Automation",
    description:
      "Design smart, automated chat systems to streamline business workflows and improve customer engagement.",
    features: [
      "Custom Chatbot Logic",
      "API & CRM Integration",
      "Natural Language Processing",
      "Automation of Repetitive Tasks"
    ],
    gradient: "bg-gradient-to-br from-green-500 to-emerald-400"
  },
  {
    icon: Globe,
    title: "AR/VR Development",
    description:
      "Deliver immersive augmented and virtual reality experiences tailored to your business and audience.",
    features: [
      "AR & VR App Creation",
      "WebXR Experiences",
      "3D Interactivity",
      "Cross-platform Deployment"
    ],
    gradient: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    icon: Cpu,
    title: "Custom AI Pipeline Development",
    description:
      "We architect and build bespoke AI workflows that power data processing, prediction, automation, and more.",
    features: [
      "Model Training & Deployment",
      "Pipeline Orchestration",
      "Data Engineering",
      "Custom Tool Integrations"
    ],
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
  },
  {
    icon: Eye,
    title: "Virtual Tours",
    description:
      "Enable users to explore spaces virtually — perfect for real estate, hospitality, campuses, and more.",
    features: [
      "360° Photography & Stitching",
      "Panorama Navigation",
      "Embedded Hotspots & Info",
      "Integration with Google Maps"
    ],
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
              <a
              href={`tel:${phoneNumber}`}

              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
               Schedule a Call
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;