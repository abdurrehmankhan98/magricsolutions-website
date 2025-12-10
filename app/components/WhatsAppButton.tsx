"use client";

import { Send } from "lucide-react";
import React from "react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const DEFAULT_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ??
  "Hi, I want to book a strategy call about my personal brand website.";

if (!WHATSAPP_NUMBER) {
  // This will show in browser console if you forget to set env
  console.warn("NEXT_PUBLIC_WHATSAPP_NUMBER is not set.");
}

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string; // extra utility classes: margins, width, etc.
  showIcon?: boolean;
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = "Book a Strategy Call",
  message,
  className = "",
  showIcon = true,
}) => {
  if (!WHATSAPP_NUMBER) return null;

  const text = message ?? DEFAULT_MESSAGE;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    text,
  )}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        className={`inline-flex items-center gap-3 bg-black px-6 py-3 md:px-10 md:py-4 text-sm md:text-base font-semibold rounded-full text-white shadow-xl transition-transform hover:scale-[1.03] hover:bg-slate-900 ${className}`}
      >
        {label}
        {showIcon && <Send className="h-4 w-4" />}
      </button>
    </a>
  );
};
