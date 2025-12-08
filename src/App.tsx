

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
    <div className="min-h-screen  text-gray-900 relative overflow-hidden">
      {/* Top/sides symmetry lines & subtle background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* thin top/side guide lines */}
        <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[calc(100%-400px)] border-t border-gray-100" />
        <div className="absolute left-0 top-[50%] -translate-y-1/2 h-[calc(100%-400px)] border-l border-gray-100" />
        <div className="absolute right-0 top-[50%] -translate-y-1/2 h-[calc(100%-400px)] border-r border-gray-100" />

        {/* center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-40">
          <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-green-100 to-blue-50 opacity-60" />
        </div>

        {/* faint diagonal symmetry lines */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-50 to-transparent opacity-60 mix-blend-screen" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        

        <main className="flex flex-col items-center">
          <Hero />
          <About />
          <OrbitingCircles />
          <Services />
          <Products />
          <WorldOf3D />
          <VirtualTourShowcase />
          <GameInDevelopment />

          

          

          <section className="w-full py-20">
            <div className="mx-auto max-w-[1100px]">
              <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-3xl p-10 border border-gray-100 shadow-lg relative overflow-hidden">
                <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">How It Works</h3>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Getting started is easier than making instant noodles.</p>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="text-3xl font-bold mb-2">01</div>
                    <h5 className="font-semibold mb-2">Download</h5>
                    <p className="text-gray-600 text-sm">Grab the app from your headset's store. Takes like 2 minutes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="text-3xl font-bold mb-2">02</div>
                    <h5 className="font-semibold mb-2">Pick a World</h5>
                    <p className="text-gray-600 text-sm">Browse 50+ experiences. They're all awesome, promise.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100">
                    <div className="text-3xl font-bold mb-2">03</div>
                    <h5 className="font-semibold mb-2">Have Fun</h5>
                    <p className="text-gray-600 text-sm">That's it. Seriously. No tutorials, no BS.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-20">
            <div className="mx-auto max-w-[1100px]">
              <CTASection />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}