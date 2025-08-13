"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const LOGOS = [
  { src: "/logo-castorama.png", alt: "Castorama" },
  { src: "/maersk.png", alt: "Maersk" },
  { src: "/mondelez.png", alt: "Mondelez" },
  { src: "/rockwool.png", alt: "Rockwool" },
  { src: "/abb.png", alt: "ABB" },
  { src: "/air-liquide.png", alt: "Air Liquide" },
  { src: "/ikea.png", alt: "IKEA" },
  { src: "/hyundai.png", alt: "Hyundai" },
  { src: "/kia.png", alt: "KIA" },
  { src: "/whirlpool-corporation-logo.png", alt: "Whirlpool" },
  { src: "/schneider.png", alt: "Schneider" },
  { src: "/basf.png", alt: "BASF" },
];

export default function Trusted() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div data-aos="fade-up">
      <section className="relative overflow-visible py-14 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/bg-5.jpg" alt="" fill priority className="object-cover" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide">
          WE ARE TRUSTED
        </h2>
        <div className="mx-auto mt-3 h-[5px] w-24 rounded bg-[#c7b6ea]" />

        {/* Logo slider */}
        <div className="relative mt-10">
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            className="w-full overflow-visible"
          >
            <CarouselContent className="-ml-6">
              {LOGOS.map((l, i) => (
                <CarouselItem
                  key={i}
                  className="pl-6 basis-1/2 sm:basis-1/3 md:basis-1/3 "
                >
                  <div className="h-28 md:h-44  bg-white rounded-sm border shadow flex items-center justify-center px-6">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      width={320}
                      height={80}
                      className="object-contain w-96 h-12 md:h-16"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows outside */}
            <CarouselPrevious className="-left-10 md:-left-16 top-1/2 -translate-y-1/2 h-10 w-10 z-20 bg-transparent border-0 text-gray-700 hover:bg-transparent" />
            <CarouselNext className="-right-10 md:-right-16 top-1/2 -translate-y-1/2 h-10 w-10 z-20 bg-transparent border-0 text-gray-700 hover:bg-transparent" />
          </Carousel>
        </div>
        
      </div>
    </section>
     <section className="bg-white py-10 md:py-16">
      <div className="mx-auto  max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        {/* left: date + link */}
        <div>
          <p className="text-xl font-semibold text-[#a593d6]">14.02.2023</p>
          <Link
            href='/'
            className="mt-2 inline-block text-2xl font-bold text-[#0a5aa8] hover:underline"
          >
            Our Telegram-channel
          </Link>
        </div>

        {/* right: outlined button */}
        <div className="pt-10 flex justify-center">
          <Link
          href='/'
          className="inline-flex h-12 items-center justify-center px-14 py-8
                     border-4 border-[#c7b6ea] uppercase text-xl font-extrabold tracking-wide
                     text-black hover:bg-[#f7f3ff] transition-colors"
        >
          ALl News
        </Link>
        </div>
      </div>
    </section>
    </div>
  );
}
