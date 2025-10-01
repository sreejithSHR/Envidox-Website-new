'use client';

import React, { useState } from 'react';

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "NeuralCore AI",
      tagline: "The Future of Intelligence",
      description:
        "Advanced AI platform that processes millions of data points in real-time, delivering insights that transform businesses.",
      features: ["Real-time Processing", "99.9% Accuracy", "Auto-scaling"],
      stats: { users: "500K+", models: "1K+", uptime: "99.99%" },
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      icon: "🧠",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80",
      category: "AI Platform"
    },
    {
      id: 2,
      name: "Vision3D Pro",
      tagline: "Reality, Reimagined",
      description:
        "Immersive 3D engine for photoreal renders, realtime interaction and AR/VR-ready pipelines.",
      features: ["WebGL Powered", "AR/VR Ready", "Cloud Rendering"],
      stats: { fps: "120+", quality: "8K", latency: "<10ms" },
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1400&q=80",
      category: "3D Engine"
    },
    {
      id: 3,
      name: "QuantumNet",
      tagline: "Beyond the Cloud",
      description:
        "Next-gen distributed compute with quantum-accelerated flows — secure, ultra-low latency, massively parallel.",
      features: ["Quantum-secure", "Scalable", "Low Latency"],
      stats: { nodes: "10K+", throughput: "1Tbps", latency: "1ms" },
      gradient: "from-pink-500 via-rose-500 to-red-500",
      icon: "⚛️",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1400&q=80",
      category: "Quantum Network"
    }
  ];

  return (
    <div className="w-full text-white">
      {/* Simple page header (no bg on sections) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 text-center">
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-transparent border border-gray-700 text-violet-300">
          OUR PRODUCTS
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-cyan-200">
          Built for Tomorrow
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          Handpicked tools and engines that make complex systems feel simple — elegant UI, strong UX, and clear CTAs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {products.map((p, i) => {
          const isEven = i % 2 === 0;
          const hovered = hoveredProduct === p.id;
          return (
            <section
              key={p.id}
              onMouseEnter={() => setHoveredProduct(p.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="py-10"
            >
              <div
                className={`grid gap-8 items-center md:grid-cols-2 md:gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image card (no full-section bg) */}
                <div
                  className={`relative rounded-2xl overflow-hidden border border-gray-800 shadow-sm transition-transform duration-500 ${
                    hovered ? "scale-[1.02] shadow-lg" : "hover:shadow-md"
                  }`}
                  aria-hidden
                >
                  <div className="w-full h-72 md:h-[420px]">
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      className="w-full h-full object-cover transform transition-transform duration-700"
                      style={{ transform: hovered ? "scale(1.06)" : "scale(1.0)" }}
                      loading="lazy"
                    />
                  </div>

                  {/* subtle image overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-black/45 to-transparent"></div>
                  </div>

                  {/* decorative corner badge */}
                  <div className="absolute top-4 left-4 rounded-full px-3 py-1 bg-black/40 border border-gray-700 text-xs flex items-center gap-2 backdrop-blur-sm">
                    <span className="text-lg">{p.icon}</span>
                    <span className="uppercase text-[11px] tracking-wide text-violet-200">{p.category}</span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`rounded-2xl p-6 md:p-8 border border-gray-800 bg-gradient-to-br from-white/2 to-transparent backdrop-blur-sm transition-shadow duration-300 ${
                    hovered ? "shadow-[0_10px_40px_rgba(99,102,241,0.12)]" : ""
                  }`}
                >
                  <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${p.gradient}`}>
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{p.tagline}</p>

                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.features.map((f, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-full border ${
                          hovered
                            ? `bg-gradient-to-r ${p.gradient} bg-opacity-10 border-opacity-40 text-white`
                            : "bg-transparent border-gray-700 text-gray-300"
                        }`}
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  {/* stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(p.stats).map(([k, v]) => (
                      <div key={k} className="text-sm">
                        <div className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${p.gradient}`}>
                          {v}
                        </div>
                        <div className="text-xs uppercase text-gray-500 tracking-wider mt-1">{k}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 ${hovered ? "" : ""}`}
                      
                    >
                      <span className={`inline-block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r ${p.gradient} text-white`}>Learn more</span>
                    </button>

                    <button
                      type="button"
                      className="px-4 py-3 rounded-lg border border-gray-700 text-sm text-violet-200 font-semibold hover:bg-gray-800/40 transition"
                      aria-label={`Try demo for ${p.name}`}
                    >
                      Try demo
                    </button>
                  </div>
                </div>
              </div>

              {/* thin separator */}
              {i < products.length - 1 && (
                <div className="mt-10 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
              )}
            </section>
          );
        })}
      </div>

      {/* small keyframes + helper styles */}
      
    </div>
  );
}
