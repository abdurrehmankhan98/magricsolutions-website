import { motion } from 'framer-motion';

const TeamSection = () => {
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
};

export default TeamSection;
