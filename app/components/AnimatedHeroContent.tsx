"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const AnimatedHeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="text-center flex flex-col items-center gap-4 md:gap-5 lg:gap-6"
    >
      {/* Niche badge */}
      <div className="mx-auto inline-flex items-center rounded-full bg-amber-300 px-4 py-1 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
        Top Web & App Development Agency
      </div>

      {/* Main H1 */}
      <h1 className="mx-auto max-w-6xl text-balance text-4xl md:text-6xl lg:text-65xl font-extrabold tracking-tight leading-[1.05] text-slate-900 font-fjallaOne">
        CUSTOM WEB & APP DEVELOPMENT
        <br />
        <span className="text-amber-400">THAT DRIVES RESULTS.</span>
      </h1>


      {/* Subtitle */}
      <p className="mx-auto max-w-4xl text-balance text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
        <span className="px-1.5 py-0.5 bg-amber-300 font-semibold text-slate-900 rounded-sm">
          MagricSolutions
        </span>{" "}
        delivers high-performance, SEO-optimized websites and modern mobile apps. As a leading web development agency, we build solutions that power business growth.
      </p>

      {/* Primary CTA */}
      <WhatsAppButton className="mt-2" />
      {/* Micro note */}
      <p className="text-[11px] md:text-xs text-slate-500 mt-1">
        Schedule a free consultation to discuss your project.
      </p>
    </motion.div>
  );
};

export default AnimatedHeroContent;