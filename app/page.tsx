
"use client";

import { Target, Lightbulb, Send, ChevronUp, Check, ArrowLeft, ArrowRight, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import AnimatedHeroContent from './components/AnimatedHeroContent';
import { ProcessDecorativeElements } from './components/ProcessDecorativeElements';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from 'next/image';

import laptopAnimation from "@/public/lotties/3d ui laptop.json"
import brandAnimation from "@/public/lotties/Education  Animation.json";
import webdevAnimation from "@/public/lotties/webdev.json";
import copywritingAnimation from "@/public/lotties/Video Design.json";
import footerRocket from "@/public//lotties/Live chatbot.json";
import footerLaptop from "@/public/lotties/Loading rocket.json";
import { ConnectionLines } from './components/ConnectionLines';
import TestimonialReelSection from './components/TestimonialReelSection';
import DecorativeFeedbackElements from './components/DecorativeFeedbackElements';
import ReviewSection from './components/ReviewSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function Home() {
  return (
    <>
      {/* Hero Section */}

      <div className="min-h-screen relative overflow-hidden">
        <div className="relative overflow-hidden bg-[#F7FFE9]">
          {/* Soft radial glow */}
          <div className="pointer-events-none absolute top-[-120px] left-1/2 z-0 h-[380px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.12] blur-[180px]" />

          {/* Floating blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.45, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="pointer-events-none absolute -left-10 top-24 h-64 w-64 rounded-full bg-[#C6FF2B] blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            className="pointer-events-none absolute -bottom-10 right-12 h-80 w-80 rounded-full bg-[#9DE7FF] blur-[150px]"
          />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between px-6 py-6 md:px-10 md:py-10">
            {/* Top right CTA */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-auto"
            >
              <button className="flex items-center gap-3 rounded-full bg-amber-300 px-6 py-2.5 text-sm font-semibold text-black shadow-md transition-transform hover:scale-105 md:px-8 md:py-3 md:text-base">
                Internship
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>

            <div className="flex flex-1 flex-col items-center justify-center pt-10 pb-24 md:pb-10">
              {/* Testimonial pill */}

              <AnimatedHeroContent />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <TestimonialReelSection />
      <ServicesSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Working Process Section (New) */}
      <ProcessSection />

      {/* Pricing Section (New) */}
      <PricingSection />

      {/* Feedback Section (New) */}
      <ReviewSection />

      {/* Team Section (New) */}
      <FAQSection/>
      <ContactSection/>
      <TeamSection />

      {/* Footer Section (New) */}
      <FooterSection />
    </>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "01. Strategy & Brand Clarity",
      description:
        "We start with your story, audience and offer. Together we define your positioning, key pages and the actions you want visitors to take on your website.",
    },
    {
      title: "02. Design & Website Build",
      description:
        "We turn your strategy into a clean, modern personal brand website — with custom UI, clear messaging blocks and responsive development.",
    },
    {
      title: "03. Launch, SEO & Optimization",
      description:
        "We handle launch, basic SEO setup, performance passes and small refinements so your site loads fast and feels trustworthy from day one.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F4FFE0] py-20 md:py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[260px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.16] blur-[180px]" />

      {/* Dots – more subtle */}
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.35 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute left-10 top-24 hidden md:block"
      >
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-[#C6FF2B]"
              style={{ opacity: 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Wavy accent */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute right-16 top-32 hidden md:block"
      >
        <svg width="80" height="120" viewBox="0 0 80 120" className="text-[#BBF52D]">
          <path
            d="M40 10 Q60 30 40 50 Q20 70 40 90 Q60 110 40 110"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-block rounded-2xl bg-amber-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-800 shadow-yellow-300">
            How Your Website Comes Together
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading">
            One Personal Brand Website,
            <br className="hidden md:block" />
            Built in Three Clear Phases.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-2xl bg-white p-8 text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)] hover:ring-[#BBF52D]"
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900 md:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


function AboutUsSection() {
  return (
    <div className="min-h-screen relative overflow-hidden py-20 px-6 bg-[#F7FFE9]">
      {/* Decorative Dots - Left */}
      <div className="absolute top-40 left-20 opacity-30">
        <div className="grid grid-cols-2 gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-lime-400" />
          ))}
        </div>
      </div>

      {/* Decorative Dots - Top Right */}
      <div className="absolute top-20 right-32 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>

      {/* Background Glow - Left */}
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-lime-300 opacity-30 blur-3xl rounded-full" />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-5 inline-flex items-center rounded-full bg-amber-300 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-800 shadow-2xl border-yellow-300 border-2">
              About MagricSolutions
            </div>

            {/* Heading */}
            <h2 className="mb-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-4xl font-heading">
              We build personal brand websites
              <br />
              that feel clear, premium{" "}
              <span className="text-amber-500">&amp; trustworthy.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-xl">
              Most coaches and creators don&apos;t have a website problem — they have a
              clarity problem. The offer is strong, but the site doesn&apos;t explain
              it in a way that feels focused, confident and easy to trust.
            </p>
            <p className="text-gray-600 text-base mb-10 leading-relaxed max-w-xl">
              MagricSolutions helps personal brands turn messy, scattered online
              presence into a single, conversion-focused website that looks premium and
              makes it simple for people to say: <span className="font-semibold">&quot;Yes, I want to work with you.&quot;</span>
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {/* Completed Sites */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-lime-400 mb-3">50+</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Personal Brand Sites
                </h3>
                <p className="text-gray-600">launched for coaches &amp; creators</p>
              </div>

              {/* Satisfaction */}
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl font-black text-lime-400 mb-3">98%</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Client Satisfaction
                </h3>
                <p className="text-gray-600">based on delivered website projects</p>
              </div>
            </div>

            {/* CTA Button → WhatsApp */}
            <WhatsAppButton
              label="Book a Strategy Call"
              className="mt-2"
            />
          </div>

          {/* Right Content - Visuals */}
          <div className="relative w-full">
            {/* Testimonial Card 1 */}
            <div className="absolute top-0 left-0 z-20">
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 max-w-sm border border-lime-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(0,0,0,0.10)]">
                <div className="flex items-start gap-4 mb-3">
                  {/* ROUND IMAGE */}
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-lime-400">
                    <Image
                      src="/Mahmoud-Bartawi.png"
                      alt="Client Testimonial"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT AREA */}
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      Mahmoud Bartawi
                    </h4>
                    <p className="text-sm text-gray-500">Host of BXB Podcast</p>

                    <div className="flex gap-1 mt-1 text-lime-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  “Before this, my online presence was scattered. The new website finally
                  feels like one clear home for my brand and makes it easy for listeners
                  to work with me.”
                </p>

                {/* Decorative Quote */}
                <div className="flex justify-end mt-3">
                  <div className="text-lime-400 text-3xl opacity-30 font-bold">❝</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="absolute top-32 right-0 z-10">
              <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7 max-w-sm border border-lime-400/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_50px_rgba(0,0,0,0.10)]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-lime-400" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">
                      Ahmad Kamal
                    </h4>
                    <p className="text-sm text-gray-500">Research &amp; Development</p>
                    <div className="flex gap-1 mt-1 text-lime-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  “We didn’t just design something beautiful — we built a website that
                  actually supports how we get leads and present our work.”
                </p>

                <div className="flex justify-end mt-3">
                  <div className="text-lime-400 text-3xl opacity-30 font-bold">❝</div>
                </div>
              </div>
            </div>

            {/* Lottie Illustration */}
            <div className="ml-16 transition-transform duration-300 hover:scale-105">
              <div className="relative w-64 md:w-72 lg:w-xl mt-96">
                {/* keep your existing Lottie laptopAnimation here */}
                {/* <Lottie animationData={laptopAnimation} loop autoplay /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default AboutUsSection;


// --- START OF PROCESS SECTION DEFINITIONS ---

// --- PROCESS SECTION ---

const processSteps = [
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
      {/* soft glow */}
      <div className="pointer-events-none absolute top-[-140px] left-1/2 h-[260px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.16] blur-[180px]" />

      {/* decorative dots / squiggles */}
      <ProcessDecorativeElements />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/70 px-4 py-1 text-xs font-semibold  tracking-[0.18em] text-slate-600">
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
                {/* step number badge */}
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


// --- START OF PRICING SECTION DEFINITIONS ---

// --- START OF PRICING SECTION DEFINITIONS ---

const pricingPlans = [
  {
    name: "Launch Website",
    tagline: "For Coaches & Creators starting their first personal brand site",
    priceUSD: 399,
    isPopular: false,
    highlights: ["3 core pages", "Clean, modern start"],
    features: [
      "Up to 3 pages: Home, About, Contact/Booking",
      "Personal brand & offer clarity mini-workshop",
      "Custom responsive UI design",
      "High-conversion layout for your main offer",
      "Mobile-first development",
      "Core SEO setup (titles, meta, headings)",
      "WhatsApp / email contact integration",
      "1 main revision round",
      "Video handover so you can manage basics yourself",
    ],
  },
  {
    name: "Authority Website System",
    tagline: "For CEOs & established Coaches who need a premium presence",
    priceUSD: 699,
    isPopular: true,
    highlights: ["5–6 pages", "Positioning + funnel built in"],
    features: [
      "Up to 5–6 pages: Home, About, Services/Offers, Resources, Contact",
      "Deep strategy & positioning session (60–90 minutes)",
      "Conversion-focused page structure & copy framework",
      "High-end custom UI for a premium authority feel",
      "Mobile-first build with performance passes",
      "Expanded SEO setup (titles, meta, on-page basics)",
      "Lead & booking funnel integration (WhatsApp / Calendly / email)",
      "2 main revision rounds",
      "Detailed video walkthrough + post-launch support window",
    ],
  },
];

type PricingPlan = (typeof pricingPlans)[number];

function PricingCard({ plan  }: { plan: PricingPlan }) {
  const { name, tagline, priceUSD, isPopular, features, highlights } = plan;

  return (
    <article
      className={`relative flex flex-col rounded-3xl bg-white/95 border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.07)] p-8 md:p-9 transition-all duration-300
      ${
        isPopular
          ? "md:scale-105 md:-translate-y-1 ring-2 ring-lime-300/70"
          : "hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.10)]"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime-300 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900 shadow-md">
          Most Chosen
        </div>
      )}

      {/* Header */}
      <header className="mb-6">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          {name}
        </h3>
        <p className="mt-1 text-sm md:text-sm text-slate-500">{tagline}</p>

        <div className="mt-5 flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-black text-slate-900">
            ${priceUSD}
          </span>
          <span className="text-xs md:text-sm text-slate-500 font-medium">
            one-time project fee
          </span>
        </div>

        {/* small highlight tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 border border-slate-100"
            >
              {h}
            </span>
          ))}
        </div>
      </header>

      {/* Features */}
      <ul className="mb-7 space-y-3 text-sm md:text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-[3px] h-4 w-4 text-lime-400 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <WhatsAppButton
        label="Book a Strategy Call"
        className="w-full justify-center mt-auto"
      />
    </article>
  );
}

function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FFE9]/60 py-20 md:py-24">
      {/* soft glows */}
      <div className="pointer-events-none absolute top-[-120px]  h-[260px] w-[260px] rounded-full bg-lime-200 opacity-30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-140px] h-[260px] w-[260px] rounded-full bg-amber-200 opacity-30 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mx-auto mb-3 inline-block rounded-full bg-amber-300 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">
            Website Packages
          </p>
          <h2 className="text-balance text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-heading mb-3">
            Two clear ways to work with us
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-600 leading-relaxed">
            Choose the package that fits where your personal brand is today — whether
            you&apos;re launching your first site or upgrading to a premium authority
            presence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs md:text-sm text-slate-500">
          Need something different? Send a message on WhatsApp and we can scope a custom
          website project.
        </p>
      </div>
    </section>
  );
}



<DecorativeFeedbackElements />


function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#F7FFE9] py-24 font-sans"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-60px] h-[300px] w-[300px] rounded-full bg-amber-200 opacity-25 blur-[150px]" />
        <div className="absolute right-[-60px] h-[300px] w-[300px] rounded-full bg-lime-300 opacity-25 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            Team Member
          </span>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading">
            Meet the CEO of{" "}
            <span className="bg-amber-300 px-2 text-black">MagricSolutions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 text-sm md:text-base">
            Leading the vision, strategy, and creative direction that shapes every client project.
          </p>
        </div>

        {/* Centered CEO Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative flex flex-col items-center text-center rounded-3xl bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:ring-[#BBF52D] max-w-sm w-full"
          >
            {/* Image */}
            <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full shadow-xl ring-2 ring-lime-300 transition-all group-hover:ring-[#BBF52D]">
              <img
                src="/Profile Picture.png"
                alt="CEO – M Abdur Rehman"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              M Abdur Rehman
            </h3>

            {/* Title */}
            <p className="text-sm text-slate-600 mb-4">Founder & CEO</p>

            {/* Decorative Line */}
            <div className="h-[3px] w-10 bg-[#BBF52D]/80 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Tiny decorative circle */}
      <div className="absolute bottom-6 right-6 h-4 w-4 rounded-full border border-[#BBF52D] opacity-60"></div>
    </section>
  );
}


// --- START OF FOOTER SECTION DEFINITIONS ---

function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#F7FFE9] pt-24 pb-10 font-sans">
      {/* Soft glowing background accents */}
      <div className="pointer-events-none absolute top-[-120px] left-1/2 h-[260px] w-[900px] -translate-x-1/2 rounded-full bg-lime-300 opacity-[0.16] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-60px] h-[260px] w-[260px] rounded-full bg-amber-200 opacity-40 blur-[160px]" />

      {/* Left Decorative Animation */}
      <div className="absolute left-10 top-32 hidden w-52 opacity-90 lg:block">
        <Lottie animationData={footerRocket} loop autoplay />
      </div>

      {/* Right Decorative Animation */}
      <div className="absolute right-10 top-40 hidden w-52 opacity-90 lg:block">
        <Lottie animationData={footerLaptop} loop autoplay />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4">
        {/* Center Logo & Message */}
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Pill / badge */}
          <span className="mb-4 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
            Website Studio · MagricSolutions
          </span>

          {/* Logo Area */}
          <div className="mb-3">
            <span className="text-3xl font-extrabold text-lime-600">Magric</span>
            <span className="text-3xl font-extrabold text-slate-900">Solutions</span>
          </div>

          <span className="mb-5 text-sm tracking-wide text-slate-600">
            Websites and visuals that make your brand feel clear, sharp, and trustworthy.
          </span>

          {/* Big CTA Text */}
          <h3 className="mb-3 text-3xl leading-tight text-slate-900 md:text-4xl font-heading font-bold">
            Ready to upgrade your website?
          </h3>

          <p className="mb-6 max-w-sm text-base leading-relaxed text-slate-600">
            Tell us what you are working on and we’ll help you turn it into a
            conversion-focused website that actually sells your offer.
          </p>

          {/* CTA Button (links to contact section) */}
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-[1px] hover:bg-slate-900 hover:shadow-xl"
          >
            Book a free call
            <Send className="h-4 w-4" />
          </button>

          {/* Social Icons */}
          <div className="mt-6 flex space-x-6">
            <a href="#" className="text-slate-700 transition-colors hover:text-lime-500">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-700 transition-colors hover:text-lime-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-700 transition-colors hover:text-lime-500">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-8 border-t border-slate-200/80" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
          {/* Footer Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#" className="transition-colors hover:text-slate-900">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-slate-900">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-slate-900">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-slate-900">
              Contact
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-500" />
            <span className="text-slate-700">uzair9653@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 rounded-full bg-amber-300 p-3 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl"
      >
        <ChevronUp className="h-5 w-5 text-slate-900" />
      </button>
    </footer>
  );
}
