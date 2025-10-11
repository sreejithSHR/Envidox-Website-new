
import { Coffee, Sparkles,  Heart } from 'lucide-react';

const About = () => {
  const features = [
    
    {
      icon: Heart,
      title: "Crafted with Care",
      description: "Every component and template is meticulously designed and tested for real-world use."
    },
    {
      icon: Sparkles,
      title: "Always Evolving",
      description: "We continuously improve and update our resources based on user feedback and industry trends."
    },
    {
      icon: Coffee,
      title: "Developer Experience",
      description: "Clean, documented code that's easy to customize and extend for your specific needs."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 mb-4 md:mb-6">
              <Coffee className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Not Another VR Agency</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Envidox Solutions
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Envidox isn’t another VR agency — we’re innovators building the pipelines that power imagination.<br />
              Our tools simplify complexity, accelerate creation, and expand what’s possible
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white transition-all duration-300 hover:shadow-lg hover:border-blue-100"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Stats Section */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Components</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">99%</div>
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