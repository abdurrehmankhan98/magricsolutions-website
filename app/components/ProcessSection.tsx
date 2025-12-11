'use client';

import { motion } from 'framer-motion';
import { ProcessDecorativeElements } from './ProcessDecorativeElements';
import { ConnectionLines } from './ConnectionLines';

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Clarity & Website Strategy",
    description:
      "We start with a strategy call to understand your offers, audience and goals. Then we map out your pages, key sections and the actions you want visitors to take on your personal brand website.",
  },
  {
    number: "02",
    title: "Design & Build Your Site",
    description:
      "We turn the strategy into a clean, modern design and build your website in a responsive, fast stack. Every section has a clear job: build trust and guide visitors toward booking or buying.",
  },
  {
    number: "03",
    title: "Launch, SEO & Refinements",
    description:
      "We launch your site, handle core SEO setup, test performance and make small refinements based on your feedback—so you go live with a website that feels ready, not half-done.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4FFE0] py-20 md:py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-[-140px] left-1/2 h-[260px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.16] blur-[180px]" />

      {/* Decorative dots and squiggles */}
      <ProcessDecorativeElements />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/70 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-slate-600">
            How Your Website Project Works
          </p>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading">
            A Simple 3-Step Process
            <span className="bg-amber-300 px-2 rounded-xl ml-2 text-gray-900">
              From Idea to Live Site
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-slate-600 leading-relaxed">
            No confusing timelines or random tasks. We follow the same clear process
            for every personal brand website so you always know exactly what&apos;s
            happening and what&apos;s next.
          </p>
        </div>

        {/* Steps with connection line */}
        <div className="relative">
          <ConnectionLines />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative flex flex-col rounded-2xl bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)] hover:ring-[#BBF52D]"
              >
                {/* Step Number Badge */}
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F4FFE0] text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                  {step.number}
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900 md:text-2xl">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
