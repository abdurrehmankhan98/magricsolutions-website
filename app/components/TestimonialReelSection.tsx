"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { src: "/websites/docotor medicare-.webp", alt: "Custom web development for a Medicare doctor" },
  { src: "/websites/site2.webp", alt: "Modern website design for a business client" },
  { src: "/websites/resturant web24.webp", alt: "Restaurant website design with online ordering" },
  { src: "/websites/site4.webp", alt: "SEO-optimized landing page for a tech startup" },
  { src: "/websites/site5.webp", alt: "High-conversion business website development" },
  { src: "/websites/site6.webp", alt: "Professional website design for a consultant" },
  { src: "/websites/site7.webp", alt: "Portfolio website for a creative professional" },
];

export default function TestimonialReelSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FFE9] py-20">
      {/* soft lime glow */}
      <div className="pointer-events-none absolute top-[-140px] left-1/2 h-[260px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.18] blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mb-12 text-center">
          <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#BBF52D]/60 shadow-2xl bg-amber-300 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-800">
            Client Websites
          </p>

          <h2 className="mb-4 text-balance text-3xl font-heading font-extrabold tracking-tight text-slate-900 md:text-5xl">
            What Our Clients Are{" "}
            <span className="bg-amber-300 text-black px-2">Getting</span>
          </h2>


          <p className="mx-auto max-w-xl text-base text-slate-600 md:text-lg">
            A snapshot of the brands, landing pages and websites we’ve helped
            level up with strategy, design and development.
          </p>
        </div>

        {/* auto-scroll strip */}
        <div className="relative overflow-hidden py-10">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="min-w-[220px] md:min-w-[260px] lg:min-w-[300px] h-[420px] rounded-2xl overflow-hidden bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)] hover:ring-[#BBF52D]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* edge fades matching light theme */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7FFE9] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7FFE9] to-transparent" />
        </div>
      </div>
    </section>
  );
}
