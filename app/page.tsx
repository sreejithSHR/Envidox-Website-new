"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div ref={containerRef} className="min-h-screen flex items-center justify-center w-full">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-7xl mx-auto px-4 w-full"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <div className="inline-block max-w-sm lg:max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className={title({ size: "lg" })}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-white">
                    NEXT
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className={title({ size: "lg" })}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-glow">
                    GENERATION
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h1 className={title({ size: "lg" })}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-white">
                    INTERFACE
                  </span>
                </h1>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-normal text-cyan-400 py-4 text-lg"
              >
                Experience the future of web design with cutting-edge technology
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-3 mt-6 justify-center lg:justify-start"
            >
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.links.docs}
              >
                <span className="font-bold">ENTER SYSTEM</span>
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  className: "border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400/10",
                })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
                GITHUB
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full max-w-lg relative z-10"
          >
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[500px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="col-span-4 row-span-3 bg-gradient-to-br from-cyber-blue-500 to-cyber-blue-700 rounded-2xl p-6 relative overflow-hidden shadow-neon-blue retro-card border-2 border-cyber-blue-400"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 animate-pulse"></div>
                <div className="relative z-10">
                  <span className="inline-block cyber-panel text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400">
                    DESIGN
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="col-span-2 row-span-2 bg-gradient-to-br from-cyan-400 to-cyber-blue-600 rounded-full p-4 relative overflow-hidden shadow-neon-cyan retro-card border-2 border-cyan-300 flex items-center justify-center animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
                <span className="relative z-10 cyber-panel text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg border border-cyan-300">
                  USER
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="col-span-2 row-span-4 bg-gradient-to-br from-cyber-blue-600 to-retro-blue-800 rounded-2xl p-4 relative overflow-hidden shadow-neon-blue retro-card border-2 border-cyber-blue-500"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="inline-block cyber-panel text-white px-3 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400 w-fit">
                    CODE
                  </span>
                  <span className="inline-block bg-cyan-400/90 backdrop-blur-sm text-retro-blue-900 px-3 py-2 rounded-lg text-xs font-bold shadow-neon-cyan w-fit border border-cyan-300">
                    FAST
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="col-span-4 row-span-3 bg-gradient-to-br from-retro-blue-600 to-cyber-blue-800 rounded-2xl p-6 relative overflow-hidden shadow-neon-blue retro-card border-2 border-retro-blue-400"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-40 animate-pulse"></div>
                <div className="relative z-10 flex gap-2 flex-wrap">
                  <span className="inline-block cyber-panel text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg border border-cyan-400">
                    ANALYTICS
                  </span>
                  <span className="inline-block bg-cyan-400/90 backdrop-blur-sm text-retro-blue-900 px-4 py-2 rounded-lg text-sm font-bold shadow-neon-cyan border border-cyan-300">
                    MODERN
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TrustedBy />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutUsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <OrbitingCircles />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 lg:mt-60 flex-col justify-center items-center mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-4xl font-semibold flex- justify-center items-center mx-auto text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
            FEATURES
          </span>
        </motion.h1>
        <FeaturesBento />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProductsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LightBg />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Integrations />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <LastButNotLeast />
      </motion.div>
    </section>
  );
}
