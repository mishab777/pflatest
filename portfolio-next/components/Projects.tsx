"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink w-full pt-16 pb-16">
      <SectionHeading eyebrow="Browse My Recent" title="Projects" />

      <div className="container mx-auto mt-8 px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface h-[350px] p-4 flex flex-col items-center justify-evenly transition-transform duration-300 hover:scale-[1.02] hover:bg-black border border-transparent hover:border-white/20"
            >
              <div className="relative w-[70%] h-[170px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 70vw, 250px"
                />
              </div>
              <span className="text-white uppercase text-center">
                {p.title}
              </span>
              <div className="flex items-center gap-3">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white rounded-full h-10 w-[150px] text-white flex items-center justify-center text-sm uppercase tracking-wide transition-colors hover:bg-white hover:text-black"
                  >
                    View Live
                  </a>
                )}
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white rounded-full h-10 w-[110px] text-white flex items-center justify-center text-sm uppercase tracking-wide transition-colors hover:bg-white hover:text-black"
                  >
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
