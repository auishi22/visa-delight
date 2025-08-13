import React from "react";
import Image from "next/image";
import {
  Presentation,
  Globe2,
  Sparkles,
  Handshake,
  Settings,
  FileCheck2,
} from "lucide-react";

const ITEMS = [
  {
    icon: Presentation,
    title: "WORK EXPERIENCE",
    desc: "20 years of work experience in issues connected with RF migration legislation.",
  },
  {
    icon: Globe2,
    title: "NARROW SPECIALIZATION",
    desc: "Main direction of work – non-CIS foreign nationals and practice of their legalization in the RF.",
  },
  {
    icon: Sparkles,
    title: "COMPETENCE",
    desc: "We are aware of all innovations, connected with documentation processing for foreign nationals.",
  },
  {
    icon: Handshake,
    title: "CLIENT ORIENTATION",
    desc: "We settle all matters, saving clients’ strength and time.",
  },
  {
    icon: Settings,
    title: "ADDITIONAL SERVICES",
    desc: "We render a wide range of additional services, which make the working process easier.",
  },
  {
    icon: FileCheck2,
    title: "OWN COURIER SERVICE",
    desc: "We render delivery of any documents to and from the client.",
  },
];

export default function Advantages() {
  return (
    <section className="relative isolate" data-aos="fade-up">
      {/* Background image */}
      <div className="relative h-[780px] w-full">
        <Image
          src="/bg-4.jpg"
          alt=""
          fill
          priority
          className="object-container"
        />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-7xl px-8 py-16 md:py-24 text-center text-white">
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-wide">
              OUR ADVANTAGES
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-24 bg-[#c7b6ea]" />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
              {ITEMS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  data-aos-offset="80"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f0c54d]">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm md:text-xl text-white/85 text-center max-w-[360px]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
