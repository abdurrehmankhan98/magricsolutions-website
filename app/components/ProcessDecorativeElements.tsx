import { motion } from "framer-motion";

export const ProcessDecorativeElements = () => {
  return (
    <>
      {/* subtle dots left */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.35 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute left-8 top-24 hidden md:block"
      >
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-[#C6FF2B]"
              style={{ opacity: 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      {/* small squiggle right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute right-12 top-36 hidden md:block"
      >
        <svg width="70" height="110" viewBox="0 0 80 120" className="text-[#BBF52D]">
          <path
            d="M40 10 Q60 30 40 50 Q20 70 40 90 Q60 110 40 110"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </>
  );
};

const ConnectionLines = () => {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-[84px] hidden md:block">
      {/* dashed horizontal connecting the three cards */}
      <div className="mx-auto h-px max-w-[640px] border-t border-dashed border-[#BBF52D]/60" />
    </div>
  );
};
