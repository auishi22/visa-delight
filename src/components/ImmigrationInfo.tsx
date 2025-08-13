"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import React from "react";
import "aos/dist/aos.css";

export default function ImmigrationInfo() {
 
  return (
    <section className="relative overflow-hidden bg-[#f4f5f8] py-16 md:py-24"  data-aos="fade-up">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-6xl font-extrabold tracking-tight">
          IMMIGRATION TO RUSSIA{" "}
          <span className="font-extrabold text-[#7a5dc7]">— IT&apos;S SIMPLE!</span>
        </h2>
        <div className="mx-auto mt-4 h-[3px] w-24 rounded bg-[#c7b6ea]" />

        {/* Sub heading */}
        <p className="mt-8 text-center text-lg md:text-2xl font-bold text-black">
          “Visa-Delight” has more than twenty years experience in the field of
          migration legislation.
        </p>

        {/* Content */}
        <div className="relative mt-10">
          {/* Map (decorative) */}
          <Image
            src="/map.png"
            alt=""
            width={460}
            height={300}
            priority
            className="pointer-events-none select-none absolute -left-24 -bottom- hidden md:block"
          />

          {/* Bullet points */}
          <div className="md:ml-[420px] space-y-6 text-gray-900">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#b95675] ring-2 ring-pink-200">
                <Check className="h-4 w-8 text-white" />
              </span>
              <p className="text-base md:text-2xl">
                Our company renders assistance in processing permission to
                employ foreign nationals for companies and work permits for
                foreign staff of these companies.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#b95675] ring-2 ring-pink-200">
                <Check className="h-4 w-8 text-white" />
              </span>
              <p className="text-base md:text-2xl">
                We also deal with all matters, connected with the legal stay of
                foreign nationals in the RF. Beginning with an invitation to
                the RF for a foreign national and ending with obtainment of RF
                citizenship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
