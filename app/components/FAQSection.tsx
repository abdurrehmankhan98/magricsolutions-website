import { motion } from "framer-motion";
const faqs = [
    {
        question: "What types of businesses do you work with?",
        answer:
            "We offer affordable website development for small businesses, startups, and established enterprises. We also create portfolio websites for creators and personal brand websites for coaches and consultants.",
    },
    {
        question: "Why should I choose you over other web development agencies in Pakistan?",
        answer:
            "As one of the best web development agencies in Pakistan, we offer a unique blend of professional website design, deep technical expertise (Next.js, React, full-stack development), and a commitment to SEO-optimized websites that deliver results.",
    },
    {
        question: "Can I hire a dedicated Next.js or React developer?",
        answer:
            "Yes, you can hire a Next.js developer or a React developer from our team for your specific project needs. We provide flexible engagement models for custom web application development.",
    },
    {
        question: "What is the process for starting a custom website design project?",
        answer:
            "Our professional website design services begin with a discovery call to understand your goals. We then move to UI/UX design, development, and deployment, ensuring a high-conversion, modern web app tailored to your brand.",
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer:
            "Yes, we offer comprehensive support plans after launch to ensure your website or mobile app remains secure, up-to-date, and performs optimally.",
    },
    {
        question: "How do you ensure my website will rank on Google?",
        answer:
            "We build every site with a strong SEO foundation, focusing on clean code, fast performance, mobile-first design, and strategic keyword integration to create an SEO-optimized website from day one.",
    },
];

function FAQSection() {
    return (
        <section className="relative overflow-hidden bg-[#F7FFE9]/60 py-20 md:py-24">
            {/* Soft background glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[720px] -translate-x-1/2 rounded-full bg-lime-300 opacity-20 blur-[160px]" />
            <div className="pointer-events-none absolute right-10 h-40 w-40 rounded-full bg-amber-200 opacity-40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="mx-auto mb-3 inline-flex items-center rounded-full border border-[#BBF52D]/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                        Quick Questions
                    </p>
                    <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading mb-3">
                        Your Web & App Development{" "}
                        <span className="bg-amber-300 px-2 rounded-xl">
                            Questions Answered
                        </span>
                        .
                    </h2>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                        Clear answers about our custom website design and app development process.
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
