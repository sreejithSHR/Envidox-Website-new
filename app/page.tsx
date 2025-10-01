import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Badge from "@/components/chip";
import TrustedBy from "@/components/trusted";
import OrbitingCircles from "@/components/prototype-img";
import AboutUsSection from "@/components/About";
import ServicesSection from "@/components/servicesection";
import ProductsSection from "@/components/Products";
import FeaturesBento from "@/components/feature-bento";
import LightBg from "@/components/light-bg";
import Integrations from "@/components/integrations";
import { LastButNotLeast } from "@/components/last-but-not-least";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
        {/* Left Side - Text and Buttons */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block max-w-sm lg:max-w-2xl">
            <h1 className={title({ size: "lg" })}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet", size: "lg" })}>
              Beautiful&nbsp;
            </h1>
            <br />
            <h1 className={title({ size: "lg" })}>Websites using Easy NextUI</h1>
            <h2 className="font-normal text-gray-500 py-2">
              Beautiful, fast and modern Easy UI template.
            </h2>
          </div>
          <div className="flex gap-3 mt-6 justify-center lg:justify-start">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </div>

        {/* Right Side - Bento Grid */}
        <div className="flex-1 w-full max-w-lg relative">
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[500px]">
            {/* Large Card - Top Left */}
            <div className="col-span-4 row-span-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 relative overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
                alt="Design"
                className="w-full h-full object-cover absolute inset-0 opacity-50"
              />
              <div className="relative z-10">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🎨 Design
                </span>
              </div>
            </div>

            {/* Small Round Cutout - Top Right */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full p-4 relative overflow-hidden shadow-xl flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80"
                alt="User"
                className="w-full h-full object-cover absolute inset-0 opacity-40"
              />
              <span className="relative z-10 bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                👤 Profile
              </span>
            </div>

            {/* Tall Card - Right Side */}
            <div className="col-span-2 row-span-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-4 relative overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80"
                alt="Code"
                className="w-full h-full object-cover absolute inset-0 opacity-30"
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-2 rounded-full text-sm font-semibold shadow-lg w-fit">
                  💻 Code
                </span>
                <span className="inline-block bg-white/90 backdrop-blur-sm text-orange-700 px-3 py-2 rounded-full text-xs font-semibold shadow-lg w-fit">
                  ⚡ Fast
                </span>
              </div>
            </div>

            {/* Wide Card - Bottom Left */}
            <div className="col-span-4 row-span-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 relative overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                alt="Analytics"
                className="w-full h-full object-cover absolute inset-0 opacity-40"
              />
              <div className="relative z-10 flex gap-2 flex-wrap">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  📊 Analytics
                </span>
                <span className="inline-block bg-white/90 backdrop-blur-sm text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ✨ Modern
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustedBy />
      
      <AboutUsSection />
      <OrbitingCircles />
      <ServicesSection />
      <div className="mt-20 lg:mt-60 flex-col justify-center items-center mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center">
          Features
        </h1>
        <FeaturesBento />
        
      </div>
      <ProductsSection />
      <LightBg />
      <Integrations />
      <LastButNotLeast />
    </section>
  );
}
