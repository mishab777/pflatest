"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  const all = skills[0]?.items ?? [];

  return (
    <section id="skills" className="bg-ink w-full pt-12 pb-4">
      <SectionHeading eyebrow="Explore My" title="Software Skills" />

      <div className="container mx-auto mt-8 px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {all.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface h-[200px] p-4 flex flex-col items-center justify-evenly transition-colors hover:bg-black border border-transparent hover:border-white/20"
            >
              <Image src={skill.icon} alt={skill.name} width={40} height={40} />
              <span className="text-white uppercase text-base">
                {skill.name}
              </span>
              <div className="bg-white w-[80%] h-[15px] rounded-[10px] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-bar h-full rounded-[10px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
