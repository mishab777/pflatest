import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { personal, contactConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink w-full pt-16 pb-16">
      <SectionHeading eyebrow="Get In Touch" title="Contact Me" />

      <div className="container mx-auto mt-8 px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 p-2">
              <Image
                src={contactConfig.addressIcon}
                alt=""
                width={30}
                height={30}
              />
              <p className="text-white">
                {personal.location.split(", ").slice(0, 3).join(", ")}
                <br />
                {personal.location.split(", ").slice(3).join(", ")}
              </p>
            </div>

            <a href={`tel:${personal.primaryPhone}`} className="block">
              <div className="flex items-center gap-4 p-2">
                <Image
                  src={contactConfig.phoneIcon}
                  alt=""
                  width={30}
                  height={30}
                />
                <p className="text-white">
                  {personal.phones.map((p) => (
                    <span key={p} className="block">
                      {p}
                    </span>
                  ))}
                </p>
              </div>
            </a>

            <a href={`mailto:${personal.email}`} className="block">
              <div className="flex items-center gap-4 p-2">
                <Image
                  src={contactConfig.mailIcon}
                  alt=""
                  width={30}
                  height={30}
                />
                <p className="text-white break-all">{personal.email}</p>
              </div>
            </a>
          </div>

          <div className="bg-surface p-6">
            <h2 className="text-white text-3xl mb-6 mt-2">Reach Out to Me</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
