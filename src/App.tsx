import Hero from "./components/Hero";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import OrbitingCircles from "./components/orbiting"
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import WorldOf3D from "./components/Worldof3d";
import VirtualTourShowcase from "./components/Virtualtours";
import GameInDevelopment from "./components/Gamedev"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-40" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Particle Hero Section */}
        <Hero />

        <main className="flex flex-col items-center w-full">
          <About />
          <OrbitingCircles />
          <Services />
          <Products />
          <WorldOf3D />
          <VirtualTourShowcase />
          <GameInDevelopment />

          {/* How It Works Section - White Theme */}
          <section className="w-full py-16 md:py-20 px-4">
            <div className="mx-auto max-w-6xl">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg relative overflow-hidden">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">How It Works</h3>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-base md:text-lg">Getting started is easier than making instant noodles.</p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">01</div>
                    <h5 className="font-semibold mb-2 text-gray-900 text-lg">Download</h5>
                    <p className="text-gray-600 text-sm md:text-base">Grab the app from your headset's store. Takes like 2 minutes.</p>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">02</div>
                    <h5 className="font-semibold mb-2 text-gray-900 text-lg">Pick a World</h5>
                    <p className="text-gray-600 text-sm md:text-base">Browse 50+ experiences. They're all awesome, promise.</p>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all">
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">03</div>
                    <h5 className="font-semibold mb-2 text-gray-900 text-lg">Have Fun</h5>
                    <p className="text-gray-600 text-sm md:text-base">That's it. Seriously. No tutorials, no BS.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-16 md:py-20 px-4">
            <div className="mx-auto max-w-6xl">
              <CTASection />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
