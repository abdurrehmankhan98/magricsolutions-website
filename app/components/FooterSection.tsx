import Lottie from "lottie-react";
import { Send, Facebook, Instagram, Linkedin, Mail, ChevronUp } from "lucide-react";
import footerRocket from "@/public/lotties/Live chatbot.json";
import footerLaptop from "@/public/lotties/Loading rocket.json";

const FooterSection = () => {
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

          {/* Logo */}
          <div className="mb-3">
            <span className="text-3xl font-extrabold text-lime-600">Magric</span>
            <span className="text-3xl font-extrabold text-slate-900">Solutions</span>
          </div>

          <span className="mb-5 text-sm tracking-wide text-slate-600">
            Websites and visuals that make your brand feel clear, sharp, and trustworthy.
          </span>

          {/* Main CTA Title */}
          <h3 className="mb-3 text-3xl leading-tight text-slate-900 md:text-4xl font-heading font-bold">
            Ready to upgrade your website?
          </h3>

          <p className="mb-6 max-w-sm text-base leading-relaxed text-slate-600">
            Tell us what you are working on and we’ll help you turn it into a
            conversion-focused website that actually sells your offer.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-900 hover:shadow-xl"
          >
            Book a free call
            <Send className="h-4 w-4" />
          </button>

          {/* Social icons */}
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
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#" className="transition-colors hover:text-slate-900">Home</a>
            <a href="#about" className="transition-colors hover:text-slate-900">About</a>
            <a href="#services" className="transition-colors hover:text-slate-900">Services</a>
            <a href="#contact" className="transition-colors hover:text-slate-900">Contact</a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-slate-500" />
            <span className="text-slate-700">uzair9653@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 right-6 rounded-full bg-amber-300 p-3 shadow-lg transition-all hover:bg-amber-400 hover:shadow-xl"
      >
        <ChevronUp className="h-5 w-5 text-slate-900" />
      </button>
    </footer>
  );
};

export default FooterSection;
