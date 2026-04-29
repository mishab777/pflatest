"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-ink w-full px-4 md:px-6 pt-6 pb-12"
    >
      <Card className="w-full h-[80vh] min-h-[520px] bg-black/[0.96] relative overflow-hidden border-white/10 rounded-none md:rounded-lg">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col md:flex-row h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-6 md:p-10 relative z-10 flex flex-col justify-center"
          >
            <p className="text-neutral-300 text-sm md:text-base">
              {personal.tagline}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-2">
              {personal.name}
            </h1>
            <h3 className="mt-3 text-neutral-300 uppercase tracking-wider text-base md:text-lg">
              {personal.title}
            </h3>
            <p className="mt-4 text-neutral-400 max-w-lg leading-relaxed">
              {personal.bio}
            </p>

            <div className="mt-8 flex flex-row items-center gap-4">
              <a
                href={personal.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[50px] w-[140px] rounded-full border-2 border-white text-white text-[15px] flex items-center justify-center transition-colors hover:bg-white hover:text-black"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="h-[50px] w-[140px] rounded-full bg-white text-black text-[15px] flex items-center justify-center transition-colors hover:bg-transparent hover:text-white hover:ring-2 hover:ring-white"
              >
                Contact Info
              </a>
            </div>
          </motion.div>

          <div className="flex-1 relative min-h-[260px] md:min-h-0">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
