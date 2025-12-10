"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
function ContactSection() {
    return (
        <section className="relative overflow-hidden bg-[#F7FFE9] py-20 md:py-24">
            {/* Soft background glows */}
            <div className="pointer-events-none absolute -top-24 left-10 h-52 w-52 rounded-full bg-lime-300 opacity-25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-amber-200 opacity-30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left copy */}
                    <div>
                        <div className="mb-4 inline-flex items-center rounded-full bg-amber-300 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-md border border-yellow-300">
                            Contact Us
                        </div>

                        <h2 className="mb-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl font-heading">
                            TELL US ABOUT YOUR{" "}
                            <span className="bg-amber-300 px-2 rounded-xl">
                                WEBSITE PROJECT
                            </span>
                            .
                        </h2>
                        
                        <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                            Whether you’re launching a new website or refreshing your brand,
                            we’ll help you turn your ideas into a clear, conversion-focused
                            online presence.
                        </p>

                        <div className="space-y-3 text-sm text-slate-700 md:text-base">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-6 w-6 rounded-full bg-lime-300/70 flex items-center justify-center text-[11px] font-bold text-slate-900">
                                    1
                                </div>
                                <p>Share a few details so we understand your goals and challenges.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-6 w-6 rounded-full bg-lime-300/70 flex items-center justify-center text-[11px] font-bold text-slate-900">
                                    2
                                </div>
                                <p>We’ll review your message and get back with a clear next step.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-6 w-6 rounded-full bg-lime-300/70 flex items-center justify-center text-[11px] font-bold text-slate-900">
                                    3
                                </div>
                                <p>Together, we’ll map out a website that actually helps you sell.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <motion.form
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        onSubmit={(e) => {
                            e.preventDefault();
                            // handle form submission here (API call / email service)
                            console.log("Contact form submitted");
                        }}
                        className="relative rounded-3xl bg-white/95 p-6 md:p-8 shadow-[0_18px_48px_rgba(15,23,42,0.10)] ring-1 ring-slate-200"
                    >
                        {/* subtle lime badge */}
                        <div className="mb-6 inline-flex items-center rounded-full border border-lime-300 bg-[#F4FFE0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                            Project Inquiry
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {/* Name */}
                            <div className="md:col-span-2">
                                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                    Phone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+92 ..."
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                                />
                            </div>
                        </div>

                        {/* What you need help with */}
                        <div className="mt-5">
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                What do you need help with?
                            </label>
                            <select
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="new-website">New website for my business</option>
                                <option value="redesign">Redesign my existing website</option>
                                <option value="personal-brand">
                                    Personal brand / portfolio website
                                </option>
                                <option value="landing-page">
                                    Landing page for a specific offer
                                </option>
                                <option value="other">Something else</option>
                            </select>
                        </div>

                        {/* Biggest challenge */}
                        <div className="mt-5">
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                Your biggest challenge right now?
                            </label>
                            <textarea
                                rows={3}
                                required
                                placeholder="Tell us what’s not working or what you’re stuck on…"
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 resize-none"
                            />
                        </div>

                        {/* Budget */}
                        <div className="mt-5">
                            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                                Your budget (approx.)
                            </label>
                            <select
                                className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm md:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select your budget range
                                </option>
                                <option value="low">PKR 30,000 – 60,000</option>
                                <option value="mid">PKR 60,000 – 120,000</option>
                                <option value="high">PKR 120,000 – 250,000</option>
                                <option value="custom">I’m not sure yet</option>
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg transition-all hover:bg-gray-900 hover:shadow-xl hover:-translate-y-[1px]"
                        >
                            Send message
                            <Send className="h-4 w-4" />
                        </button>

                        {/* Tiny reassurance text */}
                        <p className="mt-3 text-[11px] text-slate-500">
                            We usually respond within 24 hours on business days.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;