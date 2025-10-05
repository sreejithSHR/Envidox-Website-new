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
            <h1 className={title({ color: "cyan", size: "lg" })}>
              Beautiful&nbsp;
            </h1>
            <br />
            <h1 className={title({ size: "lg" })}>Websites using Easy NextUI</h1>
            <h2 className="font-normal text-cyber-blue-600 dark:text-cyber-blue-400 py-2">
              Beautiful, fast and modern retro-futuristic UI template.
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
            <div className="col-span-4 row-span-3 bg-gradient-to-br from-cyber-blue-500 to-cyber-blue-700 rounded-2xl p-6 relative overflow-hidden shadow-neon-blue retro-card border-2 border-cyber-blue-400">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative z-10">
                <span className="inline-block cyber-panel text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400">
                  DESIGN
                </span>
              </div>
            </div>

            {/* Small Round Cutout - Top Right */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-cyan-400 to-cyber-blue-600 rounded-full p-4 relative overflow-hidden shadow-neon-cyan retro-card border-2 border-cyan-300 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
              <span className="relative z-10 cyber-panel text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg border border-cyan-300">
                USER
              </span>
            </div>

            {/* Tall Card - Right Side */}
            <div className="col-span-2 row-span-4 bg-gradient-to-br from-cyber-blue-600 to-retro-blue-800 rounded-2xl p-4 relative overflow-hidden shadow-neon-blue retro-card border-2 border-cyber-blue-500">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="inline-block cyber-panel text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400 w-fit">
                  CODE
                </span>
                <span className="inline-block bg-cyan-400/90 backdrop-blur-sm text-retro-blue-900 px-3 py-2 rounded-lg text-xs font-bold shadow-neon-cyan w-fit border border-cyan-300">
                  FAST
                </span>
              </div>
            </div>

            {/* Wide Card - Bottom Left */}
            <div className="col-span-4 row-span-3 bg-gradient-to-br from-retro-blue-600 to-cyber-blue-800 rounded-2xl p-6 relative overflow-hidden shadow-neon-blue retro-card border-2 border-retro-blue-400">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-40"></div>
              <div className="relative z-10 flex gap-2 flex-wrap">
                <span className="inline-block cyber-panel text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400">
                  ANALYTICS
                </span>
                <span className="inline-block bg-cyan-400/90 backdrop-blur-sm text-retro-blue-900 px-4 py-2 rounded-lg text-sm font-bold shadow-neon-cyan border border-cyan-300">
                  MODERN
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
