import WorldShippingIcon from "./Icons/WorldShippingIcon";

export default function Hero() {
  return (
    <section className="pt-[96px] pb-16"> {/* leave space for fixed header */}
      <div className="max-w-[1000px] mx-auto text-center px-6">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
          <WorldShippingIcon width={30} height={30} />
          
          <span className="text-sm text-gray-700">World Of Wonders</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          Tomorrow isn’t coming--   <br /> it’s already built here
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Step into the World Of wonders That we Translate your Innovation into Reality With AR/VR and AI
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-cyan-200 hover:bg-green-450 shadow-md text-black font-semibold">
            Get started
          </button>
        </div>

        {/* small trust bar */}
        <div className="mt-10 inline-flex items-center gap-4 bg-white rounded-full px-4 py-2 border border-gray-100 shadow-sm">
          <div className="flex -space-x-2">
            <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <span className="text-sm text-gray-700">20K+ &nbsp; | &nbsp; Trusted by 59k+ users</span>
          <span className="text-sm font-semibold">⭐ 5.0</span>
        </div>

        {/* Mocked browser / product screenshot placeholder */}
        <div className="mt-12 rounded-3xl border border-gray-100 overflow-hidden shadow-2xl mx-auto" style={{maxWidth: 980}}>
          <div className="bg-white p-6">
            <div className="rounded-xl border border-gray-100 p-8 text-sm text-gray-500">
              {/* This is where you would place your screenshot or interactive embed */}
              <div className="h-[260px] bg-gray-50 rounded-md flex items-center justify-center text-gray-300">
                Product screenshot / embed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
