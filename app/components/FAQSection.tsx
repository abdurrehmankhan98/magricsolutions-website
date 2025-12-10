'use client';

import { motion } from "framer-motion";
const faqs = [
    {
        question: "How do we get started?",
        answer:
            "Share a bit about your business and goals using the contact form. We’ll review it and come back with a simple plan and a call slot to discuss everything.",
    },
    {
        question: "How long does it take to build a website?",
        answer:
            "Most websites take 2–4 weeks depending on pages, features, and how quickly we get feedback and content from you.",
    },
    {
        question: "What do you need from me?",
        answer:
            "Your logo (if you have one), brand colors, any existing content or offers, and clarity on your main goal: more calls, bookings, leads, or sales.",
    },
    {
        question: "Can you also help with branding and copy?",
        answer:
            "Yes. We don’t just design screens—we help with messaging, structure, and visuals so your website actually sells, not just looks good.",
    },
    {
        question: "Do you offer support after launch?",
        answer:
            "We provide support after launch for fixes and small tweaks. If you need ongoing changes, we can set up a simple monthly or on-demand plan.",
    },
    {
        question: "What if I don’t know my exact budget?",
        answer:
            "That’s okay. Share a rough range in the contact form. We’ll recommend an option that fits where you are right now and can grow with you.",
    },
];

function FAQSection() {
    return (
        <section className="relative overflow-hidden bg-[#F7FFE9]/60 py-20 md:py-24">
            {/* Soft background glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rounded-full bg-lime-300 opacity-20 blur-[160px]" />
            <div className="pointer-events-none absolute bottom-[-80px] right-10 h-40 w-40 rounded-full bg-amber-200 opacity-40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                        Quick Questions
                    </p>
                    <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading mb-3">
                        FAQ FOR YOUR NEXT{" "}
                        <span className="bg-amber-300 px-2 rounded-xl">
                            WEBSITE PROJECT
                        </span>
                        .
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                        Short, straight answers so you know exactly how we work before you
                        book a call.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((item, index) => (
                        <motion.details
                            key={item.question}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl bg-white/95 p-4 md:p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 hover:ring-[#BBF52D] transition-all"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                                <span className="text-sm md:text-base font-semibold text-slate-900">
                                    {item.question}
                                </span>
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F4FFE0] text-xs font-bold text-slate-800 border border-lime-300 transition-transform group-open:rotate-180">
                                    ^
                                </span>
                            </summary>

                            <div className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                                {item.answer}
                            </div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
