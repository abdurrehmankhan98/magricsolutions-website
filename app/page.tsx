"use client";

import { Target, Lightbulb, Send, ChevronUp, Check, ArrowLeft, ArrowRight, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import AnimatedHeroContent from './components/AnimatedHeroContent';
import { ProcessDecorativeElements } from './components/ProcessDecorativeElements';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from 'next/image';

import footerRocket from "@/public//lotties/Live chatbot.json";
import footerLaptop from "@/public/lotties/Loading rocket.json";
import TestimonialReelSection from './components/TestimonialReelSection';
import ReviewSection from './components/ReviewSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import TeamSection from './components/TeamSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <div className="relative overflow-hidden bg-[#F7FFE9]">
          <div className="pointer-events-none absolute top-[-120px] left-1/2 z-0 h-[380px] w-[900px] -translate-x-1/2 bg-lime-300 opacity-[0.12] blur-[180px]" />

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
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-auto"
            >
              <button className="flex items-center gap-3 rounded-full bg-amber-300 px-6 py-2.5 text-sm font-semibold text-black shadow-md transition-transform hover:scale-105 md:px-8 md:py-3 md:text-base">
                Get a Free Quote
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
              <AnimatedHeroContent />
            </div>
          </div>
        </div>
      </div>

      <TestimonialReelSection />
      <ServicesSection />
      <AboutUsSection />
      <ProcessSection />
      <ReviewSection />
      <FAQSection />
      <ContactSection />
      <PricingSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}