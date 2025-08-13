"use client";

import Image from "next/image";
import { HelpCircle } from "lucide-react";
import React from "react";

export default function Support() {
  return (
    <section className="relative overflow-hidden" data-aos="fade-up">
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="/bg_q.jpg" alt="" fill priority className="object-cover" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-white">
        {/* Heading */}
        <div className="mb-10 flex justify-center items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f0c54d]">
            <HelpCircle className="h-5 w-5 text-[#f0c54d]" />
          </span>
          <h2 className="text-3xl  md:text-5xl font-extrabold tracking-wide">
            ASK A QUESTION
          </h2>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left column */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="h-16 w-full rounded-sm bg-white px-4 text-gray-900 placeholder:text-gray-500 shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="h-16 w-full rounded-sm bg-white px-4 text-gray-900 placeholder:text-gray-500 shadow-sm"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-16 w-full rounded-sm bg-white px-4 text-gray-900 placeholder:text-gray-500 shadow-sm"
            />
          </div>

          {/* Right column */}
          <div>
            <textarea
              placeholder="Message"
              rows={8}
              className="w-full h-full rounded-sm bg-white p-4 text-gray-900 placeholder:text-gray-500 shadow-sm "
              required
            />
          </div>

          {/* CTA centered under both columns */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="h-12 px-10 bg-[#f0c54d] text-xl text-gray-800 font-extrabold uppercase tracking-wide shadow hover:brightness-95"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>

        {/* Consent line */}
        <p className="mt-4 text-xs md:text-xl text-white">
          Submitting the request, you confirm{" "}
          <a href="#" className=" text-gray-400 hover:underline hover:text-white">
            “Consent to the processing of personal data”
          </a>
          .
        </p>
      </div>
    </section>
  );
}
