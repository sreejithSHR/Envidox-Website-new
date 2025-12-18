import React from "react";
import {
  ArrowRight,
  Play,
  Zap,
  Eye,
  Globe,
  Sparkles,
  Users,
  Smartphone,
} from "lucide-react";

const WorldOf3D = () => {
  const bentoCards = [
    {
      type: "large",
      title: "Augmented Reality",
      subtitle: "Bring digital magic to the real world",
      description:
        "Overlay interactive 3D content onto physical spaces using your smartphone or AR glasses.",
      image: "https://cdn.jsdelivr.net/gh/sreejithSHR/solanki-assets@main/ChatGPT_Image_Dec_18__2025__04_12_30_PM-removebg-preview.png",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
      features: ["Real-time tracking", "Interactive objects", "Multi-user"],
      cta: "View AR Demo",
      stats: "87% higher engagement",
    },
    {
      type: "medium",
      title: "Virtual Reality",
      subtitle: "Fully immersive digital worlds",
      description:
        "Step into completely virtual environments for training, entertainment, and collaboration.",
      image: "https://cdn.jsdelivr.net/gh/sreejithSHR/solanki-assets@main/Untitled%20design%20(1).png",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500",
      features: ["6DOF movement", "Spatial audio"],
      cta: "Explore VR",
      stats: "94% user satisfaction",
    },
    {
      type: "medium",
      title: "WebXR",
      subtitle: "Instant experiences in your browser",
      description:
        "Access immersive content directly through web browsers — no downloads required.",
      image: "/showcase/webxr-demo.jpg",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
      cta: "Try WebXR",
      stats: "Instant access",
    },
    {
      type: "small",
      title: "50+ Projects",
      subtitle: "Successfully delivered",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      background: "bg-gradient-to-br from-orange-50 to-red-50",
      cta: "View Portfolio",
    },
    {
      type: "small",
      title: "200+ satisfied Customers",
      subtitle: "100% gaurentee",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500",
      background: "bg-gradient-to-br from-indigo-50 to-purple-50",
      cta: "See Testimonials",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full border shadow mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium">
              World of 3D & Immersive Tech
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-4">Step Into New Dimensions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of digital interaction with cutting-edge AR,
            VR, and WebXR solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6">
          {bentoCards.map((card, i) => (
            <BentoCard key={i} card={card} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition">
            Start Your Immersive Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ card }: any) => {
  const isPopup =
    card.title === "Augmented Reality" ||
    card.title === "Virtual Reality";

  const gridSpan =
    card.type === "large"
      ? "md:col-span-4 md:row-span-2"
      : card.type === "medium"
      ? "md:col-span-2 md:row-span-2"
      : "md:col-span-2";

  return (
    <div
      className={`
        group relative bg-white rounded-3xl border border-gray-200
        overflow-visible transition-all duration-500 hover:shadow-2xl
        ${gridSpan}
        ${isPopup ? "pt-36" : ""}
        ${card.background || ""}
      `}
    >
      {/* POPUP IMAGE (AR / VR ONLY) */}
      {isPopup && card.image && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
          <div
            className="
              relative w-[320px] rounded-2xl overflow-hidden
              shadow-[0_40px_90px_rgba(0,0,0,0.35)]
              transition-all duration-700
              group-hover:-translate-y-6
              group-hover:scale-105
            "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto object-cover"
            />

            {/* Holographic glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-400/20" />

            {/* Play button for AR */}
            {card.type === "large" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-black ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow`}
          >
            <card.icon className="w-6 h-6 text-white" />
          </div>

          <div>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.subtitle}</p>
          </div>
        </div>

        {card.stats && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Zap className="w-4 h-4 text-yellow-500" />
            {card.stats}
          </div>
        )}

        {card.description && (
          <p className="text-gray-600 mb-4">{card.description}</p>
        )}

        {card.features && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {card.features.map((f: string, i: number) => (
              <div key={i} className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                {f}
              </div>
            ))}
          </div>
        )}

        <button
          className={`
            w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2
            transition
            ${
              card.type === "small"
                ? "bg-white border hover:bg-gray-50"
                : "bg-gray-900 text-white hover:bg-gray-800"
            }
          `}
        >
          {card.cta}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Subtle AR glow */}
      {isPopup && (
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
      )}
    </div>
  );
};

export default WorldOf3D;
