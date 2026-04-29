import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { social } from "@/lib/data";

const links = [
  { href: social.linkedin, src: "/img/linkedin.png", label: "LinkedIn" },
  { href: social.github, src: "/img/github.png", label: "GitHub" },
  { href: social.whatsapp, src: "/img/whatsapp.png", label: "WhatsApp" },
  { href: social.instagram, src: "/img/instagram.png", label: "Instagram" },
  { href: social.twitter, src: "/img/twitter.png", label: "X / Twitter" },
];

export default function Social() {
  return (
    <section className="bg-ink w-full pt-16 pb-16">
      <SectionHeading eyebrow="Stay in Touch" title="Join Me Online" />

      <div className="mt-8 w-full flex items-center justify-center flex-wrap gap-3 md:gap-5 px-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="bg-surface w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center transition-colors hover:bg-black border border-transparent hover:border-white/30"
          >
            <Image src={l.src} alt={l.label} width={30} height={30} />
          </a>
        ))}
      </div>
    </section>
  );
}
