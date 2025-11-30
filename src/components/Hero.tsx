import { ArrowRight, Zap, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: Zap,
      label: "Industry-Led Learning",
    },
    {
      icon: BookOpen,
      label: "Game Dev & AR/VR Tools",
    },
    {
      icon: Users,
      label: "Expert Mentorship",
    },
  ];

  return (
    <section className="w-full bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col justify-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-snug mb-4 sm:mb-6">
              Build Games & AR/VR Experiences
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Join Envidox, where we teach cutting-edge game development, AR/VR technologies, and 3D design. Learn from industry experts and turn your creative ideas into reality.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 sm:mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Primary Button */}
              <button className="px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-md hover:shadow-lg">
                Start Learning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button */}
              <button className="px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                Book a Demo
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white" />
              </div>
              <span>Join 500+ students building the future</span>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-full max-w-md">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-40 blur-3xl" />

              {/* Hero Card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden">
                {/* Placeholder image/illustration */}
                <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-600 font-medium">3D & Game Dev</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm font-semibold text-slate-900">
                      Learn 3D Modeling
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-sm font-semibold text-slate-900">
                      Game Development
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full" />
                    <span className="text-sm font-semibold text-slate-900">
                      AR/VR Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Visual (visible on small screens) */}
        <div className="relative mt-12 lg:hidden">
          <div className="w-full max-w-sm mx-auto">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-40 blur-3xl" />

            {/* Hero Card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl overflow-hidden">
              {/* Placeholder image/illustration */}
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium text-sm">3D & Game Dev</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    Learn 3D Modeling
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    Game Development
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    AR/VR Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
