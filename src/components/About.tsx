
import { Coffee, Sparkles,  Heart } from 'lucide-react';

const About = () => {
  const features = [
    
    {
      icon: Heart,
      title: "Code Meets Canvas",
      description: "We build systems where 3D design, automation, and intelligence coexist.   From digital environments to smart interfaces, every project is a fusion of creativity and computation."
    },
    {
      icon: Sparkles,
      title: "Imagination, Engineered",
      description: "AI intelligence, and solid development principles to turn wild ideas into working systems. From immersive environments to automated workflows, we give imagination a structure, a brain, and a life of its own."
    },
    {
      icon: Coffee,
      title: "Built Different, Coded Smarter",
      description: "Every model, motion, and line of code is crafted to be scalable, efficient, and just a little ahead of its time. Our work lives where good ideas become powerful, intelligent tools that actually deliver."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 mb-4 md:mb-6">
              <Coffee className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Engineering Imagination</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Envidox Solutions
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              At Envidox, we design systems that simplify the complex, accelerate creation, and turn imagination into something tangible.
              We build the systems that power imagination, simplify complexity, and redefine how ideas come to life
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
  {features.map((feature, index) => {
    // More vibrant gradient colors
    const gradients = [
      "from-blue-600 to-cyan-400",
      "from-purple-600 to-pink-400",
      "from-green-600 to-emerald-400",
      "from-orange-600 to-red-400",
      "from-indigo-600 to-purple-400",
      "from-rose-600 to-pink-400"
    ];
    
    const currentGradient = gradients[index % gradients.length];
    
    return (
      <div
        key={index}
        className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-300 hover:shadow-lg hover:border-blue-100 text-center flex flex-col items-center"
      >
        {/* Centered Icon with different colors */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        
        <h4 className="font-semibold text-lg mb-2 text text-gray-900 group-hover:text-gray-800 transition-colors">
          {feature.title}
        </h4>
        <p className="text-sm text-gray-600 text-left leading-relaxed group-hover:text-gray-700 transition-colors">
          {feature.description}
        </p>
      </div>
    );
  })}
</div>

          {/* Additional Stats Section */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;