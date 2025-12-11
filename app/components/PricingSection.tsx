'use client';

import { Check } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
// adjust the path above if WhatsAppButton is in a different folder

type PricingPlan = {
  name: string;
  tagline: string;
  priceUSD: number;
  isPopular: boolean;
  highlights: string[];
  features: string[];
};

const pricingPlans: PricingPlan[] = [
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

type PricingCardProps = {
  plan: PricingPlan;
};

const PricingCard = ({ plan }: PricingCardProps) => {
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
};

const PricingSection = () => {
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
};

export default PricingSection;
