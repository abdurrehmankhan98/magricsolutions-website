import { motion } from 'framer-motion';

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: '01. Custom Web Development',
    description:
      'We build SEO-optimized websites from the ground up. Our expertise includes business websites, portfolios, and high-conversion landing pages using modern tech like Next.js and React.',
  },
  {
    title: '02. Mobile App Development',
    description:
      'We design and develop intuitive mobile apps for iOS and Android. As experienced app developers, we create engaging experiences that connect with your users.',
  },
  {
    title: '03. UI/UX & Website Design',
    description:
      'Our UI/UX designers create beautiful, functional, and professional website designs. We focus on user experience to ensure your digital product is a joy to use.',
  },
];

const ServicesSection = () => {
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
            Our Core Development Services
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl font-heading">
            Expert Web & Mobile App Development,
            <br className="hidden md:block" />
            Designed for Performance.
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
};

export default ServicesSection;
