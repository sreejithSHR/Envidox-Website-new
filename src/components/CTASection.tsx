import { ArrowRight, Star } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-lg text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-400/20 to-violet-400/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
          <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
          <span className="text-sm font-medium text-gray-700">Be A Part</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Your Reality Upgrade Awaits
        </h2>

        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          Just Connect with us that helps your ideas and dreams turn to reality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Know more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-900 rounded-2xl font-semibold border border-gray-200/50 hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-sm">
            See All Worlds
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Available on Quest 2, Quest 3, PSVR 2, and SteamVR
        </p>
      </div>
    </div>
  );
}
