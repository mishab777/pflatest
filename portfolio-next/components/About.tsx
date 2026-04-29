"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personal, experience, education } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-ink py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative">
        <SectionHeading eyebrow="Get To Know More" title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto mt-14 max-w-6xl px-4"
        >
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="relative mx-auto aspect-square w-[260px] sm:w-[320px] md:w-full md:max-w-[380px]">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-2xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-surface shadow-2xl shadow-black/40">
                  <Image
                    src={personal.aboutImage}
                    alt={`${personal.name} portrait`}
                    fill
                    className="object-cover transition-transform duration-700 will-change-transform hover:scale-105"
                    sizes="(max-width: 768px) 80vw, 380px"
                    priority={false}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl border border-white/10 bg-surface/80 backdrop-blur md:block" />
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {experience.map((exp) => (
                  <StatCard
                    key={`${exp.role}-${exp.company}`}
                    icon={exp.icon}
                    title="Experience"
                    primary={`${exp.duration} In Frontend Development`}
                    secondary={`Working At ${exp.company}`}
                  />
                ))}
                {education.map((edu) => (
                  <StatCard
                    key={edu.degree}
                    icon={edu.icon}
                    title="Education"
                    primary={edu.degree}
                    secondary={`${edu.institution} ${edu.year}`}
                  />
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-surface/70 p-6 backdrop-blur transition-colors hover:border-white/20 sm:p-8">
                <p className="text-[15px] leading-relaxed text-white/85 md:text-base">
                  {personal.bio}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type StatCardProps = {
  icon: string;
  title: string;
  primary: string;
  secondary: string;
};

function StatCard({ icon, title, primary, secondary }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-surface">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
          <Image src={icon} alt="" width={28} height={28} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm leading-snug text-white/80">{primary}</p>
          <p className="mt-0.5 text-sm leading-snug text-white/60">
            {secondary}
          </p>
        </div>
      </div>
    </div>
  );
}
