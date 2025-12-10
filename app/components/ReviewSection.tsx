"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Mahmoud Bartawi",
    role: "Host of BXB",
    avatar: "/Mahmoud-Bartawi.png",
    text: "Great work, friendly, and always open to feedback. MagricSolutions helped us simplify our brand message and elevate our content quality. Highly recommended for anyone looking to improve their online presence!",
  },
  {
    name: "Jay Lawrence",
    role: "Wealth Manager & Podcast Host",
    avatar: "/Kelley-Tyan.png",
    text: "Top-quality service with unmatched responsiveness and outstanding support. Their attention to detail and creative direction helped my podcast content look sharper and more professional. Working with MagricSolutions has been one of the best decisions for my brand.",
  },
  {
    name: "Nausheen I. Chen",
    role: "Public Speaking Coach",
    avatar: "/Nausheen-I.-Chen.png",
    text: "Super talented, reliable, and always delivers high-quality work on time. I appreciate how they understand my vision and turn it into a polished final product. Truly a pleasure collaborating with MagricSolutions.",
  },
  {
    name: "Hector Hughes",
    role: "Co-Founder @ Unplugged",
    avatar: "/Hector-Hughes.png",
    text: "MagricSolutions is amazing! They bring high energy, creativity, and a strong sense of professionalism to every project. Our videos and online content consistently look brilliant—10/10 every time.",
  },
  {
    name: "Adam Biddlecombe",
    role: "Head of Brand – Mindstream",
    avatar: "/Tomas.png",
    text: "Professional, proactive, and always committed to delivering top-notch results. Their team understands brand identity deeply and ensures every piece of content aligns perfectly. Highly recommend working with MagricSolutions.",
  },
  {
    name: "Josh Cons",
    role: "Founder @ Notice Media",
    avatar: "/Harry-Phokou.png",
    text: "Reliable, consistent, and extremely easy to work with. MagricSolutions keeps our brand visuals clean, modern, and premium across all platforms. Their dedication to quality sets them apart from other agencies.",
  },
];

const columns = [0, 1, 2];

const filtered = (col: number) =>
  [...reviews, ...reviews].filter((_, index) => index % 3 === col);

export default function ReviewWallSection() {
  return (
    <section className="relative bg-[#F7FFE9] py-28 overflow-hidden">
      
      {/* Center Soft Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[260px] w-[900px] 
        -translate-x-1/2 rounded-full bg-[#C6FF2B] opacity-[0.17] blur-[180px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute left-[-200px] top-1/2 h-[480px] w-[480px] 
        -translate-y-1/2 rounded-full bg-[#9BF021] opacity-[0.12] blur-[200px]" />

      {/* Right Glow */}
      <div className="pointer-events-none absolute right-[-200px] top-1/2 h-[480px] w-[480px] 
        -translate-y-1/2 rounded-full bg-[#C6FF2B] opacity-[0.12] blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <h2 className="text-center mb-20 text-4xl md:text-5xl font-heading text-black font-bold">
          Hear Directly From Our{" "}
          <span className="text-amber-400">
            Clients
          </span>
        </h2>

        {/* Scroll Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden pt-6 pb-6">
          {columns.map((col) => (
            <AutoScrollColumn key={col} items={filtered(col)} speed={col} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AutoScrollColumn({ items, speed }: { items: typeof reviews; speed: number }) {
  return (
    <motion.div
      className="flex flex-col gap-6"
      animate={{ y: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: speed === 0 ? 24 : speed === 1 ? 30 : 36,
      }}
    >
      {items.map((rev, i) => (
        <ReviewCard key={i} {...rev} />
      ))}
    </motion.div>
  );
}

function ReviewCard({
  name,
  role,
  avatar,
  text,
}: {
  name: string;
  role: string;
  avatar: string;
  text: string;
}) {
  return (
    <div
      className="
        rounded-2xl bg-white/70 backdrop-blur-xl 
        border border-[#9BF021]/30
        p-6 shadow-[0_8px_20px_rgba(0,0,0,0.08)]
        hover:border-[#9BF021]/70
        transition-all duration-300  h-[250px] 
      "
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border border-[#9BF021]">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="object-cover h-full w-full"
          />
        </div>

        <div>
          <p className="font-semibold text-gray-900 flex items-center gap-2">
            {name}
            <span className="h-2 w-2 rounded-full bg-[#9BF021]" />
          </p>

          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>

      {/* Review */}
      <p className="text-sm leading-relaxed text-gray-700">{text}</p>
    </div>
  );
}
