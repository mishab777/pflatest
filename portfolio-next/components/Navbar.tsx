"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, Linkedin } from "lucide-react";
import { personal, navigation, social } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      <nav className="h-20 w-full bg-ink flex items-center justify-between md:justify-evenly px-4">
        <Link href="#top" className="flex items-center">
          <Image
            src={personal.logo}
            alt={`${personal.shortName} logo`}
            width={70}
            height={70}
            className="h-[70px] w-[70px] object-cover rounded"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/85 hover:text-white text-base transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Open menu"
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/60 md:hidden transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-surface md:hidden transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: "url(/img/offcanvas-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full w-full bg-black/60 p-6 flex flex-col">
          <div className="flex justify-end">
            <button
              aria-label="Close menu"
              className="text-white"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          <ul className="mt-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 text-white">
            <a href={`tel:${personal.primaryPhone}`} className="flex items-center gap-2">
              <Phone size={18} /> {personal.primaryPhone}
            </a>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2">
              <Mail size={18} /> {personal.email}
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
