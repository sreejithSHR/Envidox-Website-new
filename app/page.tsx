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

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div ref={containerRef} className="min-h-screen flex items-center justify-center w-full symmetric-container">
        <motion.div
          style={{ opacity, scale }}
          className="flex flex-col items-center justify-center gap-12 max-w-7xl mx-auto px-4 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center z-10"
          >
            <div className="inline-block max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className={`${title({ size: "lg" })} rainbow-text text-6xl lg:text-8xl font-black`}>
                  NEXT GENERATION
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h1 className={`${title({ size: "lg" })} text-5xl lg:text-7xl font-black mt-4`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-400 to-white">
                    INTERFACE DESIGN
                  </span>
                </h1>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-normal text-cyan-400 py-6 text-xl max-w-2xl mx-auto"
              >
                Experience symmetry, beauty, and innovation with rainbow-powered technology
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 mt-8 justify-center"
            >
              <Link
                isExternal
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                  className: "rainbow-border-static font-bold px-8 py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-rainbow-glow",
                })}
                href={siteConfig.links.docs}
              >
                EXPLORE NOW
              </Link>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                  className: "rainbow-border font-bold px-8 py-6 text-lg text-white hover:bg-white/10",
                })}
                href={siteConfig.links.github}
              >
                <GithubIcon size={24} />
                VIEW CODE
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-6xl relative z-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="lg:col-span-1 rainbow-gradient-bg rounded-3xl p-8 relative overflow-hidden shadow-rainbow-glow backdrop-blur-sm border rainbow-border-static h-80 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 mb-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">CREATIVE</h3>
                  <p className="text-gray-300">Unleash boundless imagination with vibrant colors</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="lg:col-span-1 rainbow-gradient-bg rounded-3xl p-8 relative overflow-hidden shadow-rainbow-glow backdrop-blur-sm border rainbow-border-static h-80 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 mb-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">BALANCED</h3>
                  <p className="text-gray-300">Perfect symmetry in every pixel and interaction</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="lg:col-span-1 rainbow-gradient-bg rounded-3xl p-8 relative overflow-hidden shadow-rainbow-glow backdrop-blur-sm border rainbow-border-static h-80 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">POWERFUL</h3>
                  <p className="text-gray-300">Advanced technology wrapped in beautiful design</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <motion.div
                whileHover={{ y: -10 }}
                className="rainbow-gradient-bg rounded-2xl p-6 backdrop-blur-sm border rainbow-border-static text-center"
              >
                <div className="text-4xl font-black rainbow-text mb-2">250K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="rainbow-gradient-bg rounded-2xl p-6 backdrop-blur-sm border rainbow-border-static text-center"
              >
                <div className="text-4xl font-black rainbow-text mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="rainbow-gradient-bg rounded-2xl p-6 backdrop-blur-sm border rainbow-border-static text-center"
              >
                <div className="text-4xl font-black rainbow-text mb-2">50+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="rainbow-gradient-bg rounded-2xl p-6 backdrop-blur-sm border rainbow-border-static text-center"
              >
                <div className="text-4xl font-black rainbow-text mb-2">4.9★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-96 h-96 opacity-20"
            style={{
              background: "conic-gradient(from 0deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0099ff, #9900ff, #ff00ff, #ff0000)",
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] opacity-20"
            style={{
              background: "conic-gradient(from 180deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0099ff, #9900ff, #ff00ff, #ff0000)",
              borderRadius: "50%",
              filter: "blur(80px)",
            }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <TrustedBy />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full symmetric-container"
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-center mb-16 rainbow-text"
          >
            SYMMETRIC DESIGN
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rainbow-gradient-bg rounded-3xl p-12 backdrop-blur-sm border rainbow-border-static"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Perfect Balance</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every element is carefully positioned to create visual harmony. Our symmetric approach ensures
                that your eyes naturally flow through the content, creating an effortless and beautiful experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rainbow-gradient-bg rounded-3xl p-12 backdrop-blur-sm border rainbow-border-static"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Rainbow Aesthetics</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Colors aren't just decoration—they're an integral part of the experience. The rainbow palette
                brings energy, vibrancy, and emotion to every interaction.
              </p>
            </motion.div>
          </div>
        </div>
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
        className="mt-20 lg:mt-40 w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-black text-center mb-16 rainbow-text"
        >
          AMAZING FEATURES
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
