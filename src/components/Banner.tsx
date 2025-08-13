"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Slide } from "@/lib/types";



const SLIDES: Slide[] = [
  {
    image: "/bg.jpg",
    title: "WORK PERMIT",
    subtitle: "in the RF",
    description: "We render assistance in processing all necessary documents",
    cta: { text: "READ MORE", href: "/work-permit" },
    accent: "#7c337c",
  },
  {
    image: "/bg-2.jpg",
    title: "WORKING VISA",
    subtitle: "to the RF",
    description:
      "In order to carry out labor activities foreign nationals must have working visas",
    cta: { text: "READ MORE", href: "/working-visa" },
    accent: "#7c337c",
  },
  {
    image: "/bg-3.jpg",
    title: "SPECIALIST",
    subtitle: "highly skilled",
    description:
      "A special status for foreign specialists with a salary not less than 167000 rubles per month",
    cta: { text: "READ MORE", href: "/hqs" },
    accent: "#7c337c",
  },
];

export default function Banner() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [api, setApi] = React.useState<CarouselApi>();
  const [index, setIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setIndex(api.selectedScrollSnap());
    api.on("select", () => setIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {SLIDES.map((s, i) => (
            <CarouselItem key={i} className="p-0">
              {/* each slide has fixed height box */}
              <div className="relative w-full h-[520px] md:h-[640px]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />

                {/* center card with per-slide content */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-white/50 backdrop-blur-xs border-14 border-white shadow-2xl">
                    <div className="border border-gray-200 p-8 md:p-12 w-[1000px] text-center">
                      <h2 className="text-4xl md:text-7xl  tracking-tight">
                        {s.title}
                      </h2>
                      {s.subtitle && (
                        <p className="mt-2 text-2xl md:text-4xl text-gray-700">
                          {s.subtitle}
                        </p>
                      )}
                      <div
                        className="mx-auto mt-4 h-1 w-24"
                        style={{ backgroundColor: s.accent ?? "#b090ff" }}
                      />
                      {s.description && (
                        <p className="mx-auto mt-6 w-[720px] text-lg md:text-2xl font-medium text-gray-800">
                          {s.description}
                        </p>
                      )}
                      {s.cta && (
                        <Link href={s.cta.href}>
                          <Button className="mt-8 px-10 py-8 text-base md:text-xl bg-[#7c337c]">
                            {s.cta.text}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* arrows */}
        <CarouselPrevious className="left-10 top-1/2 -translate-y-1/2 h-16 w-16 border-2 border-white/70 bg-white/20 hover:bg-white/40 text-white" />
        <CarouselNext className="right-10 top-1/2 -translate-y-1/2 h-16 w-16 border-2 border-white/70 bg-white/20 hover:bg-white/40 text-white" />
      </Carousel>

      {/* bottom bars */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-sm transition-all ${
              i === index ? "w-16 bg-[#b090ff]" : "w-12 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
