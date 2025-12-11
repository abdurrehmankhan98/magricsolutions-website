"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSection({
  children,
className,
}: ScrollSectionProps) {
  return (
    <motion.div
      className={`py-20 px-4 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}